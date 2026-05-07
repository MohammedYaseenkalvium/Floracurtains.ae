import { useState, useEffect } from 'react'
import logoUrl from '../assets/logo.png'

const WHATSAPP_NUMBER = '+917736762310' // Replace with real number


export default function Navbar({ textBlack = false, logoScrolled = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Collections', href: '/#services' },
    { label: 'Bespoke Services', href: '/bespoke' },
    { label: 'Showroom', href: '/showroom' },
    { label: 'Our Story', href: '/our-story' },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out border-b bg-white/30 backdrop-blur-xl border-white/20 ${
        scrolled ? 'shadow-lg' : 'shadow-md'
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-5 max-w-7xl mx-auto">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src={logoUrl}
            alt="FLORA Logo"
            className={`h-9 w-auto object-contain transition-all duration-300 ${
              logoScrolled || scrolled ? 'brightness-0' : 'brightness-0 invert'
            }`}
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-luxury text-sm tracking-wide transition-colors ${
                textBlack
                  ? 'text-stone-900 hover:text-stone-700'
                  : scrolled
                  ? 'text-stone-500 hover:text-stone-900'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="/book"
            className="hidden sm:block bg-primary text-white px-7 py-3 text-xs font-luxury font-semibold uppercase tracking-widest hover:opacity-80 transition-opacity"
          >
            Book Consultation
          </a>
          <button
            className={`md:hidden transition-colors ${scrolled ? 'text-stone-700' : 'text-white'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-stone-600 font-luxury text-sm uppercase tracking-widest hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/book"
            className="mt-2 bg-primary text-white px-7 py-3 text-xs font-luxury font-semibold uppercase tracking-widest text-center hover:opacity-80 transition-opacity"
            onClick={() => setMenuOpen(false)}
          >
            Book Consultation
          </a>
        </div>
      )}
    </nav>
  )
}
