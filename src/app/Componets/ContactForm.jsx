"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle sending form data via API or EmailJS
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Get in Touch
        </h2>
        {submitted && (
          <p className="text-green-600 text-center mb-4 animate-pulse">
            Thank you! Your message has been sent.
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message..."
              rows={5}
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
