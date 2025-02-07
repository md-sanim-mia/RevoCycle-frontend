import Dashboard from "@/layouts/Dashboard";
import ProductDeatils from "@/moduls/All Bicycles/ProductDeatils";
import About from "@/pages/About";
import AllBicycles from "@/pages/AllBicycles";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { routeGenerate } from "@/utils/RouteGenerate";
import { createBrowserRouter } from "react-router-dom";
import { adminPaht } from "./adminRoute";
import { commonPath } from "./CommonRoutes";
import ManinLayout from "@/layouts/ManinLayout";
import UpdateProduct from "@/moduls/Dashboard/UpdateProduct";
import Payment from "@/pages/Payments/Payment";
import Profile from "@/moduls/Dashboard/All User/Profile";
import PrivtedRouted from "./PrivtedRouted";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ManinLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allBicycles",
        element: <AllBicycles />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/product-details/:productId",
        element: (
          <PrivtedRouted>
            {" "}
            <ProductDeatils />
          </PrivtedRouted>
        ),
      },
      {
        path: "/payments",
        element: (
          <PrivtedRouted>
            <Payment />
          </PrivtedRouted>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivtedRouted>
        {" "}
        <Dashboard />
      </PrivtedRouted>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <PrivtedRouted>
        {" "}
        <Dashboard />
      </PrivtedRouted>
    ),
    children: routeGenerate(adminPaht),
  },
  {
    path: "/dashboard",
    element: (
      <PrivtedRouted>
        {" "}
        <Dashboard />
      </PrivtedRouted>
    ),
    children: routeGenerate(commonPath),
  },
  {
    path: "/dashboard",
    element: (
      <PrivtedRouted>
        {" "}
        <Dashboard />
      </PrivtedRouted>
    ),
    children: [
      {
        path: "/dashboard/update-Product/:productId",
        element: <UpdateProduct />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
