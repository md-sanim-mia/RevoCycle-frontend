const Testimonials = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 lg:px-0 px-3 gap-6">
        <div className=" w-full p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-300">
          <p className="text-gray-600 text-lg italic">
            "This service has been a game changer for me. Highly recommended!"
          </p>
          <div className="flex items-center mt-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Person 1"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="ml-4">
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-gray-500">CEO, CompanyName</p>
            </div>
          </div>
        </div>
        <div className=" w-full p-6 bg-white rounded-lg shadow-md transform hover:scale-105  transition duration-300">
          <p className="text-gray-600 text-lg italic">
            "This service has been a game changer for me. Highly recommended!"
          </p>
          <div className="flex items-center mt-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Person 1"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="ml-4">
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-gray-500">CEO, CompanyName</p>
            </div>
          </div>
        </div>
        <div className=" w-full p-6 bg-white rounded-lg shadow-md transform hover:scale-105  transition duration-300">
          <p className="text-gray-600 text-lg italic">
            "This service has been a game changer for me. Highly recommended!"
          </p>
          <div className="flex items-center mt-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Person 1"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="ml-4">
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-gray-500">CEO, CompanyName</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
