const Story = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-100">
        <div className="  ">
          <h2 className="text-3xl text-center sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our Story
          </h2>
          <p className="text-lg sm:text-xl text-center lg:w-2/3 mx-auto lg:text-2xl text-gray-700 mb-8">
            We started with a passion for crafting high-quality bicycles that
            not only meet the needs of cycling enthusiasts but also promote a
            healthier and more active lifestyle.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="w-full bg-white shadow-md py-5 px-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                Our Purpose
              </h3>
              <p className="text-gray-600">
                Our goal is to create a brand that is synonymous with
                reliability, comfort, and adventure. We aim to bring people
                closer to nature through cycling.
              </p>
            </div>
            <div className="w-full bg-white shadow-md py-5 px-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                We envision a world where cycling is a primary mode of
                transportation, bringing communities together and reducing our
                carbon footprint.
              </p>
            </div>
            <div className="w-full bg-white shadow-md py-5 px-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                Milestones
              </h3>
              <p className="text-gray-600">
                Since our founding, we’ve reached several key milestones:
                launching our first model, expanding to new cities, and winning
                design awards.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 px-4 sm:px-8 lg:px-16 bg-white">
        <div className=" ">
          <h2 className="text-3xl text-center sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
            Our Products
          </h2>
          <p className="text-lg text-center sm:text-xl lg:w-2/3 mx-auto lg:text-2xl text-gray-700 mb-12">
            Explore our top-selling models designed for every cycling adventure
            – from smooth roads to rugged mountain trails and everything in
            between.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Road Bike */}
            <div className="">
              <img
                src="https://images.unsplash.com/photo-1575585269294-7d28dd912db8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
                alt="Road Bike"
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Road Bike
              </h3>
              <p className="text-gray-600">
                Fast and lightweight, perfect for long-distance road cycling
                with aerodynamic designs.
              </p>
            </div>
            {/* Mountain Bike */}
            <div className="">
              <img
                src="https://media.istockphoto.com/id/1499976280/photo/mtb-bike-leaning-against-the-wall.webp?a=1&s=612x612&w=0&k=20&c=wqN_GjFbKEp0s1gfjkIfxTrdKcNELxSlsxDShz5eX8k="
                alt="Mountain Bike"
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Mountain Bike
              </h3>
              <p className="text-gray-600">
                Built for rugged trails, providing durability and comfort in
                rough terrains.
              </p>
            </div>
            {/* Electric Bike */}
            <div className="">
              <img
                src="https://images.unsplash.com/photo-1616963248328-6b7bea589840?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D"
                alt="Electric Bike"
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Electric Bike
              </h3>
              <p className="text-gray-600">
                Ride with ease and efficiency, featuring powerful motors for a
                smoother ride.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
