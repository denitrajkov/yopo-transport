import { Button } from "@/components/Button";

type ThankYouProps = {
  title: string;
  message: string;
};

export function ThankYou({ title, message }: ThankYouProps) {
  return (
    <section className="flex min-h-[70vh] items-center bg-white py-24 sm:py-28">
      <div className="container-page max-w-xl text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/15 text-purple-600">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-8 w-8"
            aria-hidden
          >
            <path d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.6 3.6 6.7-6.7a1 1 0 011.4 0z" />
          </svg>
        </span>
        <h1 className="font-display mt-6 text-balance text-3xl font-semibold text-navy-950 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-balance text-base leading-relaxed text-navy-700">
          {message}
        </p>
        <div className="mt-10">
          <Button href="/" variant="primary">
            Back to Home
          </Button>
        </div>
      </div>
    </section>
  );
}