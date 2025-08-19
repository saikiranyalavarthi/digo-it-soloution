"use client";

import { motion } from "framer-motion";
import { FiUsers, FiHeadphones, FiUserCheck, FiAward } from "react-icons/fi";

export default function StatsCards() {
  const stats = [
    {
      number: "56k+",
      label: "Satisfied Clients",
      icon: FiUsers,
      color: "bg-blue-500",
    },
    {
      number: "266+",
      label: "Team Support",
      icon: FiHeadphones,
      color: "bg-blue-500",
    },
    {
      number: "1k+",
      label: "Expert Consultants",
      icon: FiUserCheck,
      color: "bg-blue-500",
    },
    {
      number: "59k+",
      label: "Industry Awards",
      icon: FiAward,
      color: "bg-blue-500",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={idx}
              className={`group relative ${stat.color} rounded-2xl p-8 flex flex-col items-center text-white shadow-lg cursor-pointer overflow-hidden`}
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
            >
              {/* Icon circle */}
              <motion.div
                className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-white/20"
                whileHover={{ rotate: 15 }}
              >
                <Icon className="text-3xl" />
              </motion.div>

              {/* Number */}
              <motion.h3
                className="text-3xl font-bold mb-2"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.2 + 0.2, duration: 0.5 }}
              >
                {stat.number}
              </motion.h3>

              {/* Label */}
              <motion.p
                className="text-lg text-white/80 text-center"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.2 + 0.4, duration: 0.5 }}
              >
                {stat.label}
              </motion.p>

              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 bg-white/10 rounded-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
