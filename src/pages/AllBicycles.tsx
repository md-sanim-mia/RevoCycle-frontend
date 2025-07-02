import BicycleBanner from "@/moduls/All Bicycles/BicycleBanner";
import BicyclesCard from "@/moduls/All Bicycles/BicyclesCard";
import { Helmet } from "react-helmet-async";

const AllBicycles = () => {
  return (
    <>
      <Helmet>
        <title>RevoCycle - All Bicycles </title>
      </Helmet>
      <div className="">
        <BicycleBanner />
        <BicyclesCard />
      </div>
    </>
  );
};

export default AllBicycles;
