// Headless-Chromium screenshot of the live portfolio, wrapped as SVG.
// Endpoint: /.netlify/functions/readme-svg
//   ?path=/             — page on the portfolio site to capture (default "/")
//   ?theme=dark|light   — sets the prefers-color-scheme media emulation
//   ?width=1200         — viewport width (default 1200)
//   ?height=             — if set, captures a fixed-height viewport;
//                          omit to capture full page
//   ?fmt=svg|png         — output format (default svg). svg wraps the png so it
//                          renders nicely on GitHub READMEs.

// @sparticuz/chromium is ESM-only; load it lazily via dynamic import from CJS.
let chromiumPromise = null;
const loadChromium = () => {
    if (!chromiumPromise) {
        chromiumPromise = import("@sparticuz/chromium").then((m) => m.default || m);
    }
    return chromiumPromise;
};
const puppeteer = require("puppeteer-core");

const SITE_ORIGIN =
    process.env.PORTFOLIO_ORIGIN ||
    "https://venkata-anand-sai-kumar-narla.netlify.app";

// Reuse a single browser across warm invocations to cut cold-start cost.
let browserPromise = null;
async function getBrowser() {
    if (!browserPromise) {
        const chromium = await loadChromium();
        browserPromise = puppeteer.launch({
            args: chromium.args,
            defaultViewport: chromium.defaultViewport,
            executablePath: await chromium.executablePath(),
            headless: chromium.headless,
        });
    }
    return browserPromise;
}

async function screenshot({ path: pagePath, theme, width, height }) {
    const browser = await getBrowser();
    const page = await browser.newPage();
    try {
        await page.setViewport({
            width,
            height: height || 900,
            deviceScaleFactor: 2,
        });
        await page.emulateMediaFeatures([
            { name: "prefers-color-scheme", value: theme === "light" ? "light" : "dark" },
            { name: "prefers-reduced-motion", value: "reduce" },
        ]);

        const url = `${SITE_ORIGIN}${pagePath.startsWith("/") ? pagePath : "/" + pagePath}`;
        await page.goto(url, { waitUntil: "networkidle0", timeout: 25000 });
        // Let any deferred fonts / lottie settle.
        await new Promise((r) => setTimeout(r, 400));

        const buf = await page.screenshot({
            type: "png",
            fullPage: !height,
            omitBackground: false,
        });
        return buf;
    } finally {
        await page.close();
    }
}

function wrapSvg(pngBuf, width) {
    // We don't know real PNG height without parsing, but SVG will scale to
    // intrinsic image dimensions when width/height are set on the inner image.
    const b64 = pngBuf.toString("base64");
    // Parse PNG IHDR to get width/height (bytes 16..23 are width/height big-endian).
    const w = pngBuf.readUInt32BE(16);
    const h = pngBuf.readUInt32BE(20);
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${w / 2}" height="${h / 2}" viewBox="0 0 ${w} ${h}" role="img" aria-label="Venny portfolio">
  <image href="data:image/png;base64,${b64}" x="0" y="0" width="${w}" height="${h}"/>
</svg>`;
}

exports.handler = async (event) => {
    const params = (event && event.queryStringParameters) || {};
    const pagePath = params.path || "/";
    const theme = (params.theme || "dark").toLowerCase();
    const width = Math.max(320, Math.min(parseInt(params.width, 10) || 1200, 1600));
    const height = params.height ? parseInt(params.height, 10) : 0;
    const fmt = (params.fmt || "svg").toLowerCase();

    try {
        const png = await screenshot({ path: pagePath, theme, width, height });

        if (fmt === "png") {
            return {
                statusCode: 200,
                headers: {
                    "Content-Type": "image/png",
                    "Cache-Control": "public, max-age=3600, s-maxage=3600",
                    "Access-Control-Allow-Origin": "*",
                },
                body: png.toString("base64"),
                isBase64Encoded: true,
            };
        }

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "image/svg+xml; charset=utf-8",
                "Cache-Control": "public, max-age=3600, s-maxage=3600",
                "Access-Control-Allow-Origin": "*",
            },
            body: wrapSvg(png, width),
        };
    } catch (err) {
        return {
            statusCode: 500,
            headers: { "Content-Type": "text/plain" },
            body: `screenshot failed: ${err && err.message ? err.message : String(err)}`,
        };
    }
};
