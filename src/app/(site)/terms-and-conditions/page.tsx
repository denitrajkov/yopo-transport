import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms and conditions that govern your use of the Yopo Expedite website and services.",
};

const lastUpdated = "September 11, 2026";

export default function TermsAndConditionsPage() {
  return (
    <>
      <section className="bg-navy-50 pb-16 pt-32 sm:pb-20 sm:pt-36">
        <div className="container-page max-w-3xl">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-purple-600">
            Legal
          </span>
          <h1 className="font-display text-balance text-4xl font-semibold leading-tight text-navy-950 sm:text-5xl">
            Terms &amp; Conditions
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
              This page is a general-purpose terms &amp; conditions template
              provided for convenience. It is not legal advice. Please have
              it reviewed by a qualified attorney before relying on it, and
              fill in the placeholder details below (marked in brackets) to
              match your company.
            </div>

            <p className="mt-8 text-base leading-relaxed text-navy-700">
              These Terms &amp; Conditions (&quot;Terms&quot;) govern your
              use of the {siteConfig.name} website located at{" "}
              {siteConfig.siteUrl.replace(/^https?:\/\//, "")} (the
              &quot;Site&quot;). By using the Site, you agree to these Terms.
              If you do not agree, please do not use the Site.
            </p>

            <h2 className="font-display mt-10 text-2xl font-semibold text-navy-950 sm:text-[1.75rem]">
              Use of This Website
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-700">
              This Site is provided to share information about{" "}
              {siteConfig.name}&apos;s freight transportation and logistics
              services, and to let visitors request quotes, apply to drive,
              or contact us. You agree to use the Site only for lawful
              purposes and not to interfere with its normal operation.
            </p>

            <h2 className="font-display mt-10 text-2xl font-semibold text-navy-950 sm:text-[1.75rem]">
              Services Description
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-700">
              Information on this Site is for general informational purposes
              and does not constitute a binding offer to transport freight.
              Actual shipments are governed by a separate rate confirmation,
              bill of lading, broker-carrier agreement, or other signed
              agreement between the parties.
            </p>

            <h2 className="font-display mt-10 text-2xl font-semibold text-navy-950 sm:text-[1.75rem]">
              User Submissions
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-700">
              When you submit information through our quote request, driver
              application, or contact forms, you confirm that the information
              you provide is accurate and that you have the right to share
              it, including any documents you upload (such as a CDL).
            </p>

            <h2 className="font-display mt-10 text-2xl font-semibold text-navy-950 sm:text-[1.75rem]">
              Intellectual Property
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-700">
              The content on this Site — including text, graphics, logos, and
              images — is owned by or licensed to {siteConfig.name} and is
              protected by applicable intellectual property laws. You may not
              copy, reproduce, or distribute Site content without our prior
              written permission.
            </p>

            <h2 className="font-display mt-10 text-2xl font-semibold text-navy-950 sm:text-[1.75rem]">
              Third-Party Links
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-700">
              This Site may contain links to third-party websites. We do not
              control and are not responsible for the content or practices of
              those sites.
            </p>

            <h2 className="font-display mt-10 text-2xl font-semibold text-navy-950 sm:text-[1.75rem]">
              Disclaimer of Warranties
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-700">
              This Site is provided &quot;as is&quot; without warranties of
              any kind, express or implied. We do not guarantee that the Site
              will be uninterrupted, error-free, or free of viruses or other
              harmful components.
            </p>

            <h2 className="font-display mt-10 text-2xl font-semibold text-navy-950 sm:text-[1.75rem]">
              Limitation of Liability
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-700">
              To the fullest extent permitted by law, {siteConfig.name} shall
              not be liable for any indirect, incidental, or consequential
              damages arising from your use of, or inability to use, this
              Site.
            </p>

            <h2 className="font-display mt-10 text-2xl font-semibold text-navy-950 sm:text-[1.75rem]">
              Governing Law
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-700">
              These Terms are governed by the laws of the State of{" "}
              <span className="font-medium text-navy-950">
                [Governing State]
              </span>
              , without regard to its conflict of law principles.
            </p>

            <h2 className="font-display mt-10 text-2xl font-semibold text-navy-950 sm:text-[1.75rem]">
              Changes to These Terms
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-700">
              We may update these Terms from time to time. Continued use of
              the Site after changes are posted constitutes your acceptance
              of the revised Terms.
            </p>

            <h2 className="font-display mt-10 text-2xl font-semibold text-navy-950 sm:text-[1.75rem]">
              Contact Us
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-700">
              If you have questions about these Terms, contact us at{" "}
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
