// import { useState } from "react";
// import logo from "../../assets/logo.png"

// // ─── Design Tokens ─────────────────────────────────────────────────────────────
// const T = {
//   primary: "#6c5842",
//   primaryFixed: "#fadec1",
//   primaryFixedDim: "#dcc2a7",
//   bg: "#fff8f5",
//   surface: "#fff8f5",
//   surfaceContainer: "#f5ece7",
//   surfaceContainerHigh: "#efe6e2",
//   surfaceContainerHighest: "#e9e1dc",
//   onSurface: "#1e1b18",
//   onSurfaceVariant: "#4e453d",
//   outline: "#7f756c",
//   outlineVariant: "#d1c4ba",
//   error: "#ba1a1a",
// };

// // ─── Fonts (inject once) ───────────────────────────────────────────────────────
// const FontLink = () => (
//   <>
//     <link
//       href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Noto+Serif:ital,wght@0,400;0,700;1,400&display=swap"
//       rel="stylesheet"
//     />
//     <link
//       href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
//       rel="stylesheet"
//     />
//     <style>{`
//       .msym { font-family: 'Material Symbols Outlined'; font-weight: normal; font-style: normal;
//               font-size: 24px; line-height: 1; letter-spacing: normal; text-transform: none;
//               display: inline-block; white-space: nowrap; word-wrap: normal; direction: ltr;
//               font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
//       .msym-fill { font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
//       @keyframes fadeUp {
//         from { opacity: 0; transform: translateY(24px); }
//         to   { opacity: 1; transform: translateY(0); }
//       }
//       @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
//       .anim-1 { animation: fadeUp 0.7s ease both; }
//       .anim-2 { animation: fadeUp 0.7s 0.15s ease both; }
//       .anim-3 { animation: fadeUp 0.7s 0.3s ease both; }
//       .anim-4 { animation: fadeUp 0.7s 0.45s ease both; }
//       .glass-nav {
//         background: rgba(255,248,245,0.78);
//         backdrop-filter: blur(16px);
//         -webkit-backdrop-filter: blur(16px);
//       }
//       .glass-pill {
//         background: rgba(255,248,245,0.65);
//         backdrop-filter: blur(12px);
//         -webkit-backdrop-filter: blur(12px);
//         border: 1px solid rgba(255,255,255,0.4);
//       }
//       .cat-card img { transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
//       .cat-card:hover img { transform: scale(1.06); }
//       input:focus, select:focus { outline: none; }
//       select { -webkit-appearance: none; appearance: none; }
//     `}</style>
//   </>
// );

// // ─── Icon helper ───────────────────────────────────────────────────────────────
// const Icon = ({ name, className = "", fill = false, style = {} }) => (
//   <span
//     className={`msym ${fill ? "msym-fill" : ""} ${className}`}
//     style={style}
//   >
//     {name}
//   </span>
// );

// // ─── Top App Bar ───────────────────────────────────────────────────────────────
// function TopBar({ cartCount = 0 }) {
//   return (
//     <header
//       className="fixed top-0 w-full z-50 border-b flex justify-between items-center px-5 py-3 h-16"
//       style={{ borderColor: `${T.outlineVariant}50`, fontFamily: "Manrope, sans-serif" }}
//     >
//       {/* Actual glass layer needs custom class */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background: "rgba(255,248,245,0.82)",
//           backdropFilter: "blur(16px)",
//           WebkitBackdropFilter: "blur(16px)",
//         }}
//       />
//       <div className="relative flex items-center gap-3">
//         <button>
//           <Icon name="menu" style={{ color: T.primary }} />
//         </button>
//         <div className="flex items-center gap-2">
//           <img
//             src={logo}
//             alt="Flora"
//             className="w-7 h-7 object-contain brightness-0"
//           />
//           {/* <span
//             className="font-light text-xl tracking-tight"
//             style={{ color: T.onSurface }}
//           >
//             Flora Curtains */}
//           {/* </span> */}
//         </div>
//       </div>
//       <div className="relative">
//         {/* <button>
//           <Icon name="shopping_bag" style={{ color: T.primary }} />
//         </button>
//         {cartCount > 0 && (
//           <span
//             className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold text-white"
//             style={{ backgroundColor: T.primary }}
//           >
//             {cartCount}
//           </span>
//         )} */}
//       </div>
//     </header>
//   );
// }

