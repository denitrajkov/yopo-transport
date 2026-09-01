"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const inputStyles =
  "w-full rounded-lg border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-navy-400 transition-colors duration-200 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30";

const labelStyles = "mb-1.5 block text-sm font-medium text-navy-900";

const experienceOptions = [
  "Less than 1 year",
  "1–2 years",
  "3–5 years",
  "6–10 years",
  "10+ years",
];

const WEB3FORMS_ACCESS_KEY = "51a4dae4-e7f7-40c7-b726-843fed3ac501";

export function BecomeDriverForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append(
      "subject",
      `New Driver Application: ${formData.get("firstName")} ${formData.get("lastName")}`,
    );
    formData.append("from_name", "Yopo Transport Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-purple-500/30 bg-purple-50 p-8 text-center"
      >
        <h3 className="font-display text-xl font-semibold text-navy-950">
          Application Received
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-700">
          Thank you for applying. Our team will review your application and
          reach out to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center justify-center rounded-full border border-navy-900/20 px-6 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:border-navy-900/40"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        style={{ display: "none" }}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelStyles}>
            First Name<span className="text-purple-600"> *</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            className={inputStyles}
            placeholder="Jane"
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelStyles}>
            Last Name<span className="text-purple-600"> *</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            className={inputStyles}
            placeholder="Smith"
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
            placeholder="jane@example.com"
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
          <label htmlFor="dateOfBirth" className={labelStyles}>
            Date of Birth<span className="text-purple-600"> *</span>
          </label>
          <input
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            required
            autoComplete="bday"
            className={inputStyles}
          />
        </div>
        <div>
          <label htmlFor="experience" className={labelStyles}>
            Driving Experience<span className="text-purple-600"> *</span>
          </label>
          <select
            id="experience"
            name="experience"
            required
            defaultValue=""
            className={inputStyles}
          >
            <option value="" disabled>
              Select years of experience
            </option>
            {experienceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="cdl" className={labelStyles}>
          Upload CDL (PDF or Image)<span className="text-purple-600"> *</span>
        </label>
        <input
          id="cdl"
          name="cdl"
          type="file"
          required
          accept=".pdf,image/*"
          className="block w-full rounded-lg text-sm text-navy-600 file:mr-4 file:rounded-full file:border-0 file:bg-purple-500 file:px-5 file:py-2.5 file:text-sm file:font-semibold file:text-navy-950 file:transition-colors file:duration-200 hover:file:bg-purple-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/30"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 shrink-0 rounded border-navy-900/30 text-purple-500 focus:ring-2 focus:ring-purple-500/40"
        />
        <label htmlFor="consent" className="text-sm leading-relaxed text-navy-700">
          I agree that Yopo Transport may collect and use the information
          provided in this form to review my application.
          <span className="text-purple-600"> *</span>
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-purple-500 px-7 py-3.5 text-sm font-semibold tracking-wide text-navy-950 transition-all duration-300 hover:bg-purple-400 hover:shadow-lg hover:shadow-purple-500/25 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Submitting..." : "Submit Application"}
      </button>

      {status === "error" ? (
        <p role="alert" className="text-sm text-red-600">
          Something went wrong. Please try again or contact us directly.
        </p>
      ) : null}
    </form>
  );
}