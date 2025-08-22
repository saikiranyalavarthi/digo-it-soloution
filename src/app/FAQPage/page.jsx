"use client";

import { useState } from "react";

export default function FAQPage() {
  const faqs = [
    {
      question: "What services does Digo IT provide?",
      answer:
        "We provide IT Infrastructure Services, SAP Implementation and Support, OT Infrastructure, and IT Service Management tailored to your business needs.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can reach us via our Contact page, email at support@digoit.com, or call us at +1 (321) 984-754.",
    },
    {
      question: "Do you offer enterprise-level IT solutions?",
      answer:
        "Yes, we specialize in scalable IT solutions for startups, SMEs, and enterprise-level businesses across various industries.",
    },
    {
      question: "Where are your services available?",
      answer:
        "We work with clients globally, providing remote and on-site support depending on your business requirements.",
    },
    {
      question: "Is there a trial period for your IT services?",
      answer:
        "We provide customized consultation sessions to evaluate your needs before committing to a long-term service plan.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6 md:px-20 lg:px-40">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 text-lg">
          Find answers to the most common questions about our IT services.
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition"
          >
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-semibold text-gray-800">
                {faq.question}
              </span>
              <span className="text-2xl text-gray-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-600 leading-relaxed">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
