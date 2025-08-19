"use client";

import { motion } from "framer-motion";
import {
  FiServer,
  FiSettings,
  FiHardDrive,
  FiPackage,
  FiGlobe,
} from "react-icons/fi";

export default function OurServices() {
  const services = [
    {
      title: "Operational Technology (OT) Infrastructure Services",
      icon: FiServer,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "IT Service Management",
      icon: FiSettings,
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "IT Infrastructure Services",
      icon: FiHardDrive,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "SAP Implementation and Support Services",
      icon: FiPackage,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Immigration Service",
      icon: FiGlobe,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
        <p className="mt-4 text-lg text-gray-600">
          Empowering your business with world-class IT & CX solutions.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`relative p-6 rounded-2xl shadow-lg cursor-pointer overflow-hidden bg-gradient-to-r ${service.color} text-white group flex flex-col items-center`}
            >
              {/* Background animation */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

              {/* Icon */}
              <div className="w-16 h-16 mb-4 text-4xl flex items-center justify-center">
                <Icon />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 text-center">
                {service.title}
              </h3>

              {/* Hover effect line */}
              <div className="w-0 group-hover:w-full h-1 bg-white transition-all duration-500"></div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
