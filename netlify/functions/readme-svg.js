// Serverless SVG generator for GitHub profile README.
// Endpoint: /.netlify/functions/readme-svg?section=<hero|stats|experience|techstack|projects|footer>&theme=<dark|light>

const THEMES = {
    dark: {
        bg: "#0b0d12",
        panel: "#11141b",
        border: "#1f242f",
        text: "#e6e8ee",
        muted: "#8a93a6",
        accent: "#7c9cff",
        accent2: "#9b8cff",
        chipBg: "#161a23",
        chipBorder: "#262c39",
        success: "#5ddb9a",
    },
    light: {
        bg: "#ffffff",
        panel: "#f7f8fb",
        border: "#e3e6ed",
        text: "#0b0d12",
        muted: "#5b6478",
        accent: "#3b5bdb",
        accent2: "#6d4af2",
        chipBg: "#ffffff",
        chipBorder: "#dde1ea",
        success: "#1f9d6b",
    },
};

const esc = (s) =>
    String(s)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

const FONT =
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

function frame(width, height, t, inner) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img">
  <defs>
    <linearGradient id="accentGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${t.accent}"/>
      <stop offset="100%" stop-color="${t.accent2}"/>
    </linearGradient>
    <style>
      .title { font: 700 22px ${FONT}; fill: ${t.text}; }
      .h2    { font: 600 16px ${FONT}; fill: ${t.text}; }
      .body  { font: 400 13px ${FONT}; fill: ${t.text}; }
      .muted { font: 400 12px ${FONT}; fill: ${t.muted}; }
      .chip  { font: 500 11px ${FONT}; fill: ${t.text}; }
      .big   { font: 700 28px ${FONT}; fill: ${t.text}; }
      .accent{ fill: url(#accentGrad); }
    </style>
  </defs>
  <rect x="0.5" y="0.5" width="${width - 1}" height="${height - 1}" rx="14" ry="14" fill="${t.bg}" stroke="${t.border}"/>
  ${inner}
</svg>`;
}

function chip(x, y, label, t) {
    const padX = 10;
    const w = Math.max(40, label.length * 6.6 + padX * 2);
    const h = 22;
    return {
        width: w,
        svg: `<g transform="translate(${x},${y})">
      <rect width="${w}" height="${h}" rx="11" ry="11" fill="${t.chipBg}" stroke="${t.chipBorder}"/>
      <text x="${w / 2}" y="14" text-anchor="middle" class="chip">${esc(label)}</text>
    </g>`,
    };
}

function chipRow(items, startX, startY, maxWidth, t, gap = 6, lineH = 28) {
    let x = startX;
    let y = startY;
    let svg = "";
    for (const item of items) {
        const c = chip(x, y, item, t);
        if (x + c.width > startX + maxWidth) {
            x = startX;
            y += lineH;
            const c2 = chip(x, y, item, t);
            svg += c2.svg;
            x += c2.width + gap;
        } else {
            svg += c.svg;
            x += c.width + gap;
        }
    }
    return { svg, endY: y + lineH };
}

function heroSVG(t) {
    const W = 860;
    const H = 240;
    const tags = ["Agentic AI", "LLM Infra", "RAG", "Temporal IO", "LangSmith", "React", "Django", "Snowflake"];
    const { svg: tagsSvg } = chipRow(tags, 32, 160, W - 64, t);
    const inner = `
    <text x="32" y="56" class="title">Venkata Anand Sai Kumar Narla <tspan class="muted" style="font-weight:500">· Venny</tspan></text>
    <text x="32" y="84" class="h2 accent">Software Engineer II — AI · Everstage</text>
    <text x="32" y="108" class="muted">Bengaluru, India · Building agentic AI and LLM infrastructure.</text>
    <text x="32" y="136" class="body">Evaluation · Telemetry · Orchestration — the connective tissue between LLMs and the enterprise stack.</text>
    ${tagsSvg}
  `;
    return frame(W, H, t, inner);
}

function statsSVG(t) {
    const W = 860;
    const H = 170;
    const stats = [
        { v: "2", l: "IEEE papers" },
        { v: "4", l: "Companies" },
        { v: "3", l: "Hackathon wins" },
        { v: "11k+", l: "Impressions" },
        { v: "44", l: "Public repos" },
    ];
    const colW = (W - 64) / stats.length;
    let cells = "";
    stats.forEach((s, i) => {
        const cx = 32 + i * colW + colW / 2;
        cells += `
      <text x="${cx}" y="78" text-anchor="middle" class="big accent">${esc(s.v)}</text>
      <text x="${cx}" y="104" text-anchor="middle" class="muted">${esc(s.l)}</text>
    `;
    });
    const inner = `
    <text x="32" y="42" class="h2">By the numbers</text>
    ${cells}
    <text x="32" y="146" class="muted">Last updated: ${new Date().toISOString().slice(0, 10)}</text>
  `;
    return frame(W, H, t, inner);
}

function experienceSVG(t) {
    const W = 860;
    const items = [
        { role: "Software Engineer II — AI", co: "Everstage", dates: "Feb 2026 — Present", desc: "LLM eval framework, Temporal orchestration, multi-tenant cost attribution." },
        { role: "Software Engineer I — AI", co: "Everstage", dates: "May 2025 — Feb 2026", desc: "RAG layer, MCP CRM connectors (HubSpot, Gong), telemetry → Snowflake." },
        { role: "Software Engineer Intern", co: "Everstage", dates: "Feb 2025 — May 2025", desc: "Foundation-model integration layer, RBAC, AI canvases." },
        { role: "Generative AI Intern", co: "Diebold Nixdorf", dates: "Dec 2024 — Feb 2025", desc: "Agentic-AI prototypes on Azure for banking & retail." },
        { role: "Junior Engineer — CV", co: "MulticoreWare", dates: "May 2024 — Nov 2024", desc: "Mobi-SLAM, LiDAR+camera+OpenPose, CRFNet sensor fusion." },
        { role: "AI Research Intern", co: "IBM", dates: "May 2023 — Oct 2023", desc: "ResNet-50 graphology, YOLOv8 pothole detection on edge." },
    ];
    const rowH = 56;
    const H = 60 + items.length * rowH + 16;
    let rows = "";
    items.forEach((it, i) => {
        const y = 70 + i * rowH;
        rows += `
      <circle cx="44" cy="${y + 8}" r="5" class="accent"/>
      <line x1="44" y1="${y + 14}" x2="44" y2="${y + rowH - 4}" stroke="${t.border}" stroke-width="1"/>
      <text x="64" y="${y + 12}" class="h2">${esc(it.role)} <tspan class="muted" style="font-weight:400">· ${esc(it.co)}</tspan></text>
      <text x="64" y="${y + 30}" class="muted">${esc(it.dates)}</text>
      <text x="64" y="${y + 48}" class="body">${esc(it.desc)}</text>
    `;
    });
    const inner = `<text x="32" y="42" class="h2">Experience</text>${rows}`;
    return frame(W, H, t, inner);
}

function techstackSVG(t) {
    const W = 860;
    const cats = [
        { name: "AI / ML", items: ["Python", "PyTorch", "TensorFlow", "LangGraph", "LangSmith", "RAG", "MCP", "OpenAI", "Anthropic", "Gemini"] },
        { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "shadcn/ui"] },
        { name: "Backend / Infra", items: ["Django", "Flask", "Temporal IO", "PostgreSQL", "Snowflake", "Redis", "Docker", "Azure", "Firebase"] },
    ];
    let y = 60;
    let body = "";
    for (const cat of cats) {
        body += `<text x="32" y="${y + 16}" class="h2 accent">${esc(cat.name)}</text>`;
        const { svg, endY } = chipRow(cat.items, 32, y + 28, W - 64, t);
        body += svg;
        y = endY + 14;
    }
    const H = y + 16;
    const inner = `<text x="32" y="42" class="h2">Tech stack</text>${body}`;
    return frame(W, H, t, inner);
}

function projectsSVG(t) {
    const W = 860;
    const projs = [
        { name: "GreenPulse", desc: "Multilingual AI farming assistant — disease diagnosis, market forecasting, voice agent.", stack: "Next.js · Gemini · Genkit · Firebase" },
        { name: "TalentLens", desc: "AI interview & assessment platform with real-time feedback and WebSocket streaming.", stack: "Next.js · Django · Postgres · Redis" },
        { name: "Content Moderation Tool", desc: "Real-time NSFW filter — IBM CodeRush'23 national hackathon winner.", stack: "TensorFlow · ResNet-101 · TFLite" },
        { name: "MediVisionX", desc: "Medical-image classification web app across multiple conditions.", stack: "Flask · TensorFlow · Docker" },
        { name: "Mobi-SLAM", desc: "Custom ORB-SLAM3 fused with IMU + GPS for real-time 3D mapping.", stack: "ORB-SLAM3 · IMU · GPS · C++" },
    ];
    const rowH = 60;
    const H = 60 + projs.length * rowH + 16;
    let rows = "";
    projs.forEach((p, i) => {
        const y = 70 + i * rowH;
        rows += `
      <rect x="32" y="${y}" width="${W - 64}" height="${rowH - 10}" rx="10" ry="10" fill="${t.panel}" stroke="${t.border}"/>
      <text x="48" y="${y + 22}" class="h2 accent">${esc(p.name)}</text>
      <text x="48" y="${y + 40}" class="body">${esc(p.desc)}</text>
      <text x="48" y="${y + 56}" class="muted">${esc(p.stack)}</text>
    `;
    });
    const inner = `<text x="32" y="42" class="h2">Selected projects</text>${rows}`;
    return frame(W, H, t, inner);
}

function footerSVG(t) {
    const W = 860;
    const H = 100;
    const inner = `
    <text x="32" y="44" class="h2">Let's build something.</text>
    <text x="32" y="68" class="body">venkatnarla0@gmail.com</text>
    <text x="32" y="88" class="muted">Open to interesting problems in agentic AI, LLM infra, and applied ML.</text>
    <text x="${W - 32}" y="88" text-anchor="end" class="muted">venkata-anand-sai-kumar-narla.netlify.app</text>
  `;
    return frame(W, H, t, inner);
}

const SECTIONS = {
    hero: heroSVG,
    stats: statsSVG,
    experience: experienceSVG,
    techstack: techstackSVG,
    projects: projectsSVG,
    footer: footerSVG,
};

exports.handler = async (event) => {
    const params = event.queryStringParameters || {};
    const section = (params.section || "hero").toLowerCase();
    const themeName = (params.theme || "dark").toLowerCase();
    const theme = THEMES[themeName] || THEMES.dark;
    const renderer = SECTIONS[section] || SECTIONS.hero;

    const svg = renderer(theme);

    return {
        statusCode: 200,
        headers: {
            "Content-Type": "image/svg+xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=3600",
            "Access-Control-Allow-Origin": "*",
        },
        body: svg,
    };
};
