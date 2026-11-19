"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { APPLY_URL, chatFaqs, matchFaq } from "@/lib/chatbot";
import {
  COOKIE_CONSENT_EVENT,
  COOKIE_CONSENT_KEY,
  COOKIE_CONSENT_REOPEN_EVENT,
} from "./CookieConsent";

type Message = { from: "bot" | "user"; text: string };
type Mode = "menu" | "followup" | "lead" | "done";

const GREETING =
  "Hi! Looking to drive with Yopo Expedite? Pick a question below or type your own.";

const NO_MATCH =
  "Good question — let me pass it to one of our recruiters. Leave your name and phone number and they'll get back to you.";

export function DriverChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: GREETING },
  ]);
  const [mode, setMode] = useState<Mode>("menu");
  const [input, setInput] = useState("");
  const [pendingQuestion, setPendingQuestion] = useState("");
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadStatus, setLeadStatus] = useState<"idle" | "sending" | "error">("idle");
  const [leadError, setLeadError] = useState("");
  const [cookieBannerOpen, setCookieBannerOpen] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);

  // Hide the chat while the cookie banner is showing — the banner sits at the
  // bottom of the screen (z-[60]) and would cover the chat button and panel.
  useEffect(() => {
    try {
      const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (stored !== "accepted" && stored !== "declined") {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCookieBannerOpen(true);
      }
    } catch {
      setCookieBannerOpen(true);
    }

    const handleChoice = () => setCookieBannerOpen(false);
    const handleReopen = () => setCookieBannerOpen(true);
    window.addEventListener(COOKIE_CONSENT_EVENT, handleChoice);
    window.addEventListener(COOKIE_CONSENT_REOPEN_EVENT, handleReopen);
    return () => {
      window.removeEventListener(COOKIE_CONSENT_EVENT, handleChoice);
      window.removeEventListener(COOKIE_CONSENT_REOPEN_EVENT, handleReopen);
    };
  }, []);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, mode]);

  function addMessages(...items: Message[]) {
    setMessages((prev) => [...prev, ...items]);
  }

  function askFaq(id: string) {
    const faq = chatFaqs.find((item) => item.id === id);
    if (!faq) return;
    addMessages({ from: "user", text: faq.question }, { from: "bot", text: faq.answer });
    if (faq.id === "contact") {
      setPendingQuestion("");
      setMode("lead");
    } else {
      setMode("followup");
    }
  }

  function handleTyped(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = input.trim();
    if (!text) return;
    setInput("");

    const faq = matchFaq(text);
    if (faq) {
      addMessages({ from: "user", text }, { from: "bot", text: faq.answer });
      if (faq.id === "contact") {
        setPendingQuestion(text);
        setMode("lead");
      } else {
        setMode("followup");
      }
    } else {
      addMessages({ from: "user", text }, { from: "bot", text: NO_MATCH });
      setPendingQuestion(text);
      setMode("lead");
    }
  }

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const honeypot = (form.elements.namedItem("website") as HTMLInputElement | null)?.value ?? "";

    if (!leadName.trim()) {
      setLeadError("Enter your name");
      return;
    }
    if (leadPhone.replace(/\D/g, "").length < 7) {
      setLeadError("Enter a valid phone number");
      return;
    }

    setLeadError("");
    setLeadStatus("sending");
    try {
      const response = await fetch("/api/chatbot-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: leadName,
          phone: leadPhone,
          question: pendingQuestion,
          page: window.location.pathname,
          website: honeypot,
        }),
      });
      const result = await response.json();
      if (!result.success) throw new Error("failed");

      addMessages({
        from: "bot",
        text: `Thanks, ${leadName.trim()}! A recruiter will contact you soon. You can also apply now to speed things up.`,
      });
      setLeadStatus("idle");
      setMode("done");
    } catch {
      setLeadStatus("error");
    }
  }

  const quickButton =
    "w-full rounded-full border border-purple-500 bg-white px-4 py-2 text-left text-sm text-purple-700 transition-colors duration-200 hover:bg-purple-50";
  const primaryButton =
    "block w-full rounded-full bg-purple-500 px-4 py-2 text-center text-sm font-semibold text-navy-950 transition-colors duration-200 hover:bg-purple-400";
  const fieldStyles =
    "w-full rounded-lg border border-navy-900/15 bg-white px-3 py-2 text-sm text-navy-950 placeholder:text-navy-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30";

  if (cookieBannerOpen) return null;

  return (
    // z-40 keeps the chat under the fixed Navbar (z-50) and its mobile menu.
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end sm:bottom-6 sm:right-6">
      {open && (
        <div
          role="dialog"
          aria-label="Yopo driver assistant"
          className="mb-3 flex h-[min(560px,calc(100dvh-11rem))] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-purple-200 bg-white shadow-[0_12px_40px_rgba(8,15,26,0.25)]"
        >
          <div className="flex items-center gap-3 bg-purple-700 px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-purple-700">
              <TruckIcon />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white">Yopo Driver Assistant</p>
              <p className="text-xs text-purple-200">Usually replies instantly</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="ml-auto rounded-full p-1 text-white transition-colors hover:bg-white/10"
            >
              <CloseIcon />
            </button>
          </div>

          <div ref={logRef} className="flex-1 space-y-2 overflow-y-auto bg-navy-50 px-4 py-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.from === "bot"
                    ? "max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-3.5 py-2 text-sm leading-relaxed text-navy-900 shadow-sm"
                    : "ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-purple-600 px-3.5 py-2 text-sm leading-relaxed text-white"
                }
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="space-y-2 border-t border-navy-900/10 px-4 py-3">
            {mode === "menu" &&
              chatFaqs.map((faq) => (
                <button key={faq.id} type="button" className={quickButton} onClick={() => askFaq(faq.id)}>
                  {faq.question}
                </button>
              ))}

            {(mode === "followup" || mode === "done") && (
              <>
                <Link href={APPLY_URL} className={primaryButton} onClick={() => setOpen(false)}>
                  Apply now
                </Link>
                <button type="button" className={quickButton} onClick={() => setMode("menu")}>
                  Ask another question
                </button>
              </>
            )}

            {mode === "lead" && (
              <form onSubmit={submitLead} className="space-y-2" noValidate>
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute left-[-9999px] h-0 w-0 opacity-0"
                  aria-hidden="true"
                />
                <input
                  type="text"
                  value={leadName}
                  onChange={(e) => {
                    setLeadName(e.target.value);
                    setLeadError("");
                  }}
                  placeholder="Your name"
                  autoComplete="name"
                  aria-label="Your name"
                  className={fieldStyles}
                />
                <input
                  type="tel"
                  value={leadPhone}
                  onChange={(e) => {
                    setLeadPhone(e.target.value);
                    setLeadError("");
                  }}
                  placeholder="(708) 555-0123"
                  autoComplete="tel"
                  aria-label="Your phone number"
                  className={fieldStyles}
                />
                {leadError && <p className="text-xs text-red-600">{leadError}</p>}
                {leadStatus === "error" && (
                  <p className="text-xs text-red-600">
                    Couldn&apos;t send. Try again or call us directly.
                  </p>
                )}
                <button type="submit" disabled={leadStatus === "sending"} className={primaryButton}>
                  {leadStatus === "sending" ? "Sending…" : "Send to a recruiter"}
                </button>
                <button type="button" className={quickButton} onClick={() => setMode("menu")}>
                  Back to questions
                </button>
              </form>
            )}

            {mode !== "lead" && (
              <form onSubmit={handleTyped} className="flex gap-2 pt-1">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your question…"
                  aria-label="Type your question"
                  maxLength={500}
                  className={fieldStyles}
                />
                <button
                  type="submit"
                  aria-label="Send"
                  className="shrink-0 rounded-lg bg-purple-500 px-3 text-navy-950 transition-colors hover:bg-purple-400"
                >
                  <SendIcon />
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close chat" : "Chat with us"}
        aria-expanded={open}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-500 text-navy-950 shadow-[0_8px_24px_rgba(8,15,26,0.35)] transition-transform duration-200 hover:scale-105 hover:bg-purple-400"
      >
        {open ? <CloseIcon /> : <ChatIcon />}
      </button>
    </div>
  );
}

function ChatIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}
