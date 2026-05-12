import { useState, useEffect, useRef } from "react";
import founderImg from '../assets/Founder.png'
import heroImg from '../assets/herosection.png'

const theme = {
  colors: {
    primary: "#6c5842",
    "primary-container": "#867159",
    "primary-fixed": "#fadec1",
    "primary-fixed-dim": "#dcc2a7",
    "on-primary": "#ffffff",
    "on-primary-fixed": "#271907",
    background: "#fff8f5",
    surface: "#fff8f5",
    "surface-bright": "#fff8f5",
    "surface-dim": "#e1d8d4",
    "surface-variant": "#e9e1dc",
    "surface-container": "#f5ece7",
    "surface-container-low": "#fbf2ed",
    "surface-container-high": "#efe6e2",
    "surface-container-highest": "#e9e1dc",
    "surface-container-lowest": "#ffffff",
    "on-surface": "#1e1b18",
    "on-surface-variant": "#4e453d",
    "on-background": "#1e1b18",
    outline: "#7f756c",
    "outline-variant": "#d1c4ba",
    secondary: "#5f5e5b",
    "secondary-container": "#e5e2dd",
    tertiary: "#68594a",
    "tertiary-container": "#827261",
    "on-tertiary-container": "#fffbff",
    "inverse-surface": "#34302c",
    "inverse-primary": "#dcc2a7",
  },
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&family=Noto+Serif:ital,wght@0,400;0,700;1,400&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

  .flora-root * { box-sizing: border-box; margin: 0; padding: 0; }

  .flora-root {
    font-family: 'Noto Serif', serif;
    background: #fff8f5;
    color: #1e1b18;
  }

  .material-symbols-outlined {
    font-family: 'Material Symbols Outlined';
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
  }

  .flora-nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 50;
    background: rgba(255, 248, 245, 0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(209,196,186,0.3);
    height: 80px;
  }

  .flora-nav-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
    height: 100%;
  }

  .flora-logo-area {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .flora-logo-img {
    height: 40px;
    width: auto;
  }

  .flora-brand-name {
    font-family: 'Manrope', sans-serif;
    font-size: 32px;
    line-height: 1.3;
    font-weight: 400;
    letter-spacing: -0.02em;
    color: #1e1b18;
  }

  .flora-nav-links {
    display: flex;
    align-items: center;
    gap: 32px;
    list-style: none;
  }

  @media (max-width: 768px) { .flora-nav-links { display: none; } }

  .flora-nav-link {
    font-family: 'Manrope', sans-serif;
    font-size: 12px;
    line-height: 1;
    letter-spacing: 0.1em;
    font-weight: 600;
    color: #4e453d;
    text-decoration: none;
    transition: color 0.2s;
  }
  .flora-nav-link:hover { color: #6c5842; }

  .flora-btn-enquire {
    background: #6c5842;
    color: #fff;
    border: none;
    padding: 12px 32px;
    border-radius: 2px;
    font-family: 'Manrope', sans-serif;
    font-size: 12px;
    letter-spacing: 0.1em;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.3s;
  }
  .flora-btn-enquire:hover { opacity: 0.8; }

  /* HERO */
  .flora-hero {
    position: relative;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .flora-hero-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.2);
    z-index: 10;
  }
  .flora-hero-bg {
    position: absolute;
    inset: 0;
  }
  .flora-hero-bg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .flora-hero-content {
    position: relative;
    z-index: 20;
    text-align: center;
    padding: 0 24px;
  }
  .flora-hero-est {
    font-family: 'Manrope', sans-serif;
    font-size: 12px;
    line-height: 1;
    letter-spacing: 0.3em;
    font-weight: 600;
    color: #fff;
    margin-bottom: 24px;
    text-transform: uppercase;
  }
  .flora-hero-title {
    font-family: 'Manrope', sans-serif;
    font-size: clamp(32px, 5vw, 48px);
    line-height: 1.2;
    font-weight: 300;
    letter-spacing: -0.02em;
    color: #fff;
    max-width: 900px;
    margin: 0 auto;
    text-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  .flora-hero-scroll {
    margin-top: 48px;
  }
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(8px); }
  }
  .flora-bounce { animation: bounce 1.5s ease-in-out infinite; }

  /* ATELIER */
  .flora-section {
    padding: 80px 0;
  }
  .flora-section-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
  }
  .flora-grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }
  @media (max-width: 1024px) {
    .flora-grid-2 { grid-template-columns: 1fr; gap: 40px; }
    .flora-order-1 { order: 1; }
    .flora-order-2 { order: 2; }
  }
  .flora-atelier-img-wrap {
    aspect-ratio: 4/5;
    background: #efe6e2;
    overflow: hidden;
  }
  .flora-atelier-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .flora-label {
    font-family: 'Manrope', sans-serif;
    font-size: 12px;
    line-height: 1;
    letter-spacing: 0.1em;
    font-weight: 600;
    color: #6c5842;
    text-transform: uppercase;
    display: block;
    margin-bottom: 24px;
  }
  .flora-headline-xl {
    font-family: 'Manrope', sans-serif;
    font-size: clamp(32px, 3.5vw, 48px);
    line-height: 1.2;
    font-weight: 300;
    letter-spacing: -0.02em;
    color: #1e1b18;
    margin-bottom: 24px;
  }
  .flora-body-lg {
    font-family: 'Noto Serif', serif;
    font-size: 18px;
    line-height: 1.6;
    color: #4e453d;
    margin-bottom: 16px;
  }
  .flora-body-md {
    font-family: 'Noto Serif', serif;
    font-size: 16px;
    line-height: 1.6;
    color: #4e453d;
  }
  .flora-link-arrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'Manrope', sans-serif;
    font-size: 12px;
    letter-spacing: 0.1em;
    font-weight: 600;
    color: #6c5842;
    border-bottom: 1px solid #6c5842;
    padding-bottom: 4px;
    text-decoration: none;
    margin-top: 24px;
    transition: opacity 0.2s;
  }
  .flora-link-arrow:hover { opacity: 0.7; }

  /* TIMELINE */
  .flora-timeline-section {
    padding: 80px 0;
    background: #fbf2ed;
    border-top: 1px solid rgba(209,196,186,0.2);
    border-bottom: 1px solid rgba(209,196,186,0.2);
  }
  .flora-timeline-header {
    text-align: center;
    margin-bottom: 80px;
  }
  .flora-timeline-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 48px;
    position: relative;
  }
  @media (max-width: 768px) {
    .flora-timeline-grid { grid-template-columns: 1fr; }
    .flora-timeline-line { display: none !important; }
  }
  .flora-timeline-line {
    position: absolute;
    top: 24px;
    left: 0;
    width: 100%;
    height: 1px;
    background: rgba(209,196,186,0.5);
  }
  .flora-timeline-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    z-index: 1;
  }
  .flora-timeline-dot {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #6c5842;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    margin-bottom: 48px;
    box-shadow: 0 4px 16px rgba(108,88,66,0.3);
    outline: 8px solid #fbf2ed;
    font-family: 'Manrope', sans-serif;
    font-size: 10px;
    letter-spacing: 0.1em;
    font-weight: 600;
    flex-shrink: 0;
  }
  .flora-timeline-year-title {
    font-family: 'Manrope', sans-serif;
    font-size: 24px;
    line-height: 1.4;
    font-weight: 500;
    color: #6c5842;
    margin-bottom: 16px;
  }

  /* ARTISANS */
  .flora-artisans-section {
    padding: 80px 0;
    background: #fff8f5;
  }
  .flora-artisans-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  @media (max-width: 1024px) {
    .flora-artisans-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 640px) {
    .flora-artisans-grid { grid-template-columns: 1fr; }
  }
  .flora-artisans-intro { grid-column: span 1; display: flex; flex-direction: column; justify-content: flex-start; gap: 24px; }
  @media (max-width: 640px) { .flora-artisans-intro { grid-column: span 1; } }

  .flora-artisan-card {
    position: relative;
    aspect-ratio: 1/1;
    overflow: hidden;
    background: #efe6e2;
    cursor: pointer;
  }
  .flora-artisan-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(1);
    transform: scale(1);
    transition: filter 0.7s, transform 0.7s;
  }
  .flora-artisan-card:hover img {
    filter: grayscale(0);
    transform: scale(1.05);
  }
  .flora-artisan-overlay {
    position: absolute;
    inset: 0;
    background: rgba(108,88,66,0.2);
    opacity: 0;
    display: flex;
    align-items: flex-end;
    padding: 32px;
    transition: opacity 0.3s;
  }
  .flora-artisan-card:hover .flora-artisan-overlay { opacity: 1; }
  .flora-artisan-overlay-label {
    font-family: 'Manrope', sans-serif;
    font-size: 12px;
    letter-spacing: 0.1em;
    font-weight: 600;
    color: #fff;
  }
  .flora-artisan-wide {
    grid-column: span 2;
    aspect-ratio: auto;
    min-height: 260px;
  }
  @media (max-width: 640px) { .flora-artisan-wide { grid-column: span 1; } }

  /* FOUNDER */
  .flora-founder-section {
    padding: 80px 0;
    background: #efe6e2;
  }
  .flora-founder-inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 64px;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
  }
  @media (max-width: 1024px) { .flora-founder-inner { flex-direction: column; gap: 40px; } }
  .flora-founder-img-wrap {
    width: 33%;
    flex-shrink: 0;
    position: relative;
  }
  @media (max-width: 1024px) { .flora-founder-img-wrap { width: 100%; max-width: 360px; } }
  .flora-founder-img-border {
    position: absolute;
    top: -16px; left: -16px;
    width: 100%; height: 100%;
    border: 1px solid rgba(108,88,66,0.2);
    z-index: 0;
    transform: translate(16px, 16px);
  }
  .flora-founder-img-wrap img {
    width: 100%;
    aspect-ratio: 3/4;
    object-fit: cover;
    filter: grayscale(1);
    box-shadow: 0 25px 50px rgba(0,0,0,0.15);
    position: relative;
    z-index: 1;
  }
  .flora-founder-content { flex: 1; }
  .flora-quote-mark {
    font-family: 'Material Symbols Outlined';
    font-size: 64px;
    color: #6c5842;
    opacity: 0.2;
    line-height: 1;
    display: block;
    margin-bottom: 24px;
  }
  .flora-blockquote {
    font-family: 'Noto Serif', serif;
    font-size: clamp(20px, 2.5vw, 28px);
    font-style: italic;
    color: #1e1b18;
    line-height: 1.4;
    margin-bottom: 40px;
  }
  .flora-founder-attribution {
    border-left: 2px solid #6c5842;
    padding-left: 24px;
  }
  .flora-founder-name {
    font-family: 'Manrope', sans-serif;
    font-size: 24px;
    font-weight: 500;
    color: #1e1b18;
    margin-bottom: 8px;
  }
  .flora-founder-title {
    font-family: 'Manrope', sans-serif;
    font-size: 12px;
    letter-spacing: 0.1em;
    font-weight: 600;
    color: #6c5842;
    text-transform: uppercase;
  }

  /* FOOTER */
  .flora-footer {
    padding: 80px 0;
    background: #fbf2ed;
    border-top: 1px solid #d1c4ba;
  }
  .flora-footer-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
  }
  @media (max-width: 768px) { .flora-footer-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 480px) { .flora-footer-grid { grid-template-columns: 1fr; } }
  .flora-footer-brand {
    font-family: 'Manrope', sans-serif;
    font-size: 24px;
    font-weight: 500;
    color: #6c5842;
    display: block;
    margin-bottom: 24px;
  }
  .flora-footer-heading {
    font-family: 'Manrope', sans-serif;
    font-size: 12px;
    letter-spacing: 0.1em;
    font-weight: 600;
    color: #1e1b18;
    text-transform: uppercase;
    margin-bottom: 24px;
  }
  .flora-footer-list { list-style: none; display: flex; flex-direction: column; gap: 16px; }
  .flora-footer-link {
    font-family: 'Manrope', sans-serif;
    font-size: 12px;
    letter-spacing: 0.1em;
    font-weight: 600;
    color: #4e453d;
    text-decoration: none;
    transition: color 0.2s;
  }
  .flora-footer-link:hover { color: #6c5842; }
  .flora-footer-text {
    font-family: 'Noto Serif', serif;
    font-size: 16px;
    line-height: 1.6;
    color: #4e453d;
  }
  .flora-footer-bottom {
    max-width: 1280px;
    margin: 80px auto 0;
    padding: 32px 24px 0;
    border-top: 1px solid rgba(209,196,186,0.3);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
  }
  .flora-footer-copy {
    font-family: 'Manrope', sans-serif;
    font-size: 10px;
    letter-spacing: 0.1em;
    font-weight: 600;
    color: #4e453d;
    text-transform: uppercase;
  }
  .flora-footer-icons {
    display: flex;
    gap: 24px;
  }
  .flora-footer-icon {
    font-size: 18px;
    color: #4e453d;
    cursor: pointer;
    transition: color 0.2s;
  }
  .flora-footer-icon:hover { color: #6c5842; }
`;

export default function FloraCurtains() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="flora-root">
      

        <main>
          {/* HERO */}
          <section className="flora-hero">
            <div className="flora-hero-overlay" />
            <div className="flora-hero-bg">
              <img
                src={heroImg}
                alt="Luxury Interior Hero"
              />
            </div>
            <div className="flora-hero-content">
              <p className="flora-hero-est">Est. 1997 Abu Dhabi</p>
              <h1 className="flora-hero-title">A Legacy of Elegance Since 1997</h1>
              <div className="flora-hero-scroll">
                <span className="material-symbols-outlined flora-bounce" style={{ color: "#fff", fontSize: 36 }}>expand_more</span>
              </div>
            </div>
          </section>

          {/* ATELIER */}
          <section className="flora-section" style={{ background: "#fff8f5" }}>
            <div className="flora-section-inner">
              <div className="flora-grid-2">
                <div className="flora-order-2">
                  <div className="flora-atelier-img-wrap">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvUQ1V6_mdVhGLnw6UfQ9rOnw8AZXhdIt7S9BPL897jEypUs9asU_hWlzGLX-R6xvtECLbCR8baVKAnZVwYnScCNGB3XVVw8h75Gubv2jTmNAdxlVTpuesl8iiAAMSvylnmkQ_desWhl0hIy58-atNKgxIZIOC3_FL2FuRFFhRTBcy0pGRiOP_x41ahZZ0rUak2p8e19hXK-MYGpZQokY55riCfgygvrKSObkuaCPysWWyLskHyi54RChgP8dzmxVna0Pr2tS6y2Xj"
                      alt="Silk fabric in sunlit showroom"
                    />
                  </div>
                </div>
                <div className="flora-order-1" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  <span className="flora-label">The Atelier</span>
                  <h2 className="flora-headline-xl">Crafting Serenity in the Heart of the Emirates</h2>
                  <p className="flora-body-lg">
                    Born from a passion for refined living, Flora Curtains began as a small boutique workshop in Abu Dhabi. We believe that window treatments are the final touch of architecture—the soft border between the sanctuary of home and the world outside.
                  </p>
                  <p className="flora-body-md">
                    Our philosophy of 'Quiet Luxury' rejects the loud and transient. Instead, we focus on artisanal craft, sourcing the world's finest textiles to create bespoke solutions that stand the test of time, reflecting the sophisticated heritage of our region.
                  </p>
                  <a href="#" className="flora-link-arrow">
                    DISCOVER OUR PROCESS
                    <span className="material-symbols-outlined" style={{ fontSize: 14 }}>arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* TIMELINE */}
          <section className="flora-timeline-section">
            <div className="flora-section-inner">
              <div className="flora-timeline-header">
                <span className="flora-label" style={{ display: "block", marginBottom: 16 }}>Our Journey</span>
                <h2 className="flora-headline-xl" style={{ marginBottom: 0 }}>The Heritage Timeline</h2>
              </div>
              <div style={{ position: "relative" }}>
                <div className="flora-timeline-line" />
                <div className="flora-timeline-grid">
                  {[
                    { year: "1997", title: "Founded in Abu Dhabi", desc: "The inaugural Flora Curtains atelier opens its doors, specializing in artisanal embroidery and bespoke drapery." },
                    { year: "2015", title: "Bespoke Collection", desc: "Launched the award-winning 'Artisan's Hand' collection, celebrating traditional weaving techniques in a modern context." },
                    { year: "2024", title: "Modern Atelier", desc: "Reimagining our heritage with sustainable practices and next-generation smart home integrations." },
                  ].map(({ year, title, desc }) => (
                    <div key={year} className="flora-timeline-item">
                      <div className="flora-timeline-dot">{year}</div>
                      <h3 className="flora-timeline-year-title">{title}</h3>
                      <p className="flora-body-md">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ARTISANS */}
          <section className="flora-artisans-section">
            <div className="flora-section-inner">
              <div className="flora-artisans-grid">
                <div className="flora-artisans-intro">
                  <span className="flora-label">The Artisans</span>
                  <h2 className="flora-headline-xl" style={{ marginBottom: 0 }}>Precision in Every Stitch</h2>
                  <p className="flora-body-md">
                    Our masters of craft bring decades of expertise to every project. From hand-finishing hems to the technical precision of motorization, the human touch remains our most valuable asset.
                  </p>
                </div>

                {[
                  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJBVBO1z4Za6_9k9yhtBCwkx_TU2zuRyAMnkZLA1h77-BlXklzJdpfUE6u6RFzfLsvOcc6rAqZaOsgxuVBePocSnsbbpnCaBoLZpTyBH-O5Lx6AcPhsRS54rkGih019XTg64gLu8z5fNnYrVduAJS09SAekQgx3efoanAe4SOS_yXX6k8VXxjf84FITZxZsNObIEznWoaYmkk2e1uBx4bk6t-QOx8DbBqeFEGxLuxk8VZRknh6MOcjIv44eb4qAZqXEodz8fSB3KI1", label: "HAND-STITCHING MASTERY", wide: false },
                  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhg_E0Wm45Y4qo48eNke1XfHgkzru6WdPdVwjCIhFnQGGccZV2IDX6pw7eS1IQCFHIrB91E83lN4QNW6BtoAvPPS83T4oNy7BjaLqR7canj29OTTnll0tGUlxAluXqVrr77ktyzYVLuY3LE0_GC2MIR7pJXTkWiEImkxjQihZdmAOIiofEuWz93-sLR5bQjSsLPM1Ffk31-cF31-JofRNS0zdLGT0XD2SlXZlZsnpgK9o88v8AgkR361i0XHisxE4H5T6_GBqBF3pv", label: "ARCHITECTURAL MEASUREMENT", wide: false },
                  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2Z5uZYBkmut8hgbPvlUFB_IfeYcrQboRQDYWgIBj5I6ZFJqXlwMqRHzo00mQgSRHAyiZN7vNxmJjdY5XGco4Wq-szJdPUuGtJTyoUbsqgVs4s_Br5tlTTE_yh9GY6SHfrRxN52YpZ6Qj2x-VHhTv0yNACC33Egvl-bioZUDFWF9cVib6gHfAiEuvf_TCbdV8TbNw94ussz8phdci1aLkVnBJHhZFuRYSDniKjK0ifSRFnvmfTWa0u9zTWkG3CDzlnt83bpiBciRK2", label: "TRADITIONAL WEAVING", wide: false },
                  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEHUh5i2KKMPNeCJ97PPQPGCgqBL35LYcjCA9tGTJNU7UlQ_NIzvL1SZmhZ94HrIyCt42Cs_nWWNDMcrXD5AP__tYGO68jBxi3hax69d08DUJ3KMamdTk0viENAF79_escl1hj8ISIvCVpEFfuot3YJtUYyL9QvtAFMfaj6wrE-3Dhz6R3CCiTsHymKqcHG8ZpfxEVCcD2D6OiAzBz1VazhD8BmF5VmwDBnuXrd5UPaYK6ykTPSaWWxfINhCdNcJmbj2UivJ8YObqo", label: "THE TEXTILE LIBRARY", wide: true },
                ].map(({ src, label, wide }) => (
                  <div key={label} className={`flora-artisan-card${wide ? " flora-artisan-wide" : ""}`}>
                    <img src={src} alt={label} />
                    <div className="flora-artisan-overlay">
                      <span className="flora-artisan-overlay-label">{label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FOUNDER */}
          <section className="flora-founder-section">
            <div className="flora-founder-inner">
              <div className="flora-founder-img-wrap">
                <div className="flora-founder-img-border" />
                <img
                  src={founderImg}
                  alt="Founder Sayed Alawi"
                />
              </div>
              <div className="flora-founder-content">
                <span className="material-symbols-outlined flora-quote-mark">format_quote</span>
                <blockquote className="flora-blockquote">
                  "Home is not merely a place; it is a sanctuary where the soul finds its rhythm. Our mission at Flora is to frame your most precious moments with the softness of light and the tactile luxury of the world's finest textiles."
                </blockquote>
                <div className="flora-founder-attribution">
                  <p className="flora-founder-name">Sayed Alawi</p>
                  <p className="flora-founder-title">Founder &amp; Creative Director</p>
                </div>
              </div>
            </div>
          </section>
        </main>

      
      </div>
    </>
  );
}