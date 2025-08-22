"use client";

import { motion } from "framer-motion";
import { Network, Settings, Server, Boxes } from "lucide-react";

const services = [
  {
    title: "Operational Technology (OT) Infrastructure Services",
    desc: "Design, deploy, and maintain secure OT environments that bridge the gap between industrial operations and modern IT.",
    icon: Network,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "IT Service Management",
    desc: "Comprehensive ITSM solutions to streamline workflows, improve incident response, and ensure service quality.",
    icon: Settings,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "IT Infrastructure Services",
    desc: "End-to-end infrastructure solutions covering networks, servers, storage, and cloud integration.",
    icon: Server,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "SAP Implementation and Support Services",
    desc: "Expert SAP deployment, customization, and ongoing support to drive operational efficiency and scalability.",
    icon: Boxes,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Cloud Services",
    desc: "Scalable cloud solutions including migration, management, and optimization across leading platforms.",
    icon: Server,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Cybersecurity Solutions",
    desc: "Robust security services to protect your digital assets from evolving threats and ensure compliance.",
    icon: Settings,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Data Center Services",
    desc: "Comprehensive data center solutions including design, implementation, and management for optimal performance.",
    icon: Boxes,
    color: "bg-teal-100 text-teal-600",
  },
  {
    title: "Network Solutions",
    desc: "Advanced networking services to enhance connectivity, performance, and security across your organization.",
    icon: Network,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Consulting Services",
    desc: "Strategic IT consulting to align technology initiatives with business goals and drive innovation.",
    icon: Settings,
    color: "bg-gray-100 text-gray-600",
  },
  {
    title: "Managed IT Services",
    desc: "Proactive management and support of your IT infrastructure to ensure reliability and efficiency.",
    icon: Server,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Disaster Recovery and Business Continuity",
    desc: "Comprehensive strategies and solutions to safeguard your business operations against disruptions.",
    icon: Boxes,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Application Development and Maintenance",
    desc: "Custom software solutions and ongoing maintenance to meet your unique business needs.",
    icon: Network,
    color: "bg-green-100 text-green-600",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent"
        >
          Our Services
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03, y: -3 }}
              className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full ${service.color} mb-6`}
              >
                <service.icon className="w-7 h-7" />
              </div>

              {/* Title & Desc */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
