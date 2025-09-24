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
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-12">
        <h2 className="text-4xl font-bold text-indigo-700 mb-6 text-center">
          Get in Touch
        </h2>
        {submitted && (
          <p className="text-green-500 text-center mb-4 animate-pulse font-semibold">
            Thank you! Your message has been sent.
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-indigo-600 font-medium mb-2"
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
              className="w-full px-5 py-3 border-2 border-indigo-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition bg-gradient-to-r from-white to-indigo-50"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-indigo-600 font-medium mb-2"
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
              className="w-full px-5 py-3 border-2 border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition bg-gradient-to-r from-white to-purple-50"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label
              htmlFor="message"
              className="block text-indigo-600 font-medium mb-2"
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
              className="w-full px-5 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition resize-none bg-gradient-to-r from-white to-pink-50"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-400 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