// // ─── Hero Section ──────────────────────────────────────────────────────────────
// function HeroSection() {
//   return (
//     <section className="relative overflow-hidden" style={{ height: "100svh", minHeight: "580px" }}>
//       <img
//         src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGks7jvKJ_3N3JuenD8gZJyFQgtxFa12hUTrX-P0Ii8anfvkb3ixxhm8Q16_pY6oqXirP-9JF4EhbV8tWdcIKWJdyObo-ZLL3gbFgiHrnitgjG9vpQ_dh9LzKsG4RYEdybrW0nJTeaDK5hPILcZCynzSbJ9UVhi92l_lO5-oGCMj2Tz3Vt_rqw3paRGYpldwLqw_6gmD0wlEarkokz4-TGP8tnaKIR-BmypWvKnIbYaCHD7dNnkQ450pz_QLnTJJBO3DqUAzJwBo1C"
//         alt="Luxury curtains in sunlit room"
//         className="absolute inset-0 w-full h-full object-cover"
//         style={{ objectPosition: "center 30%" }}
//       />
//       {/* Gradient overlay */}
//       <div
//         className="absolute inset-0"
//         style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)" }}
//       />
//       {/* Top fade for nav legibility */}
//       <div
//         className="absolute top-0 left-0 right-0 h-32"
//         style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, transparent 100%)" }}
//       />

//       {/* Content */}
//       <div className="absolute bottom-0 left-0 right-0 p-6 pb-28">
//         <p
//           className="anim-1 text-[11px] font-semibold tracking-[0.2em] uppercase mb-3"
//           style={{ color: T.primaryFixedDim, fontFamily: "Manrope, sans-serif" }}
//         >
//           Established in Abu Dhabi
//         </p>
//         <h1
//           className="anim-2 font-light text-white mb-6 leading-[1.08]"
//           style={{
//             fontFamily: "Manrope, sans-serif",
//             fontSize: "clamp(32px, 9vw, 44px)",
//             letterSpacing: "-0.02em",
//           }}
//         >
//           Let your windows bloom with Flora elegance
//         </h1>
//         <div className="anim-3 flex gap-3">
//           <button
//             className="flex-1 py-4 rounded-xl text-xs font-semibold tracking-[0.12em] uppercase"
//             style={{
//               background: "rgba(255,248,245,0.68)",
//               backdropFilter: "blur(12px)",
//               WebkitBackdropFilter: "blur(12px)",
//               border: "1px solid rgba(255,255,255,0.35)",
//               color: T.onSurface,
//               fontFamily: "Manrope, sans-serif",
//             }}
//           >
//             View Collections
//           </button>
//           <button
//             className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
//             style={{ backgroundColor: T.primary }}
//           >
//             <Icon name="arrow_forward" className="text-white" />
//           </button>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div className="absolute bottom-[100px] right-6 flex flex-col items-center gap-1.5 anim-4">
//         <div
//           className="w-px h-10"
//           style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.5))" }}
//         />
//         <Icon name="keyboard_arrow_down" className="text-white" style={{ fontSize: "16px", opacity: 0.6 }} />
//       </div>
//     </section>
//   );
// }

