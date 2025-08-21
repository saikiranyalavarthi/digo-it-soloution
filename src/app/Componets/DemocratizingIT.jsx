// components/DemocratizingIT.js
export default function DemocratizingIT() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      {/* Wrapper that switches layout based on screen size */}
      <div className="relative w-full max-w-[880px] h-auto md:h-[520px]">
        {/* ===== Desktop Layout ===== */}
        <div className="hidden md:block relative w-full h-full">
          {/* Center box */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold text-3xl px-14 py-10 rounded-2xl shadow-2xl text-center">
              Democratizing IT
            </div>
          </div>

          {/* Horizontal bars */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[200px] h-3 bg-gradient-to-r from-blue-300 to-blue-600 rounded-e-full z-10" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[200px] h-3 bg-gradient-to-l from-blue-300 to-blue-600 rounded-s-full z-10" />

          {/* Vertical bars */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-[100px] bg-gradient-to-b from-blue-300 to-blue-600 rounded-b-full z-10" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-[100px] bg-gradient-to-t from-blue-300 to-blue-600 rounded-t-full z-10" />

          {/* Top box */}
          <Box
            position="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
            title="Low-Code/No-Code App Development"
            icon={<rect x="2" y="5" width="20" height="14" rx="2" />}
          />

          {/* Right box */}
          <Box
            position="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2"
            title="Data Democratization"
            icon={
              <>
                <ellipse cx="12" cy="7" rx="7" ry="3" />
                <path d="M5 7v3c0 1.66 3.13 3 7 3s7-1.34 7-3V7M5 10v3c0 1.66 3.13 3 7 3s7-1.34 7-3v-3" />
              </>
            }
          />

          {/* Bottom box */}
          <Box
            position="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2"
            title="Self-Service Portals"
            icon={
              <>
                <rect x="3" y="6" width="18" height="12" rx="2" />
                <path d="M8 12h8M12 8v8" />
              </>
            }
          />

          {/* Left box */}
          <Box
            position="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2"
            title="On-Demand App Deployment"
            icon={
              <>
                <path d="M7 16V8a5 5 0 0 1 10 0v8" />
                <path d="M21 16v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1" />
                <path d="M12 20v-6" />
                <path d="M8 12h8" />
              </>
            }
          />
        </div>

        {/* ===== Mobile Layout ===== */}
        <div className="flex flex-col items-center gap-6 md:hidden">
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold text-2xl px-10 py-6 rounded-2xl shadow-lg text-center">
            Democratizing IT
          </div>

          <MobileBox
            title="Low-Code/No-Code App Development"
            icon={<rect x="2" y="5" width="20" height="14" rx="2" />}
          />
          <MobileBox
            title="Data Democratization"
            icon={
              <>
                <ellipse cx="12" cy="7" rx="7" ry="3" />
                <path d="M5 7v3c0 1.66 3.13 3 7 3s7-1.34 7-3V7M5 10v3c0 1.66 3.13 3 7 3s7-1.34 7-3v-3" />
              </>
            }
          />
          <MobileBox
            title="Self-Service Portals"
            icon={
              <>
                <rect x="3" y="6" width="18" height="12" rx="2" />
                <path d="M8 12h8M12 8v8" />
              </>
            }
          />
          <MobileBox
            title="On-Demand App Deployment"
            icon={
              <>
                <path d="M7 16V8a5 5 0 0 1 10 0v8" />
                <path d="M21 16v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1" />
                <path d="M12 20v-6" />
                <path d="M8 12h8" />
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}

// ✅ Reusable Box for desktop
function Box({ position, title, icon }) {
  return (
    <div className={`${position} z-20`}>
      <div className="bg-white border rounded-2xl shadow-lg px-8 py-6 flex flex-col items-center w-[260px] hover:shadow-2xl transition">
        <svg
          className="w-10 h-10 mb-3 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          {icon}
        </svg>
        <span className="font-semibold text-lg text-center text-gray-800">
          {title}
        </span>
      </div>
    </div>
  );
}

// ✅ Reusable Box for mobile
function MobileBox({ title, icon }) {
  return (
    <div className="bg-white border rounded-xl shadow-md px-6 py-5 flex flex-col items-center w-full max-w-[340px] hover:shadow-lg transition">
      <svg
        className="w-8 h-8 mb-2 text-blue-600"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        {icon}
      </svg>
      <span className="font-medium text-base text-center text-gray-800">
        {title}
      </span>
    </div>
  );
}
