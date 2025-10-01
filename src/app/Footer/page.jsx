"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-400 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <img
            src="/newlogo.png" // your logo in public folder
            alt="DIGOIT Logo"
            className="h-25 w-auto"
          />

          <p className="text-gray-600 mt-4 leading-relaxed">
            Driving digital transformation with tailored IT solutions,
            infrastructure services, and enterprise-grade support.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
          <ul className="space-y-3 text-gray-600">
            <li>
              <a href="/" className="hover:text-indigo-600">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-indigo-600">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-indigo-600">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-indigo-600">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Support</h3>
          <ul className="space-y-3 text-gray-600">
            <li>
              <a href="/FAQPage" className="hover:text-indigo-600">
                FAQ
              </a>
            </li>
            <li>
              <a href="/PrivacyPolicy" className="hover:text-indigo-600">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/TermsPage" className="hover:text-indigo-600">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Address</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-indigo-600 mt-1" />
              <span>
                2nd Floor, SATTAVA MAGNUS B507, Sabza Colony, Brindavan Colony,
                Toli Chowki, Hyderabad, Telangana
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-indigo-600" />
              <span>info@digoit.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-indigo-600" />
              <span>Salesdigoit@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-indigo-600" />
              <span>+91 8143410067</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-indigo-600" />
              <span>+91 7207314999</span>
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-indigo-600 hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-indigo-600 hover:text-white transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-indigo-600 hover:text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/digo-it-solutions-pvt-ltd/"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-indigo-600 hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-200 mt-12 pt-6 text-center text-gray-600 text-sm md:text-base group">
        © {new Date().getFullYear()} DIGOIT. All rights reserved.
        {/* Tooltip: visible on hover for desktop, always visible on mobile */}
        <a
          href="https://www.linkedin.com/in/sai-kiran-yalavarthi-9aa35919a/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 
               bg-blue-600 text-white text-xs px-2 py-1 rounded shadow-lg 
               opacity-0 md:group-hover:opacity-100 transition-opacity duration-300
               block sm:block hover:bg-blue-700"
        >
          Website designed by Saikiran Yalavarthi
        </a>
      </div>
    </footer>
  );
}
