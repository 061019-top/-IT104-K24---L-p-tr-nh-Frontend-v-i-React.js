
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import type UsedManager from "../pages/UserManager";
import UserManager from "../pages/UserManager";
import NotFound from "../pages/NotFound";
import ProductDetail from "../pages/ProductDetail";
import OderManager from "../pages/OderManager";
import Admin from "../layouts/Admin";
import ProtectedRoute from "../component/ProtectedRoute";
import ProductManager from "../pages/ProductManager";


export const routers = createBrowserRouter([
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/admin",
    element:  <ProtectedRoute  element={<Admin></Admin>}></ProtectedRoute>,
    children: [
      {
        path: "user",
        element: <UserManager></UserManager>,
      },
       {
        path: "product",
        element: <ProductManager></ProductManager>,
      },
      {
        path: "order",
        element: <OderManager></OderManager>,
      },
      {
        path: "product/:abc",
        element: <ProductDetail></ProductDetail>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
