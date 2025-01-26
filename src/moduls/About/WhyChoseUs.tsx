import React from "react";

const WhyChoseUs = () => {
  return (
    <div className="py-16 max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 bg-gray-50">
      <div className=" ">
        <h2 className="text-3xl text-center sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
          Why Choose Us?
        </h2>
        <p className="text-lg sm:text-xl lg:w-2/3 mx-auto text-center lg:text-2xl text-gray-700 mb-12">
          Our bicycles are crafted with the highest quality materials, offered
          at affordable prices, and backed by excellent service to ensure your
          cycling experience is the best.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Premium Materials */}
          <div className="">
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-12 h-12 text-blue-500 mx-auto mb-4"
                aria-hidden="true"
              >
                <path
                  d="M12 3v18m9-9H3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Premium Materials
            </h3>
            <p className="text-gray-600">
              We use the highest quality materials to ensure durability,
              comfort, and performance.
            </p>
          </div>
          {/* Affordable Price & Warranty */}
          <div className="">
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-12 h-12 text-green-500 mx-auto mb-4"
                aria-hidden="true"
              >
                <path
                  d="M3 8l7 7 7-7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Affordable Price & Warranty
            </h3>
            <p className="text-gray-600">
              Get the best value for your money with affordable prices and a
              comprehensive warranty.
            </p>
          </div>
          {/* Fast Delivery & Customer Service */}
          <div className="">
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-12 h-12 text-red-500 mx-auto mb-4"
                aria-hidden="true"
              >
                <path
                  d="M5 12l5 5L20 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Fast Delivery & Customer Service
            </h3>
            <p className="text-gray-600">
              Enjoy fast delivery and exceptional customer service to ensure
              your satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoseUs;
