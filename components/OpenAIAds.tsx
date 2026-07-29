"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";
import {
  OPENAI_ADS_PIXEL_ID,
  trackOpenAIPageView,
} from "@/lib/openaiAds";

export default function OpenAIAds() {
  const pathname = usePathname();
  const measuredPathname = useRef<string | null>(null);

  const measureCurrentPage = useCallback(() => {
    if (!window.oaiq || measuredPathname.current === pathname) return;
    trackOpenAIPageView(pathname);
    measuredPathname.current = pathname;
  }, [pathname]);

  useEffect(() => {
    if (!OPENAI_ADS_PIXEL_ID) return;
    measureCurrentPage();
  }, [measureCurrentPage]);

  if (!OPENAI_ADS_PIXEL_ID) return null;

  return (
    <Script
      id="openai-ads-pixel"
      strategy="afterInteractive"
      onReady={measureCurrentPage}
    >
      {`
        (function (w, d, s, u) {
          if (w.oaiq) return;
          var q = function () {
            q.q.push(arguments);
          };
          q.q = [];
          w.oaiq = q;
          var js = d.createElement(s);
          js.async = true;
          js.src = u;
          var f = d.getElementsByTagName(s)[0];
          f.parentNode.insertBefore(js, f);
        })(window, document, "script", "https://bzrcdn.openai.com/sdk/oaiq.min.js");

        oaiq("init", {
          pixelId: ${JSON.stringify(OPENAI_ADS_PIXEL_ID)}
        });
      `}
    </Script>
  );
}
