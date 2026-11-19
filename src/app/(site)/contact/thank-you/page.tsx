import type { Metadata } from "next";
import { ThankYou } from "@/components/ThankYou";

export const metadata: Metadata = {
  title: "Request Received",
  // Post-submit confirmation page: own canonical (instead of inheriting "/")
  // and kept out of search results on purpose.
  alternates: { canonical: "/contact/thank-you" },
  robots: { index: false, follow: true },
};

export default function ContactThankYouPage() {
  return (
    <ThankYou
      title="Request Received"
      message="Thank you for reaching out to Yopo Expedite. A member of our team will get back to you shortly."
    />
  );
}