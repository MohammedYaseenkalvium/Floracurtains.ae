import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';



export default function WebsiteLayout() {
  return (
    <div className="min-h-screen bg-background">

      <div className="hidden md:block">
        <Navbar />
      </div>

      <main>
        <Outlet />
      </main>

      <Footer />

      <WhatsAppButton />
    </div>
  )
}