import { useState } from 'react'

import {
  HouseLine,
  Sparkle,
  GridFour,
  Armchair,
  Wall,
  SquaresFour,
} from '@phosphor-icons/react'
import waveImg from '../../assets/collections/wave.png'
import motorizedImg from '../../assets/collections/motorized.png'
import romanImg from '../../assets/collections/roman.png'
import venetianImg from '../../assets/collections/venetian.png'
import wallpaperImg from '../../assets/collections/wallpaper1.png'
import sofaImg from '../../assets/collections/sofa.png'
import flooringImg from '../../assets/collections/flooring.png'
import heroImg from '../../assets/collections/Hero-collection.png'

const curtainColors = [
  { name: 'Ivory', hex: '#F5F1EA' },
  { name: 'Sand', hex: '#D8C3A5' },
  { name: 'Mocha', hex: '#6B4F3A' },
  { name: 'Charcoal', hex: '#2B2B2B' },
]

const categories = [
  {
    label: 'Curtains',
    id: 'curtains',
    icon: HouseLine,
  },
  {
    label: 'Motorized',
    id: 'motorized',
    icon: Sparkle,
  },
  {
    label: 'Blinds',
    id: 'blinds',
    icon: GridFour,
  },
  {
    label: 'Wallpaper',
    id: 'wallpaper',
    icon: Wall,
  },
  {
    label: 'Sofas',
    id: 'sofas',
    icon: Armchair,
  },
  {
    label: 'Flooring',
    id: 'flooring',
    icon: SquaresFour,
  },
]

function ColorSwatches() {
  const [active, setActive] = useState(curtainColors[0])

  return (
    <div className="flex items-center gap-3 mt-8">
      {curtainColors.map((color) => (
        <button
          key={color.name}
          onClick={() => setActive(color)}
          title={color.name}
          className={`w-5 h-5 rounded-full transition-all duration-300 border ${
            active.name === color.name
              ? 'scale-125 border-black'
              : 'border-transparent'
          }`}
          style={{
            backgroundColor: color.hex,
          }}
        />
      ))}
    </div>
  )
}

function CollectionSection({
  label,
  heading,
  body,
  image,
  reverse = false,
}) {
  return (
    <section
      className={`flex flex-col ${
        reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } min-h-screen`}
    >
      {/* Image */}
      <div className="w-full lg:w-[58%] h-[50vh] lg:h-auto overflow-hidden">
        <img
          src={image}
          alt={heading}
          className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-[1800ms] ease-out"
        />
      </div>

      {/* Content */}
      <div className="w-full lg:w-[42%] flex items-center px-8 md:px-14 lg:px-20 py-20 bg-[#F8F5F2]">
        <div className="max-w-md">
          
          <span className="section-label block mb-5">
            {label}
          </span>

          <h2 className="section-heading mb-8">
            {heading}
          </h2>

          <p className="body-text mb-10">
            {body}
          </p>

          <ColorSwatches />

          <button className="mt-12 text-sm tracking-[0.18em] uppercase text-[#5A0E12] font-semibold hover:opacity-70 transition-opacity">
            Explore Collection →
          </button>
        </div>
      </div>
    </section>
  )
}

