// app/components/IndustriesSection.jsx
import {
  Building2,
  Wallet,
  Stethoscope,
  Factory,
  ShoppingBag,
  Network,
  Store,
  Plane,
} from "lucide-react";

const industries = [
  { icon: Building2, title: "Construction technology" },
  { icon: Wallet, title: "Financial services" },
  { icon: Stethoscope, title: "Healthcare & life sciences" },
  { icon: Factory, title: "Manufacturing technology" },
  { icon: ShoppingBag, title: "Retail & restaurants" },
  { icon: Network, title: "Service providers" },
  { icon: Store, title: "Small to medium business" },
  { icon: Plane, title: "Travel & tourism" },
];

export default function IndustriesSection() {
  return (
    <section className="py-16 px-6 sm:px-12 lg:px-20 bg-white">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Industries we serve
        </h2>
        <p className="mt-4 text-gray-600 text-base sm:text-lg">
          We offer breadth and depth – combining deep industry expertise and
          technical skills to connect you to the right IT solutions. With one
          strategic partner, you’ll get guidance at any stage of your IT
          transformation journey.
        </p>
      </div>

      {/* Subheading */}
      <div className="mt-10 max-w-6xl mx-auto">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Private sector
        </h3>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, idx) => {
            const Icon = industry.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-6 bg-white border rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <Icon className="w-8 h-8 text-gray-700" />
                <p className="mt-4 text-center text-pink-600 font-medium">
                  {industry.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
