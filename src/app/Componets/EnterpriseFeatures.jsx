import { Rocket, ArrowUpRight, Database, DollarSign } from "lucide-react";

export default function EnterpriseFeatures() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20 text-center">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-12">
        Designed to help your digital enterprise grow
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* Feature 1 */}
        <div className="flex items-center gap-3 bg-white shadow-sm rounded-xl px-6 py-4">
          <div className="p-2 rounded-md bg-gray-100">
            <Rocket className="w-6 h-6 text-blue-700" />
          </div>
          <p className="text-gray-800 text-sm font-medium">
            Accelerate time to value
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex items-center gap-3 bg-white shadow-sm rounded-xl px-6 py-4">
          <div className="p-2 rounded-md bg-gray-100">
            <ArrowUpRight className="w-6 h-6 text-blue-700" />
          </div>
          <p className="text-gray-800 text-sm font-medium">
            Scale your business as you choose
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex items-center gap-3 bg-white shadow-sm rounded-xl px-6 py-4">
          <div className="p-2 rounded-md bg-gray-100">
            <Database className="w-6 h-6 text-blue-700" />
          </div>
          <p className="text-gray-800 text-sm font-medium">
            Your data is yours alone
          </p>
        </div>

        {/* Feature 4 */}
        <div className="flex items-center gap-3 bg-white shadow-sm rounded-xl px-6 py-4">
          <div className="p-2 rounded-md bg-gray-100">
            <DollarSign className="w-6 h-6 text-blue-700" />
          </div>
          <p className="text-gray-800 text-sm font-medium">
            Lower total cost of ownership
          </p>
        </div>
      </div>
    </section>
  );
}
