import { useState } from "react";



const SERVICES = [
  {
    id: "curtains",
    label: "ARTISTRY IN FABRIC",
    title: "Curtains & Blinds",
    body: "From motorized blackouts to ethereal sheers, our window treatments are engineered for both performance and aesthetic harmony. We source the world's finest linens, silks, and technical fabrics to frame your view with absolute precision.",
    extras: {
      type: "bullets",
      items: ["MOTORIZED SMART SOLUTIONS", "HAND-STITCHED EMBROIDERY", "ON-SITE INSTALLATION"],
    },
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    imgAlt: "Heavy linen curtains in a bright room",
    reverse: false,
    sectionBg: "#fff8f5",
  },
  {
    id: "wallcoverings",
    label: "TACTILE SURFACES",
    title: "Wallcoverings",
    body: "Transform your vertical planes into masterpieces. Our collection features hand-painted murals, grasscloth textures, and architectural vinyls that define the atmosphere of a room before a single piece of furniture is placed.",
    extras: {
      type: "specs",
      items: [
        { key: "ORIGIN", val: "Italian Silks" },
        { key: "FINISH", val: "Matte & Pearl" },
      ],
    },
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    imgAlt: "Textured artisanal wallpaper with metallic thread weave",
    reverse: true,
    sectionBg: "#fbf2ed",
  },
  {
    id: "sofas",
    label: "BESPOKE COMFORT",
    title: "Customized Sofas",
    body: "Furniture tailored to the architecture of your life. We design and manufacture bespoke seating solutions using kiln-dried hardwoods and premium cushioning, ensuring your investment lasts generations.",
    extras: {
      type: "swatches",
      items: [
        { color: "#F5F5DC", label: "Cream Velvet" },
        { color: "#A0522D", label: "Sienna Leather" },
        { color: "#708090", label: "Slate Linen" },
      ],
    },
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    imgAlt: "Bespoke curved sofa in cream velvet",
    reverse: false,
    sectionBg: "#fff8f5",
  },
  {
    id: "flooring",
    label: "THE FOUNDATION",
    title: "Luxury Flooring",
    body: "From hand-knotted silk carpets to sustainably sourced European oak, our flooring solutions provide the acoustic and visual foundation for a sophisticated interior. Expertly installed by our master craftsmen.",
    extras: {
      type: "flooring",
      items: [
        { name: "Herringbone Parquet", type: "HARDWOOD" },
        { name: "Silk-Wool Blend", type: "CARPETS" },
        { name: "Engineered Walnut", type: "WOOD" },
      ],
    },
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    imgAlt: "Oak herringbone flooring in a luxury apartment",
    reverse: true,
    sectionBg: "#fff8f5",
  },
];

const BENTO = [
  {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80",
    label: "FULL TURNKEY SOLUTIONS",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80",
    label: "COLOUR CONSULTANCY",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80",
    label: "STYLING",
    className: "md:col-span-1 md:row-span-1",
  },
];

// ── Shared style helpers ──────────────────────────────────────────────────────

const font = {
  manrope: { fontFamily: "Manrope, sans-serif" },
  serif: { fontFamily: "Noto Serif, serif" },
};

const BRAND = "#6c5842";
const BRAND_HOVER = "#56432f";

// ── Sub-components ────────────────────────────────────────────────────────────

function EnquireBtn({ onClick, full = false }) {
  return (
    <button
      onClick={onClick}
      style={{
        ...font.manrope,
        letterSpacing: "0.15em",
        backgroundColor: BRAND,
        color: "#fff",
        width: full ? "100%" : undefined,
      }}
      className="px-10 py-4 text-[11px] font-semibold uppercase hover:opacity-80 active:opacity-70 transition-opacity"
    >
      Enquire Now
    </button>
  );
}

