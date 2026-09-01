import type { Metadata } from "next";
import { ThankYou } from "@/components/ThankYou";

export const metadata: Metadata = {
  title: "Application Received",
};

export default function DriverThankYouPage() {
  return (
    <ThankYou
      title="Application Received"
      message="Thank you for applying to drive with Yopo Transport. Our team will review your application and reach out to you shortly."
    />
  );
}