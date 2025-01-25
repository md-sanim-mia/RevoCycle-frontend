import BikesCollection from "@/moduls/BikesCollection";
import Banner from "@/moduls/Home/Banner";
import HeroBenner from "@/moduls/Home/HeroBenner";
import Products from "@/moduls/Home/Products";
import Testimonials from "@/moduls/Home/Testimonials";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner></Banner>
      <HeroBenner />
      <Products />
      <BikesCollection />
      <div className="pb-20">
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
