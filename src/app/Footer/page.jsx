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
    <footer className="bg-gray-50 border-t border-gray-200 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-600">DIGOIT</h2>
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
              <span>27 Division St, New York, NY 10002, USA</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-indigo-600" />
              <span>info@digoit.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-indigo-600" />
              <span>+1 (321) 984 754</span>
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
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-indigo-600 hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-12 pt-6 text-center text-gray-600">
        © {new Date().getFullYear()} DIGOIT. All rights reserved.
      </div>
    </footer>
  );
}
