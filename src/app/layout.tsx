import type { Metadata } from "next";
import { Inter, Fraunces, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeFromQuery } from "@/components/ThemeFromQuery";
import { FloatingMark } from "@/components/FloatingMark";
import { profile } from "@/data/info";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const script = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://narla-venkata-anand-sai-kumar.github.io"),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s · ${profile.short}`,
  },
  description: profile.tagline + " " + profile.about[0],
  icons: {
    icon: "/icon.png",
  },
  keywords: [
    "Agentic AI",
    "LLM Infrastructure",
    "LangGraph",
    "LangSmith",
    "Retrieval-Augmented Generation",
    "Model Context Protocol",
    "Venkata Anand Sai Kumar Narla",
    "Everstage",
    "Software Engineer",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${serif.variable} ${script.variable}`}
    >
      <head>
        {/* Apply ?theme=dark|light from URL synchronously, before paint, so
            screenshot services (thum.io etc.) capture the right theme. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=new URLSearchParams(location.search).get('theme');var h=(location.hash||'').replace(/^#/,'').toLowerCase();var pa=location.pathname.toLowerCase();var p=(s||h||'').toLowerCase();if(!p){if(/(^|\\/)dark(\\/|$)/.test(pa))p='dark';else if(/(^|\\/)light(\\/|$)/.test(pa))p='light';}if(!p)return;var d=document.documentElement;if(p==='dark'){d.classList.add('dark');d.style.colorScheme='dark';try{localStorage.setItem('theme','dark')}catch(_){}}else if(p==='light'){d.classList.remove('dark');d.style.colorScheme='light';try{localStorage.setItem('theme','light')}catch(_){}}else if(p==='system'||p==='auto'){try{localStorage.removeItem('theme')}catch(_){}var m=matchMedia('(prefers-color-scheme: dark)').matches;d.classList.toggle('dark',m);d.style.colorScheme=m?'dark':'light'}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="grain bg-paper text-ink-950 font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeFromQuery />
          <Nav />
          <main className="relative z-10 min-h-[60vh]">{children}</main>
          <Footer />
          <FloatingMark />
        </ThemeProvider>
      </body>
    </html>
  );
}
