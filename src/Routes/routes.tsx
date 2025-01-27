import App from "@/App";
import ProductDeatils from "@/moduls/All Bicycles/ProductDeatils";
import About from "@/pages/About";
import AllBicycles from "@/pages/AllBicycles";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
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
        path: "/product-deatils",
        element: <ProductDeatils />,
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
]);

export default router;
