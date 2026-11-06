"use client";

import { COOKIE_CONSENT_REOPEN_EVENT } from "./CookieConsent";

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() =>
        window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_REOPEN_EVENT))
      }
      className="transition-colors hover:text-purple-400"
    >
      Cookie Preferences
    </button>
  );
}
