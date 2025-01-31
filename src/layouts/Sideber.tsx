import { useCurrenUser } from "@/redux/features/Auth/auth.slice";
import { isOpens, setIsOpen } from "@/redux/features/sideberSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { adminPaht } from "@/Routes/adminRoute";
import { commonPath } from "@/Routes/CommonRoutes";
import { SideberGenetor } from "@/utils/SideberGenetor";
import { FaListAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Sideber = () => {
  const dispatch = useAppDispatch();
  const handileClickHiden = () => {
    dispatch(setIsOpen("isHiden"));
  };
  const isOpen = useAppSelector(isOpens);
  const user = useAppSelector(useCurrenUser);
  const userRole = {
    ADMIN: "admin",
    USER: "user",
    STUDENT: "student",
  };
  let sideberItems;

  switch (user?.role) {
    case userRole.ADMIN:
      sideberItems = SideberGenetor(adminPaht);
      break;
    case userRole.USER:
      sideberItems = SideberGenetor(commonPath);
      break;

    default:
      break;
  }
  return (
    <div>
      {/* Sidebar */}
      <div
        className={
          isOpen === "isShows"
            ? " z-40 md:fixed lg:flex flex-col justify-between overflow-x-hidden bg-[#121212] text-[#ffffff]  w-60 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform md:translate-x-0 transition duration-200 ease-in-out border-r"
            : isOpen === "isHiden"
            ? " z-40 md:fixed hidden lg:flex flex-col justify-between bg-[#121212] text-[#ffffff] overflow-x-hidden w-60 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform md:translate-x-0 transition duration-200 ease-in-out border-r"
            : "z-40 md:fixed hidden lg:flex flex-col justify-between overflow-x-hidden bg-gradient-to-b bg-[#121212] text-[#ffffff] w-60 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform md:translate-x-0 transition duration-200 ease-in-out border-r"
        }
      >
        <div>
          {/* logo */}
          <div className="items-center flex lg:justify-normal  gap-3 justify-between w-full px-1 mx-auto md:flex">
            <img
              className="h-10 w-10 rounded-full text-white"
              src="https://i.postimg.cc/pr02PbW9/fe366229-8b51-46f6-b08a-18169a3e955d.jpg"
              alt=""
            />
            <Link to="/">
              <h1 className=" text-3xl font-bold  text-white">RevoCycle</h1>
            </Link>
            <FaListAlt
              onClick={handileClickHiden}
              className="text-3xl lg:hidden cursor-pointer"
            />
          </div>
          <hr className="mt-3 mb-6" />
          {/* nav item */}
          <div className="flex  flex-col justify-between flex-1 mt-6">
            <nav>
              {sideberItems?.map((item) => (
                <>
                  <div>
                    <NavLink
                      to={`${item?.label}`}
                      className={({ isActive }) =>
                        `flex items-center py-1 px-4 mt-3 font-medium rounded-lg transition-colors duration-300 transform hover:bg-[#FF9800] ${
                          isActive
                            ? "bg-[#F57C00] text-[#ffffff]"
                            : "text-[#FFCC80]"
                        }`
                      }
                    >
                      {item.key}
                    </NavLink>
                  </div>
                </>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sideber;