export default function Collections() {
  return (
    <main className="bg-[#F8F5F2] text-[#1A1A1A] overflow-hidden">

      {/* ───────────────── HERO ───────────────── */}
      <section className="relative h-screen flex items-end md:items-center overflow-hidden">

        {/* Background */}
        <img
          src={heroImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-[1.03] animate-[slowZoom_18s_ease_forwards]"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Content */}
        <div className="relative z-10 px-8 md:px-16 lg:px-24 pb-32 md:pb-0 max-w-4xl">

          <p className="hero-subheading mb-6">
            Curated Collections
          </p>

          <h1 className="hero-heading mb-8">
            Crafted for
            <br />
            Refined Living
          </h1>

          <p className="body-text text-white/80 max-w-lg">
            Luxury curtains, wallpapers, sofas, and interiors designed for contemporary living.
          </p>
        </div>
      </section>

      {/* ───────────────── FLOATING ICON NAV ───────────────── */}
      <section className="sticky top-5 z-40 px-4 md:px-8 -mt-16">

        <div className="mx-auto max-w-5xl">

          <div className="glass-nav rounded-[2rem] px-4 md:px-6 py-4">

            <div className="flex items-center justify-start md:justify-center gap-3 md:gap-5 overflow-x-auto scrollbar-hide">

              {categories.map((item) => {
                const Icon = item.icon

                return (
                  <a
                    key={item.label}
                    href={`#${item.id}`}
                    className="
                      group
                      flex
                      flex-col
                      items-center
                      justify-center
                      min-w-[88px]
                      px-5
                      py-4
                      rounded-[1.4rem]
                      transition-all
                      duration-500
                      hover:bg-white/10
                    "
                  >
                    <div
                      className="
                        w-11
                        h-11
                        rounded-full
                        flex
                        items-center
                        justify-center
                        mb-3
                        border
                        border-white/10
                        bg-white/5
                        group-hover:bg-[#5A0E12]
                        group-hover:border-[#5A0E12]
                        transition-all
                        duration-500
                      "
                    >
                      <Icon
                        size={20}
                        weight="thin"
                        className="
                          text-white/80
                          group-hover:text-white
                          transition-colors
                          duration-500
                        "
                      />
                    </div>

                    <span
                      className="
                        text-[0.62rem]
                        uppercase
                        tracking-[0.22em]
                        font-medium
                        text-white/65
                        group-hover:text-white
                        transition-colors
                        duration-500
                      "
                    >
                      {item.label}
                    </span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── WAVE CURTAINS ───────────────── */}
      <div id="curtains">
        <CollectionSection
          label="Signature Collection"
          heading="Wave Curtains"
          body="Soft flowing elegance for modern interiors."
          image={waveImg}
        />
      </div>

      {/* ───────────────── MOTORIZED ───────────────── */}
      <div id="motorized">
        <CollectionSection
          label="Smart Living"
          heading="Motorized Curtains"
          body="Elegant automation for contemporary interiors."
          image={motorizedImg}
          reverse
        />
      </div>

      {/* ───────────────── BLINDS GRID ───────────────── */}
      <section
        id="blinds"
        className="py-32 px-8 md:px-16 lg:px-24 bg-[#F8F5F2]"
      >
        <div className="mb-20">

          <span className="section-label block mb-5">
            Curated Blinds
          </span>

          <h2 className="section-heading max-w-2xl">
            Architectural light control with timeless elegance.
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_0.9fr] gap-10 items-end">

          {/* Roman */}
          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src={romanImg}
              alt="Roman Blinds"
              className="w-full h-[700px] object-cover hover:scale-[1.02] transition-transform duration-[1800ms]"
            />

            <div className="absolute bottom-0 left-0 p-10">

              <span className="section-label block mb-4 text-white/70">
                Roman Blinds
              </span>

              <h3 className="text-white font-luxury text-5xl">
                Sculpted softness.
              </h3>
            </div>
          </div>

          {/* Venetian */}
          <div className="relative overflow-hidden rounded-[2rem] lg:translate-y-20">
            <img
              src={venetianImg}
              alt="Venetian Blinds"
              className="w-full h-[520px] object-cover hover:scale-[1.02] transition-transform duration-[1800ms]"
            />

            <div className="absolute bottom-0 left-0 p-8">

              <span className="section-label block mb-3 text-white/70">
                Venetian Blinds
              </span>

              <h3 className="text-white font-luxury text-4xl">
                Refined precision.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── WALLPAPER ───────────────── */}
      <div id="wallpaper">
        <CollectionSection
          label="Wall Finishes"
          heading="Luxury Wallpapers"
          body="Textured elegance for sophisticated interiors."
          image={wallpaperImg}
        />
      </div>

      {/* ───────────────── SOFAS ───────────────── */}
      <div id="sofas">
        <CollectionSection
          label="Tailored Comfort"
          heading="Customized Sofas"
          body="Designed around your space and lifestyle."
          image={sofaImg}
          reverse
        />
      </div>

      {/* ───────────────── FLOORING ───────────────── */}
      <section
        id="flooring"
        className="relative min-h-[85vh] flex items-center overflow-hidden"
      >
        <img
          src={flooringImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

        <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-2xl py-32">

          <span className="section-label text-white/70 block mb-6">
            Flooring Collection
          </span>

          <h2 className="hero-heading mb-8">
            Grounded in
            <br />
            Warm Elegance
          </h2>

          <p className="body-text text-white/80 max-w-lg">
            Premium wooden flooring and carpets curated for timeless contemporary interiors.
          </p>

          <button className="primary-button mt-12">
            Explore Flooring
          </button>
        </div>
      </section>
    </main>
  )
}