function ServiceExtras({ extras }) {
  if (!extras) return null;

  if (extras.type === "bullets") {
    return (
      <ul className="space-y-3 pb-4">
        {extras.items.map((b) => (
          <li
            key={b}
            style={{ ...font.manrope, letterSpacing: "0.1em" }}
            className="flex items-center gap-3 text-[11px] font-semibold uppercase opacity-70 text-[#1e1b18]"
          >
            <CheckIcon />
            {b}
          </li>
        ))}
      </ul>
    );
  }

  if (extras.type === "specs") {
    return (
      <div className="grid grid-cols-2 gap-4 pb-4">
        {extras.items.map((s) => (
          <div key={s.key} className="p-4 border border-[#d1c4ba] bg-[#f5ece7]">
            <p
              style={{ ...font.manrope, letterSpacing: "0.1em" }}
              className="text-[10px] font-semibold uppercase opacity-60 mb-2 text-[#1e1b18]"
            >
              {s.key}
            </p>
            <p style={font.serif} className="text-[15px] text-[#1e1b18]">
              {s.val}
            </p>
          </div>
        ))}
      </div>
    );
  }

  if (extras.type === "swatches") {
    return (
      <div className="flex gap-4 pb-4">
        {extras.items.map((sw) => (
          <div
            key={sw.label}
            title={sw.label}
            className="w-12 h-12 rounded-full border border-[#d1c4ba] cursor-pointer hover:scale-110 transition-transform duration-200"
            style={{ backgroundColor: sw.color }}
          />
        ))}
      </div>
    );
  }

  if (extras.type === "flooring") {
    return (
      <div className="space-y-4 pt-2">
        {extras.items.map((f) => (
          <div key={f.name} className="flex justify-between items-center border-b border-[#d1c4ba] pb-2">
            <span style={font.serif} className="text-[16px] text-[#1e1b18]">
              {f.name}
            </span>
            <span
              style={{ ...font.manrope, letterSpacing: "0.1em" }}
              className="text-[10px] font-semibold uppercase opacity-50 text-[#1e1b18]"
            >
              {f.type}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return null;
}

function ServiceSection({ service, onEnquire }) {
  const { label, title, body, extras, img, imgAlt, reverse, sectionBg } = service;

  const imageEl = (
    <div className="w-full md:w-1/2 overflow-hidden">
      <img
        src={img}
        alt={imgAlt}
        className="w-full aspect-[4/5] object-cover shadow-sm transition-all duration-700"
        style={{ filter: "grayscale(20%)" }}
        onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
        onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(20%)")}
      />
    </div>
  );

  const contentEl = (
    <div className="w-full md:w-1/2 space-y-6">
      <span
        style={{ ...font.manrope, letterSpacing: "0.3em" }}
        className="text-[11px] font-semibold uppercase text-[#6c5842]"
      >
        {label}
      </span>
      <h2
        style={font.manrope}
        className="text-[32px] font-normal leading-snug text-[#1e1b18]"
      >
        {title}
      </h2>
      <p style={font.serif} className="text-[16px] leading-relaxed text-[#4e453d]">
        {body}
      </p>
      <ServiceExtras extras={extras} />
      <EnquireBtn onClick={onEnquire} />
    </div>
  );

  return (
    <section className="py-24 px-6 md:px-12" style={{ backgroundColor: sectionBg }}>
      <div
        className={`max-w-7xl mx-auto flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-16 md:gap-20`}
      >
        {imageEl}
        {contentEl}
      </div>
    </section>
  );
}

function BentoSection({ onEnquire }) {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#f5ece7]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 space-y-3">
          <span
            style={{ ...font.manrope, letterSpacing: "0.3em" }}
            className="text-[11px] font-semibold uppercase text-[#6c5842]"
          >
            CURATED LIFESTYLE
          </span>
          <h2 style={font.manrope} className="text-[32px] font-normal text-[#1e1b18]">
            Interior Decoration
          </h2>
          <p style={font.serif} className="text-[16px] text-[#4e453d] max-w-xl mx-auto">
            A holistic approach to luxury living, balancing form and function through professional curation.
          </p>
        </div>

        {/* Bento grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-5"
          style={{ gridTemplateRows: "repeat(2, 280px)" }}
        >
          {BENTO.map((item, i) => (
            <div
              key={i}
              className={`relative group overflow-hidden ${item.className}`}
              style={{ minHeight: "220px" }}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p
                  style={{ ...font.manrope, letterSpacing: "0.12em" }}
                  className="text-white text-[10px] font-semibold uppercase"
                >
                  {item.label}
                </p>
              </div>
            </div>
          ))}

          {/* CTA tile */}
          <div
            className="md:col-span-1 md:row-span-1 flex flex-col items-center justify-center text-white p-8 text-center"
            style={{ backgroundColor: BRAND, minHeight: "220px" }}
          >
            <h3 style={font.manrope} className="text-[22px] font-medium mb-5">
              Start Your Project
            </h3>
            <button
              onClick={onEnquire}
              style={{ ...font.manrope, letterSpacing: "0.15em" }}
              className="border border-white/40 px-6 py-3 text-[11px] font-semibold uppercase hover:bg-white hover:text-[#6c5842] transition-colors"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function EnquiryModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="bg-[#fff8f5] max-w-md w-full p-10 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          className="absolute top-4 right-5 text-[#4e453d] hover:text-[#1e1b18] text-lg"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <p style={font.manrope} className="text-[18px] font-medium text-[#6c5842] mb-2">
              Thank You
            </p>
            <p style={font.serif} className="text-[15px] text-[#4e453d]">
              We'll be in touch within 24 hours.
            </p>
          </div>
        ) : (
          <>
            <h3 style={font.manrope} className="text-[22px] font-medium text-[#1e1b18] mb-2">
              Request an Enquiry
            </h3>
            <p style={font.serif} className="text-[14px] text-[#4e453d] mb-8">
              Our design consultants will contact you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { id: "name", label: "Full Name", type: "text" },
                { id: "email", label: "Email Address", type: "email" },
                { id: "phone", label: "Phone Number", type: "tel" },
              ].map((f) => (
                <div key={f.id} className="relative">
                  <input
                    id={f.id}
                    type={f.type}
                    required
                    placeholder=" "
                    style={font.serif}
                    className="peer w-full bg-transparent border-0 border-b border-[#d1c4ba] focus:border-[#6c5842] focus:outline-none py-3 text-[15px] text-[#1e1b18] placeholder-transparent"
                  />
                  <label
                    htmlFor={f.id}
                    style={{ ...font.manrope, letterSpacing: "0.1em" }}
                    className="
                      absolute left-0 top-3 text-[10px] font-semibold uppercase text-[#7f756c]
                      transition-all duration-200
                      peer-focus:-top-4 peer-focus:text-[#6c5842]
                      peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[#6c5842]
                    "
                  >
                    {f.label}
                  </label>
                </div>
              ))}

              <div className="relative pt-2">
                <textarea
                  id="message"
                  placeholder=" "
                  rows={3}
                  style={font.serif}
                  className="peer w-full bg-transparent border-0 border-b border-[#d1c4ba] focus:border-[#6c5842] focus:outline-none py-3 text-[15px] text-[#1e1b18] placeholder-transparent resize-none"
                />
                <label
                  htmlFor="message"
                  style={{ ...font.manrope, letterSpacing: "0.1em" }}
                  className="
                    absolute left-0 top-5 text-[10px] font-semibold uppercase text-[#7f756c]
                    transition-all duration-200
                    peer-focus:-top-2 peer-focus:text-[#6c5842]
                    peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[#6c5842]
                  "
                >
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                style={{ ...font.manrope, letterSpacing: "0.2em", backgroundColor: BRAND }}
                className="w-full text-white py-4 text-[11px] font-semibold uppercase hover:opacity-80 transition-opacity flex justify-between items-center px-4"
              >
                <span>Submit Enquiry</span>
                <span>→</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

// ── Tiny inline SVG check icon ────────────────────────────────────────────────
function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function BespokeServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div style={{ backgroundColor: "#fff8f5" }}>
      {/* ── Hero ── */}
      <header className="relative flex items-center justify-center overflow-hidden" style={{ height: "560px" }}>
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
            alt="Luxury interior showroom"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.85)" }}
          />
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.18)" }} />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <h1
            style={{
              ...font.manrope,
              fontWeight: 300,
              fontSize: "clamp(36px, 5vw, 56px)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              textShadow: "0 2px 8px rgba(0,0,0,0.25)",
              marginBottom: "16px",
            }}
          >
            Bespoke Services
          </h1>
          <p
            style={{ ...font.serif, fontSize: "18px", lineHeight: 1.6, maxWidth: "580px", margin: "0 auto", opacity: 0.92 }}
          >
            Elevating Abu Dhabi's finest residences through meticulous craftsmanship and curated design excellence.
          </p>
        </div>
      </header>

      {/* ── First three services ── */}
      {SERVICES.slice(0, 3).map((s) => (
        <ServiceSection key={s.id} service={s} onEnquire={openModal} />
      ))}

      {/* ── Interior decoration bento ── */}
      <BentoSection onEnquire={openModal} />

      {/* ── Flooring ── */}
      <ServiceSection service={SERVICES[3]} onEnquire={openModal} />

      {/* ── Enquiry modal ── */}
      <EnquiryModal open={modalOpen} onClose={closeModal} />
    </div>
  );
}
