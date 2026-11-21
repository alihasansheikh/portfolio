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
          background: "#f2f5f4",
          backgroundImage:
            "linear-gradient(rgba(20,45,38,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(20,45,38,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          color: "#0e1b17",
          fontFamily: family,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26 }}>
          <span
            style={{
              background: "#e2f2ea",
              color: "#0b7a4b",
              padding: "6px 12px",
              borderRadius: 6,
              fontSize: 22,
              letterSpacing: 2,
            }}
          >
            POST
          </span>
          <span style={{ color: "#44544f" }}>/contact</span>
        </div>
        <div style={{ display: "flex", fontSize: 68, fontWeight: 700, lineHeight: 1.06, letterSpacing: -2, maxWidth: 1040 }}>
          {copy.meta.og_headline}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 28, color: "#44544f" }}>
          <span>Ali Hasan Sheikh · {copy.rail.role_label}</span>
          <span style={{ color: "#2242c8" }}>alihasansheikh.com</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: archivo ? [{ name: "Archivo", data: archivo, weight: 700, style: "normal" }] : [],
    }
  );
}
