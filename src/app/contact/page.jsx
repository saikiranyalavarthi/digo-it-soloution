// app/page.jsx (Next.js 13+ with App Router)
// or pages/index.js if you’re using older Next.js
"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    country: "India",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get started with <span className="text-blue-600">Digo IT</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Integrate, observe, manage, automate, and secure your entire digital
            enterprise infrastructure—from IT assets to business apps.
          </p>

          {/* Feature 1 */}
          <div className="flex items-start mb-6">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg mr-4">
              🤖
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">
                Tap into the power of contextual, extensible AI
              </h3>
              <p className="text-gray-600 text-sm">
                Improve employee experiences, security, and increase business
                efficiency with AI.
              </p>
              <a href="#" className="text-blue-600 text-sm font-medium">
                AI for every need →
              </a>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg mr-4">
              ⏰
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">
                Accelerate your time to value with dedicated support
              </h3>
              <p className="text-gray-600 text-sm">
                Experience enhanced SLAs, end-to-end assistance, and more with
                our Enterprise Support Program.
              </p>
              <a href="#" className="text-blue-600 text-sm font-medium">
                Always-on support →
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">
            Talk to our experts
          </h3>
          <p className="text-gray-600 mb-6">
            Meet a Digo IT consultant to learn how our platform can help meet
            your business needs.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name*"
                className="border p-3 rounded-lg w-full"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name*"
                className="border p-3 rounded-lg w-full"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Business email*"
              className="border p-3 rounded-lg w-full"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="company"
                placeholder="Company name*"
                className="border p-3 rounded-lg w-full"
                value={formData.company}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="border p-3 rounded-lg w-full"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <select
              name="country"
              className="border p-3 rounded-lg w-full"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
              <option>Canada</option>
              <option>Australia</option>
            </select>

            <textarea
              name="message"
              placeholder="What can we help you with?*"
              rows="4"
              className="border p-3 rounded-lg w-full"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold w-full py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
