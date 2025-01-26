import { Swiper, SwiperSlide } from "swiper/react";
import Rating from "react-rating";
import "swiper/css"; // Import Swiper core styles
import "swiper/css/free-mode";
// Import Swiper styles
import { FreeMode, Pagination } from "swiper/modules";
const Testimonials = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper pb-20 max-w-screen-xl mx-auto"
      >
        <SwiperSlide>
          <div className=" p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-300">
            <Rating initialRating={5} emptySymbol="☆" />
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
        </SwiperSlide>
        <SwiperSlide>
          <div className=" p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-300">
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
        </SwiperSlide>
        <SwiperSlide>
          <div className=" p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-300">
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
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Testimonials;
