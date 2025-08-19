"use client";

export default function AboutSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center md:text-left">
        {/* Top Heading */}

        {/* Subheading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Digo IT: Your Trusted Partner in Technology and CX Solutions
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <strong>
            Digo IT: Your Trusted Partner in Technology and CX Solutions
          </strong>
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Digo IT is a privately held, global technology and customer experience
          (CX) solutions firm dedicated to empowering businesses through
          strategic consulting, innovative design, and comprehensive support. We
          specialize in the development and maintenance of mission-critical
          contact center and unified communications technologies. Additionally,
          we offer local, regional, and national IT resourcing services to
          ensure the success of your projects and overall business objectives.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Whether you're looking to implement cutting-edge technologies, provide
          world-class support to your organization and customers, or enhance
          your IT and contact center teams with skilled experts, Digo IT has the
          expertise to meet your needs. We understand the importance of staying
          focused on your core competencies while maintaining agility in a
          competitive market.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <button className="px-6 py-3 rounded-xl bg-black text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
