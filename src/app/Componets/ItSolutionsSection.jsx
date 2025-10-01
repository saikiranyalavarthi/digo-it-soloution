import Image from "next/image";
import Link from "next/link";

export default function ItSolutionsSection() {
  return (
    <section className="bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-400 py-16 px-6 md:px-12 lg:px-20 text-center md:text-left">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold text-white max-w-3xl mx-auto md:mx-0 mb-12">
        We make complex IT environments easy to manage
      </h2>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Reduce workplace complexity and risks through integrations
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Centralize your digital workplace systems, applications, and data
              to create seamless and secure experiences with contextual
              integrations.
            </p>
          </div>
          <div className="mt-6">
            <Image
              src="/banner2.png" // Must be in /public folder
              alt="Integrations"
              width={400}
              height={250}
              className="rounded-lg"
            />
          </div>
          {/* <a
            href="#"
            className="mt-4 inline-block text-blue-600 font-medium text-sm hover:underline"
          >
            View our integrations →
          </a> */}
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Maximize your returns with service on demand
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Achieve your strategic goals faster with personalized consulting,
              implementation and on-boarding assistance, premium support, and
              more through a dedicated account manager.
            </p>
          </div>
          <div className="mt-6">
            <Image
              src="/banner3.png" // fixed path (needs leading /)
              alt="Service on Demand"
              width={400}
              height={250}
              className="rounded-lg"
            />
          </div>
          <Link
            href="/about"
            className="mt-4 inline-block text-blue-600 font-medium text-sm hover:underline"
          >
            Learn more →
          </Link>
        </div>
      </div>
    </section>
  );
}
