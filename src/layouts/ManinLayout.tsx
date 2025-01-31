import { Outlet } from "react-router-dom";
import Naver from "./Naver";
import Footer from "./Footer";
import ProductLayout from "./ProductLayout";

const ManinLayout = () => {
  return (
    <div className="bg-gray-50">
      <div className="h-16  lg:mb-3 ">
        <Naver />
      </div>
      <ProductLayout />
      <Outlet />
      <Footer />
    </div>
  );
};

export default ManinLayout;
