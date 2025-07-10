import { Bike } from "lucide-react";
const Loding = () => {
  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Logo and Animation */}
        <div className="relative">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Bike className="w-10 h-10 text-red-500" />
            <span className="text-2xl font-bold text-gray-900">RevoCycle</span>
          </div>

          {/* Animated Bike */}
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 animate-spin">
              <div className="w-24 h-24 border-4 border-gray-200 border-t-red-500 rounded-full"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Bike className="w-8 h-8 text-red-500 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
            <div className="bg-gradient-to-r from-red-400 to-red-500 h-full rounded-full transition-all duration-300 ease-out"></div>
          </div>
          <p className="text-sm  mt-4 animate-pulse">
            Loading your cycling experience....
          </p>
        </div>

        {/* Loading Steps */}
        {/* <div className="space-y-2 text-xs text-gray-500">
          <div
            className={`transition-opacity duration-300 ${
              progress > 20 ? "opacity-100" : "opacity-50"
            }`}
          >
            ✓ Preparing bikes
          </div>
          <div
            className={`transition-opacity duration-300 ${
              onprogress > 50 ? "opacity-100" : "opacity-50"
            }`}
          >
            ✓ Loading categories
          </div>
          <div
            className={`transition-opacity duration-300 ${
              progress > 80 ? "opacity-100" : "opacity-50"
            }`}
          >
            ✓ Almost ready
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Loding;
