import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Booking", to: "/booking" },
  { label: "Contact", to: "/contact" },
];

type NavbarProps = {
  activePage?: string;
};

export default function Navbar({ activePage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0d0d0d]/95 backdrop-blur-sm shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
          : "bg-[#0d0d0d]"
      } border-b border-[#c9a84c]/20`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="font-headline text-2xl tracking-widest gold">
          NOBLE CUT
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`font-body text-sm tracking-widest uppercase transition-colors duration-300 ${
                activePage === link.label
                  ? "text-[#c9a84c]"
                  : "text-[#f5f0e8]/60 hover:text-[#c9a84c]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Book Now button */}
        <Link
          to="/booking"
          className="hidden md:block bg-[#c9a84c] text-[#0d0d0d] font-headline tracking-widest text-sm px-6 py-2 hover:bg-[#f5f0e8] transition-colors duration-300"
        >
          BOOK NOW
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#c9a84c] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#c9a84c] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#c9a84c] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-64" : "max-h-0"}`}
      >
        <div className="px-6 pb-6 flex flex-col gap-4 border-t border-[#c9a84c]/10 pt-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`font-body text-sm tracking-widest uppercase transition-colors duration-300 ${
                activePage === link.label
                  ? "text-[#c9a84c]"
                  : "text-[#f5f0e8]/60"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/booking"
            onClick={() => setMenuOpen(false)}
            className="bg-[#c9a84c] text-[#0d0d0d] font-headline tracking-widest text-sm px-6 py-2 text-center hover:bg-[#f5f0e8] transition-colors duration-300"
          >
            BOOK NOW
          </Link>
        </div>
      </div>
    </nav>
  );
}
