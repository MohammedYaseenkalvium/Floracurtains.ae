import { T } from '../../styles/mobileTokens'
import Icon from './shared/icons'
import FontLink from './shared/fontLink'
const CATEGORIES = [
  {
    label: "Curtains",
    span: "col-span-2",
    aspect: "aspect-[16/9]",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgbMNs-zn-mfbXuOskXx5BiyzY3xrXLyz8cbRtp7FKv7ZTH1doLnxWz_q9aAV-yGT1ZdoYIUYgFnH5IMoySs5YUfNQkWY9n0jLDKIaQd2jN850zyB7SWxxr0yVRwfge-hFzWIxRd22K1KBWm5tfMpExehEJcrat50W6y0v18QGRMWjHgCl6e3hDYC-WUFMyezcdmTi_GnTspi-F2_wNc_SdKTkh01fBwyxhHfit5N9zDfzNd41iGFc_owMLxxVi8JP23vU7VnwA4ce",
  },
  {
    label: "Window Blinds",
    span: "col-span-1",
    aspect: "aspect-square",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCW9O2ke9xbTkxrrFrGX_s-iUjuzPCwsyjWU_hiBDJBV4-WL5F7uM4gi_ri-9h0l2KoS_JLExnf4Bpe5qUwqAL2bF3qH5MygKSti0zbZ5HLSA8vgu9HHiE6CWvLLjQWmAiDWvVQmnC34AEJhfpz676ivUvwE4YDDtn5E6TU8u1WefAEbX4H1LycI6qpi5zkNWYy4kyjWtbBofSyoC4bJVyb7ggtMgOlehwAbobOvhuKkAivJeMktLSUKpOadtpnkhklTTGwS7C3nJvj",
  },
  {
    label: "Wallpaper",
    span: "col-span-1",
    aspect: "aspect-square",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSjIcTWbEs8OIIeTq_VH4N4ClO5sP3-bLUSfluNL3rweZot4J4qh5KHNbOquNutEtgFfc29gbIkfLqz3DyGaUlVvIzcNMH2YN3fdA2Aq3uUf3454Gm7LNsnhWGGEGKv20tybi8S4BVOfkpVBCIrrzyWoba3YiQv5frJ4fy7uGAVXeA4aw9NEDMY2I0TNdIygK318z02m9ABrID_aaNcKIkeQdpr2eAn1UvAzM1fveVJ9ABDfaf-xMdbm5rNxMb_3c-rVNvAyF_xJY7",
  },
  {
    label: "Sofas",
    span: "col-span-1",
    aspect: "aspect-square",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_Hb0bkbeN8DdflJE8mxq6tG11astlcoQnmXTtk53eFzD2wh1JC2e930lYHAtVBumnGZ5LftZR0xTFcCSTkBimtIOAUCvMMZvFb8NguJjV-OcrCG_vQZLsSSQzrHvEsKSKzn7SdJ6amZEU0qTw3WXecTdKqqrcFf_THHDEu1ZJziOcC7IK6AjOomk42PqmmY8KhC9W7H5cQ1b5VIRqiy7BuYHrQect4Ffag-yeS_ueCtF8STq2aOhvjQW7jFCuDNW-CWt0vBrCz_YA",
  },
  {
    label: "Flooring",
    span: "col-span-1",
    aspect: "aspect-square",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFR6ww48wSwRElHpd1YFpN8jAezIhUHFKRtpTGxmXLJ1789v4MS07iw_TiHcvLknBtT9q9mj3g4OMZJNquf5PEX5g7OKPmrHBhjAFVmIrkPbZiQ_UyuLNKtBh5TKRhaUtXq8co68eOskcmzQ4w0kmqnQwZiEGBfaRPWa10PE4z1HPrKRjB63Q_izU6_9KvFqdyRdwIlVO2RdHhjJ4m7khsOnjlc8qfIz73427yGbnvS_3kesRtBKJiiVQ0rng2Tj7gVR6eeNjGDwh-",
  },
];

export default function MobileCategories() {
  return (
    <section className="py-16 px-5" style={{ backgroundColor: T.bg }}>
      <div className="mb-8">
        <h2
          className="text-2xl font-normal mb-2"
          style={{ fontFamily: "Manrope, sans-serif", color: T.onSurface }}
        >
          Our Offerings
        </h2>
        <div className="h-px w-10 rounded-full" style={{ backgroundColor: T.primary }} />
      </div>

      <div className="grid grid-cols-2 gap-3">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.label}
            className={`cat-card ${cat.span} relative ${cat.aspect} rounded-2xl overflow-hidden cursor-pointer`}
          >
            <img
              src={cat.src}
              alt={cat.label}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)" }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
              <span
                className="text-white text-xs font-semibold tracking-[0.12em] uppercase"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                {cat.label}
              </span>
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)" }}
              >
                <Icon name="arrow_forward" className="text-white" style={{ fontSize: "14px" }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}