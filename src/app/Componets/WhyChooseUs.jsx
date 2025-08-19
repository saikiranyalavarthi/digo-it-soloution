"use client";

import { FaCogs, FaLightbulb, FaGlobe, FaStar } from "react-icons/fa";

export default function WhyChooseUs() {
  const services = [
    {
      icon: <FaCogs className="text-pink-600 text-2xl" />,
      title: "Tailored IT Solutions",
      description:
        "We specialize in creating bespoke IT solutions that align with your business goals. From infrastructure management to software development, we ensure that our solutions drive efficiency and growth.",
    },
    {
      icon: <FaLightbulb className="text-pink-600 text-2xl" />,
      title: "Strategic Consulting",
      description:
        "Our consulting services are designed to help businesses navigate the complexities of modern technology. We provide strategic insights and actionable plans to help you stay ahead of the competition.",
    },
    {
      icon: <FaGlobe className="text-pink-600 text-2xl" />,
      title: "Global Reach",
      description:
        "Digo IT operates on a global scale, serving clients across multiple regions. Our solutions are scalable and adaptable, making them ideal for businesses of any size, from local startups to global enterprises.",
    },
    {
      icon: <FaStar className="text-pink-600 text-2xl" />,
      title: "Focused Expertise",
      description:
        "Our team of experts is dedicated to building capabilities that create competitive differentiation. We stay ahead of industry trends to provide cutting-edge solutions that keep your business at the forefront of innovation.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Digo IT
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            At Digo IT, we blend technology, strategy, and innovation to deliver
            world-class IT and CX solutions that help your business grow and
            stay competitive.
          </p>
          <img
            src="banner1.jpg"
            alt="IT Solutions"
            className="rounded-xl shadow-md"
          />
        </div>

        {/* Right Section - Services */}
        <div className="space-y-8">
          {services.map((service, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-pink-100 p-4 rounded-full">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
