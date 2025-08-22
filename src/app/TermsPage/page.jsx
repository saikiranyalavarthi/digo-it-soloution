"use client";

export default function TermsPage() {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-800 py-16 px-6 md:px-20 lg:px-40">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-4">
          Terms & Conditions
        </h1>
        <p className="text-gray-600 text-lg">
          Please read our terms carefully before using our website or services.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing or using our website, you agree to comply with and be
            bound by these Terms & Conditions. If you do not agree, you may not
            use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">2. Use of Services</h2>
          <p className="text-gray-700 leading-relaxed">
            You agree to use our services only for lawful purposes and in a way
            that does not infringe the rights of, restrict, or inhibit anyone
            else’s use and enjoyment of our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            3. Intellectual Property
          </h2>
          <p className="text-gray-700 leading-relaxed">
            All content, trademarks, and data on this website, including but not
            limited to text, images, graphics, and software, are the property of
            our company or licensed to us, and are protected by applicable laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            4. Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We are not liable for any direct, indirect, incidental, or
            consequential damages arising out of your use of our services. You
            use the website at your own risk.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">5. Changes to Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to update or modify these Terms & Conditions at
            any time without prior notice. Please review this page periodically
            for changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">6. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions regarding these Terms & Conditions, please
            contact us at{" "}
            <a
              href="mailto:contact@example.com"
              className="text-blue-600 hover:underline"
            >
              contact@example.com
            </a>
            .
          </p>
        </section>
      </div>
    </section>
  );
}
