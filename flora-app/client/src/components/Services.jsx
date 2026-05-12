const services = [
  {
    title: 'Curtains',
    description: 'Elegant curtain solutions crafted for modern luxury interiors.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAK6T4riuax5-KRiyfPat1eZueIjX6SechmH31moSyjRnbur_WQfkKhqtvB0wO5zIxcXxrJ92p5Hnc5rVBCh2RJfKv_pZAOks8vqQTG_jRZXKC0jNKlEkhKcDIIiHZ1G9mehBQ1F390QQCB8tPbeJgi6Y-qwhqsPwnwbp1W-UJTzAvRS62W_CJiTvS99OQUVWIo1Yo0RyjyVWFpJrqOHQ8Ynl0hbu_5ZDhvEzywEAXJSNikEM-_mxPkBcgvAPTG3RcW9rSii4zHLjK5',
    span: 'md:col-span-8',
  },
  {
    title: 'Blinds',
    description: 'Precision light control with refined contemporary styling.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFYhCK-h4X2eqW4JWhj1rJvOPcoLSG1VWI4rtc4ZrG4YKnHK7bENNq-mcyAs_ulfmMJleedGMtX9cDcq1DnZnLSTg6CKLHm-Linw-yHe1SGJSw_-1VuDiSx-c1qcyt0TzlXQZdHc9FVikjW7rlob9wLxOgc7yeJol9OTMj_L_Hxi3zUNJBj6uvpidNlwAn8P1MACOjKTaczTo2TE05GoksR8fmannh31UeIAYcToHJ8pcrKldxDtU2r5kKDFXH9B97CSKdOBXEAn3W',
    span: 'md:col-span-4',
  },
  {
    title: 'Wallpaper',
    description: 'Statement wall finishes designed to elevate sophisticated spaces.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGJUJ6JttdXEHHpIOUfoiKwRVIFf7XsL9rtOvG1WCSDT641PdiVOdT1yy11NbVgyfyDDzFBC2Tt8ukkaEszogIQMHrFVfHMgmIuCaDjTCX86C-MJLW84uHAKmkLrz-mCQTkX7ESD6NPkOQwhaFfH3A8nj6_H3TkSNfZEvuCuJPPU5PtXwsShED_CdHa1Vrc-xrhUzMzutCBHlunCbHF5vjeidV8dBgYZHQH9FkgQ43vVjWjI6k5oPiTID4RMFjwnQNqmzpAkkNqYM6',
    span: 'md:col-span-4',
  },
  {
    title: 'Sofas',
    description: 'Custom seating experiences tailored for comfort and elegance.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIbpd1Z83sPVMdaSewFr3wqz_GKFHHUgslaPMVYM3iVBiyCXwTyDl9qLU5ZxORW9I0XQLc75sI22MKwfvLY6INH3_ws--cvSTSK1N3-cQJYv9ASB6x7WOqckAPBTf7OYaBQRFFEVpu_7e5BPGmcyTfZ7pL5UrZR7kL6_v9g8JWPrKXUVk1qTMW9hCuSGiGSWRVuH-t4URlD1khKTVf2XYceENJNsOr2E_VcQ9C9etlWs1oiQL_E7yFH4bRovbPfUspPPP06IA9f1uc',
    span: 'md:col-span-4',
  },
  {
    title: 'Flooring',
    description: 'Premium flooring solutions for timeless interiors.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiw3i4t6mYHHDq23kHBpyPpvm2V5fCchP4_1pXLkW-ZiEnj3Qf4b-5yFV1jjIbpPhE_T1Pl3YFNc10N8RxEyAL67jEExIXX3Hf5WBBW-ylLGksG16e-2w3L5vnlNiLTwmhA18qRO82seOf49YIov210CI4gWXMTMwjn1BEMgc0hFh1qOVLrjHz81J3K5R9GVNaUCA1NITdneUd-39Znp1yA9VKEf8zYxdMb-LmyZjaNTcl9p9g54sxFYONC8FZEeS7GbrO1sId5LUe',
    span: 'md:col-span-4',
  },
]

function ServiceCard({ service }) {
  return (
    <div className={`${service.span} group relative overflow-hidden min-h-[320px] md:min-h-0`}>
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/65 via-stone-900/15 to-transparent flex flex-col justify-end p-8 md:p-10">
        <h3 className="font-luxury text-white text-3xl font-normal mb-2 tracking-wide">
          {service.title}
        </h3>
        <p className="font-body text-stone-300 text-sm leading-relaxed max-w-sm">
          {service.description}
        </p>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="services">
      <div className="text-center mb-16">
        <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-gold block mb-4">
          What We Offer
        </span>
        <h2 className="font-luxury text-[clamp(2.5rem,4vw,4rem)] font-normal text-on-background leading-tight">
          Our Services
        </h2>
        <div className="w-16 h-px bg-gold/50 mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:h-[820px]">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  )
}