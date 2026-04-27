const WHATSAPP_NUMBER = '+971XXXXXXXXX'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD9QBPdDsPgjuWv0Y5s7KVoga0mZVHpKnZZc0rPZvgH9HAGZNeosmMtVWPpqHOTywOyZvkQVe-1gI5TrPVrkWfGH58I_sZ-DcgO6BbDgKHd665dSIHp47vX_vNE4-QtmxswDB3nPzDfZBwC9jzGY4HvWJ1kW6K08UBzciQZlzHt_Xa4iAUBrZzWvJLCPwuNS_4dUIQI25aQsjasv9aW_O0jVXUJwWa5tf4U9WWauRte63P_4g9cA-z-eySdX1mrsuCeU88HFwRZgpJ"
          alt="Luxurious floor-to-ceiling sheer curtains"
          className="w-full h-full object-cover scale-105"
          style={{ animation: 'subtleZoom 8s ease-out forwards' }}
        />
        <div className="absolute inset-0 bg-stone-900/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p
          className="text-label-caps text-white mb-6 tracking-[0.3em] uppercase drop-shadow-md opacity-0"
          style={{ animation: 'fadeUp 0.8s ease 0.3s forwards' }}
        >
          Exquisite Window Treatments
        </p>
        <h1
          className="text-headline-xl md:text-display text-white font-luxury mb-10 leading-tight text-shadow-sm opacity-0"
          style={{ animation: 'fadeUp 0.8s ease 0.5s forwards' }}
        >
          Let your windows bloom<br />with Flora elegance
        </h1>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0"
          style={{ animation: 'fadeUp 0.8s ease 0.7s forwards' }}
        >
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-10 py-5 text-label-caps font-luxury font-semibold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary-container transition-colors"
          >
            <span className="material-symbols-outlined text-xl">chat</span>
            Get Quote on WhatsApp
          </a>
          <a
            href="#services"
            className="border border-white/50 backdrop-blur-sm text-white px-10 py-5 text-label-caps font-luxury font-semibold uppercase tracking-widest hover:bg-white/10 transition-colors"
          >
            View Our Work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <span className="material-symbols-outlined text-white text-3xl">keyboard_double_arrow_down</span>
      </div>

      <style>{`
        @keyframes subtleZoom {
          from { transform: scale(1.05); }
          to { transform: scale(1); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
