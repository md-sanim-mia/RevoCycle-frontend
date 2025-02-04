import UserOrders from "@/moduls/Dashboard/UserOrders";
import User from "@/pages/Dashboard/User";
export const commonPath = [
  {
    name: "Dashboard",
    path: "user",
    element: <User />,
  },
  {
    name: "View order",
    path: "view-order",
    element: <UserOrders />,
  },
];
