import { ImageResponse } from "next/og";
import { copy } from "@/data/copy";

export const alt = copy.meta.og_headline;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Archivo is fetched once at build time for the image; if that fails the image still renders in the fallback font.
async function loadArchivo(): Promise<ArrayBuffer | null> {
  try {
    // Hard timeouts: a stalled font request must fall back to the system face,
    // not hold the build open until Vercel's build timeout.
    const css = await fetch("https://fonts.googleapis.com/css2?family=Archivo:wght@700", {
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0" },
      signal: AbortSignal.timeout(5000),
    }).then((r) => r.text());
    const url = css.match(/src: url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/)?.[1];
    if (!url) return null;
    return await fetch(url, { signal: AbortSignal.timeout(5000) }).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OpenGraphImage() {
  const archivo = await loadArchivo();
  const family = archivo ? "Archivo" : "sans-serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#8d9192",
          color: "#1c1d20",
          fontFamily: family,
        }}
      >
        <div style={{ display: "flex", fontSize: 26 }}>© Built by Ali</div>
        <div style={{ display: "flex", fontSize: 74, fontWeight: 700, lineHeight: 1.04, letterSpacing: -2.5, maxWidth: 1000 }}>
          {copy.meta.og_headline}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontSize: 26 }}>
          <span style={{ display: "flex", maxWidth: 760 }}>{copy.meta.og_sub}</span>
          <span
            style={{
              display: "flex",
              background: "#1c1d20",
              color: "#fff",
              padding: "14px 26px",
              borderRadius: 999,
            }}
          >
            alihasansheikh.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: archivo ? [{ name: "Archivo", data: archivo, weight: 700, style: "normal" }] : [],
    }
  );
}
