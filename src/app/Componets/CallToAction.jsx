"use client";

export default function CallToAction() {
  return (
    <section className="flex justify-center items-center py-12 px-6">
      <div className="w-full max-w-5xl bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-400 rounded-2xl text-center py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
          Ready to get started?
        </h2>
        <button className="bg-yellow-400 text-black font-medium px-6 py-3 rounded-md hover:bg-yellow-500 transition hover:cursor-pointer">
          Get in touch
        </button>
      </div>
    </section>
  );
}
