"use client";

import { motion } from "framer-motion";

export default function StatsAndLogos() {
  const stats = [
    { value: "8M+", label: "Matches Made" },
    { value: "150K+", label: "Tech Jobs" },
    { value: "10M+", label: "Startup Ready Candidates" },
  ];

  const logos = ["Consensys", "Cruise", "DoorDash", "Roblox", "Adonis"];

  return (
    <section className="bg-[#1A0B1E] text-white py-16">
      {/* Stats Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <h2 className="text-5xl font-extrabold">{stat.value}</h2>
            <p className="mt-2 text-lg font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-12 max-w-5xl mx-auto"></div>

      {/* Moving Logos (Text) */}
      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-16 items-center text-xl font-semibold"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...logos, ...logos].map((logo, idx) => (
            <span key={idx} className="whitespace-nowrap opacity-80">
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
