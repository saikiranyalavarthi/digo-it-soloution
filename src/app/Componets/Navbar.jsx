"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          DIGOIT
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/services" className="hover:text-blue-600 transition">
            Services
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-100 px-4 py-3 space-y-2">
          <Link href="/" className="block hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="block hover:text-blue-600">
            About
          </Link>
          <Link href="/services" className="block hover:text-blue-600">
            Services
          </Link>
          <Link href="/contact" className="block hover:text-blue-600">
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
