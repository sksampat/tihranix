"use client";

import { useState, type FormEvent } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { primaryCtaBaseClass } from "@/components/ui/primary-cta-styles";

const initial = {
  name: "",
  company: "",
  email: "",
  role: "",
  area: "",
  message: "",
};

export function InterestForm() {
  const [values, setValues] = useState(initial);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div role="status" aria-live="polite">
        <GlassCard className="p-10 text-center">
          <p className="text-lg font-semibold text-white">
            Thank you — we received your assessment request.
          </p>
          <p className="mt-3 text-sm text-brand-muted">
            Our team will follow up with next steps and data requirements for a
            governed cash unlock scenario.
          </p>
        </GlassCard>
      </div>
    );
  }

  const inputClass =
    "mt-1.5 w-full rounded-xl border border-white/[0.1] bg-brand-navy/50 px-4 py-3 text-sm text-white placeholder:text-brand-muted/55 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.03)] outline-none transition focus:border-brand-cyan/40 focus:ring-2 focus:ring-brand-cyan/12";

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 sm:grid-cols-2"
      noValidate
    >
      <div className="sm:col-span-1">
        <label htmlFor="interest-name" className="text-sm font-medium text-white">
          Name
        </label>
        <input
          id="interest-name"
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
        <label htmlFor="interest-company" className="text-sm font-medium text-white">
          Company
        </label>
        <input
          id="interest-company"
          name="company"
          type="text"
          autoComplete="organization"
          required
          value={values.company}
          onChange={(e) =>
            setValues((v) => ({ ...v, company: e.target.value }))
          }
          className={inputClass}
        />
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="interest-email" className="text-sm font-medium text-white">
          Work email
        </label>
        <input
          id="interest-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          className={inputClass}
        />
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="interest-role" className="text-sm font-medium text-white">
          Role
        </label>
        <input
          id="interest-role"
          name="role"
          type="text"
          autoComplete="organization-title"
          required
          value={values.role}
          onChange={(e) => setValues((v) => ({ ...v, role: e.target.value }))}
          className={inputClass}
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="interest-area" className="text-sm font-medium text-white">
          Inventory / scope
        </label>
        <input
          id="interest-area"
          name="area"
          type="text"
          required
          value={values.area}
          onChange={(e) => setValues((v) => ({ ...v, area: e.target.value }))}
          className={inputClass}
          placeholder="e.g. retail apparel NA, industrial MRO, 12 DCs"
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="interest-message" className="text-sm font-medium text-white">
          Context (optional)
        </label>
        <textarea
          id="interest-message"
          name="message"
          rows={4}
          value={values.message}
          onChange={(e) =>
            setValues((v) => ({ ...v, message: e.target.value }))
          }
          className={`${inputClass} resize-y min-h-[120px]`}
          placeholder="Dead inventory pain points, policy constraints, or timeline."
        />
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className={`${primaryCtaBaseClass} w-full sm:w-auto`}>
          Start a Cash Unlock Assessment
        </button>
      </div>
    </form>
  );
}
