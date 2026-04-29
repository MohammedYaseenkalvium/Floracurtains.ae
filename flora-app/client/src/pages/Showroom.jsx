import { useState } from "react";
import Navbar from "../components/Navbar";

const font = {
  manrope: { fontFamily: "Manrope, sans-serif" },
  serif: { fontFamily: "Noto Serif, serif" },
};


 
// ─── Data ─────────────────────────────────────────────────────────────────────
 
const CATEGORIES = ["All Projects", "Private Villas", "Luxe Penthouses", "Commercial"];
 
const PROJECTS = [
  {
    id: 1,
    title: "Saadiyat Island Villa",
    subtitle: "Hand-pleated Silk & Belgian Linen",
    category: "Private Villas",
    size: "large", // col-span-8
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuADps5hw313DMHAG33GuyfjwtR2RhWQMJQnZQFEtANJZZDOHenqFnv6wy0f72JaB00KB7Ob1ONp63Abc84PzrEiVfGjZTJqlK-SZHr2QuNvh-Ogw1kk24VZumvuW2QFQkVbxOE8tUvwq5_yPvIirqvfgt1r-RrnjCToLV2oKPI-Hvn52CLTa-r4QPuJ9FodvlfdoK4TlyeoGu77qxtdtmx8Wq_eStglpK0cRKF2r1t1_dxCJv80qypvhLI61s3D4PKf7PfJfpjnKRsA",
  },
  {
    id: 2,
    title: "Al Bateen Retreat",
    subtitle: "Velvet Blackout Collection",
    category: "Private Villas",
    size: "small", // col-span-4
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXaiuhcDRC11jTWCK-9HbEXxbGasxy8s0jHTW5iVJzZl8a_7S3xSGFsJH6HNEPG3hUt0ooENWCWIg5sgU4DNsrlUMhmqapXO2jUjsNf929nmpFlXS8nO6NWXHyDf5FvXln87iC_Vwxsb6V6nm0VtFPFJbGRBv0ZQDxpED7RXBi5F5_75RB-AlIdQ6mIaFuBNrS0bAAGjC41eDdpDT6ayYIaKnZ951OvFSFd-h3C9QDyuCu9zkjjIE3GtoRNSqWe88XTy4SwycATx5v",
  },
  {
    id: 4,
    title: "Reem Island Residence",
    subtitle: "Roman Shades in Natural Fabric",
    category: "Private Villas",
    size: "medium",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtrkPB1xCQAwlw-lOPACYeAojiy4d1DpjEa5zmnNZlbokP90oJ-wBrv_gT4XpVrl96ksawP8Rxw06-XhTnjv-tbpnnMb192VDC7PPtMBVlVmoA83jGREZWPPd2Pk_sqnZnB51UbTfNND3B3DsTCrDE1cMh6PSAogbyg-dVx44Crf-jW0BNfbUH5YS4bEftIdLmK6SJi_hbVn2mF0wIugzT8F2b8eVr81rzl6pWVDru1bAUrHeQLgPiuwhP90YSwu3y30n9oSgdqaHg",
  },
  {
    id: 5,
    title: "Zaya Nurai Estate",
    subtitle: "Motorized Smart Automation",
    category: "Luxe Penthouses",
    size: "medium",
    tag: "AUTOMATION",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5JB9pmgS-okrDu_bd0CLjT_KwZWUr_x2vQcsou4mdt38yuPj5G9Nlnk7ti4-9F1r-kZ-KIuHh2G1w0dL4qtYcYybGfkgYmWEcqH6g-Mf8_EEmFprQ1TVfx-nNnqDPbNQBlLGGCFH4A17TfzckHXXvjEyHkRv_eQF8ssPQfpxf66JwxzxlHRCgasC3WtF2aAR7jCN6ENWCoZX_lKtahgb4HKMilkZKmHRUIEYRwsCeHn1rCHCbQnyzrfxVsYOH2HBfiUFGmXj8hBA1",
  },
];
 

// ─── Before/After Slider ──────────────────────────────────────────────────────
 
