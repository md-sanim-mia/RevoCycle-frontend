import { Button } from "@/components/ui/button";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const ProductDeatils = () => {
  const bicycle = {
    name: "Mountain Bike X100",
    price: "$599",
    description:
      "A high-performance mountain bike designed for rugged trails and smooth rides.",
    images: [
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmljeWNsZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmljeWNsZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmljeWNsZXxlbnwwfHwwfHx8MA%3D%3D",
    ],
  };

  return (
    <div className="max-w-screen-xl h-full lg:px-10 mx-auto p-6 grid grid-cols-1  lg:grid-cols-2 gap-6">
      {/* Image Carousel */}
      <div>
        <Carousel showArrows={true} infiniteLoop={true} showThumbs={true}>
          {bicycle.images.map((img, index) => (
            <div key={index}>
              <img src={img} alt="Bicycle" className="w-full object-cover " />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Details Section */}
      <div className="lg:px-6 h-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          {bicycle.name}
        </h1>

        <p className="text-gray-600 mt-4">{bicycle.description}</p>
        <p className="text-3xl font-bold text-red-500 mt-4">$200</p>
        <div className="mt-4 grid gap-4 items-end">
          <div className="flex justify-between items-center gap-8">
            <p className="font-semibold text-lg">Brand:</p>
            <p className="text-lg">Bike X100</p>
          </div>
          <div className="flex justify-between items-center gap-8">
            <p className="font-semibold text-lg">Model:</p>
            <p className="text-lg">Bike X100</p>
          </div>
          <div className="flex justify-between items-center gap-8">
            <p className="font-semibold text-lg">Stock:</p>
            <p className="text-lg">1/100</p>
          </div>

          <div className=" flex items-center justify-between">
            <label
              htmlFor="quantity"
              className="font-semibold text-lg text-gray-700"
            >
              Totall Price : $300
            </label>
            <div className="flex items-center">
              <button className="px-4 py-2 bg-gray-300 text-lg text-gray-700 rounded-l-md hover:bg-gray-400">
                -
              </button>
              <input
                type="number"
                id="quantity"
                value="1"
                className="w-16 text-center p-2 border-t border-b border-gray-300 text-lg"
                readOnly
              />
              <button className="px-4 py-2 bg-gray-300 text-lg text-gray-700 rounded-r-md hover:bg-gray-400">
                +
              </button>
            </div>
          </div>
        </div>

        <div className=" lg:flex md:flex gap-4 mt-5 mb-4">
          <button className="w-full py-2 px-4 lg:mb-0  md:mb-0 mb-4 bg-black text-white font-semibold rounded-md hover:bg-red-500">
            Add to Cart
          </button>
          <button className="w-full py-2 px-4 bg-red-400 text-white font-semibold rounded-md hover:bg-black">
            Buy Now
          </button>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          <p>Free shipping on orders over $500.</p>
          <p className="mt-2">30-day returns for full refunds.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDeatils;
