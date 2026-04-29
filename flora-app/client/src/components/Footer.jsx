import logoUrl from '../assets/logo.png'
const quickLinks = ['Collections', 'Bespoke Services', 'Showroom', 'Our Story']
const supportLinks = ['Privacy Policy', 'Terms of Service', 'Care Instructions', 'Contact Us']

export default function Footer() {
  return (
    <footer className="bg-stone-50 w-full py-20 px-6 md:px-12 border-t border-stone-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="space-y-6">
          <img
            src={logoUrl}
            alt="FLORA"
            className="h-8 w-auto object-contain brightness-0"
          />
          <p className="text-stone-500 font-body text-body-md">
            Curating elegance for Abu Dhabi's finest interiors since 2010.
            Your vision, our craftsmanship.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-label-caps font-luxury text-stone-900 mb-6 uppercase tracking-widest font-bold">
            Quick Links
          </h4>
          <ul className="space-y-4">
            {quickLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-stone-500 hover:text-stone-900 transition-colors font-luxury text-xs uppercase tracking-widest"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-label-caps font-luxury text-stone-900 mb-6 uppercase tracking-widest font-bold">
            Support
          </h4>
          <ul className="space-y-4">
            {supportLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-stone-500 hover:text-stone-900 transition-colors font-luxury text-xs uppercase tracking-widest"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-label-caps font-luxury text-stone-900 mb-6 uppercase tracking-widest font-bold">
            Newsletter
          </h4>
          <p className="text-stone-500 font-body text-body-md mb-6">
            Stay updated with our latest collections and design tips.
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border-b border-stone-300 py-2 focus:ring-0 focus:border-primary outline-none font-body text-body-md"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 text-primary">
              <span className="material-symbols-outlined">east</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-200 text-center">
        <p className="text-stone-400 font-luxury text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} Flora Curtains Abu Dhabi. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
