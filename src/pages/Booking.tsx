import { useState } from "react";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    id: "classic-cut",
    name: "Classic Cut",
    duration: "45 min",
    price: "LKR 1,500",
  },
  {
    id: "skin-fade",
    name: "Skin Fade",
    duration: "50 min",
    price: "LKR 2,000",
  },
  {
    id: "hot-shave",
    name: "Hot Towel Shave",
    duration: "45 min",
    price: "LKR 2,000",
  },
  {
    id: "beard-sculpt",
    name: "Beard Sculpt",
    duration: "30 min",
    price: "LKR 1,200",
  },
  {
    id: "the-works",
    name: "The Works",
    duration: "90 min",
    price: "LKR 4,500",
  },
  {
    id: "gentlemans-refresh",
    name: "Gentleman's Refresh",
    duration: "75 min",
    price: "LKR 3,200",
  },
];

const BARBERS = [
  { id: "any", name: "Any Available", specialty: "Let us choose for you" },
  { id: "rohan", name: "Rohan Silva", specialty: "Fades & Modern Cuts" },
  { id: "kamal", name: "Kamal Perera", specialty: "Classic & Traditional" },
  {
    id: "nishan",
    name: "Nishan Fernando",
    specialty: "Beard & Shave Specialist",
  },
];

const TIME_SLOTS = [
  "8:00 AM",
  "8:30 AM",
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
];

const STEPS = ["Service", "Barber", "Date & Time", "Details", "Confirm"];

type FormData = {
  service: string;
  barber: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
};

const emptyForm: FormData = {
  service: "",
  barber: "",
  date: "",
  time: "",
  name: "",
  phone: "",
  email: "",
  notes: "",
};

