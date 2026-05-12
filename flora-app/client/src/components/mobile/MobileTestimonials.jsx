import { T } from '../../styles/mobileTokens'
import Icon from './shared/icons'
import FontLink from './shared/fontLink'
import { useState } from 'react'

const TESTIMONIALS = [
  {
    quote:
      "The craftsmanship of the curtains transformed my villa. Flora team has an impeccable eye for detail and luxury textiles.",
    name: "Mrs. Al Mansouri",
    role: "Saadiyat Island Resident",
  },
  {
    quote:
      "Extraordinary service from the first consultation to the final installation. Their blinds are both functional and artistic.",
    name: "The Atelier Loft",
    role: "Commercial Client",
  },
];

export default function MobileTestimonials() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];

  return (
    <section className="py-14 px-5" style={{ backgroundColor: T.surfaceContainer }}>
      <h2
        className="text-2xl font-normal text-center mb-10"
        style={{ fontFamily: "Manrope, sans-serif", color: T.onSurface }}
      >
        Clients' Whispers
      </h2>

      {/* Card */}
      <div
        className="relative rounded-2xl p-7 mb-6 shadow-sm overflow-hidden"
        style={{ backgroundColor: T.surface, border: `1px solid ${T.outlineVariant}40` }}
      >
        {/* Decorative quote mark */}
        <Icon
          name="format_quote"
          className="absolute -top-2 left-5 text-5xl"
          style={{ color: T.primaryFixedDim, fontSize: "52px", opacity: 0.7 }}
        />
        <p
          className="relative z-10 italic leading-relaxed mb-6 pt-4"
          style={{ fontFamily: "Noto Serif, serif", color: T.onSurfaceVariant, fontSize: "16px" }}
        >
          "{t.quote}"
        </p>
        <div>
          <p
            className="text-[10px] font-bold tracking-[0.15em] uppercase mb-0.5"
            style={{ color: T.primary, fontFamily: "Manrope, sans-serif" }}
          >
            {t.name}
          </p>
          <p
            className="text-[10px]"
            style={{ color: T.outline, fontFamily: "Manrope, sans-serif" }}
          >
            {t.role}
          </p>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === active ? "20px" : "8px",
              height: "8px",
              backgroundColor: i === active ? T.primary : T.outlineVariant,
            }}
          />
        ))}
      </div>
    </section>
  );
}