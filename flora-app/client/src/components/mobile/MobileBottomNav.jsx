import { T } from '../../styles/mobileTokens'
import Icon from './shared/icons'

import { useState } from 'react'

const NAV_ITEMS = [
  { icon: "home", label: "Home", active: true },
  { icon: "window", label: "Catalog", active: false },
  { icon: "calendar_month", label: "Book", active: false, fab: true },
  { icon: "auto_awesome_motion", label: "Projects", active: false },
  { icon: "person", label: "Account", active: false },
];



export default function MobileBottomNav() {
  const [active, setActive] = useState(0);

  return (
    <nav
      className="md:hidden fixed bottom-5 left-4 right-4 h-16 rounded-full flex items-center justify-around px-2 shadow-2xl z-50"
      style={{
        background: "rgba(255,248,245,0.88)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: `1px solid rgba(255,255,255,0.5)`,
        boxShadow: "0 8px 40px rgba(108,88,66,0.18)",
      }}
    >
      {NAV_ITEMS.map((item, i) => {
        if (item.fab) {
          return (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="relative -top-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-95"
              style={{ backgroundColor: T.primary }}
            >
              <Icon name={item.icon} className="text-white" />
            </button>
          );
        }
        return (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="flex flex-col items-center gap-0.5 w-12 py-1 transition-all"
            style={{ opacity: active === i ? 1 : 0.45 }}
          >
            <Icon
              name={item.icon}
              fill={active === i}
              style={{ color: active === i ? T.primary : T.onSurfaceVariant, fontSize: "22px" }}
            />
            <span
              className="text-[9px] font-semibold tracking-wide"
              style={{
                fontFamily: "Manrope, sans-serif",
                color: active === i ? T.primary : T.onSurfaceVariant,
              }}
            >
              {item.label}
            </span>
          </button>
        );
      })}
</nav>
    ); 
}
