import { useEffect, useState } from 'react'
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'
import hero4 from '../assets/hero4.jpg'

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER

const heroImages = [hero1, hero2, hero3, hero4]

// ─── Scroll Reveal Hook ─────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}

// ─── Storytelling Sections ──────────────────────────────────────────
const storySections = [
  {
    image: hero2,
    label: 'The Craft',
    heading: 'Every space\ntells a story.',
    body:
      'Flora transforms interiors into elegant living experiences where light, texture, and design exist in harmony.',
    align: 'right',
  },
  {
    image: hero3,
    label: 'The Vision',
    heading: 'Designed for\nAbu Dhabi living.',
    body:
      'From luxury villas to contemporary apartments, every installation is tailored to refined modern lifestyles.',
    align: 'left',
  },
  {
    image: hero4,
    label: 'The Detail',
    heading: 'Precision in\nevery fold.',
    body:
      'Wave curtains, motorized systems, wallpapers, and bespoke interiors curated with timeless sophistication.',
    align: 'right',
  },
]

// ─── Story Section Component ────────────────────────────────────────
function StorySection({ section }) {
  const isRight = section.align === 'right'

  return (
    <section
      className={`flex flex-col ${
        isRight ? 'md:flex-row' : 'md:flex-row-reverse'
      } min-h-[85vh] bg-[#F8F5F2]`}
    >
      {/* Image */}
      <div className="w-full md:w-[58%] h-[55vh] md:h-auto overflow-hidden">
        <img
          src={section.image}
          alt={section.heading}
          className="reveal img-reveal w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="w-full md:w-[42%] flex items-center px-8 md:px-16 lg:px-20 py-16">
        <div>
          <span className="reveal text-reveal font-body text-xs font-semibold tracking-[0.25em] uppercase text-[#C8A97E] block mb-6">
            {section.label}
          </span>

          <h2 className="reveal text-reveal font-luxury text-[clamp(2.8rem,4vw,4.8rem)] font-normal leading-[1.02] text-[#1A1A1A] mb-8 whitespace-pre-line">
            {section.heading}
          </h2>

          <p className="reveal text-reveal font-body text-[1.05rem] leading-[1.9] text-stone-500 max-w-md">
            {section.body}
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── Main Hero Component ────────────────────────────────────────────
export default function Hero() {
  useReveal()

  const [currentHero, setCurrentHero] = useState(0)

  // Hero carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* ─── HERO SECTION ───────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end justify-start overflow-hidden">
        
        {/* Carousel Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
                index === currentHero
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-105'
              }`}
            />
          ))}

          {/* Cinematic Overlay */}
          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-8 md:px-16 lg:px-24 pb-20 md:pb-28 max-w-5xl">
          
          <p
            className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-[#C8A97E] mb-5 opacity-0"
            style={{
              animation: 'fadeUp 0.8s ease 0.3s forwards',
            }}
          >
            Luxury Curtains • Bespoke Interiors • Abu Dhabi
          </p>

          <h1
            className="font-luxury text-[clamp(3.5rem,8vw,8rem)] font-normal leading-[0.92] text-white mb-10 opacity-0"
            style={{
              animation:
                'fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.5s forwards',
            }}
          >
            Crafting Quiet
            <br />
            <span className="text-[#C8A97E]">Luxury</span> for
            <br />
            Modern Interiors
          </h1>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0"
            style={{
              animation: 'fadeUp 0.9s ease 0.75s forwards',
            }}
          >
            <a
              href="/collections"
              className="inline-flex items-center justify-center bg-[#5A0E12] text-white px-10 py-5 font-body text-xs font-semibold uppercase tracking-[0.2em] rounded-full hover:bg-[#74171C] transition-colors shadow-[0_8px_30px_rgba(90,14,18,0.35)]"
            >
              Explore Collections
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-white/30 text-white px-10 py-5 font-body text-xs font-semibold uppercase tracking-[0.2em] rounded-full hover:bg-white/10 backdrop-blur-sm transition-colors"
            >
              Book Consultation
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2 opacity-0"
          style={{
            animation: 'fadeIn 1s ease 1.2s forwards',
          }}
        >
          <span className="font-body text-[0.6rem] font-semibold tracking-[0.25em] uppercase text-white/50 rotate-90 mb-6">
            Scroll
          </span>

          <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* ─── STORYTELLING SECTIONS ─────────────────────────────── */}
      {storySections.map((section, index) => (
        <StorySection
          key={index}
          section={section}
        />
      ))}

      {/* ─── ANIMATIONS ────────────────────────────────────────── */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        .reveal {
          opacity: 0;
          transform: translateY(36px);

          transition:
            opacity 0.9s cubic-bezier(0.22,1,0.36,1),
            transform 0.9s cubic-bezier(0.22,1,0.36,1);
        }

        .reveal.img-reveal {
          transform: scale(1.04);
        }

        .reveal.revealed {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .reveal.text-reveal {
          transition-delay: 0.1s;
        }

        .reveal + .reveal {
          transition-delay: 0.15s;
        }
      `}</style>
    </>
  )
}