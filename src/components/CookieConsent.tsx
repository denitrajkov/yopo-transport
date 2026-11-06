"use client";

import { useEffect, useState } from "react";

export const COOKIE_CONSENT_KEY = "yopo-cookie-consent";
export const COOKIE_CONSENT_EVENT = "yopo-cookie-consent-change";
export const COOKIE_CONSENT_REOPEN_EVENT = "yopo-cookie-consent-reopen";

type Consent = "accepted" | "declined";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (stored !== "accepted" && stored !== "declined") {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }

    function handleReopen() {
      setVisible(true);
    }

    window.addEventListener(COOKIE_CONSENT_REOPEN_EVENT, handleReopen);
    return () =>
      window.removeEventListener(COOKIE_CONSENT_REOPEN_EVENT, handleReopen);
  }, []);

  function setConsent(value: Consent) {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, value);
    } catch {
      // Storage unavailable (e.g. private browsing) — consent still applies for this session.
    }
    window.dispatchEvent(
      new CustomEvent(COOKIE_CONSENT_EVENT, { detail: value }),
    );
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-navy-900/10 bg-white px-4 py-5 shadow-[0_-8px_30px_rgba(15,23,42,0.12)] sm:px-6"
    >
      <div className="container-page flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-navy-700">
          We use cookies to analyze site traffic and improve your experience.
          By clicking &quot;Accept&quot;, you consent to our use of cookies as
          described in our{" "}
          <a
            href="/privacy-policy"
            className="font-medium text-purple-600 underline-offset-2 hover:underline"
          >
            Privacy Policy
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => setConsent("declined")}
            className="rounded-full border border-navy-900/15 px-5 py-2.5 text-sm font-semibold text-navy-700 transition-colors duration-200 hover:bg-navy-50"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => setConsent("accepted")}
            className="rounded-full bg-purple-500 px-5 py-2.5 text-sm font-semibold text-navy-950 transition-colors duration-200 hover:bg-purple-400"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
