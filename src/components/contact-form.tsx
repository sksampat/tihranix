"use client";

import { useState, type FormEvent } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { primaryCtaBaseClass } from "@/components/ui/primary-cta-styles";

const initial = {
  name: "",
  company: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState(initial);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: connect this form to contact email/API endpoint.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div role="status" aria-live="polite">
        <GlassCard className="p-10 text-center">
          <p className="text-lg font-semibold text-brand-soft">
            Thanks — your request has been received.
          </p>
          <p className="mt-3 text-sm text-brand-muted">
            We will follow up to schedule a working capital review and align on data access,
            approval workflows, and next steps.
          </p>
        </GlassCard>
      </div>
    );
  }

  const inputClass =
    "mt-1.5 w-full rounded-xl border border-white/[0.1] bg-brand-navy/50 px-4 py-3 text-sm text-brand-soft placeholder:text-brand-muted/55 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.03)] outline-none transition focus:border-brand-cyan/40 focus:ring-2 focus:ring-brand-cyan/12";

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2" noValidate>
      <div className="sm:col-span-1">
        <label htmlFor="contact-name" className="text-sm font-medium text-brand-soft">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          className={inputClass}
        />
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="contact-company" className="text-sm font-medium text-brand-soft">
          Company
        </label>
        <input
          id="contact-company"
          name="company"
          type="text"
          autoComplete="organization"
          required
          value={values.company}
          onChange={(e) => setValues((v) => ({ ...v, company: e.target.value }))}
          className={inputClass}
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="contact-email" className="text-sm font-medium text-brand-soft">
          Work Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          className={inputClass}
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="contact-message" className="text-sm font-medium text-brand-soft">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          className={`${inputClass} resize-y min-h-[140px]`}
        />
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className={`${primaryCtaBaseClass} w-full sm:w-auto`}>
          Book a working capital review
        </button>
      </div>
    </form>
  );
}
