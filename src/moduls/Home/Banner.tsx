import "animate.css";
const Banner = () => {
  return (
    <div className="max-w-screen-xl lg:h-[520px]  mx-auto  lg:flex gap-4 lg:px-0 px-3">
      <section
        className="relative lg:w-3/5  bg-cover bg-center py-4"
        style={{
          backgroundImage:
            "url(https://plus.unsplash.com/premium_photo-1678718713393-2b88cde9605b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmljeWNsZXxlbnwwfHwwfHx8MA%3D%3D)",
        }}
      >
        {/* Gradient overlay for a smooth fade effect */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="relative  flex flex-col justify-center items-center text-center text-white space-y-6 h-full px-4">
          {/* Heading with elegant font and subtle animation */}
          <h1 className="text-4xl lg:text-5xl font-semibold text-shadow-xl tracking-wide animate__animated animate__fadeIn ">
            Find Your Perfect <br /> Bicycle
          </h1>

          {/* Subtitle with soft typography */}
          <p className="text-xl bg-inherit animate__animated animate__fadeIn animate__delay-1s max-w-2xl mx-auto">
            Explore our collection of bicycles crafted for every journey.
            Quality, style, and comfort await you.
          </p>

          {/* Button container */}
          <div className="flex space-x-8 animate__animated animate__fadeIn animate__delay-2s">
            {/* Shop Now Button */}
            <button className="px-5 py-3 bg-gradient-to-r from-red-300 to-red-500 text-white font-medium rounded-full shadow-xl transform hover:scale-105 transition-all duration-200 ease-in-out">
              Shop Now
            </button>

            {/* Explore More Button */}
            <button className="px-5 py-3 border-2 border-red-300 text-red-400 bg-white font-medium rounded-full shadow-xl transform hover:bg-white hover:text-black transition-all duration-200 ease-in-out">
              Explore More
            </button>
          </div>
        </div>
      </section>
      <div className=" lg:w-[40%] h-full lg:grid  md:flex md:gap-4 lg:mt-0  mt-4">
        <div className="w-full ">
          <div className="bg-white h-[253px] py-6 hover:scale-105 text-black shadow-xl rounded-xl text-center animate__animated animate__fadeIndown">
            <div>
              <h3 className="text-3xl font-bold  text-red-400">
                Limited Edition Bicycle
              </h3>
              <p className="mt-3 text-lg">
                Experience the best ride with our premium model. Available now
                at a special discount!
              </p>
              <button className="mt-5  px-5 py-3 bg-gradient-to-r from-red-300 to-red-500 text-white font-medium rounded-full shadow-xl  hover:scale-105">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <div className=" h-full lg:mt-0 md:mt-0 mt-4 w-full hover:scale-105 cursor-pointer">
          <img
            className="h-[253px] w-full"
            src="https://media.istockphoto.com/id/1430800922/photo/adventure-street-travel-and-bike-break-outdoor-in-urban-city-in-summer-woman-with-vintage.webp?a=1&b=1&s=612x612&w=0&k=20&c=f0n8LPebg13ZXMo7Rz65Mbok8-XFhT1KzAXIDZ0WO7w="
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