// // ─── Categories Grid ───────────────────────────────────────────────────────────
// const CATEGORIES = [
//   {
//     label: "Curtains",
//     span: "col-span-2",
//     aspect: "aspect-[16/9]",
//     src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgbMNs-zn-mfbXuOskXx5BiyzY3xrXLyz8cbRtp7FKv7ZTH1doLnxWz_q9aAV-yGT1ZdoYIUYgFnH5IMoySs5YUfNQkWY9n0jLDKIaQd2jN850zyB7SWxxr0yVRwfge-hFzWIxRd22K1KBWm5tfMpExehEJcrat50W6y0v18QGRMWjHgCl6e3hDYC-WUFMyezcdmTi_GnTspi-F2_wNc_SdKTkh01fBwyxhHfit5N9zDfzNd41iGFc_owMLxxVi8JP23vU7VnwA4ce",
//   },
//   {
//     label: "Window Blinds",
//     span: "col-span-1",
//     aspect: "aspect-square",
//     src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCW9O2ke9xbTkxrrFrGX_s-iUjuzPCwsyjWU_hiBDJBV4-WL5F7uM4gi_ri-9h0l2KoS_JLExnf4Bpe5qUwqAL2bF3qH5MygKSti0zbZ5HLSA8vgu9HHiE6CWvLLjQWmAiDWvVQmnC34AEJhfpz676ivUvwE4YDDtn5E6TU8u1WefAEbX4H1LycI6qpi5zkNWYy4kyjWtbBofSyoC4bJVyb7ggtMgOlehwAbobOvhuKkAivJeMktLSUKpOadtpnkhklTTGwS7C3nJvj",
//   },
//   {
//     label: "Wallpaper",
//     span: "col-span-1",
//     aspect: "aspect-square",
//     src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSjIcTWbEs8OIIeTq_VH4N4ClO5sP3-bLUSfluNL3rweZot4J4qh5KHNbOquNutEtgFfc29gbIkfLqz3DyGaUlVvIzcNMH2YN3fdA2Aq3uUf3454Gm7LNsnhWGGEGKv20tybi8S4BVOfkpVBCIrrzyWoba3YiQv5frJ4fy7uGAVXeA4aw9NEDMY2I0TNdIygK318z02m9ABrID_aaNcKIkeQdpr2eAn1UvAzM1fveVJ9ABDfaf-xMdbm5rNxMb_3c-rVNvAyF_xJY7",
//   },
//   {
//     label: "Sofas",
//     span: "col-span-1",
//     aspect: "aspect-square",
//     src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_Hb0bkbeN8DdflJE8mxq6tG11astlcoQnmXTtk53eFzD2wh1JC2e930lYHAtVBumnGZ5LftZR0xTFcCSTkBimtIOAUCvMMZvFb8NguJjV-OcrCG_vQZLsSSQzrHvEsKSKzn7SdJ6amZEU0qTw3WXecTdKqqrcFf_THHDEu1ZJziOcC7IK6AjOomk42PqmmY8KhC9W7H5cQ1b5VIRqiy7BuYHrQect4Ffag-yeS_ueCtF8STq2aOhvjQW7jFCuDNW-CWt0vBrCz_YA",
//   },
//   {
//     label: "Flooring",
//     span: "col-span-1",
//     aspect: "aspect-square",
//     src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFR6ww48wSwRElHpd1YFpN8jAezIhUHFKRtpTGxmXLJ1789v4MS07iw_TiHcvLknBtT9q9mj3g4OMZJNquf5PEX5g7OKPmrHBhjAFVmIrkPbZiQ_UyuLNKtBh5TKRhaUtXq8co68eOskcmzQ4w0kmqnQwZiEGBfaRPWa10PE4z1HPrKRjB63Q_izU6_9KvFqdyRdwIlVO2RdHhjJ4m7khsOnjlc8qfIz73427yGbnvS_3kesRtBKJiiVQ0rng2Tj7gVR6eeNjGDwh-",
//   },
// ];

// function CategoriesSection() {
//   return (
//     <section className="py-16 px-5" style={{ backgroundColor: T.bg }}>
//       <div className="mb-8">
//         <h2
//           className="text-2xl font-normal mb-2"
//           style={{ fontFamily: "Manrope, sans-serif", color: T.onSurface }}
//         >
//           Our Offerings
//         </h2>
//         <div className="h-px w-10 rounded-full" style={{ backgroundColor: T.primary }} />
//       </div>

