import { useState, useEffect } from 'react'

const WHATSAPP_NUMBER = '+917736762310' // Replace with real number

export default function Navbar() {
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
    { label: 'Showroom', href: '/#contact' },
    { label: 'Our Story', href: '/#contact' },
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
            src="https://lh3.googleusercontent.com/aida/ADBb0ui9XM0eTT3djWhrIJPf2yUxpKopnkTL3NJNWVhzF9gCNYfjYFqRrvP5pW3OTwsxIFQG0kfMuPqrVJ5QYBe8zBUPANPyRI93Rxq1bpi0jzqAo0IctB66opLtyN8uLVxr0Vf1eIvHkQupkDD5t_vub41S9dZwk_25EaAeh6ub9cgi4zw_5E5fPYaPk-1rvybcw7TspFWGqfZeGDbExORr2TOcwea_3RO7QTanim4ts2bjlGrXi4ZNhbVeWAj0VyA-ZCUIIS3z7ckSuGE"
            alt="FLORA Logo"
            className={`h-9 w-auto object-contain transition-all duration-300 ${
              scrolled ? 'brightness-0' : 'brightness-0 invert'
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
                scrolled
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
