import { useCurrenUser } from "@/redux/features/Auth/auth.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiHeartAddLine, RiShoppingCart2Line } from "react-icons/ri";
import DynamicIconButton from "@/utils/DynamicIconButton";
import { setCardSideber } from "@/redux/features/sideberSlice";
const Naver = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useAppSelector(useCurrenUser);
  const dispatch = useAppDispatch();
  const handileClickIsShow = () => {
    dispatch(setCardSideber(true));
  };
  const role = user?.role;
  return (
    <div className="">
      {" "}
      <nav className=" fixed z-40 w-full mx-auto  bg-[#000000] shadow dark:bg-gray-800">
        <div className="max-w-screen-xl px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <h2 className="text-gray-300 text-xl">RevoCycle</h2>
              <div className="flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  {!isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div
              className={`absolute inset-x-0 z-20 w-2/3 px-6 py-4  transition-all duration-300 ease-in-out lg:h-min  h-screen bg-[#000000] dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "opacity-0 -translate-x-full"
              }`}
            >
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center  lg:mx-8">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white font-semibold  py-2 mx-3"
                      : " py-2 mx-3  mt-2 hover:text-white  transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 text-gray-400"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to={"/allBicycles"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white font-semibold   py-2 mx-3"
                      : " py-2 mx-3 mt-2 hover:text-white  transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 text-gray-400"
                  }
                >
                  All Bicycles
                </NavLink>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white font-semibold   py-2 mx-3"
                      : " py-2 mx-3 mt-2 hover:text-white  transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 text-gray-400"
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to={`/dashboard/${role}`}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white font-semibold   py-2 mx-3"
                      : " py-2 mx-3 mt-2 hover:text-white  transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 text-gray-400"
                  }
                >
                  Dashboard
                </NavLink>
                <div onClick={handileClickIsShow} className="mt-2 mx-3">
                  <DynamicIconButton icon={RiHeartAddLine} count={6} />
                </div>
                <div onClick={handileClickIsShow} className="mt-2 mx-3">
                  <DynamicIconButton icon={RiShoppingCart2Line} count={6} />
                </div>
              </div>
              {user ? (
                <div className="flex items-center mt-4 lg:mt-0">
                  <button
                    className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                    aria-label="show notifications"
                  >
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    className="flex items-center focus:outline-none"
                    aria-label="toggle profile dropdown"
                  >
                    <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                      <img
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                        className="object-cover w-full h-full"
                        alt="avatar"
                      />
                    </div>
                  </button>
                </div>
              ) : (
                <NavLink
                  to={"/login"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white font-semibold py-2 mx-3 mt-2"
                      : " py-2 mx-3 mt-2 hover:text-white  transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 text-gray-400"
                  }
                >
                  Sign in
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* <div className="w-full h-16 fixed z-40 ">
        <nav className="bg-[#000000]  w-full shadow dark:bg-gray-800">
          hello
        </nav>
      </div> */}
    </div>
  );
};

export default Naver;
