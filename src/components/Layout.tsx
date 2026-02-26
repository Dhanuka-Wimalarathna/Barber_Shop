import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  const location = useLocation();

  // Derive active page label from current path
  const getActivePage = () => {
    const path = location.pathname;
    if (path === "/") return "Home";
    if (path === "/services") return "Services";
    if (path === "/booking") return "Booking";
    if (path === "/contact") return "Contact";
    return "";
  };

  return (
    <div className="bg-[#0d0d0d] text-[#f5f0e8] min-h-screen flex flex-col">
      <Navbar activePage={getActivePage()} />

      {/* Page content is injected here by React Router */}
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
