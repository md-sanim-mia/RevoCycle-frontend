import UserOrders from "@/moduls/Dashboard/UserOrders";
import User from "@/pages/Dashboard/User";
import { LayoutDashboard, ShoppingCart } from "lucide-react";
export const commonPath = [
  {
    name: "Dashboard",
    path: "user",
    icon: LayoutDashboard,
    element: <User />,
  },
  {
    name: "View order",
    path: "view-order",
    icon: ShoppingCart,
    element: <UserOrders />,
  },
];
