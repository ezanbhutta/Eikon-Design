import Link from "next/link";
import { Container } from "@/components/container";
import { ArrowLink } from "@/components/arrow-link";
import { EikonIcon } from "@/components/eikon-logo";

export default function NotFound() {
  return (
    <section className="flex min-h-dvh items-center py-40">
      <Container>
        <EikonIcon className="h-16 w-16" />
        <p className="font-mono mt-10 text-xs uppercase tracking-[0.22em] text-faint">
          Error 404
        </p>
        <h1 className="font-display mt-5 text-5xl text-bone sm:text-7xl">
          This one&rsquo;s a blank page.
        </h1>
        <p className="mt-6 max-w-md text-muted">
          The page you&rsquo;re after isn&rsquo;t here. Let&rsquo;s get you back
          to something worth a look.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-ink transition-transform hover:-translate-y-0.5"
          >
            Back home
          </Link>
          <ArrowLink href="/work" className="text-bone">
            View the work
          </ArrowLink>
        </div>
      </Container>
    </section>
  );
}