//       <div className="grid grid-cols-2 gap-3">
//         {CATEGORIES.map((cat) => (
//           <div
//             key={cat.label}
//             className={`cat-card ${cat.span} relative ${cat.aspect} rounded-2xl overflow-hidden cursor-pointer`}
//           >
//             <img
//               src={cat.src}
//               alt={cat.label}
//               className="absolute inset-0 w-full h-full object-cover"
//             />
//             {/* Overlay */}
//             <div
//               className="absolute inset-0"
//               style={{ background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)" }}
//             />
//             <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
//               <span
//                 className="text-white text-xs font-semibold tracking-[0.12em] uppercase"
//                 style={{ fontFamily: "Manrope, sans-serif" }}
//               >
//                 {cat.label}
//               </span>
//               <div
//                 className="w-7 h-7 rounded-full flex items-center justify-center"
//                 style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)" }}
//               >
//                 <Icon name="arrow_forward" className="text-white" style={{ fontSize: "14px" }} />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// // ─── Testimonials ──────────────────────────────────────────────────────────────
// const TESTIMONIALS = [
//   {
//     quote:
//       "The craftsmanship of the curtains transformed my villa. Flora team has an impeccable eye for detail and luxury textiles.",
//     name: "Mrs. Al Mansouri",
//     role: "Saadiyat Island Resident",
//   },
//   {
//     quote:
//       "Extraordinary service from the first consultation to the final installation. Their blinds are both functional and artistic.",
//     name: "The Atelier Loft",
//     role: "Commercial Client",
//   },
// ];

// function TestimonialsSection() {
//   const [active, setActive] = useState(0);
//   const t = TESTIMONIALS[active];

//   return (
//     <section className="py-14 px-5" style={{ backgroundColor: T.surfaceContainer }}>
//       <h2
//         className="text-2xl font-normal text-center mb-10"
//         style={{ fontFamily: "Manrope, sans-serif", color: T.onSurface }}
//       >
//         Clients' Whispers
//       </h2>

//       {/* Card */}
//       <div
//         className="relative rounded-2xl p-7 mb-6 shadow-sm overflow-hidden"
//         style={{ backgroundColor: T.surface, border: `1px solid ${T.outlineVariant}40` }}
//       >
//         {/* Decorative quote mark */}
//         <Icon
//           name="format_quote"
//           className="absolute -top-2 left-5 text-5xl"
//           style={{ color: T.primaryFixedDim, fontSize: "52px", opacity: 0.7 }}
//         />
//         <p
//           className="relative z-10 italic leading-relaxed mb-6 pt-4"
//           style={{ fontFamily: "Noto Serif, serif", color: T.onSurfaceVariant, fontSize: "16px" }}
//         >
//           "{t.quote}"
//         </p>
//         <div>
//           <p
//             className="text-[10px] font-bold tracking-[0.15em] uppercase mb-0.5"
//             style={{ color: T.primary, fontFamily: "Manrope, sans-serif" }}
//           >
//             {t.name}
//           </p>
//           <p
//             className="text-[10px]"
//             style={{ color: T.outline, fontFamily: "Manrope, sans-serif" }}
//           >
//             {t.role}
//           </p>
//         </div>
//       </div>

//       {/* Dots */}
//       <div className="flex justify-center gap-2">
//         {TESTIMONIALS.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setActive(i)}
//             className="transition-all duration-300 rounded-full"
//             style={{
//               width: i === active ? "20px" : "8px",
//               height: "8px",
//               backgroundColor: i === active ? T.primary : T.outlineVariant,
//             }}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// // ─── Enquiry Form ──────────────────────────────────────────────────────────────
// const SERVICES = [
//   "Curtains & Drapes",
//   "Window Blinds",
//   "Wallpaper Selection",
//   "Custom Upholstery",
//   "Hardwood Flooring",
// ];

// function EnquirySection() {
//   const [form, setForm] = useState({ name: "", email: "", service: SERVICES[0] });
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!form.name || !form.email) return;
//     setSubmitted(true);
//   };

//   return (
//     <section className="py-16 px-5" style={{ backgroundColor: T.surface }}>
//       <div className="text-center mb-10">
//         <h2
//           className="text-2xl font-normal mb-3"
//           style={{ fontFamily: "Manrope, sans-serif", color: T.onSurface }}
//         >
//           Book a Consultation
//         </h2>
//         <p
//           className="text-sm leading-relaxed max-w-xs mx-auto"
//           style={{ fontFamily: "Noto Serif, serif", color: T.onSurfaceVariant }}
//         >
//           Let our experts guide you in choosing the perfect textures for your sanctuary.
//         </p>
//       </div>

