import AddProuct from "@/moduls/Dashboard/AddProuct";
import AllUser from "@/moduls/Dashboard/All User/AllUser";
import AllProduct from "@/moduls/Dashboard/AllProduct";
import PaymentHistory from "@/moduls/Dashboard/PaymentHistory";
import Admin from "@/pages/Dashboard/Admin";
import { LayoutDashboard, Package, ShoppingCart, Users } from "lucide-react";

export const adminPaht = [
  {
    name: "Dashboard",
    path: "admin",
    icon: LayoutDashboard,
    element: <Admin />,
  },
  {
    name: "Products",
    path: "all-product",
    icon: Package,
    element: <AllProduct />,
  },
  {
    name: "Customers",
    path: "all-user",
    icon: Users,
    element: <AllUser />,
  },
  {
    name: "Add Product",
    path: "add-product",
    icon: Package,
    element: <AddProuct />,
  },

  {
    name: "Orders",
    path: "all-payment-history",
    icon: ShoppingCart,
    element: <PaymentHistory />,
  },
];
