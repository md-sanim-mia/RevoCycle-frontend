import AboutBanner from "@/moduls/About/AboutBanner";
import ContactFrom from "@/moduls/About/ContactFrom";
import Story from "@/moduls/About/Story";
import WhyChoseUs from "@/moduls/About/WhyChoseUs";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>RevoCycle - About Us </title>
      </Helmet>
      <div>
        <AboutBanner />
        <Story />
        <WhyChoseUs />
        <ContactFrom />
      </div>
    </>
  );
};

export default About;
