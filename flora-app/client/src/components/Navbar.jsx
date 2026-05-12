import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoUrl from '../assets/logo.png'

export default function Navbar({
  textBlack = false,
  logoScrolled = false,
}) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const location = useLocation()

  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Collections', href: '/collections' },
    { label: 'Services', href: '/bespoke' },
    { label: 'Showroom', href: '/showroom' },
    { label: 'Our Story', href: '/our-story' },
    
  ]

  const isDark = !scrolled && isHome && !textBlack

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4">
      
      {/* FLOATING GLASS NAV */}
      <div
        className={`w-[95%] max-w-7xl rounded-full transition-all duration-500 ease-in-out ${
          scrolled || textBlack || logoScrolled
            ?'glass-nav-scrolled'
            : 'glass-nav-scrolled'
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-10 py-4">

          {/* LOGO */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src={logoUrl}
              alt="FLORA"
              className="h-11 md:h-12 w-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-10">

            {navLinks.map((link) => {
              const active = location.pathname === link.href

              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`relative font-body text-sm font-semibold tracking-[0.2em] uppercase transition-all duration-300 ${
                    isDark
                      ? 'text-white/75 hover:text-white'
                      : 'text-white/80 hover:text-[#C8A97E]'
                  } ${
                    active
                      ? 'text-[#C8A97E]'
                      : ''
                  }`}
                >
                  {link.label}

                  {/* ACTIVE UNDERLINE */}
                  <span
                    className={`absolute left-0 -bottom-2 h-[1px] bg-[#C8A97E] transition-all duration-300 ${
                      active
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              )
            })}
          </div>

          {/* RIGHT CTA */}
          <div className="flex items-center gap-4">

            <Link
              to="/book"
              className={`hidden sm:flex items-center justify-center px-8 py-3 rounded-full text-xs font-body font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                isDark
                  ? 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  : 'bg-[#5A0E12] text-white hover:bg-[#74171C] shadow-[0_8px_30px_rgba(90,14,18,0.35)]'
              }`}
            >
              Book Consultation
            </Link>

            {/* MOBILE BUTTON */}
            <button
              className={`md:hidden transition-colors ${
                isDark
                  ? 'text-white'
                  : 'text-white'
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {menuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div
            className="md:hidden border-t border-white/10 px-6 py-6 flex flex-col gap-5 rounded-b-[2rem]"
            style={{
              background: 'rgba(15,15,15,0.75)',
              backdropFilter: 'blur(28px)',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-white/80 font-body text-sm font-semibold uppercase tracking-[0.2em] hover:text-[#C8A97E] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/book"
              className="mt-2 bg-[#5A0E12] text-white px-7 py-3 text-xs font-body font-semibold uppercase tracking-[0.18em] text-center rounded-full hover:bg-[#74171C] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Book Consultation
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}