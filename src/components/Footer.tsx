import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Booking", to: "/booking" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#c9a84c]/20 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Brand */}
        <div>
          <div className="font-headline text-2xl tracking-widest gold mb-2">
            NOBLE CUT
          </div>
          <div className="font-body text-[#f5f0e8]/40 text-sm">
            123 Galle Road, Colombo 3, Sri Lanka
          </div>
          <div className="font-body text-[#f5f0e8]/40 text-sm">
            Mon–Sat: 8am – 8pm | Sun: 10am – 6pm
          </div>
          <a
            href="tel:+94112345678"
            className="font-body text-[#f5f0e8]/40 text-sm hover:text-[#c9a84c] transition-colors duration-300"
          >
            +94 11 234 5678
          </a>
        </div>

        {/* Nav links */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="font-body text-xs tracking-widest uppercase text-[#f5f0e8]/40 hover:text-[#c9a84c] transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="font-body text-[#f5f0e8]/25 text-sm">
          © {new Date().getFullYear()} Noble Cut.
          <br className="hidden md:block" /> All rights reserved.
        </div>
      </div>
    </footer>
  );
}
