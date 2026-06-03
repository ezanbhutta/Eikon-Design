import Link from "next/link";
import { Container } from "@/components/container";
import { ArrowLink } from "@/components/arrow-link";
import { EikonMark } from "@/components/eikon-logo";

export default function NotFound() {
  return (
    <section className="flex min-h-dvh items-center py-40">
      <Container className="text-center">
        <EikonMark className="mx-auto h-14 w-14 text-accent/60" />
        <p className="font-mono mt-10 text-xs uppercase tracking-[0.22em] text-faint">
          Error 404
        </p>
        <h1 className="font-display mt-5 text-5xl text-bone sm:text-7xl">
          This page went unsigned.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-muted">
          The mark you are looking for is not here. Let us point you back to
          something worth seeing.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
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
