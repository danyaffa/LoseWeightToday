import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lose Weight Today - Jaffa and Dan Leffler, Herbalife Independent Members",
    short_name: "Lose Weight Today",
    description:
      "Jaffa and Dan Leffler, Herbalife Independent Members in Melbourne. Personalised weight-loss coaching, nutrition plans & Herbalife products.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2d8b3e",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
