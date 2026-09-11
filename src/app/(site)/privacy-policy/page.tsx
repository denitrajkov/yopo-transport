import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Yopo Transport collects, uses, and protects the personal information you share with us.",
};

const lastUpdated = "September 11, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-navy-50 pb-16 pt-32 sm:pb-20 sm:pt-36">
        <div className="container-page max-w-3xl">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-purple-600">
            Legal
          </span>
          <h1 className="font-display text-balance text-4xl font-semibold leading-tight text-navy-950 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-navy-500">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      <article className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-purple-500/20 bg-purple-50 p-5 text-sm leading-relaxed text-navy-700">
              This page is a general-purpose privacy policy template provided
              for convenience. It is not legal advice. Please have it
              reviewed by a qualified attorney before relying on it, and
              update the placeholder details below to match your
              company&apos;s actual data practices.
            </div>

            <p className="mt-8 text-base leading-relaxed text-navy-700">
              {siteConfig.name} (&quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;) respects your privacy and is committed to
              protecting the personal information you share with us. This
              Privacy Policy explains what information we collect, how we use
              it, and the choices you have.
            </p>

            <h2 className="font-display mt-10 text-2xl font-semibold text-navy-950 sm:text-[1.75rem]">
              Information We Collect
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-700">
              We may collect information you voluntarily provide when you use
              our website, including when you request a quote, submit a
              driver application, or contact us. This may include:
            </p>
            <ul className="mt-5 space-y-3">
              {[
                "Name, company name, email address, and phone number",
                "Shipment details, such as pickup and delivery locations",
                "Driver application details, including date of birth, driving experience, and CDL documents",
                "Any other information you choose to include in a message to us",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base leading-relaxed text-navy-700"
                >
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-base leading-relaxed text-navy-700">
              We may also automatically collect limited technical information
              — such as browser type, device information, and pages visited —
              through standard web server logs and, where enabled, analytics
              tools.
            </p>

            <h2 className="font-display mt-10 text-2xl font-semibold text-navy-950 sm:text-[1.75rem]">
              How We Use Your Information
            </h2>
            <ul className="mt-5 space-y-3">
              {[
                "To respond to quote requests and general inquiries",
                "To review and process driver applications",
                "To communicate with you about our services",
                "To maintain the security and functionality of our website",
                "To comply with legal and regulatory obligations",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base leading-relaxed text-navy-700"
                >
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-display mt-10 text-2xl font-semibold text-navy-950 sm:text-[1.75rem]">
              Cookies &amp; Tracking Technologies
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-700">
              Our website may use cookies and similar technologies to keep you
              signed in, remember your preferences, and understand how our
              site is used. You can control cookies through your browser
              settings; disabling them may affect some site functionality.
            </p>

            <h2 className="font-display mt-10 text-2xl font-semibold text-navy-950 sm:text-[1.75rem]">
              How We Share Information
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-700">
              We do not sell your personal information. We may share
              information with trusted service providers who help us operate
              our website and business (such as email or hosting providers),
              or when required to do so by law.
            </p>

            <h2 className="font-display mt-10 text-2xl font-semibold text-navy-950 sm:text-[1.75rem]">
              Data Security
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-700">
              We use reasonable administrative and technical safeguards to
              protect the information we collect. However, no method of
              transmission or storage is completely secure, and we cannot
              guarantee absolute security.
            </p>

            <h2 className="font-display mt-10 text-2xl font-semibold text-navy-950 sm:text-[1.75rem]">
              Your Choices
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-700">
              You may contact us at any time to ask what information we have
              about you, to request corrections, or to request that we delete
              information you&apos;ve previously provided, subject to any
              recordkeeping obligations we may have.
            </p>

            <h2 className="font-display mt-10 text-2xl font-semibold text-navy-950 sm:text-[1.75rem]">
              Children&apos;s Privacy
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-700">
              Our website is not directed to children under 13, and we do not
              knowingly collect personal information from children.
            </p>

            <h2 className="font-display mt-10 text-2xl font-semibold text-navy-950 sm:text-[1.75rem]">
              Changes to This Policy
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-700">
              We may update this Privacy Policy from time to time. Changes
              will be posted on this page with an updated &quot;Last
              updated&quot; date.
            </p>

            <h2 className="font-display mt-10 text-2xl font-semibold text-navy-950 sm:text-[1.75rem]">
              Contact Us
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-700">
              If you have questions about this Privacy Policy or how your
              information is handled, contact us at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-purple-600 transition-colors hover:text-purple-700"
              >
                {siteConfig.email}
              </a>{" "}
              or {siteConfig.phone}.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
