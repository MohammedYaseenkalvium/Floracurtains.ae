import { T } from '../../styles/mobileTokens'
import Icon from './shared/icons'
import FontLink from './shared/fontLink'
import logo from '../../assets/logo.png'
export default function MobileFooter() {
  return (
    <footer
      className="border-t pb-28"
      style={{ backgroundColor: T.surfaceContainerHighest, borderColor: T.outlineVariant }}
    >
      <div className="flex flex-col items-center px-6 py-10 gap-6 text-center">
        <div className="flex flex-col items-center gap-2">
          <img
                src={logo}
                alt="Flora"
                className="w-10 h-10 object-contain"
                style={{ filter: "grayscale(1) opacity(0.5)" }}
            />
          <span
            className="uppercase tracking-[0.2em] text-xs"
            style={{ fontFamily: "Manrope, sans-serif", color: T.onSurface }}
          >
            Flora Curtains Abu Dhabi
          </span>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {["The Atelier", "Privacy Policy", "Contact Us", "Showroom Location"].map((l) => (
            <a
              key={l}
              href="#"
              className="italic text-sm hover:opacity-100 transition-opacity"
              style={{ fontFamily: "Noto Serif, serif", color: T.onSurfaceVariant, opacity: 0.8 }}
            >
              {l}
            </a>
          ))}
        </nav>

        <div
          className="pt-6 border-t w-full"
          style={{ borderColor: `${T.outlineVariant}30` }}
        >
          <p
            className="italic text-sm"
            style={{ fontFamily: "Noto Serif, serif", color: T.outline }}
          >
            © 2024 Flora Curtains Abu Dhabi.
          </p>
        </div>
      </div>
    </footer>
  );
}