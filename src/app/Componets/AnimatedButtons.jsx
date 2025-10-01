"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  const headingLines = ["Digo IT Comprehensive Solutions for Your Success"];

  const buttons = [
    { label: "About Us ", href: "/about" },

    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <section className="w-full bg-white py-20 text-center">
      {/* Sliding Heading */}
      <div className="text-center mb-10">
        <h1 className="rr-slider-2-title text-black text-4xl md:text-5xl font-bold leading-tight space-y-2">
          {headingLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              {line}
            </motion.div>
          ))}
        </h1>
      </div>

      {/* Animated Buttons */}
      <div className="flex gap-4 flex-wrap justify-center mt-10">
        {buttons.map((btn, idx) => (
          <Link
            key={idx}
            href={btn.href}
            className="px-12 py-5 rounded-2xl bg-black text-lg 
           text-center font-semibold text-white
           shadow-lg shadow-pink-500/30 
           transition-all duration-300 
           hover:scale-105 hover:shadow-xl hover:shadow-pink-500/40 
           active:scale-95 hover:bg-red-500 hover:text-white"
          >
            {btn.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
