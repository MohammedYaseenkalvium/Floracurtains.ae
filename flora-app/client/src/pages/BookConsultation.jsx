import { useState } from "react";
import Navbar from "../components/Navbar";
 

 
const font = {
  manrope: { fontFamily: "Manrope, sans-serif" },
  serif: { fontFamily: "Noto Serif, serif" },
};
 
const BRAND = "#6c5842";
 
const SERVICES_LIST = [
  { id: "curtains", label: "Curtains" },
  { id: "blinds", label: "Blinds" },
  { id: "wallpaper", label: "Wallpaper" },
  { id: "upholstery", label: "Upholstery" },
  { id: "flooring", label: "Flooring" },
  { id: "decoration", label: "Interior Decoration" },
];
 
function FloatingInput({ id, label, type = "text", required = false, value = '', onChange = () => {} }) {
  return (
    <div className="relative">
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder=" "
        style={font.serif}
        className="peer w-full bg-transparent border-0 border-b border-[#d1c4ba] focus:border-[#6c5842] focus:outline-none py-3 px-0 text-[15px] text-[#1e1b18] placeholder-transparent"
      />
      <label
        htmlFor={id}
        style={{ ...font.manrope, letterSpacing: "0.1em" }}
        className="absolute left-0 top-3 text-[10px] font-semibold uppercase text-[#7f756c] transition-all duration-200 peer-focus:-top-4 peer-focus:text-[#6c5842] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[#6c5842]"
      >
        {label}
      </label>
    </div>
  );
}
 
function FloatingTextarea({ id, label, rows = 3, value = '', onChange = () => {} }) {
  return (
    <div className="relative pt-4">
      <textarea
        id={id}
        name={id}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder=" "
        style={font.serif}
        className="peer w-full bg-transparent border-0 border-b border-[#d1c4ba] focus:border-[#6c5842] focus:outline-none py-3 px-0 text-[15px] text-[#1e1b18] placeholder-transparent resize-none"
      />
      <label
        htmlFor={id}
        style={{ ...font.manrope, letterSpacing: "0.1em" }}
        className="absolute left-0 top-7 text-[10px] font-semibold uppercase text-[#7f756c] transition-all duration-200 peer-focus:top-0 peer-focus:text-[#6c5842] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[#6c5842]"
      >
        {label}
      </label>
    </div>
  );
}
 
