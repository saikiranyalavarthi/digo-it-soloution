"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-4"
        >
          About Us
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg">
          Empowering businesses worldwide with innovative IT solutions since
          2000.
        </p>
      </section>

      {/* Company Overview */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Digo IT
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6 text-center max-w-4xl mx-auto">
          Digo IT is a globally recognized, privately held IT solutions firm,
          established in 2000. With over 500 years of collective experience, our
          team brings unparalleled expertise and innovation. We pride ourselves
          on being a new breed of consulting and services firm, dedicated to
          building solutions and capabilities that drive competitive
          differentiation.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-6 text-center max-w-4xl mx-auto">
          Our focus is on developing and delivering customized IT solutions that
          meet the unique needs of businesses across various industries. Whether
          you're a small to medium-sized company or a global enterprise, Digo IT
          has the expertise to help you succeed in today’s fast-paced,
          technology-driven world.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 text-center max-w-4xl mx-auto">
          Over the past 20 years, Digo IT has expanded and deepened trusted
          relationships with our clients. What starts as a requisition for a key
          IT role, or the implementation of a new platform, becomes over time a
          deeper partnership where we help transform data centers, migrate to
          the cloud, manage IT functions, and take responsibility for critical
          systems as an extended part of their team. Our philosophy is simple:
          always represent the client’s best interest first. This client-first
          mindset, combined with deep technology expertise and operations
          transformation, is why many clients have trusted us for decades.
        </p>
      </section>

      {/* Mission & What We Do */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is simple: to empower businesses by providing
              innovative IT solutions that enable them to achieve their goals
              and stand out in the market.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              What We Do
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li>
                ✔ Tailored IT Solutions for business efficiency and growth
              </li>
              <li>✔ Strategic Consulting to navigate modern technology</li>
              <li>✔ Global Reach with scalable solutions</li>
              <li>✔ Focused Expertise that drives differentiation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
          Why Choose Digo IT?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Experience & Expertise",
              desc: "Over 500 years of combined IT experience tackling complex challenges.",
            },
            {
              title: "Innovative Solutions",
              desc: "We solve problems and create opportunities for growth and differentiation.",
            },
            {
              title: "Global Perspective",
              desc: "Diverse expertise across different markets and industries worldwide.",
            },
            {
              title: "Client Focused",
              desc: "We put clients first — your success is our success.",
            },
            {
              title: "Scalable Solutions",
              desc: "From startups to enterprises, our solutions grow with your business.",
            },
            {
              title: "Commitment to Excellence",
              desc: "We continuously invest in people, processes, and technology.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white shadow-lg rounded-2xl border border-gray-100 hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-indigo-600">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Looking Ahead */}
      <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Looking Ahead</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Digo IT remains committed to innovation, client-focus, and excellence.
          We will continue to evolve our services to meet the changing needs of
          clients and the industry.
        </p>
      </section>
    </div>
  );
}
