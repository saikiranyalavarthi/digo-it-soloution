// components/StatsSection.jsx
import { DollarSign, Clock, ArrowDown, Ticket } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: <DollarSign className="w-6 h-6 text-blue-500" />,
      text: (
        <>
          <span className="font-semibold text-gray-900">352% ROI</span> over 3
          years with our{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-semibold">
            enterprise service management solution
          </span>
        </>
      ),
    },
    {
      icon: <Clock className="w-6 h-6 text-indigo-500" />,
      text: (
        <>
          <span className="font-semibold text-gray-900">
            4,167 work-hours saved
          </span>{" "}
          per month for a{" "}
          <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent font-semibold">
            cement manufacturer
          </span>
        </>
      ),
    },
    {
      icon: <ArrowDown className="w-6 h-6 text-purple-500" />,
      text: (
        <>
          <span className="font-semibold text-gray-900">90% reduction</span> in{" "}
          <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent font-semibold">
            KFin Tech's
          </span>{" "}
          MTTR for application issues
        </>
      ),
    },
    {
      icon: <Ticket className="w-6 h-6 text-pink-500" />,
      text: (
        <>
          <span className="font-semibold text-gray-900">25% reduction</span> in{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
            Rinnai Australia's
          </span>{" "}
          service ticket volume through automation and self service
        </>
      ),
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-200 rounded-2xl py-14 px-8 mt-12 shadow-lg">
      <div className="grid md:grid-cols-4 gap-10 text-gray-800">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start space-x-4 hover:scale-105 transition-transform duration-300"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-white/70 shadow-md rounded-lg">
              {item.icon}
            </div>
            <p className="text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
