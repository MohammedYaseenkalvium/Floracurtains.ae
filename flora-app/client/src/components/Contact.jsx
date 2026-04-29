import { useState } from 'react'
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER

const SERVICES = [
  'Curtains & Sheers',
  'Smart Blinds',
  'Upholstery & Sofas',
  'Wall Coverings',
  'Flooring Solutions',
]

const initialForm = {
  name: '',
  phone: '',
  service: SERVICES[0],
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
  //   setStatus('loading')
  //   try {
  //     const res = await fetch('/api/enquiries', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(form),
  //     })
  //     if (!res.ok) throw new Error('Server error')
  //     setStatus('success')
  //     setForm(initialForm)
  //   } catch {
  //     setStatus('error')
  //   }

    const message = encodeURIComponent(`
Hi, I am ${form.name}
Phone: ${form.phone}
Service: ${form.service}
Message: ${form.message}
`)

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`

  window.open(url, '_blank')

  }

  return (
    <section className="py-20 px-6 md:px-12 bg-white" id="contact">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-20">
        {/* Info */}
        <div className="md:w-1/2">
          <h2 className="text-headline-xl font-luxury text-stone-900 mb-8 leading-tight">
            Begin Your<br />Transformation
          </h2>
          <p className="text-body-lg font-body text-stone-600 mb-12 leading-relaxed">
            Whether you're looking for a single window treatment or a full home redesign,
            our consultants are ready to bring your vision to life with precision and grace.
          </p>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <span className="material-symbols-outlined text-primary p-3 bg-stone-50 rounded-full">
                location_on
              </span>
              <div>
                <h4 className="font-luxury text-lg font-medium">Main Showroom</h4>
                <p className="text-stone-500 font-body mt-1">Murur Road Opp of Mubadalah Tower, Abu Dhabi, UAE</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <span className="material-symbols-outlined text-primary p-3 bg-stone-50 rounded-full">
                call
              </span>
              <div>
                <h4 className="font-luxury text-lg font-medium">Direct Line</h4>
                <p className="text-stone-500 font-body mt-1">+971 2 586 4545</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <span className="material-symbols-outlined text-primary p-3 bg-stone-50 rounded-full">
                call
              </span>
              <div>
                <h4 className="font-luxury text-lg font-medium">Direct Line</h4>
                <p className="text-stone-500 font-body mt-1">+971 50 511 9982</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="md:w-1/2 bg-stone-50 p-10 md:p-12 border border-stone-200">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center h-full py-16 text-center">
              <span className="material-symbols-outlined text-primary text-6xl mb-4">check_circle</span>
              <h3 className="font-luxury text-headline-md text-on-surface mb-2">Enquiry Sent!</h3>
              <p className="text-stone-500 font-body">
                Thank you. Our team will be in touch with you shortly.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-8 text-label-caps font-luxury uppercase tracking-widest text-primary underline underline-offset-4"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-label-caps font-luxury text-stone-400 mb-2 uppercase tracking-widest">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-all py-3 font-body text-body-md outline-none"
                />
              </div>
              <div>
                <label className="block text-label-caps font-luxury text-stone-400 mb-2 uppercase tracking-widest">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="+971 50 000 0000"
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-all py-3 font-body text-body-md outline-none"
                />
              </div>
              <div>
                <label className="block text-label-caps font-luxury text-stone-400 mb-2 uppercase tracking-widest">
                  Service Interested In
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full bg-white/50 border border-outline-variant focus:ring-0 focus:border-primary transition-all py-3 px-4 font-luxury text-body-md outline-none appearance-none cursor-pointer hover:bg-primary/70"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236c5842' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 12px center',
                    paddingRight: '36px',
                  }}
                >
                  {SERVICES.map((s) => (
                    <option key={s} className="font-luxury bg-white text-stone-900">{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-label-caps font-luxury text-stone-400 mb-2 uppercase tracking-widest">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="How can we help you?"
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-all py-3 font-body text-body-md outline-none resize-none"
                />
              </div>

              {status === 'error' && (
                <p className="text-error text-sm font-body">
                  Something went wrong. Please try again or contact us directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-primary text-white py-5 text-label-caps font-luxury uppercase tracking-widest font-bold hover:bg-stone-800 transition-colors mt-4 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <span className="material-symbols-outlined text-xl animate-spin">progress_activity</span>
                    Sending…
                  </>
                ) : (
                  'Send Enquiry'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
