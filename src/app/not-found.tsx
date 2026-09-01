import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="flex min-h-[80vh] items-center bg-navy-950 py-24">
          <div className="container-page max-w-xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-300">
              Error 404
            </span>
            <h1 className="font-display mt-4 text-balance text-4xl font-semibold text-white sm:text-5xl">
              Page Not Found
            </h1>
            <p className="mt-4 text-balance text-base leading-relaxed text-navy-100/85">
              The page you&rsquo;re looking for doesn&rsquo;t exist or may
              have been moved.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="/" variant="primary">
                Back to Home
              </Button>
              <Button href="/contact" variant="secondary">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}