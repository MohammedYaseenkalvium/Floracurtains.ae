import { T } from '../../styles/mobileTokens'
import Icon from './shared/icons'
import FontLink from './shared/fontLink'
import { useState } from 'react'
const SERVICES = [
  "Curtains & Drapes",
  "Window Blinds",
  "Wallpaper Selection",
  "Custom Upholstery",
  "Hardwood Flooring",
];

export default function MobileEnquiry() {
  const [form, setForm] = useState({ name: "", email: "", service: SERVICES[0] });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitted(true);
  };

  return (
    <section className="py-16 px-5" style={{ backgroundColor: T.surface }}>
      <div className="text-center mb-10">
        <h2
          className="text-2xl font-normal mb-3"
          style={{ fontFamily: "Manrope, sans-serif", color: T.onSurface }}
        >
          Book a Consultation
        </h2>
        <p
          className="text-sm leading-relaxed max-w-xs mx-auto"
          style={{ fontFamily: "Noto Serif, serif", color: T.onSurfaceVariant }}
        >
          Let our experts guide you in choosing the perfect textures for your sanctuary.
        </p>
      </div>

      {submitted ? (
        <div
          className="max-w-sm mx-auto rounded-2xl p-10 text-center"
          style={{ backgroundColor: T.surfaceContainer }}
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ backgroundColor: T.primaryFixed }}
          >
            <Icon name="check_circle" style={{ color: T.primary, fontSize: "28px" }} />
          </div>
          <h3
            className="text-lg font-normal mb-2"
            style={{ fontFamily: "Manrope, sans-serif", color: T.onSurface }}
          >
            Request Received
          </h3>
          <p className="text-sm" style={{ color: T.outline, fontFamily: "Noto Serif, serif" }}>
            Our design consultant will contact you within 24 hours.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-sm mx-auto space-y-7"
        >
          {[
            { key: "name", label: "Your Name", type: "text", placeholder: "Enter your name" },
            { key: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
          ].map(({ key, label, type, placeholder }) => (
            <div key={key}>
              <label
                className="block mb-1 text-[10px] font-bold tracking-[0.15em] uppercase"
                style={{ color: T.outline, fontFamily: "Manrope, sans-serif" }}
              >
                {label}
              </label>
              <input
                type={type}
                placeholder={placeholder}
                value={form[key]}
                onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                className="w-full bg-transparent border-b py-3 text-sm transition-colors placeholder:text-stone-300"
                style={{
                  borderColor: T.outlineVariant,
                  color: T.onSurface,
                  fontFamily: "Manrope, sans-serif",
                }}
              />
            </div>
          ))}

          <div>
            <label
              className="block mb-1 text-[10px] font-bold tracking-[0.15em] uppercase"
              style={{ color: T.outline, fontFamily: "Manrope, sans-serif" }}
            >
              Interested In
            </label>
            <div className="relative">
              <select
                value={form.service}
                onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                className="w-full bg-transparent border-b py-3 text-sm pr-8 transition-colors"
                style={{
                  borderColor: T.outlineVariant,
                  color: T.onSurface,
                  fontFamily: "Manrope, sans-serif",
                }}
              >
                {SERVICES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <Icon
                name="expand_more"
                className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none"
                style={{ color: T.outline, fontSize: "18px" }}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-5 rounded-xl text-xs font-bold tracking-[0.15em] uppercase text-white shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
            style={{ backgroundColor: T.primary, fontFamily: "Manrope, sans-serif" }}
          >
            Request Appointment
          </button>
        </form>
      )}
    </section>
  );
}
