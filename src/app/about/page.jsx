"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Globe,
  Users,
  TrendingUp,
  Layers,
  Award,
} from "lucide-react";

export default function AboutPage() {
  const items = [
    {
      title: "Our History",
      desc: "Founded in 2000, Digo IT has grown into a globally trusted IT partner, delivering transformative technology for over two decades.",
    },
    {
      title: "Our Vision",
      desc: "To be the world’s leading IT partner, enabling businesses to innovate and thrive in the digital age.",
    },
    {
      title: "Our Mission",
      desc: "To empower businesses with cutting-edge IT solutions that fuel growth, efficiency, and long-term success.",
    },
  ];
  const features = [
    {
      title: "Experience & Expertise",
      desc: "Decades of combined IT expertise solving complex challenges across industries.",
      icon: Award,
    },
    {
      title: "Innovative Solutions",
      desc: "We craft cutting-edge solutions that unlock new opportunities for growth.",
      icon: Layers,
    },
    {
      title: "Global Perspective",
      desc: "Trusted by businesses worldwide with a broad, international outlook.",
      icon: Globe,
    },
    {
      title: "Client Focused",
      desc: "Your success is our mission — we put client needs first, always.",
      icon: Users,
    },
    {
      title: "Scalable Solutions",
      desc: "From startups to enterprises, our solutions scale as you grow.",
      icon: TrendingUp,
    },
    {
      title: "Excellence Driven",
      desc: "We invest continuously in people, processes, and technologies to deliver excellence.",
      icon: CheckCircle,
    },
  ];
  const steps = [
    {
      step: "1",
      title: "Understand Your Needs",
      desc: "We begin by analyzing your business goals, challenges, and opportunities.",
    },
    {
      step: "2",
      title: "Strategize & Plan",
      desc: "Our team designs a roadmap tailored to your growth and scalability.",
    },
    {
      step: "3",
      title: "Build & Implement",
      desc: "We deliver secure, reliable, and scalable IT solutions aligned with your vision.",
    },
    {
      step: "4",
      title: "Support & Evolve",
      desc: "Our partnership continues with ongoing optimization and future-proofing.",
    },
    {
      step: "5",
      title: "Measure Success",
      desc: "We track performance metrics to ensure your IT investments deliver real value.",
    },
    {
      step: "6",
      title: "Continuous Improvement",
      desc: "We adapt and innovate to keep you ahead in the ever-changing digital landscape.",
    },
    {
      step: "7",
      title: "Feedback & Iterate",
      desc: "We value your feedback to refine our solutions and enhance your experience.",
    },
    {
      step: "8",
      title: "Celebrate Success",
      desc: "Together, we celebrate milestones and achievements as your business grows.",
    },
  ];

  return (
    <div className="bg-white text-gray-800 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-400 to-green-400 text-white py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold mb-6 drop-shadow-lg"
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl mx-auto text-xl"
        >
          Empowering businesses worldwide with innovative IT solutions since
          2000.
        </motion.p>
      </section>

      {/* Image + Text Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="/banner5.png"
              alt="Business Illustration"
              width={500}
              height={400}
              className="w-full max-w-md rounded-xl shadow-lg"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 text-gray-700"
          >
            <p>
              We believe technology should empower businesses, not complicate
              them. Our solutions are designed with scalability, security, and
              innovation at their core.
            </p>
            <p>
              Our experts combine strategy, design, and technology to deliver
              real business outcomes.
            </p>
            <p>
              From IT consulting to cloud transformation and managed services,
              Digo IT is your trusted partner in digital success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are - Simple Text Blocks */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
            Who We Are
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {items.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="p-6"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"
          >
            How We Work
          </motion.h2>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {steps.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03, y: -3 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="flex items-start gap-4"
              >
                {/* Number Circle */}
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold shadow-md">
                  {item.step}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-green-400 bg-clip-text text-transparent"
          >
            Why Choose <span className="text-green-400">Digo IT?</span>
          </motion.h2>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-10">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group p-8 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-2xl hover:border-transparent transition relative overflow-hidden"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-400 text-white shadow-md">
                  <item.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-indigo-600 transition">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Ready To Talk Section */}
      <section className="bg-gradient-to-r from-teal-400 to-green-400 py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready To Talk?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Our team is here to answer your question about Spet
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
            <a href="/contact">
              <button className="px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-md shadow-md transition hover:cursor-pointer">
                CONTACT US
              </button>
            </a>

            <a
              href="#"
              className="text-white underline hover:text-gray-200 transition"
            >
              Or, get started now with a free trial
            </a>
          </div>
          <p className="text-white font-medium">
            More than 1.5 million businesses and organizations use Spet
          </p>
        </div>
      </section>

      {/* Users Expectation Section */}
      <section className="relative py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            We Always Try To Understand Users Expectation
          </h2>

          {/* Divider */}
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="h-0.5 w-16 bg-green-400" />
            <div className="h-3 w-3 bg-green-400 rounded-full" />
            <div className="h-0.5 w-16 bg-green-400" />
          </div>

          <p className="text-gray-500 max-w-2xl mx-auto mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            <div>
              <h3 className="text-3xl font-bold text-green-500">180K</h3>
              <p className="text-gray-600">Downloaded</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-500">20K</h3>
              <p className="text-gray-600">Feedback</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-500">500+</h3>
              <p className="text-gray-600">Workers</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-500">70+</h3>
              <p className="text-gray-600">Contributors</p>
            </div>
          </div>

          {/* Contact Card */}
          <div className="max-w-3xl mx-auto p-8 border rounded-lg shadow-sm bg-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Have Any Questions About Us?
                </h3>
                <p className="text-gray-500">
                  Don&apos;t hesitate to contact us
                </p>
              </div>
              <a href="/contact">
                <button className="px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-md shadow-md transition hover:cursor-pointer">
                  CONTACT US
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
