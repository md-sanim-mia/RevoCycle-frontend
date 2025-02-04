import { setIsOpen } from "@/redux/features/sideberSlice";
import { useAppDispatch } from "@/redux/hook";

import { useState } from "react";
import { FaListAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Heder = () => {
  const dispatch = useAppDispatch();
  const handileClickShows = () => {
    dispatch(setIsOpen("isShows"));
  };
  const [isOpens, setIsOpens] = useState(false);
  return (
    <div className="sticky h-16 top-0 z-30 text-white p-4 py-2 bg-[#000000] border-b">
      <div className="flex items-center justify-between gap-2 pr-6 space-x-6">
        {/* Notification Icon */}
        <div className="flex items-center gap-6">
          <FaListAlt
            onClick={handileClickShows}
            className="text-3xl cursor-pointer"
          />
          <h2>RevoCycle</h2>
        </div>
        <div className="relative inline-block">
          {/* Dropdown toggle button */}
          <button
            onClick={() => setIsOpens(!isOpens)}
            className="relative z-10 "
          >
            <img
              className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
              src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
              alt="jane avatar"
            />
          </button>

          {/* Dropdown menu */}
          {isOpens && (
            <div
              className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800"
              onClick={() => setIsOpens(false)}
            >
              <a
                href="#"
                className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <img
                  className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                  src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
                  alt="jane avatar"
                />
                <div className="mx-1">
                  <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Jane Doe
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    janedoe@exampl.com
                  </p>
                </div>
              </a>

              <hr className="border-gray-200 dark:border-gray-700" />

              <a
                href="#"
                className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5 mx-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <Link to={"/dashboard/profile"}>
                  {" "}
                  <span className="mx-1">View Profile</span>
                </Link>
              </a>

              <button className="mx-1  p-3  hover:bg-gray-100">Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Heder;
