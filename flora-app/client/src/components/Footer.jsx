import { Link } from 'react-router-dom'
import logoUrl from '../assets/logo.png'
 
const WHATSAPP_NUMBER = '+917736762310'
 
const quickLinks = [
  { label: 'Collections', href: '/collections' },
  { label: 'Bespoke Services', href: '/bespoke' },
  { label: 'Showroom', href: '/showroom' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Book Consultation', href: '/book' },
]
 
export default function Footer() {
  return (
    <footer className="bg-[#0F0C0B] text-white w-full py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pb-16 border-b border-white/10">
 
          {/* Brand */}
          <div className="space-y-6 md:col-span-1">
            <img
              src={logoUrl}
              alt="FLORA"
              className="h-9 w-auto object-contain brightness-0 invert"
            />
            <p className="font-luxury text-xl font-light italic text-white/60 leading-relaxed max-w-xs">
              Curating elegance for Abu Dhabi's finest interiors.
            </p>
            {/* Social / WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3.5 font-body text-xs font-semibold uppercase tracking-[0.2em] hover:bg-primary-container transition-colors"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              WhatsApp Us
            </a>
          </div>
 
          {/* Quick Links */}
          <div>
            <h4 className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-8">
              Navigate
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-luxury text-lg font-light text-white/55 hover:text-white transition-colors tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
 
          {/* Showroom Info */}
          <div>
            <h4 className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-8">
              Visit Our Showroom
            </h4>
            <address className="not-italic space-y-5">
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-gold text-base mt-0.5 flex-shrink-0">location_on</span>
                <p className="font-body text-sm text-white/60 leading-relaxed">
                  Flora Curtains Showroom<br />
                  Murur Road, Opp of Mubadalah Tower<br />
                  Abu Dhabi, United Arab Emirates
                </p>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-gold text-base flex-shrink-0">schedule</span>
                <div className="font-body text-sm text-white/60 leading-relaxed">
                  <p>Sat – Thu: 9:00 AM – 9:00 PM</p>
                  <p>Friday: 2:00 PM – 9:00 PM</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-gold text-base flex-shrink-0">call</span>
                <a href="tel:+917736762310" className="font-body text-sm text-white/60 hover:text-white transition-colors">
                  +971 55 746 4100
                </a>
              </div>
            </address>
          </div>
        </div>
 
        {/* Bottom bar */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-white/30 tracking-widest uppercase">
            © {new Date().getFullYear()} Flora Curtains Abu Dhabi. All rights reserved.
          </p>
          <Link
            to="/book"
            className="font-luxury text-lg font-light italic text-gold/70 hover:text-gold transition-colors"
          >
            Begin your interior journey →
          </Link>
        </div>
      </div>
    </footer>
  )
}