export default function Booking() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>(emptyForm);

  const selectedService = SERVICES.find((s) => s.id === form.service);
  const selectedBarber = BARBERS.find((b) => b.id === form.barber);
  const today = new Date().toISOString().split("T")[0];

  const canProceed = () => {
    if (step === 0) return !!form.service;
    if (step === 1) return !!form.barber;
    if (step === 2) return !!form.date && !!form.time;
    if (step === 3) return !!form.name && !!form.phone;
    return true;
  };

  const formatDate = (d: string) =>
    d
      ? new Date(d).toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "";

  /* ── Confirmation screen ── */
  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="text-center max-w-lg scale-in">
          <div className="w-20 h-20 border-2 border-[#c9a84c] rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-3xl gold">✦</span>
          </div>
          <p className="font-body tracking-[0.4em] text-[#c9a84c] text-sm uppercase mb-4">
            Booking Confirmed
          </p>
          <h2 className="font-display text-4xl mb-6">
            See You Soon, <em>{form.name.split(" ")[0]}</em>
          </h2>
          <div className="border border-[#c9a84c]/20 bg-[#111111] p-6 mb-8 text-left">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Service", val: selectedService?.name },
                { label: "Barber", val: selectedBarber?.name },
                { label: "Date", val: formatDate(form.date) },
                { label: "Time", val: form.time },
              ].map((row) => (
                <div key={row.label}>
                  <div className="font-body text-xs tracking-widest text-[#f5f0e8]/40 uppercase mb-1">
                    {row.label}
                  </div>
                  <div className="font-body text-lg">{row.val}</div>
                </div>
              ))}
            </div>
            <div className="border-t border-[#c9a84c]/20 mt-4 pt-4 flex justify-between">
              <span className="font-body text-[#f5f0e8]/50 tracking-widest uppercase text-sm">
                Total
              </span>
              <span className="font-headline text-xl gold">
                {selectedService?.price}
              </span>
            </div>
          </div>
          <p className="font-body text-[#f5f0e8]/50 text-lg mb-8">
            A confirmation SMS has been sent to {form.phone}.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/"
              className="border border-[#c9a84c]/30 text-[#f5f0e8]/60 font-headline tracking-widest px-6 py-3 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300"
            >
              HOME
            </Link>
            <button
              onClick={() => {
                setSubmitted(false);
                setStep(0);
                setForm(emptyForm);
              }}
              className="bg-[#c9a84c] text-[#0d0d0d] font-headline tracking-widest px-6 py-3 hover:bg-[#f5f0e8] transition-all duration-300"
            >
              NEW BOOKING
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ── Main booking flow ── */
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <p className="font-body tracking-[0.4em] text-[#c9a84c] text-sm uppercase mb-3">
          Reserve Your Chair
        </p>
        <h1 className="font-display text-5xl">Book an Appointment</h1>
      </div>

      {/* Stepper */}
      <div className="flex items-center mb-12 overflow-x-auto">
        {STEPS.map((s, i) => (
          <div key={s} className="flex items-center shrink-0">
            <div className="flex flex-col items-center">
              <button
                onClick={() => i < step && setStep(i)}
                className={`w-10 h-10 border-2 flex items-center justify-center font-headline text-sm transition-all duration-300 ${
                  i < step
                    ? "border-[#c9a84c] bg-[#c9a84c] text-[#0d0d0d] cursor-pointer"
                    : i === step
                      ? "border-[#c9a84c] text-[#c9a84c]"
                      : "border-[#f5f0e8]/15 text-[#f5f0e8]/20"
                }`}
              >
                {i < step ? "✓" : i + 1}
              </button>
              <span
                className={`font-body text-xs tracking-widest uppercase mt-2 ${i === step ? "text-[#c9a84c]" : "text-[#f5f0e8]/30"}`}
              >
                {s}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`w-12 md:w-20 h-px mx-2 mb-5 transition-all duration-500 ${i < step ? "bg-[#c9a84c]" : "bg-[#f5f0e8]/10"}`}
              />
            )}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* ── Form panel ── */}
        <div className="lg:col-span-2">
          <div className="fade-slide" key={step}>
            {/* Step 0 — Service */}
            {step === 0 && (
              <div>
                <h2 className="font-display text-3xl mb-8">Choose a Service</h2>
                <div className="grid gap-3">
                  {SERVICES.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setForm({ ...form, service: service.id })}
                      className={`text-left p-5 border transition-all duration-300 ${
                        form.service === service.id
                          ? "border-[#c9a84c] bg-[#111111]"
                          : "border-[#c9a84c]/15 bg-[#0d0d0d] hover:border-[#c9a84c]/40 hover:bg-[#0f0f0f]"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-4 h-4 border-2 rounded-full shrink-0 transition-all duration-300 ${
                              form.service === service.id
                                ? "border-[#c9a84c] bg-[#c9a84c]"
                                : "border-[#f5f0e8]/30"
                            }`}
                          />
                          <div>
                            <div className="font-display text-lg">
                              {service.name}
                            </div>
                            <div className="font-body text-[#f5f0e8]/40 text-sm tracking-widest uppercase">
                              {service.duration}
                            </div>
                          </div>
                        </div>
                        <div className="font-headline text-xl gold tracking-wide">
                          {service.price}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 1 — Barber */}
            {step === 1 && (
              <div>
                <h2 className="font-display text-3xl mb-8">
                  Select Your Barber
                </h2>
                <div className="grid gap-4">
                  {BARBERS.map((barber) => (
                    <button
                      key={barber.id}
                      onClick={() => setForm({ ...form, barber: barber.id })}
                      className={`text-left p-6 border transition-all duration-300 ${
                        form.barber === barber.id
                          ? "border-[#c9a84c] bg-[#111111]"
                          : "border-[#c9a84c]/15 bg-[#0d0d0d] hover:border-[#c9a84c]/40"
                      }`}
                    >
                      <div className="flex items-center gap-5">
                        <div
                          className={`w-12 h-12 shrink-0 flex items-center justify-center border-2 font-headline text-lg transition-all duration-300 ${
                            form.barber === barber.id
                              ? "border-[#c9a84c] bg-[#c9a84c] text-[#0d0d0d]"
                              : "border-[#f5f0e8]/20 text-[#f5f0e8]/40"
                          }`}
                        >
                          {barber.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-display text-xl">
                            {barber.name}
                          </div>
                          <div className="font-body text-[#f5f0e8]/45 tracking-wide">
                            {barber.specialty}
                          </div>
                        </div>
                        {form.barber === barber.id && (
                          <div className="ml-auto gold font-headline text-lg">
                            ✓
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2 — Date & Time */}
            {step === 2 && (
              <div>
                <h2 className="font-display text-3xl mb-8">Pick Date & Time</h2>
                <div className="mb-8">
                  <label className="font-body text-sm tracking-widest uppercase text-[#f5f0e8]/50 block mb-3">
                    Date
                  </label>
                  <input
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                  />
                </div>
                <div>
                  <label className="font-body text-sm tracking-widest uppercase text-[#f5f0e8]/50 block mb-3">
                    Available Times
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {TIME_SLOTS.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setForm({ ...form, time: slot })}
                        className={`font-body py-3 text-center border text-sm tracking-wide transition-all duration-300 ${
                          form.time === slot
                            ? "border-[#c9a84c] bg-[#c9a84c] text-[#0d0d0d] font-semibold"
                            : "border-[#c9a84c]/15 text-[#f5f0e8]/60 hover:border-[#c9a84c]/40 hover:text-[#f5f0e8]"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3 — Details */}
            {step === 3 && (
              <div>
                <h2 className="font-display text-3xl mb-8">Your Details</h2>
                <div className="grid gap-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-sm tracking-widest uppercase text-[#f5f0e8]/50 block mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John Silva"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className="font-body text-sm tracking-widest uppercase text-[#f5f0e8]/50 block mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        placeholder="+94 77 123 4567"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-sm tracking-widest uppercase text-[#f5f0e8]/50 block mb-2">
                      Email (optional)
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm tracking-widest uppercase text-[#f5f0e8]/50 block mb-2">
                      Notes (optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Any special requests or things we should know..."
                      value={form.notes}
                      onChange={(e) =>
                        setForm({ ...form, notes: e.target.value })
                      }
                      style={{ resize: "none" }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4 — Confirm */}
            {step === 4 && (
              <div>
                <h2 className="font-display text-3xl mb-8">Review & Confirm</h2>
                <div className="border border-[#c9a84c]/25 bg-[#111111]">
                  {[
                    {
                      label: "Service",
                      val: selectedService?.name,
                      sub: selectedService?.duration,
                    },
                    {
                      label: "Barber",
                      val: selectedBarber?.name,
                      sub: selectedBarber?.specialty,
                    },
                    { label: "Date", val: formatDate(form.date) },
                    { label: "Time", val: form.time },
                    { label: "Name", val: form.name },
                    { label: "Phone", val: form.phone },
                  ].map((row, i) => (
                    <div
                      key={row.label}
                      className={`flex justify-between items-start p-5 ${i !== 0 ? "border-t border-[#c9a84c]/10" : ""}`}
                    >
                      <div className="font-body text-xs tracking-widest uppercase text-[#f5f0e8]/35">
                        {row.label}
                      </div>
                      <div className="text-right">
                        <div className="font-body text-lg">{row.val}</div>
                        {row.sub && (
                          <div className="font-body text-xs text-[#f5f0e8]/35 tracking-widest uppercase">
                            {row.sub}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  <div className="p-5 border-t border-[#c9a84c]/30 bg-[#0d0d0d] flex justify-between items-center">
                    <span className="font-body tracking-widest uppercase text-sm text-[#f5f0e8]/50">
                      Total
                    </span>
                    <span className="font-headline text-2xl gold">
                      {selectedService?.price}
                    </span>
                  </div>
                </div>
                {form.notes && (
                  <div className="mt-4 p-4 border border-[#c9a84c]/10 bg-[#0d0d0d]">
                    <div className="font-body text-xs tracking-widest uppercase text-[#f5f0e8]/35 mb-1">
                      Notes
                    </div>
                    <div className="font-body text-[#f5f0e8]/60">
                      {form.notes}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-10">
            <button
              onClick={() => setStep((s) => s - 1)}
              className={`font-headline tracking-widest px-8 py-3 border border-[#c9a84c]/30 text-[#f5f0e8]/50 hover:border-[#c9a84c] hover:text-[#f5f0e8] transition-all duration-300 ${step === 0 ? "invisible" : ""}`}
            >
              ← BACK
            </button>
            {step < STEPS.length - 1 ? (
              <button
                onClick={() => canProceed() && setStep((s) => s + 1)}
                className={`font-headline tracking-widest px-10 py-3 transition-all duration-300 ${
                  canProceed()
                    ? "bg-[#c9a84c] text-[#0d0d0d] hover:bg-[#f5f0e8] hover:scale-105"
                    : "bg-[#c9a84c]/20 text-[#f5f0e8]/20 cursor-not-allowed"
                }`}
              >
                CONTINUE →
              </button>
            ) : (
              <button
                onClick={() => setSubmitted(true)}
                className="font-headline tracking-widest px-10 py-3 bg-[#c9a84c] text-[#0d0d0d] hover:bg-[#f5f0e8] hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(201,168,76,0.3)]"
              >
                CONFIRM BOOKING ✦
              </button>
            )}
          </div>
        </div>

        {/* ── Summary sidebar ── */}
        <div className="lg:col-span-1">
          <div className="sticky top-28">
            <div className="border border-[#c9a84c]/20 bg-[#111111] p-6 mb-6">
              <div className="font-headline tracking-widest text-sm gold mb-6">
                BOOKING SUMMARY
              </div>
              <div className="space-y-4">
                {form.service ? (
                  <>
                    <div>
                      <div className="font-body text-xs tracking-widest text-[#f5f0e8]/35 uppercase mb-1">
                        Service
                      </div>
                      <div className="font-display text-lg">
                        {selectedService?.name}
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="font-body text-[#f5f0e8]/40 text-sm">
                          {selectedService?.duration}
                        </span>
                        <span className="font-headline gold">
                          {selectedService?.price}
                        </span>
                      </div>
                    </div>
                    {form.barber && (
                      <div className="border-t border-[#c9a84c]/10 pt-4">
                        <div className="font-body text-xs tracking-widest text-[#f5f0e8]/35 uppercase mb-1">
                          Barber
                        </div>
                        <div className="font-display text-lg">
                          {selectedBarber?.name}
                        </div>
                      </div>
                    )}
                    {form.date && form.time && (
                      <div className="border-t border-[#c9a84c]/10 pt-4">
                        <div className="font-body text-xs tracking-widest text-[#f5f0e8]/35 uppercase mb-1">
                          When
                        </div>
                        <div className="font-display text-lg">{form.time}</div>
                        <div className="font-body text-[#f5f0e8]/45 text-sm">
                          {formatDate(form.date)}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-6">
                    <div className="text-4xl gold mb-3">✦</div>
                    <div className="font-body text-[#f5f0e8]/30 text-sm">
                      Your booking details will appear here as you fill in the
                      form.
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Shop info */}
            <div className="border border-[#c9a84c]/10 p-6 bg-[#0d0d0d] scissors-bg">
              <div className="font-headline tracking-widest text-sm text-[#f5f0e8]/40 mb-4">
                NOBLE CUT
              </div>
              <div className="space-y-3 font-body text-[#f5f0e8]/50 text-sm">
                {[
                  "123 Galle Road, Colombo 3",
                  "Mon–Sat: 8am – 8pm · Sun: 10am – 6pm",
                  "+94 11 234 5678",
                ].map((line) => (
                  <div key={line} className="flex items-start gap-2">
                    <span className="gold mt-0.5 text-xs">✦</span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
