import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { useCurrenUser } from "@/redux/features/Auth/auth.slice";
import { isOpens, setIsOpen } from "@/redux/features/sideberSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { adminPaht } from "@/Routes/adminRoute";
import { commonPath } from "@/Routes/CommonRoutes";
import { SideberGenetor } from "@/utils/SideberGenetor";
import { LogOut, Settings, Shield, User } from "lucide-react";
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
  console.log("this is dashboard", sideberItems);
  return (
    <div>
      {/* Sidebar */}
      <div
        className={`z-40 fixed flex-col justify-between overflow-x-hidden bg-gray-50 w-60 space-y-6 px-2 py-4 inset-y-0 left-0 transform transition duration-200 ease-in-out border-r
    ${
      isOpen === "isShows"
        ? "flex"
        : isOpen === "isHiden"
        ? "hidden"
        : "hidden lg:flex"
    }
  `}
      >
        <div>
          {/* logo */}
          <div className="items-center flex lg:justify-normal  gap-3 justify-between w-full px-1 mx-auto md:flex">
            <Link to="/">
              <h1 className=" text-3xl font-bold  ">RevoCycle</h1>
            </Link>
            <FaListAlt
              onClick={handileClickHiden}
              className="text-3xl lg:hidden cursor-pointer"
            />
          </div>
          <Separator className="my-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white" />
          {/* nav item */}
          <div className="flex  flex-col justify-between flex-1 mt-4">
            <nav>
              {sideberItems?.map((item) => (
                <>
                  <div>
                    <NavLink
                      to={`${item?.label}`}
                      className={({ isActive }) =>
                        `group flex items-center justify-between px-3 py-3 mb-3 text-sm font-medium rounded-xl transition-all duration-200 transform
           ${
             isActive
               ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
               : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:translate-x-1"
           }`
                      }
                    >
                      <div className="flex items-center transition-transform duration-200 group-hover:translate-x-1">
                        <item.icon className="mr-3 h-5 w-5" />
                        {item.key}
                      </div>
                    </NavLink>
                  </div>
                </>
              ))}
            </nav>
          </div>

          <div className="w-full mt-6 ">
            <Separator className="my-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="w-full group flex items-center px-3 py-3  font-medium rounded-xl transition-all duration-200 text-gray-700 hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-white">
                  <Settings className="mr-3 h-5 w-5" />
                  Profile
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 p-2">
                <DropdownMenuLabel className="p-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                        AD
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-900">Admin User</p>
                      <p className="text-sm text-gray-500">admin@bikehub.com</p>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="p-3 hover:bg-gray-50 rounded-lg">
                  <User className="mr-3 h-4 w-4" />
                  Profile Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="p-3 hover:bg-gray-50 rounded-lg">
                  <Shield className="mr-3 h-4 w-4" />
                  Security
                </DropdownMenuItem>
                <DropdownMenuItem className="p-3 hover:bg-gray-50 rounded-lg">
                  <Settings className="mr-3 h-4 w-4" />
                  Preferences
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="p-3 hover:bg-red-50 rounded-lg text-red-600">
                  <LogOut className="mr-3 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sideber;
