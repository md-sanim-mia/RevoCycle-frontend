import AllProduct from "@/moduls/All Bicycles/AllProduct";
import BicycleBanner from "@/moduls/All Bicycles/BicycleBanner";
import BicyclesCard from "@/moduls/All Bicycles/BicyclesCard";

const AllBicycles = () => {
  return (
    <div className="">
      <BicycleBanner />
      <BicyclesCard />
      <AllProduct />
    </div>
  );
};

export default AllBicycles;
