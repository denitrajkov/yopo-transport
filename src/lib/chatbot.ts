/**
 * Driver chatbot FAQ.
 *
 * To change what the bot says, edit the `answer` text below.
 * To add a new question, copy one block and give it a new `id`.
 * `keywords` are words a driver might type — if their message contains
 * one of them, the bot shows that answer.
 */

export type ChatFaq = {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
};

export const APPLY_URL = "/become-a-driver";

export const chatFaqs: ChatFaq[] = [
  {
    id: "pay",
    question: "How much do you pay?",
    answer:
      "Owner operators keep 88% of the gross. A recruiter can walk you through settlements and the rest of the details — apply below or call us.",
    keywords: ["pay", "paid", "money", "salary", "cpm", "per mile", "percent", "%", "gross", "settlement", "rate", "earn", "weekly"],
  },
  {
    id: "requirements",
    question: "What are the requirements?",
    answer:
      "You need a valid Class A CDL, at least 2 years of experience, a 2020 or newer truck, and a good MVR.",
    keywords: ["require", "requirement", "qualif", "cdl", "experience", "years", "year", "mvr", "record", "need to", "license", "2020", "newer", "how old"],
  },
  {
    id: "owner-operator",
    question: "Do you work with owner operators?",
    answer:
      "Yes — we work with CDL-A owner operators only, so you'll need your own truck. Apply below and our recruiting team will walk you through how it works with Yopo.",
    keywords: ["owner", "operator", "o/o", "own truck", "lease", "my truck", "authority", "company driver", "company job"],
  },
  {
    id: "home-time",
    question: "How often will I be home?",
    answer:
      "Plan on around a week of home time — we work it out with each driver and plan routes ahead so you know what's coming. Tell the recruiter what schedule works for you.",
    keywords: ["home", "home time", "time off", "days off", "schedule", "weekend", "family"],
  },
  {
    id: "equipment",
    question: "What equipment do you run?",
    answer:
      "We run 53' dry vans. If you don't have a trailer, you can rent a brand-new 53' dry van from us — a recruiter will go over the details.",
    keywords: ["trailer", "equipment", "dry van", "van", "53", "rent", "reefer", "flatbed", "truck", "freightliner", "volvo"],
  },
  {
    id: "location",
    question: "Where are you based?",
    answer:
      "We're based in Markham, IL (Chicago area) — 15131 Kedzie Ave, Markham, IL 60428.",
    keywords: ["where", "location", "based", "chicago", "illinois", "address", "yard", "terminal", "markham"],
  },
  {
    id: "how-to-apply",
    question: "How do I apply?",
    answer:
      "It takes about 2 minutes: fill out the short form and upload a photo of your CDL. Our recruiting team will contact you about next steps.",
    keywords: ["apply", "application", "sign up", "join", "start", "hire", "hiring", "job"],
  },
];

/**
 * True if `keyword` appears at the start of a word in `text`, so "lease"
 * doesn't match "please", "earn" doesn't match "learn" and "rate" doesn't
 * match "operator". Keywords still work as prefixes ("qualif" → "qualify").
 */
function containsKeyword(text: string, keyword: string) {
  if (!/^[a-z0-9]/.test(keyword)) return text.includes(keyword);
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(^|[^a-z0-9])${escaped}`).test(text);
}

/** Finds the best FAQ for a typed message, or null if nothing matches. */
export function matchFaq(message: string): ChatFaq | null {
  const text = message.toLowerCase();
  let best: ChatFaq | null = null;
  let bestScore = 0;

  for (const faq of chatFaqs) {
    let score = 0;
    for (const keyword of faq.keywords) {
      if (containsKeyword(text, keyword)) score += keyword.length;
    }
    if (score > bestScore) {
      bestScore = score;
      best = faq;
    }
  }

  return best;
}