//       {submitted ? (
//         <div
//           className="max-w-sm mx-auto rounded-2xl p-10 text-center"
//           style={{ backgroundColor: T.surfaceContainer }}
//         >
//           <div
//             className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
//             style={{ backgroundColor: T.primaryFixed }}
//           >
//             <Icon name="check_circle" style={{ color: T.primary, fontSize: "28px" }} />
//           </div>
//           <h3
//             className="text-lg font-normal mb-2"
//             style={{ fontFamily: "Manrope, sans-serif", color: T.onSurface }}
//           >
//             Request Received
//           </h3>
//           <p className="text-sm" style={{ color: T.outline, fontFamily: "Noto Serif, serif" }}>
//             Our design consultant will contact you within 24 hours.
//           </p>
//         </div>
//       ) : (
//         <form
//           onSubmit={handleSubmit}
//           className="max-w-sm mx-auto space-y-7"
//         >
//           {[
//             { key: "name", label: "Your Name", type: "text", placeholder: "Enter your name" },
//             { key: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
//           ].map(({ key, label, type, placeholder }) => (
//             <div key={key}>
//               <label
//                 className="block mb-1 text-[10px] font-bold tracking-[0.15em] uppercase"
//                 style={{ color: T.outline, fontFamily: "Manrope, sans-serif" }}
//               >
//                 {label}
//               </label>
//               <input
//                 type={type}
//                 placeholder={placeholder}
//                 value={form[key]}
//                 onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
//                 className="w-full bg-transparent border-b py-3 text-sm transition-colors placeholder:text-stone-300"
//                 style={{
//                   borderColor: T.outlineVariant,
//                   color: T.onSurface,
//                   fontFamily: "Manrope, sans-serif",
//                 }}
//               />
//             </div>
//           ))}

//           <div>
//             <label
//               className="block mb-1 text-[10px] font-bold tracking-[0.15em] uppercase"
//               style={{ color: T.outline, fontFamily: "Manrope, sans-serif" }}
//             >
//               Interested In
//             </label>
//             <div className="relative">
//               <select
//                 value={form.service}
//                 onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
//                 className="w-full bg-transparent border-b py-3 text-sm pr-8 transition-colors"
//                 style={{
//                   borderColor: T.outlineVariant,
//                   color: T.onSurface,
//                   fontFamily: "Manrope, sans-serif",
//                 }}
//               >
//                 {SERVICES.map((s) => (
//                   <option key={s} value={s}>{s}</option>
//                 ))}
//               </select>
//               <Icon
//                 name="expand_more"
//                 className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none"
//                 style={{ color: T.outline, fontSize: "18px" }}
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full py-5 rounded-xl text-xs font-bold tracking-[0.15em] uppercase text-white shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
//             style={{ backgroundColor: T.primary, fontFamily: "Manrope, sans-serif" }}
//           >
//             Request Appointment
//           </button>
//         </form>
//       )}
//     </section>
//   );
// }

// // ─── Footer ────────────────────────────────────────────────────────────────────
// function Footer() {
//   return (
//     <footer
//       className="border-t pb-28"
//       style={{ backgroundColor: T.surfaceContainerHighest, borderColor: T.outlineVariant }}
//     >
//       <div className="flex flex-col items-center px-6 py-10 gap-6 text-center">
//         <div className="flex flex-col items-center gap-2">
//           <img
//             src={logo}
//             alt="Flora"
//             className="w-10 h-10 object-contain brightness-0 invert fixed  z-50 transition-all duration-300 ease-in-out border-b bg-white/30 backdrop-blur-xl border-white/20 ${
//         scrolled ? 'shadow-lg' : 'shadow-md"
//             style={{ filter: "grayscale(1) opacity(0.5)" }}
//           />
//           <span
//             className="uppercase tracking-[0.2em] text-xs"
//             style={{ fontFamily: "Manrope, sans-serif", color: T.onSurface }}
//           >
//             Flora Curtains Abu Dhabi
//           </span>
//         </div>

