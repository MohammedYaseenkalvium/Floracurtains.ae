 import { T } from '../../styles/mobileTokens'
 import Icon from './shared/icons'
 import FontLink from './shared/fontLink'
 import logo from '../../assets/logo.png'
 import { useState } from 'react'
 export default function MobileNavBar({ cartCount = 0 }) {
  return (
    <header
      className="fixed top-0 w-full z-50 border-b flex justify-between items-center px-5 py-3 h-16"
      style={{ borderColor: `${T.outlineVariant}50`, fontFamily: "Manrope, sans-serif" }}
    >
      {/* Actual glass layer needs custom class */}
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      />
      <div className="relative flex items-center gap-3">
        <button>
          <Icon name="menu" style={{ color: 'rgba(255,255,255,0.92)' }} />
        </button>
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Flora"
            className="h-10 object-contain contrast-200"
          />
          {/* <span
            className="font-light text-xl tracking-tight"
            style={{ color: T.onSurface }}
          >
            Flora Curtains */}
          {/* </span> */}
        </div>
      </div>
    </header>
  );
}