export default function BookConsultationPage() {
  const [selected, setSelected] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });

  const toggleService = (id) =>
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }));

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const selectedServices = Object.keys(selected)
      .filter((id) => selected[id])
      .join(', ') || 'General Inquiry';

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullname,
          phone: formData.phone,
          service: selectedServices,
          message: `Email: ${formData.email}\nPreferred Date: ${formData.date}\n\nMessage:\n${formData.message}`,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to submit');
      }

      setSubmitted(true);
      setFormData({ fullname: '', email: '', phone: '', date: '', message: '' });
      setSelected({});
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: "#fff8f5", minHeight: "100vh" }}>
      <Navbar textBlack={true} logoScrolled={true} />
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 lg:py-28 grid lg:grid-cols-2 gap-20 xl:gap-28 items-start">
 
          {/* Left column */}
          <div className="space-y-12">
            <div className="space-y-5">
              <span style={{ ...font.manrope, letterSpacing: "0.3em" }} className="text-[11px] font-semibold uppercase text-[#6c5842]">
                Bespoke Interiors
              </span>
              <h1
                style={{ ...font.manrope, fontWeight: 300, fontSize: "clamp(36px,4vw,52px)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "#1e1b18" }}
              >
                Begin Your Design Journey
              </h1>
              <p style={{ ...font.serif, fontSize: "18px", lineHeight: 1.65, color: "#4e453d", maxWidth: "420px" }}>
                Schedule a private consultation at our Shop or in the comfort of your home.
              </p>
            </div>
 
            <div className="relative overflow-hidden group" style={{ aspectRatio: "4/5" }}>
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80"
                alt="Luxury living room with floor-to-ceiling linen drapes"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ filter: "grayscale(15%)" }}
              />
              <div className="absolute inset-0" style={{ background: "rgba(108,88,66,0.05)", mixBlendMode: "multiply" }} />
            </div>
 
            <div className="grid grid-cols-2 gap-8 pt-10" style={{ borderTop: "1px solid #d1c4ba" }}>
              <div>
                <h4 style={{ ...font.manrope, letterSpacing: "0.2em" }} className="text-[10px] font-semibold uppercase text-[#6c5842] mb-4">
                  Abu Dhabi Studio
                </h4>
                <p style={font.serif} className="text-[15px] text-[#4e453d] leading-relaxed">
                  Murur Road <br />Opp of Mubadalah Tower<br />Abu Dhabi, UAE
                </p>
              </div>
              <div>
                <h4 style={{ ...font.manrope, letterSpacing: "0.2em" }} className="text-[10px] font-semibold uppercase text-[#6c5842] mb-4">
                  Availability
                </h4>
                <p style={font.serif} className="text-[15px] text-[#4e453d] leading-relaxed">
                  Monday — Saturday<br />10:00 AM — 8:00 PM<br />
                </p>
              </div>
            </div>
          </div>
 
          {/* Right column: form */}
          <div className="p-10 lg:p-14 border border-[#d1c4ba]" style={{ backgroundColor: "#f5ece7" }}>
            {submitted ? (
              <div className="text-center py-20 space-y-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: BRAND }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 style={font.manrope} className="text-[24px] font-medium text-[#1e1b18]">Thank You</h3>
                <p style={font.serif} className="text-[15px] text-[#4e453d]">
                  Your consultation request has been received.<br />We'll be in touch within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{ ...font.manrope, letterSpacing: "0.15em", color: BRAND }}
                  className="mt-6 text-[11px] font-semibold uppercase underline underline-offset-4 hover:opacity-70 transition-opacity"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <>
                <div className="mb-10">
                  <h3 style={font.manrope} className="text-[22px] font-medium text-[#1e1b18] mb-2">Request Appointment</h3>
                  <p style={font.serif} className="text-[14px] text-[#4e453d]">Our design consultants will contact you within 24 hours.</p>
                </div>

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded" style={{ color: '#991b1b' }}>
                    <p style={font.serif} className="text-[14px]">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  <FloatingInput id="fullname" label="Full Name" value={formData.fullname} onChange={handleInputChange} required />

                  <div className="grid md:grid-cols-2 gap-8">
                    <FloatingInput id="email" label="Email Address" type="email" value={formData.email} onChange={handleInputChange} required />
                    <FloatingInput id="phone" label="Phone Number" type="tel" value={formData.phone} onChange={handleInputChange} />
                  </div>
 
                  <div>
                    <p style={{ ...font.manrope, letterSpacing: "0.15em" }} className="text-[10px] font-semibold uppercase text-[#7f756c] mb-5">
                      Service of Interest
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {SERVICES_LIST.map((s) => (
                        <label key={s.id} className="flex items-center gap-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={!!selected[s.id]}
                            onChange={() => toggleService(s.id)}
                            className="w-4 h-4 rounded-none border-[#7f756c] text-[#6c5842] focus:ring-[#6c5842]/20 cursor-pointer"
                            style={{ accentColor: BRAND }}
                          />
                          <span style={font.serif} className="text-[15px] text-[#4e453d] group-hover:text-[#6c5842] transition-colors">
                            {s.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
 
                  <div className="relative">
                    <label
                      htmlFor="date"
                      style={{ ...font.manrope, letterSpacing: "0.1em" }}
                      className="absolute left-0 -top-4 text-[10px] font-semibold uppercase text-[#6c5842]"
                    >
                      Preferred Date
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      style={{ ...font.serif, accentColor: BRAND }}
                      className="w-full bg-transparent border-0 border-b border-[#d1c4ba] focus:border-[#6c5842] focus:outline-none py-3 text-[15px] text-[#1e1b18] mt-2"
                    />
                  </div>
 
                  <FloatingTextarea id="message" label="Your Message" rows={3} value={formData.message} onChange={handleInputChange} />
 
                  <button
                    type="submit"
                    disabled={loading}
                    style={{ ...font.manrope, letterSpacing: "0.2em", backgroundColor: BRAND, opacity: loading ? 0.6 : 1 }}
                    className="w-full text-white py-5 px-6 text-[11px] font-semibold uppercase flex justify-between items-center hover:opacity-80 active:opacity-70 transition-opacity disabled:cursor-not-allowed"
                  >
                    <span>{loading ? 'Submitting...' : 'Schedule Consultation'}</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
 
        {/* Map / location bento */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5" style={{ minHeight: "500px" }}>
            <div className="md:col-span-8 relative overflow-hidden" style={{ backgroundColor: "#efe6e2", minHeight: "340px" }}>
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1400&q=80"
                alt="Abu Dhabi map view"
                className="w-full h-full object-cover"
                style={{ filter: "grayscale(40%) contrast(1.1) brightness(1.05)", mixBlendMode: "overlay" }}
              />
              <div className="absolute bottom-6 left-6 p-6 shadow-xl max-w-xs" style={{ backgroundColor: "white" }}>
                <p style={{ ...font.manrope, letterSpacing: "0.15em" }} className="text-[10px] font-semibold uppercase text-[#6c5842] mb-2">
                  Our Flagship Showroom
                </p>
                <p style={font.serif} className="text-[14px] text-[#1e1b18] leading-relaxed">
                  Experience our textures first-hand. Private parking available for our guests.
                </p>
              </div>
            </div>
 
            <div className="md:col-span-4 grid grid-rows-2 gap-5">
              <div className="flex flex-col justify-center p-10 border border-[#d1c4ba]" style={{ backgroundColor: "#f5ece7" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={BRAND} strokeWidth="1.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <h5 style={font.manrope} className="text-[20px] font-medium text-[#1e1b18] mt-3 mb-2">Private Viewing</h5>
                <p style={font.serif} className="text-[14px] text-[#4e453d] leading-relaxed">
                  Dedicated design consultants for your exclusive project.
                </p>
              </div>
              <div className="flex flex-col justify-center p-10 text-white" style={{ backgroundColor: BRAND }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <h5 style={font.manrope} className="text-[20px] font-medium mt-3 mb-2">Home Consultation</h5>
                <p style={{ ...font.serif, opacity: 0.8 }} className="text-[14px] leading-relaxed">
                  We bring our luxury fabric library directly to your residence.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
 