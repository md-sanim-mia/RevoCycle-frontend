import AddProuct from "@/moduls/Dashboard/AddProuct";
import AllUser from "@/moduls/Dashboard/All User/AllUser";
import AllProduct from "@/moduls/Dashboard/AllProduct";
import Admin from "@/pages/Dashboard/Admin";

export const adminPaht = [
  {
    name: "Dashboard",
    path: "admin",
    element: <Admin />,
  },
  {
    name: "All User",
    path: "all-user",
    element: <AllUser />,
  },
  {
    name: "Add Product",
    path: "add-product",
    element: <AddProuct />,
  },
  {
    name: "All Product",
    path: "all-product",
    element: <AllProduct />,
  },
];
