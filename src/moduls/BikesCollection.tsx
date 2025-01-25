const BikesCollection = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className=" lg:flex justify-center gap-8 lg:py-20 md:14 ">
        {/* Card 1 */}
        <div className="relative w-1/3 h-64 rounded-lg overflow-hidden group">
          <img
            src="https://media.istockphoto.com/id/1740244348/photo/smiling-asian-woman-in-her-20s-wearing-casual-clothes-and-headphones-riding-a-bicycle-on-the.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ga8ggvNjP3xclcnMzCsze_rrv98RWLOkK5IGcmN1Go8="
            alt="Singletrack Speed"
            className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 flex items-center justify-center text-center text-white p-4">
            <div>
              <h3 className="text-2xl font-bold">Singletrack Speed</h3>
              <p className="text-lg mt-2">The All-New Trance Advanced</p>
              <button className="mt-4 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">
                View Collection
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative w-1/3 h-64 rounded-lg overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmljeWNsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Trail Power"
            className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 flex items-center justify-center text-center text-white p-4">
            <div>
              <h3 className="text-2xl font-bold">Trail Power</h3>
              <p className="text-lg mt-2">25% Off Trance X Advanced E+</p>
              <button className="mt-4 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">
                View Collection
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative w-1/3 h-64 rounded-lg overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmljeWNsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Road Bikes"
            className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 flex items-center justify-center text-center text-white p-4">
            <div>
              <h3 className="text-2xl font-bold">Road Bikes</h3>
              <p className="text-lg mt-2">New Styles Just Got In</p>
              <button className="mt-4 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">
                View Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikesCollection;
