import BikesCollection from "@/moduls/BikesCollection";

import HeroBenner from "@/moduls/Home/HeroBenner";
import Products from "@/moduls/Home/Products";
import Testimonials from "@/moduls/Home/Testimonials";
import Category from "./Categorys/Category";
import { HeroCarousel } from "@/moduls/Home/Banner";
import { AboutSection } from "@/moduls/Home/WhyChose";
import { BlogSection } from "@/moduls/Home/Blogs";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>RevoCycle - Home </title>
      </Helmet>
      <div className="min-h-screen">
        <HeroCarousel />
        <Category />
        <HeroBenner />
        <Products />
        <BikesCollection />
        <AboutSection />
        <BlogSection />
        <div className="pb-20">
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default Home;
