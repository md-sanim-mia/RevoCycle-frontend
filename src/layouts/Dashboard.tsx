import { Outlet } from "react-router-dom";
import Sideber from "./Sideber";
import Heder from "./Heder";

const Dashboard = () => {
  return (
    <div>
      <Sideber />
      <div className="min-h-screen ">
        {/* -------fixed header section ---------- */}
        <div>
          <Heder />
        </div>
        {/*--------------- outlate content section ---------- */}
        <div className="flex-1  lg:ml-64">
          <div className="pr-5 py-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
