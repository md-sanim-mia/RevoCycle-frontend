const AboutBanner = () => {
  return (
    <div
      className="relative h-[70vh] sm:h-[80vh] md:h-[85vh] lg:h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?q=80&w=1648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="text-center text-white z-10 px-4 md:px-8 lg:px-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          About Us
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
          "Ride with passion, explore with freedom. We craft bicycles for every
          adventure!"
        </p>
        <button className="mt-6 px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition">
          Explore Our Bikes
        </button>
      </div>
    </div>
  );
};

export default AboutBanner;
