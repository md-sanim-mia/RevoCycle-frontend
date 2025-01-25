import { Truck, ShieldCheck } from "lucide-react";
const HeroBenner = () => {
  return (
    <div className="max-w-screen-xl mx-auto lg:flex gap-12 py-14 lg:py-20 lg:px-0 px-3 ">
      {/* Left Side - Image */}
      <div className="w-full lg:w-1/2 ">
        <img
          src="https://images.unsplash.com/photo-1528629297340-d1d466945dc5?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Premium Bicycle"
          className="w-full  rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
        <h2 className="text-4xl font-bold text-red-400">
          Discover Your Perfect Ride
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Our collection features premium bicycles designed for performance and
          comfort. Find the perfect model for your journey today!
        </p>
        <div className=" lg:flex md:flex gap-6 mt-4">
          {/* Left Column - Mountain Explorer */}
          <div className=" ">
            <h3 className="text-xl font-bold text-gray-900">
              🚴‍♂️ Mountain Explorer
            </h3>
            <p className="text-gray-700 mt-2">
              Conquer any terrain with durability & high performance.
            </p>
            <div className="flex gap-4 mt-5 text-gray-700">
              <Truck size={20} /> Free Delivery
            </div>
          </div>

          {/* Right Column - Sport Racer */}
          <div className="lg:mt-0 md:mt-0 mt-4">
            <h3 className="text-xl font-bold text-gray-900">⚡ Sport Racer</h3>
            <p className="text-gray-700 mt-2">
              Speed and agility for ultimate cycling performance.
            </p>
            <div className="flex  gap-4 mt-5 text-gray-700">
              <ShieldCheck size={20} /> Warranty Included
            </div>
          </div>
        </div>
        <button className="mt-5 px-5 py-3 bg-gradient-to-r from-red-300 to-red-500 text-white font-medium rounded-full shadow-xl hover:scale-105 transition-all duration-300">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default HeroBenner;
