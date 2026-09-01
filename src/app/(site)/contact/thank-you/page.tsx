import type { Metadata } from "next";
import { ThankYou } from "@/components/ThankYou";

export const metadata: Metadata = {
  title: "Request Received",
};

export default function ContactThankYouPage() {
  return (
    <ThankYou
      title="Request Received"
      message="Thank you for reaching out to Yopo Transport. A member of our team will get back to you shortly."
    />
  );
}