// src/pages/Contact.tsx
import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const emptyForm: FormState = { name: "", email: "", phone: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const set =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  return (
    <div className="overflow-x-hidden">
      {/* Page Header */}
      <section className="scissors-bg py-24 px-6 border-b border-[#c9a84c]/20 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-linear-to-l from-[#c9a84c]/5 to-transparent" />
        <div className="max-w-7xl mx-auto relative">
          <p className="font-body tracking-[0.4em] text-[#c9a84c] text-sm uppercase mb-4">
            Get In Touch
          </p>
          <h1
            className="font-headline leading-none text-[#f5f0e8] mb-6"
            style={{ fontSize: "clamp(3rem,8vw,7rem)" }}
          >
            CONTACT
            <br />
            US
          </h1>
          <p className="font-body text-[#f5f0e8]/55 text-xl max-w-xl leading-relaxed">
            Have a question, want to make a group booking, or just want to say
            hello? We'd love to hear from you.
          </p>
        </div>
        <div className="absolute right-8 bottom-0 font-headline text-[15rem] text-[#c9a84c]/5 leading-none select-none">
          ✉
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* ── Contact Form ── */}
          <div>
            <p className="font-body tracking-[0.3em] gold text-sm uppercase mb-3">
              Send a Message
            </p>
            <h2 className="font-display text-4xl mb-10">
              We'll get back to
              <br />
              <em>you shortly</em>
            </h2>

            {submitted ? (
              <div className="scale-in border border-[#c9a84c]/30 bg-[#111111] p-10 text-center">
                <div className="w-16 h-16 border-2 border-[#c9a84c] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl gold">✦</span>
                </div>
                <h3 className="font-display text-2xl mb-3">Message Received</h3>
                <p className="font-body text-[#f5f0e8]/55 text-lg leading-relaxed mb-8">
                  Thank you, <em>{form.name.split(" ")[0]}</em>. We'll be in
                  touch within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setForm(emptyForm);
                    setSubmitted(false);
                  }}
                  className="border border-[#c9a84c]/40 text-[#c9a84c] font-headline tracking-widest px-8 py-3 hover:bg-[#c9a84c] hover:text-[#0d0d0d] transition-all duration-300"
                >
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <div className="grid gap-6">
                {/* Name & Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs tracking-widest uppercase text-[#f5f0e8]/50 block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John Silva"
                      value={form.name}
                      onChange={set("name")}
                      className={errors.name ? "border-red-500/60" : ""}
                    />
                    {errors.name && (
                      <p className="font-body text-red-400/80 text-sm mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="font-body text-xs tracking-widest uppercase text-[#f5f0e8]/50 block mb-2">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+94 77 123 4567"
                      value={form.phone}
                      onChange={set("phone")}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="font-body text-xs tracking-widest uppercase text-[#f5f0e8]/50 block mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={set("email")}
                    className={errors.email ? "border-red-500/60" : ""}
                  />
                  {errors.email && (
                    <p className="font-body text-red-400/80 text-sm mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="font-body text-xs tracking-widest uppercase text-[#f5f0e8]/50 block mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    value={form.message}
                    onChange={set("message")}
                    style={{ resize: "none" }}
                    className={errors.message ? "border-red-500/60" : ""}
                  />
                  {errors.message && (
                    <p className="font-body text-red-400/80 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#c9a84c] text-[#0d0d0d] font-headline tracking-widest py-4 text-lg hover:bg-[#f5f0e8] transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(201,168,76,0.2)]"
                >
                  SEND MESSAGE ✦
                </button>
              </div>
            )}
          </div>

          {/* ── Contact Info ── */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-body tracking-[0.3em] gold text-sm uppercase mb-3">
                Find Us
              </p>
              <h2 className="font-display text-4xl mb-10">
                Visit the
                <br />
                <em>Shop</em>
              </h2>
            </div>

            {/* Info cards */}
            {[
              {
                icon: "📍",
                label: "Address",
                lines: ["123 Galle Road", "Colombo 3, Sri Lanka"],
                link: "https://maps.google.com",
                linkLabel: "Get Directions →",
              },
              {
                icon: "🕐",
                label: "Opening Hours",
                lines: [
                  "Monday – Saturday: 8:00 AM – 8:00 PM",
                  "Sunday: 10:00 AM – 6:00 PM",
                ],
              },
              {
                icon: "📞",
                label: "Phone",
                lines: ["+94 11 234 5678"],
                link: "tel:+94112345678",
                linkLabel: "Call Now →",
              },
              {
                icon: "✉",
                label: "Email",
                lines: ["hello@noblecut.lk"],
                link: "mailto:hello@noblecut.lk",
                linkLabel: "Email Us →",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-[#c9a84c]/20 bg-[#111111] p-6 flex gap-5 group hover:border-[#c9a84c]/50 transition-all duration-300"
              >
                <div className="text-2xl shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <div className="font-body text-xs tracking-widest uppercase text-[#f5f0e8]/35 mb-2">
                    {item.label}
                  </div>
                  {item.lines.map((line) => (
                    <div
                      key={line}
                      className="font-body text-lg text-[#f5f0e8]/80 leading-relaxed"
                    >
                      {line}
                    </div>
                  ))}
                  {item.link && (
                    <a
                      href={item.link}
                      target={
                        item.link.startsWith("http") ? "_blank" : undefined
                      }
                      rel="noreferrer"
                      className="inline-block font-body text-sm tracking-widest text-[#c9a84c] uppercase mt-2 hover:underline"
                    >
                      {item.linkLabel}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div
            className="border border-[#c9a84c]/20 bg-[#111111] relative overflow-hidden"
            style={{ height: "320px" }}
          >
            {/* Decorative map-like grid */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="w-4 h-4 bg-[#c9a84c] rounded-full shadow-[0_0_20px_rgba(201,168,76,0.8)]" />
              <div className="text-center">
                <div className="font-headline tracking-widest text-xl gold">
                  NOBLE CUT
                </div>
                <div className="font-body text-[#f5f0e8]/50 text-sm mt-1">
                  123 Galle Road, Colombo 3
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 border border-[#c9a84c]/40 text-[#c9a84c] font-headline tracking-widest text-xs px-6 py-2 hover:bg-[#c9a84c] hover:text-[#0d0d0d] transition-all duration-300"
                >
                  OPEN IN GOOGLE MAPS
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-[#c9a84c]/20 bg-[#111111] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="font-display text-2xl mb-1">
              Ready to book your visit?
            </h3>
            <p className="font-body text-[#f5f0e8]/45 text-lg">
              Skip the wait — reserve your chair online.
            </p>
          </div>
          <a
            href="/booking"
            className="shrink-0 bg-[#c9a84c] text-[#0d0d0d] font-headline tracking-widest px-10 py-4 text-lg hover:bg-[#f5f0e8] transition-all duration-300"
          >
            BOOK NOW
          </a>
        </div>
      </section>
    </div>
  );
}
