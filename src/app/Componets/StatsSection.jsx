// components/StatsSection.jsx
import { DollarSign, Clock, ArrowDown, Ticket } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: <DollarSign className="w-6 h-6 text-blue-300" />,
      text: (
        <>
          352% ROI over 3 years with our{" "}
          <span className="text-yellow-400 font-medium">
            enterprise service management solution
          </span>
        </>
      ),
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-300" />,
      text: (
        <>
          4,167 work-hours saved per month for a{" "}
          <span className="text-yellow-400 font-medium">
            cement manufacturer
          </span>
        </>
      ),
    },
    {
      icon: <ArrowDown className="w-6 h-6 text-blue-300" />,
      text: (
        <>
          90% reduction in{" "}
          <span className="text-yellow-400 font-medium">KFin Tech's</span> MTTR
          for application issues
        </>
      ),
    },
    {
      icon: <Ticket className="w-6 h-6 text-blue-300" />,
      text: (
        <>
          25% reduction in{" "}
          <span className="text-yellow-400 font-medium">
            Rinnai Australia's
          </span>{" "}
          service ticket volume through automation and self service
        </>
      ),
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-900 rounded-2xl py-15 px-6 mt-12">
      <div className="grid md:grid-cols-4 gap-8 text-white">
        {stats.map((item, idx) => (
          <div key={idx} className="flex items-start space-x-4">
            <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg">
              {item.icon}
            </div>
            <p className="text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
