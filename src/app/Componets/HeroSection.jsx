"use client";

import { useEffect, useState } from "react";

const tags = [
  "React Developers",
  "Node JS Developers",
  "Full Stack Developers",
  "Blockchain Developers",
  "Android Developers",
  "iOS Developers",
  "Artificial Intelligence",
  "E-commerce",
  "Databases",
  "Cyber Security",
  "Robotics",
  "Seattle",
  "Los Angeles",
  "San Francisco",
  "New York",
  "Austin",
  "Denver",
  "Web3",
];

export default function HeroSection() {
  const [mouseX, setMouseX] = useState(0);
  const [positions, setPositions] = useState([]);

  // Random positions ONCE on mount
  useEffect(() => {
    const initialPositions = tags.map(() => ({
      top: Math.random() * 80 + 10,
      left: Math.random() * 80 + 10,
    }));
    setPositions(initialPositions);
  }, []);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      const centerX = window.innerWidth / 2;
      const offset = (e.clientX - centerX) / centerX;
      setMouseX(offset);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-24 text-center h-screen flex items-center justify-center">
      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-600 relative z-10 inline-block px-6 py-4 border-4 border-dotted border-blue-600 rounded-lg">
        <span className="text-blue-800">DIGO</span> IT Solution
      </h1>

      {/* Floating Tags */}
      <div className="absolute inset-0 overflow-hidden">
        {positions.map((pos, index) => (
          <span
            key={index}
            className="
              absolute 
              bg-white 
              hover:bg-blue-100 
          
              border border-gray-200 
              shadow-md 
              text-gray-800 
              px-4 py-2 
              rounded-full 
              text-sm font-medium 
              transition-all duration-500 ease-in-out 
              hover:scale-120 hover:shadow-lg hover:cursor-pointer
              hover:shadow-blue-500/50 
              hover:rotate-1
              hover:from-red-200 hover:to-blue-200
            "
            style={{
              top: `${pos.top}%`,
              left: `${pos.left}%`,
              transform: `translateX(${
                mouseX * (index % 2 === 0 ? 15 : -15)
              }px)`,
              transition: "transform 1.5s ease-in-out",
            }}
          >
            {tags[index]}
          </span>
        ))}
      </div>
    </section>
  );
}
