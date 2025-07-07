import { Outlet } from "react-router-dom";
import Sideber from "./Sideber";

const Dashboard = () => {
  return (
    <div>
      <Sideber />
      <div className="min-h-screen ">
        {/* -------fixed header section ---------- */}

        {/*--------------- outlate content section ---------- */}
        <div className="flex-1  lg:ml-[266px]">
          <div className="pr-5 py-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