function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const [dragging, setDragging] = useState(false);
 
  const handleMouseMove = (e) => {
    if (!dragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(5, Math.min(95, x)));
  };
 
  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(5, Math.min(95, x)));
  };
 
  return (
    <div
      className="md:col-span-12 h-[480px] relative overflow-hidden border border-stone-100 cursor-col-resize select-none "
      onMouseMove={handleMouseMove}
      onMouseDown={() => setDragging(true)}
      onMouseUp={() => setDragging(false)}
      onMouseLeave={() => setDragging(false)}
      onTouchMove={handleTouchMove}
    >
      {/* Before image (full) */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlDtHc2IICBeUG1mcIiKkaZvkK5LvCf-LaCB4jld_eiG9geZR3T2VlzTNMbotFHd6i2m42ZqLthlquEvem7kbUtfkLLgQfA-TaIJxAKnuJWy1gL6p_M12qit7WvYe01JcZBdA5zOqqNGz-1rdDsIx9Wiw1TfbsunM-aMjfqIbEZo9sQIDCRcr8DVgd6Tm9gdwWpW-gvp_nQgZvQaQnFAp-KYyhDP10qQmj56td--xmKmo0D-L4yGDs8n6shKumzA8yUjDWy9O0zkou"
        alt="Before"
      />
      {/* After image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          className="absolute inset-0 h-full object-cover"
          style={{ width: `${10000 / sliderPos}%`, maxWidth: "none" }}
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYJgvuD0WnKJOrUnNt82wi5V10l-Wr7W-eJFGp1RQv4fVTojDrxE-08PD2vUVdWKvM2nbZq4dXtcRDkrZSVoOHBA1IYXYzE3bjDTY6NBgPul7h1WAN5JJ7S2fw1SzYsvnGNSKtg3GGspP8ysXtCK1EMToAPKg1-BIjKVkCHntQjQ5AdLlPe2RkdyBvjbHzgQKgKNssZ0ozHjirCENSFo6FC1mNjuCflbwehyS_iP_iWq86nTThDIobKnhEiVarUCpy6x6WrTCtKC_2"
          alt="After"
        />
      </div>
      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white/70 z-10"
        style={{ left: `${sliderPos}%` }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center gap-1 cursor-ew-resize">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 4l-3 4 3 4M11 4l3 4-3 4" stroke="#6c5842" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      {/* Labels */}
      <span className="absolute top-6 left-6 z-20 bg-white/20 backdrop-blur-sm text-white px-4 py-1 text-xs font-semibold tracking-[0.15em] uppercase" style={{ fontFamily: "Manrope, sans-serif" }}>
        After
      </span>
      <span className="absolute top-6 right-6 z-20 bg-white/20 backdrop-blur-sm text-white px-4 py-1 text-xs font-semibold tracking-[0.15em] uppercase" style={{ fontFamily: "Manrope, sans-serif" }}>
        Before
      </span>
      {/* Project info */}
      <div className="absolute bottom-8 left-8 z-20">
        <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-1 text-xs font-semibold tracking-[0.15em] uppercase block mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>
          The Transformation
        </span>
        <h2 className="text-white text-3xl font-light" style={{ fontFamily: "Manrope, sans-serif" }}>
          Ethara Penthouse
        </h2>
      </div>
      <div className="absolute bottom-8 right-8 z-20">
        <button
          className="text-white px-10 py-4 text-xs font-semibold tracking-[0.15em] uppercase hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#6c5842", fontFamily: "Manrope, sans-serif" }}
        >
          Request Similar Design
        </button>
      </div>
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-white/50 text-xs tracking-widest" style={{ fontFamily: "Manrope, sans-serif" }}>
        ← DRAG TO COMPARE →
      </p>
    </div>
    
  );
}
 
// ─── Project Card ─────────────────────────────────────────────────────────────
 
