"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { COOKIE_CONSENT_EVENT, COOKIE_CONSENT_KEY } from "./CookieConsent";

const GA_MEASUREMENT_ID = "G-WCEF3QM8K2";

export function GoogleAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // One-time read of localStorage on mount — can't be a lazy useState
    // initializer since localStorage isn't available during SSR.
    try {
      if (localStorage.getItem(COOKIE_CONSENT_KEY) === "accepted") {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setEnabled(true);
      }
    } catch {
      // Storage unavailable — fall back to waiting for an explicit consent event.
    }

    function handleConsentChange(event: Event) {
      const detail = (event as CustomEvent<string>).detail;
      setEnabled(detail === "accepted");
    }

    window.addEventListener(COOKIE_CONSENT_EVENT, handleConsentChange);
    return () =>
      window.removeEventListener(COOKIE_CONSENT_EVENT, handleConsentChange);
  }, []);

  if (!enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
