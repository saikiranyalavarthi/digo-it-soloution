"use client";
import {
  FaClock,
  FaSyncAlt,
  FaExpandArrowsAlt,
  FaEye,
  FaFileAlt,
} from "react-icons/fa";

export default function DigitalEmployeeExperience() {
  const items = [
    {
      icon: <FaClock className="text-3xl text-blue-600" />,
      title: "Time-consuming, repetitive processes",
      desc: "From user provisioning to regular patch deployment, IT teams deal with many error-prone, repetitive, manual tasks, creating a productivity sinkhole.",
    },
    {
      icon: <FaSyncAlt className="text-3xl text-blue-600" />,
      title: "Ensuring timely access to resources",
      desc: "Employees should be able to access enterprise resources when needed without compromising security or burdening the IT teams.",
    },
    {
      icon: <FaExpandArrowsAlt className="text-3xl text-blue-600" />,
      title: "Skyrocketing ticket volumes",
      desc: "With many companies going hybrid, IT teams are being bombarded with common requests regarding connectivity or performance issues, which can be solved through self-service automations.",
    },
    {
      icon: <FaEye className="text-3xl text-blue-600" />,
      title: "Incomplete visibility into the infrastructure",
      desc: "A lack of unified visibility into IT assets hampers the IT team's ability to provision, manage, and secure resources for employees in an optimized manner.",
    },
    {
      icon: <FaFileAlt className="text-3xl text-blue-600" />,
      title: "Growing compliance requirements",
      desc: "IT teams need to ensure compliance with a growing number of regulations without impacting the employee experience.",
    },
  ];

  return (
    <section className="bg-white text-black py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          The digital employee experience: <br />
          <span className="text-white">A key driver of business success</span>
        </h2>
        <p className="text-lg mb-4">
          In today's digital enterprise, every moment of an employee's workday
          touches IT, from the devices they use to access enterprise resources
          to their work apps and the corporate network. This gives technology
          the power to influence an employee's work experience and, through it,
          their productivity.
        </p>
        <p className="text-lg mb-12">
          This is why enterprises today are increasingly focusing on improving
          the digital employee experience, a goal that requires IT teams to
          overcome various challenges.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-400 text-gray-800 rounded-lg shadow-md p-6 text-left hover:shadow-xl transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
