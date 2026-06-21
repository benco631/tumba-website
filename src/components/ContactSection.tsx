"use client";

import { useState } from "react";
import { CONTACT_EMAIL } from "@/src/lib/content";
import { SectionTitle } from "./SectionTitle";

const initialForm = {
  name: "",
  businessName: "",
  businessType: "",
  city: "",
  phone: "",
  email: "",
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Tumba pilot inquiry from ${form.businessName || form.name}`,
    );
    const body = encodeURIComponent(`
Name: ${form.name}
Business: ${form.businessName}
Business type: ${form.businessType}
City: ${form.city}
Phone: ${form.phone}
Email: ${form.email}

Message:
${form.message}
`);

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle
              eyebrow="Contact"
              title="Talk to us about a pilot."
              description="We are looking for partners, investors, and early users who want to build stronger real-world communities."
            />
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-6 inline-flex text-violet-200 underline-offset-4 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-slate-200">
                Full name
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-violet-400/50"
                  placeholder="Alex Morgan"
                />
              </label>
              <label className="text-sm text-slate-200">
                Business name
                <input
                  name="businessName"
                  value={form.businessName}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-violet-400/50"
                  placeholder="The Loft"
                />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-slate-200">
                Business type
                <input
                  name="businessType"
                  value={form.businessType}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-violet-400/50"
                  placeholder="Restaurant"
                />
              </label>
              <label className="text-sm text-slate-200">
                City
                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-violet-400/50"
                  placeholder="Tel Aviv"
                />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-slate-200">
                Phone number
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-violet-400/50"
                  placeholder="+972 50 123 4567"
                />
              </label>
              <label className="text-sm text-slate-200">
                Email
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-violet-400/50"
                  placeholder="hello@venue.com"
                />
              </label>
            </div>
            <label className="text-sm text-slate-200">
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="mt-2 min-h-36 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-violet-400/50"
                placeholder="Tell us about your venue, your audience, and what kind of pilot you are interested in."
              />
            </label>
            {submitted ? (
              <p className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
                Your inquiry is ready to send. The email client should open shortly.
              </p>
            ) : null}
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white transition hover:from-violet-400 hover:to-fuchsia-400"
            >
              Talk to us about a pilot
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