//         <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
//           {["The Atelier", "Privacy Policy", "Contact Us", "Showroom Location"].map((l) => (
//             <a
//               key={l}
//               href="#"
//               className="italic text-sm hover:opacity-100 transition-opacity"
//               style={{ fontFamily: "Noto Serif, serif", color: T.onSurfaceVariant, opacity: 0.8 }}
//             >
//               {l}
//             </a>
//           ))}
//         </nav>

//         <div
//           className="pt-6 border-t w-full"
//           style={{ borderColor: `${T.outlineVariant}30` }}
//         >
//           <p
//             className="italic text-sm"
//             style={{ fontFamily: "Noto Serif, serif", color: T.outline }}
//           >
//             © 2024 Flora Curtains Abu Dhabi.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// // ─── Bottom Nav ────────────────────────────────────────────────────────────────
// const NAV_ITEMS = [
//   { icon: "home", label: "Home", active: true },
//   { icon: "window", label: "Catalog", active: false },
//   { icon: "calendar_month", label: "Book", active: false, fab: true },
//   { icon: "auto_awesome_motion", label: "Projects", active: false },
//   { icon: "person", label: "Account", active: false },
// ];

// function BottomNav() {
//   const [active, setActive] = useState(0);

//   return (
//     <nav
//       className="md:hidden fixed bottom-5 left-4 right-4 h-16 rounded-full flex items-center justify-around px-2 shadow-2xl z-50"
//       style={{
//         background: "rgba(255,248,245,0.88)",
//         backdropFilter: "blur(16px)",
//         WebkitBackdropFilter: "blur(16px)",
//         border: `1px solid rgba(255,255,255,0.5)`,
//         boxShadow: "0 8px 40px rgba(108,88,66,0.18)",
//       }}
//     >
//       {NAV_ITEMS.map((item, i) => {
//         if (item.fab) {
//           return (
//             <button
//               key={i}
//               onClick={() => setActive(i)}
//               className="relative -top-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-95"
//               style={{ backgroundColor: T.primary }}
//             >
//               <Icon name={item.icon} className="text-white" />
//             </button>
//           );
//         }
//         return (
//           <button
//             key={i}
//             onClick={() => setActive(i)}
//             className="flex flex-col items-center gap-0.5 w-12 py-1 transition-all"
//             style={{ opacity: active === i ? 1 : 0.45 }}
//           >
//             <Icon
//               name={item.icon}
//               fill={active === i}
//               style={{ color: active === i ? T.primary : T.onSurfaceVariant, fontSize: "22px" }}
//             />
//             <span
//               className="text-[9px] font-semibold tracking-wide"
//               style={{
//                 fontFamily: "Manrope, sans-serif",
//                 color: active === i ? T.primary : T.onSurfaceVariant,
//               }}
//             >
//               {item.label}
//             </span>
//           </button>
//         );
//       })}
//     </nav>
//   );
// }

// // ─── Page ──────────────────────────────────────────────────────────────────────
// export default function FloraHomeMobile() {
//   return (
//     <div style={{ backgroundColor: T.bg, minHeight: "100dvh" }}>
//       <FontLink />
//       <TopBar cartCount={0} />
//       <main className="pt-16">
//         <HeroSection />
//         <CategoriesSection />
//         <TestimonialsSection />
//         <EnquirySection />
//         <Footer />
//       </main>
//       <BottomNav />
//     </div>
//   );
// }

// import MobileNavbar from './MobileNavbar'
// import MobileHero from './MobileHero'
// import MobileCategories from './MobileCategories'
// import MobileTestimonials from './MobileTestimonials'
// import MobileEnquiry from './MobileEnquiry'
// import MobileFooter from './MobileFooter'
// import MobileBottomNav from './MobileBottomNav'

// export default function MobileHomePage() {
//   return (
//     <div className="bg-[#F8F5F2] text-[#1A1A1A] overflow-x-hidden">

//       <MobileNavbar />

//       <MobileHero />

//       <MobileCategories />

//       <MobileTestimonials />

//       <MobileEnquiry />

//       <MobileFooter />

//       <MobileBottomNav />

//     </div>
//   )
// }