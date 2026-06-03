"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

const budgets = ["Under $2k", "$2k – $5k", "$5k – $10k", "$10k+", "Not sure yet"];

/**
 * No-backend contact form: composes a prefilled email and hands off to the
 * visitor's mail client. Swap `handleSubmit` for a Server Action or an API
 * route (Resend, Formspree, etc.) when an email backend is connected.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const company = String(form.get("company") ?? "");
    const budget = String(form.get("budget") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = `New project enquiry — ${name || "Website"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Budget: ${budget}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <Field label="Name" name="name" placeholder="Jane Doe" required />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="jane@company.com"
          required
        />
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <Field label="Company" name="company" placeholder="Acme Inc." />
        <div>
          <Label htmlFor="budget">Budget</Label>
          <select
            id="budget"
            name="budget"
            defaultValue=""
            className="w-full appearance-none border-b border-line bg-transparent py-3 text-bone outline-none transition-colors focus:border-accent"
          >
            <option value="" disabled className="bg-ink">
              Select a range
            </option>
            {budgets.map((b) => (
              <option key={b} value={b} className="bg-ink text-bone">
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <Label htmlFor="message">Project details</Label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your brand, your goals, and your timeline."
          className="w-full resize-none border-b border-line bg-transparent py-3 text-bone placeholder:text-faint outline-none transition-colors focus:border-accent"
        />
      </div>

      <div className="flex flex-wrap items-center gap-5">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-medium text-accent-ink transition-transform hover:-translate-y-0.5"
        >
          Send enquiry
        </button>
        <p
          className={cn(
            "text-sm text-muted transition-opacity",
            sent ? "opacity-100" : "opacity-0",
          )}
          role="status"
          aria-live="polite"
        >
          Opening your email app — thank you!
        </p>
      </div>
    </form>
  );
}

function Label({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block font-mono text-xs uppercase tracking-[0.18em] text-faint"
    >
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full border-b border-line bg-transparent py-3 text-bone placeholder:text-faint outline-none transition-colors focus:border-accent"
      />
    </div>
  );
}
