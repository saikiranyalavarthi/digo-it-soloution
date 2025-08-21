import Image from "next/image";

export default function GlobalAspirations() {
  return (
    <section className="relative rounded-2xl overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/banner4.jpg" // <-- place your uploaded image in /public folder
          alt="Global Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 py-20 flex flex-col md:flex-row items-center">
        {/* Left Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-snug">
            A global company for your <br className="hidden md:block" />
            global aspirations
          </h2>
          <p className="text-white/90 text-base md:text-lg mb-6">
            With 18 best-in-class data centers and an extensive network of sales
            offices and partners across the world, ManageEngine can help you
            meet your global aspirations.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-yellow-400 font-medium hover:underline underline-offset-4 transition"
          >
            Learn more →
          </a>
        </div>
      </div>
    </section>
  );
}
