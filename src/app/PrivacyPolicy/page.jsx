"use client";

export default function PrivacyPolicy() {
  return (
    <main className="bg-gray-50 min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-indigo-600 mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-700 mb-10">
          At <span className="font-semibold">DIGOIT</span>, we value your
          privacy and are committed to protecting your personal information.
          This Privacy Policy outlines how we collect, use, and safeguard your
          data when you interact with our website, products, and services.
        </p>

        {/* Sections */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            1. Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may collect personal information such as your name, email
            address, phone number, and company details when you fill out forms,
            request services, or interact with us. We also collect non-personal
            information such as browser type, IP address, and usage statistics
            to improve our services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The information we collect is used to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mt-3 space-y-2">
            <li>Provide and improve our IT solutions and services</li>
            <li>Communicate with you regarding inquiries or support</li>
            <li>
              Send important updates, newsletters, and promotional materials
            </li>
            <li>Analyze usage patterns to enhance user experience</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            3. Data Protection
          </h2>
          <p className="text-gray-700 leading-relaxed">
            DIGOIT implements strong security measures to protect your personal
            information from unauthorized access, disclosure, alteration, or
            destruction. However, please note that no method of transmission
            over the Internet or electronic storage is completely secure.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            4. Sharing Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell, trade, or rent your personal information to third
            parties. We may share data with trusted partners and service
            providers who assist us in delivering our services, under strict
            confidentiality agreements.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            5. Your Rights
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You have the right to access, update, or request the deletion of
            your personal information. If you wish to exercise these rights,
            please contact us using the information below.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            6. Updates to This Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            DIGOIT may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated effective date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            7. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about this Privacy Policy or our data
            practices, please contact us:
          </p>
          <ul className="mt-3 text-gray-700 space-y-2">
            <li>📍 Address: 27 Division St, New York, NY 10002, USA</li>
            <li>📧 Email: info@digoit.com</li>
            <li>📞 Phone: +1 (321) 984 754</li>
          </ul>
        </section>

        {/* Footer Note */}
        <p className="text-gray-500 text-sm mt-12">
          Effective Date: {new Date().toLocaleDateString()}
        </p>
      </div>
    </main>
  );
}
