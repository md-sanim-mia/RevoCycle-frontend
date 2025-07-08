import { Outlet } from "react-router-dom";
import Sideber from "./Sideber";
import Heder from "./Heder";

const Dashboard = () => {
  return (
    <div>
      <Sideber />
      <div className="min-h-screen ">
        {/* -------fixed header section ---------- */}
        <div className="h-14 lg:hidden ">
          <Heder />
        </div>
        {/*--------------- outlate content section ---------- */}
        <div className="flex-1  lg:ml-[266px]">
          <div className="px-3 py-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
