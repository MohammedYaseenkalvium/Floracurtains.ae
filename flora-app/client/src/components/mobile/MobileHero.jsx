import { T } from '../../styles/mobileTokens'
import Icon from './shared/icons'
import FontLink from './shared/fontLink'
export default function MobileHero() {
  return (
    <section className="relative overflow-hidden" style={{ height: "100svh", minHeight: "580px" }}>
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGks7jvKJ_3N3JuenD8gZJyFQgtxFa12hUTrX-P0Ii8anfvkb3ixxhm8Q16_pY6oqXirP-9JF4EhbV8tWdcIKWJdyObo-ZLL3gbFgiHrnitgjG9vpQ_dh9LzKsG4RYEdybrW0nJTeaDK5hPILcZCynzSbJ9UVhi92l_lO5-oGCMj2Tz3Vt_rqw3paRGYpldwLqw_6gmD0wlEarkokz4-TGP8tnaKIR-BmypWvKnIbYaCHD7dNnkQ450pz_QLnTJJBO3DqUAzJwBo1C"
        alt="Luxury curtains in sunlit room"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center 30%" }}
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.45) 55%, transparent 100%)" }}
      />
      {/* Top fade for nav legibility */}
      <div
        className="absolute top-0 left-0 right-0 h-32"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, transparent 100%)" }}
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 pb-28">
        <p
          className="anim-1 text-[11px] font-semibold tracking-[0.2em] uppercase mb-3"
          style={{ color: T.primaryFixedDim, fontFamily: "Manrope, sans-serif" }}
        >
          Established in Abu Dhabi
        </p>
        <h1
          className="anim-2 font-light text-white mb-6 leading-[1.08]"
          style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: "clamp(32px, 9vw, 44px)",
            letterSpacing: "-0.02em",
          }}
        >
          Let your windows bloom with Flora elegance
        </h1>
        <div className="anim-3 flex gap-3">
          <button
            className="flex-1 py-4 rounded-xl text-xs font-semibold tracking-[0.12em] uppercase"
            style={{
              background: "rgba(255,248,245,0.68)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.35)",
              color: T.onSurface,
              fontFamily: "Manrope, sans-serif",
            }}
          >
            View Collections
          </button>
          <button
            className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: T.primary }}
          >
            <Icon name="arrow_forward" className="text-white" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-[100px] right-6 flex flex-col items-center gap-1.5 anim-4">
        <div
          className="w-px h-10"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.5))" }}
        />
        <Icon name="keyboard_arrow_down" className="text-white" style={{ fontSize: "16px", opacity: 0.6 }} />
      </div>
    </section>
  );
}