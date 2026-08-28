"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    if (error) setError("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setError(data?.error ?? "Incorrect password");
        setIsSubmitting(false);
        return;
      }

      router.push("/");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-navy-950 px-6">
      <div className="w-full max-w-sm">
        <div className="text-center">
          <p className="font-display text-2xl font-semibold tracking-tight text-white">
            Yopo <span className="text-purple-400">Transport</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-navy-300">
            This site is password protected. Enter the password to continue.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4" noValidate>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoFocus
              autoComplete="off"
              value={password}
              onChange={handleChange}
              placeholder="Enter password"
              aria-invalid={error ? "true" : undefined}
              className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-center text-sm text-white placeholder:text-navy-400 transition-colors duration-200 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30"
            />
          </div>

          {error ? (
            <p role="alert" className="text-center text-sm text-red-400">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-purple-500 px-7 py-3.5 text-sm font-semibold tracking-wide text-navy-950 transition-all duration-300 hover:bg-purple-400 hover:shadow-lg hover:shadow-purple-500/25 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Checking..." : "Enter"}
          </button>
        </form>
      </div>
    </main>
  );
}