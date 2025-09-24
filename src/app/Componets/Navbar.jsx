// "use client";

// import Link from "next/link";
// import { useState } from "react";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center px-4 py-3">
//         {/* Logo */}
//         <Link href="/">
//           <img
//             src="/newlogo.png" // your logo in public folder
//             alt="DIGOIT Logo"
//             className="h-20 w-auto"
//           />
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
//           <Link href="/" className="hover:text-blue-600 transition">
//             Home
//           </Link>
//           <Link href="/about" className="hover:text-blue-600 transition">
//             About
//           </Link>
//           <Link href="/services" className="hover:text-blue-600 transition">
//             Services
//           </Link>
//           <Link href="/contact" className="hover:text-blue-600 transition">
//             Contact
//           </Link>
//         </nav>

//         {/* Mobile Button */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="md:hidden text-2xl text-gray-700 focus:outline-none"
//         >
//           {menuOpen ? "✕" : "☰"}
//         </button>
//       </div>

//       {/* Mobile Dropdown */}
//       {menuOpen && (
//         <nav className="md:hidden bg-gray-100 px-4 py-3 space-y-2">
//           <Link href="/" className="block hover:text-blue-600">
//             Home
//           </Link>
//           <Link href="/about" className="block hover:text-blue-600">
//             About
//           </Link>
//           <Link href="/services" className="block hover:text-blue-600">
//             Services
//           </Link>
//           <Link href="/contact" className="block hover:text-blue-600">
//             Contact
//           </Link>
//         </nav>
//       )}
//     </header>
//   );
// }

"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-400 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/newlogo.png"
            alt="DIGOIT Logo"
            className="h-16 w-auto drop-shadow-md hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-white font-medium">
          <Link href="/" className="relative group">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/about" className="relative group">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/services" className="relative group">
            Services
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/contact" className="relative group">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-white focus:outline-none hover:scale-110 transition-transform"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-gradient-to-b from-indigo-600 to-purple-600 px-4 py-4 space-y-3 text-white shadow-lg">
          <Link href="/" className="block hover:text-yellow-300 transition">
            Home
          </Link>
          <Link
            href="/about"
            className="block hover:text-yellow-300 transition"
          >
            About
          </Link>
          <Link
            href="/services"
            className="block hover:text-yellow-300 transition"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="block hover:text-yellow-300 transition"
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
