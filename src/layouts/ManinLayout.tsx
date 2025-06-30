import { Outlet } from "react-router-dom";
import Naver from "./Naver";
import Footer from "./Footer";
import ProductLayout from "./ProductLayout";
import WishiList from "./WishiList";

const ManinLayout = () => {
  return (
    <div className="bg-gray-50">
      <div className="h-16  lg:mb-3 ">
        <Naver />
      </div>
      <ProductLayout />
      <WishiList />
      <Outlet />
      <Footer />
    </div>
  );
};

export default ManinLayout;
