import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import BespokeServices from './pages/BespokeServices';
import BookConsultation from './pages/BookConsultation';
import ShowroomPage from './pages/Showroom'
import MobileHome from './components/mobile/mobileHomePage'

function HomePage() {
  return (
    <>
    <div className='hidden md:block'>
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
      {/* <ShowroomPage /> */}
    </div>

    <div className='block md:hidden'>
      <MobileHome/>
    </div>
    </>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bespoke" element={<BespokeServices />} />
          <Route path="/book" element={<BookConsultation />} />
          <Route path="/showroom" element={<ShowroomPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