function ProjectCard({ project }) {
  const colClass =
    project.size === "large"
      ? "md:col-span-8"
      : project.size === "small"
      ? "md:col-span-4"
      : "md:col-span-6";
 
  return (
    <div className={`${colClass} group relative overflow-hidden bg-stone-100 border border-stone-100 h-[450px]`}>
      <img
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        src={project.src}
        alt={project.title}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
 
      {project.tag && (
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-stone-900/70 to-transparent">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[#dcc2a7] text-[10px] font-semibold tracking-widest uppercase mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>
                {project.tag}
              </p>
              <h3 className="text-white text-2xl font-medium" style={{ fontFamily: "Manrope, sans-serif" }}>
                {project.title}
              </h3>
            </div>
            <button
              className="border border-white/40 text-white px-4 py-2 text-[10px] font-semibold tracking-widest uppercase hover:bg-white hover:text-stone-900 transition-all"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Request Design
            </button>
          </div>
        </div>
      )}
 
      {!project.tag && (
        <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
          <h3 className="text-white text-2xl font-normal mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>
            {project.title}
          </h3>
          <p className="text-stone-200 text-sm mb-5" style={{ fontFamily: "Noto Serif, serif" }}>
            {project.subtitle}
          </p>
          <button
            className="text-white px-6 py-3 text-xs font-semibold tracking-[0.1em] uppercase flex items-center gap-2"
            style={{ backgroundColor: "#6c5842", fontFamily: "Manrope, sans-serif" }}
          >
            Request Similar Design
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
 
      {project.size === "small" && !project.tag && (
        <div className="absolute bottom-8 left-8">
          <h3 className="text-white text-2xl font-medium" style={{ fontFamily: "Manrope, sans-serif" }}>
            {project.title}
          </h3>
          <button
            className="mt-4 text-white text-[10px] tracking-widest border-b border-white/40 hover:border-white transition-all"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            REQUEST DESIGN
          </button>
        </div>
      )}
    </div>
  );
}
 
// ─── Footer ───────────────────────────────────────────────────────────────────
 

// ─── Page ─────────────────────────────────────────────────────────────────────
 
export default function ShowroomPage() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
 
  const filtered =
    activeCategory === "All Projects"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);
 
  return (
    <div className="bg-[#fff8f5] text-stone-900">
      <Navbar textBlack={true} logoScrolled={true} />
      <main className="pt-28">
        {/* Hero */}
        <section className="px-6 md:px-12 mb-16 max-w-7xl mx-auto text-center">
          <span
            className="text-[#6c5842] text-xs font-semibold tracking-[0.25em] uppercase block mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Portfolio
          </span>
          <h1
            className="text-5xl md:text-6xl font-light tracking-tight mb-5"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            The Art of Drapery
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "Noto Serif, serif" }}>
            A curation of our most prestigious installations across Abu Dhabi's finest villas and penthouses.
          </p>
        </section>
 
        {/* Category Filter */}
        <section className="px-6 md:px-12 mb-12 max-w-7xl mx-auto flex justify-center border-b border-stone-200">
          <div className="flex gap-8 md:gap-12 pb-0 overflow-x-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-semibold tracking-[0.1em] uppercase pb-4 border-b-2 transition-colors whitespace-nowrap ${
                  activeCategory === cat
                    ? "border-[#6c5842] text-stone-900"
                    : "border-transparent text-stone-400 hover:text-stone-700"
                }`}
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>
 
        {/* Project Bento Grid */}
        <section className="px-6 md:px-12 mb-24 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
            {/* Before/After always shown */}
            <BeforeAfterSlider />
          </div>
        </section>
 
        {/* CTA */}
        <section className="py-24 bg-[#f5ece7] border-y border-stone-200">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-light mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
              Inspired by our work?
            </h2>
            <p className="text-lg text-stone-600 mb-10 leading-relaxed" style={{ fontFamily: "Noto Serif, serif" }}>
              Let our design consultants bring the same level of sophistication and precision to your home.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                className="text-white px-12 py-5 text-xs font-semibold tracking-[0.15em] uppercase hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#6c5842", fontFamily: "Manrope, sans-serif" }}
              >
                Book a Private Showing
              </button>
              <button
                className="border text-xs font-semibold tracking-[0.15em] uppercase px-12 py-5 hover:bg-stone-100 transition-colors"
                style={{ borderColor: "#6c5842", color: "#6c5842", fontFamily: "Manrope, sans-serif" }}
              >
                Download Brochure
              </button>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
}