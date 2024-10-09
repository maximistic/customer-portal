import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

import "./index.css";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import ProductPage from "./Pages/ProductPage";
import Contact from "./Pages/Contact";
import News from "./Components/LatestNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ProductPage",
    element: <ProductPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
