import { Outlet } from "react-router-dom";

import MobileNavbar from "../components/mobile/MobileNavbar";
import MobileFooter from "../components/mobile/MobileFooter";
import { T } from "../styles/mobileTokens";

 export default function MobileLayout() {
   return (
    <div className="min-h-screen" style={{ backgroundColor: T.bg }}>
      <MobileNavbar />
      <Outlet />
      <MobileFooter />
    </div>
);
}

