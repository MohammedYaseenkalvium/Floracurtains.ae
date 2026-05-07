const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 z-[100] bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-[0px_20px_40px_rgba(37,211,102,0.3)] hover:scale-110 transition-transform group"
      aria-label="Chat on WhatsApp"
    >
      <span className="material-symbols-outlined text-3xl">chat</span>
      <span className="absolute right-20 bg-white text-on-surface px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-stone-100 shadow-sm pointer-events-none font-luxury">
        Chat with an Expert
      </span>
    </a>
  )
}
