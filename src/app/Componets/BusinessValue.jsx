"use client";

export default function BusinessValue() {
  const items = [
    "Enhance employee experience",
    "Increase cyber\nresilience",
    "Boost workforce\nproductivity",
    "Improve incident\nmanagement",
    "Simplify compliance\nmanagement",
  ];

  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-12">
        Deliver more business value through IT
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <div key={index} className="group">
            <p
              className={`text-lg font-medium whitespace-pre-line ${
                index === 0 ? "text-blue-700" : "text-black"
              } group-hover:text-blue-700 transition hover:cursor-pointer`}
            >
              {item}
            </p>
            <div
              className={`mt-2 h-0.5 ${
                index === 0
                  ? "bg-yellow-400 w-20 mx-auto"
                  : "bg-gray-300 w-20 mx-auto group-hover:bg-yellow-400"
              } transition`}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
}
