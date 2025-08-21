"use client";

import Image from "next/image";
import { useState } from "react";

export default function TrustedCompany() {
  const [activeTab, setActiveTab] = useState("mission");

  const content = {
    mission:
      "Our mission is to empower businesses with innovative IT solutions, helping them achieve growth, efficiency, and market leadership. At Digo IT, our mission is simple: to empower businesses by providing innovative IT solutions that enable them to achieve their goals and stand out in the market. We are committed to understanding our clients' needs, designing tailored solutions, and delivering exceptional service every step of the way.",
    vision:
      "Our vision is to be a globally trusted IT partner, delivering technology-driven transformation and competitive advantage. We aspire to continuously innovate and stay ahead of industry trends to ensure our clients always remain future-ready.",
    history:
      "Founded in 2000, Digo IT has grown into a globally recognized IT solutions provider, trusted by thousands of clients worldwide. Over the past two decades, we’ve built lasting partnerships by always putting our clients’ interests first and delivering transformative technology solutions.",
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/team.jpg" // replace with your image path
            alt="Trusted Company"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div>
          <p className="text-orange-500 font-semibold uppercase mb-3">
            // Trusted Company
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            We Are Trusted By More Than{" "}
            <span className="text-orange-500">1200+</span>
          </h2>

          {/* Tabs */}
          <div className="flex gap-4 mb-6 flex-wrap">
            <button
              onClick={() => setActiveTab("mission")}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                activeTab === "mission"
                  ? "bg-orange-500 text-white"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              Our Mission
            </button>
            <button
              onClick={() => setActiveTab("vision")}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                activeTab === "vision"
                  ? "bg-orange-500 text-white"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              Our Vision
            </button>
            <button
              onClick={() => setActiveTab("history")}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                activeTab === "history"
                  ? "bg-orange-500 text-white"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              Our History
            </button>
          </div>

          {/* Content Box */}
          <div className="bg-white shadow p-6 rounded-lg border border-gray-200">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {content[activeTab]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
