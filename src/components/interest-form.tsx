"use client";

import { useState, type FormEvent } from "react";

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
      <div
        className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-10 text-center backdrop-blur-md"
        role="status"
        aria-live="polite"
      >
        <p className="text-lg font-semibold text-brand-soft">
          Thank you — we received your assessment request.
        </p>
        <p className="mt-3 text-sm text-brand-muted">
          Our team will follow up with next steps and data requirements for a
          governed cash unlock scenario.
        </p>
      </div>
    );
  }

  const inputClass =
    "mt-1.5 w-full rounded-xl border border-white/[0.1] bg-brand-navy/60 px-4 py-3 text-sm text-brand-soft placeholder:text-brand-muted/60 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)] outline-none transition focus:border-brand-cyan/45 focus:ring-2 focus:ring-brand-cyan/15";

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 sm:grid-cols-2"
      noValidate
    >
      <div className="sm:col-span-1">
        <label htmlFor="interest-name" className="text-sm font-medium text-brand-soft">
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
        <label htmlFor="interest-company" className="text-sm font-medium text-brand-soft">
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
        <label htmlFor="interest-email" className="text-sm font-medium text-brand-soft">
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
        <label htmlFor="interest-role" className="text-sm font-medium text-brand-soft">
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
        <label htmlFor="interest-area" className="text-sm font-medium text-brand-soft">
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
        <label htmlFor="interest-message" className="text-sm font-medium text-brand-soft">
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
        <button
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-brand-electric to-brand-cyan px-5 py-3.5 text-sm font-semibold text-brand-navy shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_12px_40px_-12px_rgba(34,211,238,0.35)] transition hover:scale-[1.01] hover:shadow-[0_0_28px_-4px_rgba(56,189,248,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan sm:w-auto"
        >
          Start a Cash Unlock Assessment
        </button>
      </div>
    </form>
  );
}
