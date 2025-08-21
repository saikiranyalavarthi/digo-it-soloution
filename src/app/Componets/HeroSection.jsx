"use client";

import { useEffect } from "react";

const tags = [
  { text: "Full Stack Developers", top: "40%", left: "40%", depth: 0.5 },
  { text: "Front End Developers", top: "60%", left: "20%", depth: 1.0 },
  { text: "iOS Developers", top: "30%", left: "70%", depth: 1.5 },
  { text: "React Developers", top: "70%", left: "50%", depth: 2.0 },
  { text: "AI / Web3", top: "20%", left: "30%", depth: 1.2 },
  { text: "Blockchain Developers", top: "50%", left: "80%", depth: 1.8 },
  { text: "DevOps Engineers", top: "80%", left: "10%", depth: 2.5 },
  { text: "Cloud Engineers", top: "10%", left: "60%", depth: 0.8 },
  { text: "Data Scientists", top: "90%", left: "40%", depth: 3.0 },
  { text: "Cybersecurity Experts", top: "20%", left: "80%", depth: 1.6 },
  { text: "UI/UX Designers", top: "70%", left: "30%", depth: 2.2 },
  { text: "QA Engineers", top: "50%", left: "60%", depth: 1.4 },
  { text: "Project Managers", top: "30%", left: "20%", depth: 0.9 },
  { text: "Business Analysts", top: "40%", left: "70%", depth: 1.1 },
  { text: "Technical Writers", top: "60%", left: "90%", depth: 1.3 },
  { text: "Support Engineers", top: "80%", left: "50%", depth: 1.7 },
  { text: "Network Engineers", top: "10%", left: "10%", depth: 0.6 },
  { text: "Database Administrators", top: "90%", left: "90%", depth: 2.8 },
  { text: "System Administrators", top: "20%", left: "10%", depth: 1.9 },
  { text: "Game Developers", top: "30%", left: "80%", depth: 2.4 },
  { text: "Mobile App Developers", top: "50%", left: "20%", depth: 1.0 },
  { text: "AR/VR Developers", top: "70%", left: "70%", depth: 2.6 },
  { text: "IoT Developers", top: "40%", left: "30%", depth: 1.5 },
  { text: "Robotics Engineers", top: "60%", left: "40%", depth: 1.8 },
  { text: "Embedded Systems Engineers", top: "80%", left: "60%", depth: 2.3 },
  { text: "AI/ML Engineers", top: "20%", left: "50%", depth: 1.4 },
  { text: "Big Data Engineers", top: "90%", left: "30%", depth: 2.1 },
];

export default function HeroSection() {
  useEffect(() => {
    const floatingTags = document.querySelectorAll(".floating-tag");

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / innerWidth;
      const y = (e.clientY - innerHeight / 2) / innerHeight;

      floatingTags.forEach((tag) => {
        const depth = parseFloat(tag.getAttribute("data-depth")) || 1;
        const moveX = -x * (depth * 40);
        const moveY = -y * (depth * 40);

        tag.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full h-screen bg-white overflow-hidden flex items-center justify-center">
      {/* Heading */}
      <h1 className="absolute z-20 text-2xl sm:text-4xl md:text-6xl font-extrabold text-gray-600 border-dashed border-red-500 p-3 sm:p-6 rounded-lg shadow-lg text-center">
        <span className="text-blue-500">DIGO</span> IT Solution
      </h1>

      {/* Floating Tags */}
      <div className="absolute inset-0">
        {tags.map((tag, index) => (
          <div
            key={index}
            data-depth={tag.depth}
            style={{ top: tag.top, left: tag.left }}
            className="floating-tag absolute transition-transform duration-200 ease-out"
          >
            <button
              className="
                bg-white text-black text-[10px] sm:text-sm md:text-base font-medium
                px-2 py-1 sm:px-4 sm:py-2 rounded-full shadow-md border border-white
                hover:scale-130 hover:shadow-lg hover:bg-red-300 hover:text-white
                cursor-pointer transition-all duration-300
              "
            >
              {tag.text}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
