"use client";

import { useState } from "react";
import { site } from "@/data/site";

type Status = "idle" | "submitting" | "success" | "error" | "unconfigured";

const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("botcheck")) return; // honeypot

    if (!accessKey) {
      setStatus("unconfigured");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New project brief — ${data.get("name")}`,
          from_name: "Eikon Designs",
          name: data.get("name"),
          email: data.get("email"),
          message:
            `Project: ${data.get("project")}\n` +
            `Budget: ${data.get("budget")}\n\n` +
            `${data.get("brief")}`,
        }),
      });
      if (res.ok) {
        setName(String(data.get("name") ?? ""));
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
      <div className="h-fit rounded-3xl border border-line bg-ink-soft p-8 sm:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Brief received
        </p>
        <p className="font-display mt-5 text-2xl text-bone">
          Thanks{name ? `, ${name.split(" ")[0]}` : ""} — it&rsquo;s in.
        </p>
        <p className="mt-3 text-muted">
          We usually reply within the hour. If it&rsquo;s urgent, you can also{" "}
          <a
            href={site.fiverr}
            target="_blank"
            rel="noopener noreferrer"
            className="link-line text-bone"
          >
            message us on Fiverr
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="h-fit rounded-3xl border border-line bg-ink-soft p-8 sm:p-10"
    >
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
        Tell us about the project
      </p>

      <div className="mt-7 space-y-6">
        <Field label="Name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="input"
          />
        </Field>

        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="input"
          />
        </Field>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Project" htmlFor="project">
            <select id="project" name="project" defaultValue="Logo" className="input">
              <option>Logo</option>
              <option>Brand identity</option>
              <option>Branding kit</option>
              <option>Social media kit</option>
              <option>Not sure yet</option>
            </select>
          </Field>
          <Field label="Budget" htmlFor="budget">
            <select id="budget" name="budget" defaultValue="Let's talk" className="input">
              <option>Basic — $40</option>
              <option>Standard — $115</option>
              <option>Premium — $165</option>
              <option>Let&rsquo;s talk</option>
            </select>
          </Field>
        </div>

        <Field label="Brief" htmlFor="brief">
          <textarea
            id="brief"
            name="brief"
            required
            rows={4}
            placeholder="Company name, what you do, any style or colours you like, logos you admire…"
            className="input resize-none"
          />
        </Field>

        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-ink transition-transform hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-70"
      >
        {status === "submitting" ? "Sending…" : "Send brief"}
      </button>

      {status === "error" && (
        <p className="mt-4 text-sm text-accent">
          Something went wrong. Please{" "}
          <a
            href={site.fiverr}
            target="_blank"
            rel="noopener noreferrer"
            className="link-line"
          >
            message us on Fiverr
          </a>{" "}
          and we&rsquo;ll pick it up there.
        </p>
      )}
      {status === "unconfigured" && (
        <p className="mt-4 text-sm text-muted">
          Direct messaging isn&rsquo;t live yet —{" "}
          <a
            href={site.fiverr}
            target="_blank"
            rel="noopener noreferrer"
            className="link-line text-bone"
          >
            message us on Fiverr
          </a>{" "}
          and we&rsquo;ll reply within the hour.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="font-mono text-xs uppercase tracking-[0.16em] text-faint">
        {label}
      </span>
      <span className="mt-2 block">{children}</span>
    </label>
  );
}
