import { Routes, Route } from 'react-router-dom'

import WebsiteLayout from './layouts/WebsiteLayout'
import AdminLayout from './layouts/AdminLayout'

import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import BookConsultation from './pages/BookConsultation'

import BespokeServices from './pages/BespokeServices'
import MobileHomePage from './components/mobile/mobileHomePage';


// function HomePage() {
//   return (
//     <>
//       <div className="hidden md:block">
//         <Hero />
//         <Services />
//         <Testimonials />
//         <Contact />
//       </div>

//       <div className="block md:hidden">
//         <MobileHomePage />
//       </div>
//     </>
//   );
// }
import ShowroomPage from './pages/Showroom'

import MobileLayout from './layouts/MobileLayout'; // optional removal
import OurStory from './pages/OurStory'
import Collections from './pages/Collection/CollectionPage'

import FloraCRM from './pages/Admin/Dashboard'

function HomePage() {
  return (
    <>
      <div className="hidden md:block">
        <Hero />
        <Services />
        <Testimonials />
        <Contact />
      </div>

        <div className="block md:hidden">
          <MobileHomePage />
        </div>
    </>
  )
}

export default function App() {
  return (
    <Routes>

      {/* WEBSITE LAYOUT */}
      <Route element={<WebsiteLayout />}>

        <Route path="/" element={<HomePage />} />

        <Route
          path="/bespoke"
          element={<BespokeServices />}
        />

        <Route
          path="/book"
          element={<BookConsultation />}
        />

        <Route
          path="/showroom"
          element={<ShowroomPage />}
        />

        <Route
          path="/our-story"
          element={<OurStory />}
        />

        <Route
          path="/collections"
          element={<Collections />}
        />

      </Route>

      {/* ADMIN LAYOUT */}
      <Route element={<AdminLayout />}>

        <Route
          path="/admin"
          element={<FloraCRM />}
        />

      </Route>

    </Routes>
  )
}