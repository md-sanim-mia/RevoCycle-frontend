import { setIsOpen } from "@/redux/features/sideberSlice";
import { useAppDispatch } from "@/redux/hook";

import { FaListAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Heder = () => {
  const dispatch = useAppDispatch();
  const handileClickShows = () => {
    dispatch(setIsOpen("isShows"));
  };

  return (
    <div className=" lg:hidden fixed h-14 top- w-full  bg-gray-100 z-30 p-4 py-2  border-b">
      <div className="flex items-center justify-between gap-2 pr-6 space-x-6">
        {/* Notification Icon */}
        <div className="flex items-center gap-6">
          <FaListAlt
            onClick={handileClickShows}
            className="text-3xl cursor-pointer"
          />
          <Link to={"/"}>
            <h2>RevoCycle</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heder;
