const testimonials = [
  {
    quote: 'Flora Curtains transformed our penthouse into a serene sanctuary. Their attention to fabric detail is unmatched in Abu Dhabi.',
    name: 'Sarah Al-Mansouri',
    role: 'Saadiyat Island Resident',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeidEj0tvxP7Op4QfdUKp7QNAYQvo6R3tnjR28iP3mQdtEP4oW9ChimDUKoLvyvN3YfTfs3ktHxnbUNHfkxwA8p83sB4JGuU_4SjO9WBtGZRDsJXnzBrtv98wa7mnPh5raQgp85UcLEDst0PrZZpMs40pr_FO1CTqoRNas894FLX5IPlszThirmWZwR59ixeWDGMwtvJ9b69Qytc9XcVrIZiTB9iqppglFMGMWGUoacZfoK3Lq_g9eT3MGDlKUUlIDOIquR_mQZEIv',
    offset: '',
  },
  {
    quote: 'The wallpaper collection is truly world-class. Professional installation and perfect finish. Highly recommended for luxury homes.',
    name: 'James Harrison',
    role: 'Interior Designer',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtTujSp8DcHOaYx5ItI6f9pn1W6C5qRA1Cx6lGRC9tgdGcfLMzKCJZt-1y1NGBEUthn6JIRmoTw0lMyx_zlSPHyw7lKzrR2ECVCT7s0uxdED26yk6kNXlJFThTYMVaTifzHPlFJllbHettCo2rHNanAcEscW1d0dSu5y9f4exo9Kw7XViGsXWGGprW-i5viXWU6ZEVs2i6UOK3sh8_bMfdWy46AKJBxSwtj9mhoiCpu78H9NsG_zHjExPtE7yddBGESgZfcbRqcmep',
    offset: 'md:translate-y-6',
  },
  {
    quote: 'Bespoke sofas that are both art pieces and comfortable retreats. Flora understands the essence of quiet luxury.',
    name: 'Elena Petrova',
    role: 'Yas Island Homeowner',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPpZxmBK1zvGLYdB6HDJyhvecbm6fwK7XtRNmgjzWGe2QTzGP0GDCnwTsUt-E-LGxt7c143gdUJ7WwhTHXZrcx2tSgEh4Un-RpPl9zAUXuKAS1g5op5d4B6_KnvtFvZ7Q5EeaZ7n8ZWbSCvVJPXWJQ_XnlUXuOqqOR2qTTCta69A5G68DAnjTIJRWHah0wVxLhybUYds-V1Vh5U4e712o9beGr7y9vkwk2vR3jUwLkVujZlLHHAPftYWg9-9Tth_lqdBEpy4R4Mcrs',
    offset: '',
  },
]

function TestimonialCard({ t }) {
  return (
    <div className={`bg-white p-10 border border-stone-200 hover:shadow-2xl transition-all duration-500 ${t.offset}`}>
      <span className="material-symbols-outlined text-primary-fixed-dim text-4xl mb-6 block">
        format_quote
      </span>
      <p className="font-body text-body-lg text-on-surface mb-8 italic leading-relaxed">
        "{t.quote}"
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-surface-container overflow-hidden flex-shrink-0">
          <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-luxury text-xs font-bold uppercase tracking-widest text-on-surface">
            {t.name}
          </h4>
          <p className="text-xs text-stone-400 mt-0.5">{t.role}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-stone-50 border-y border-stone-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-headline-lg font-luxury text-primary mb-2">
            Client Whispers
          </h2>
          <p className="text-label-caps text-stone-400 uppercase tracking-widest font-luxury">
            Stories of transformation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
