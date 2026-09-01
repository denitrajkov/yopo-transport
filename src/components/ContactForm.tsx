"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { serviceOptions } from "@/lib/data";

type Status = "idle" | "submitting" | "error";

const inputStyles =
  "w-full rounded-lg border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-navy-400 transition-colors duration-200 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30";

const labelStyles = "mb-1.5 block text-sm font-medium text-navy-900";

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      // TODO: Connect to an email service or backend API route, e.g.:
      // await fetch("/api/quote-request", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(data),
      // });
      console.log("Quote request submitted (frontend-only placeholder):", data);
      await new Promise((resolve) => setTimeout(resolve, 600));
      form.reset();
      router.push("/contact/thank-you");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelStyles}>
            Full Name<span className="text-purple-600"> *</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputStyles}
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="company" className={labelStyles}>
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={inputStyles}
            placeholder="Acme Manufacturing"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelStyles}>
            Email<span className="text-purple-600"> *</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputStyles}
            placeholder="jane@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelStyles}>
            Phone<span className="text-purple-600"> *</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={inputStyles}
            placeholder="(555) 010-2024"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="pickupLocation" className={labelStyles}>
            Pickup Location
          </label>
          <input
            id="pickupLocation"
            name="pickupLocation"
            type="text"
            className={inputStyles}
            placeholder="City, State"
          />
        </div>
        <div>
          <label htmlFor="deliveryLocation" className={labelStyles}>
            Delivery Location
          </label>
          <input
            id="deliveryLocation"
            name="deliveryLocation"
            type="text"
            className={inputStyles}
            placeholder="City, State"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className={labelStyles}>
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          defaultValue=""
          className={inputStyles}
        >
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelStyles}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={inputStyles}
          placeholder="Tell us about your shipment — freight type, weight, timeline, and any special requirements."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-purple-500 px-7 py-3.5 text-sm font-semibold tracking-wide text-navy-950 transition-all duration-300 hover:bg-purple-400 hover:shadow-lg hover:shadow-purple-500/25 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Submit Request"}
      </button>

      {status === "error" ? (
        <p role="alert" className="text-sm text-red-600">
          Something went wrong. Please try again or contact us directly.
        </p>
      ) : null}
    </form>
  );
}