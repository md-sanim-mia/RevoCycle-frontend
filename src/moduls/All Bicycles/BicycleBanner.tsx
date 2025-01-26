const BicycleBanner = () => {
  return (
    <div
      className="relative w-full lg:h-[520px] md:h-[400px] h-[300px] bg-white flex items-center justify-center text-black text-center p-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmljeWNsZXxlbnwwfHwwfHx8MA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 max-w-2xl">
        <h1 className=" lg:text-4xl text-gray-50 md:text-3xl text-2xl font-bold mb-4">
          Ride with Freedom
        </h1>
        <p className=" lg:text-lg text-white md:text-base text-sm mb-6">
          Experience the joy of cycling with our premium collection.
        </p>
        <button className="bg-red-500 text-white lg:px-6 lg:py-3 md:px-4 md:py-2 px-3 py-1 font-semibold rounded-lg hover:bg-red-600 transition">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default BicycleBanner;
