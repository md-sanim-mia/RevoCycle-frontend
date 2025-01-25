import { Outlet } from "react-router-dom";
import Naver from "./Naver";
import Footer from "./Footer";

const ManinLayout = () => {
  return (
    <div className="bg-gray-50">
      <div className="h-16 lg:mb-3 ">
        <Naver />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default ManinLayout;
