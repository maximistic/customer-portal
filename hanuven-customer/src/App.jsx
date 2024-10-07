import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "../src/Components/Header";
import Home from "../src/Sections/Home";
import ProductPage from "../src/Sections/ProductPage";
import Cart from "../src/Sections/Cart";
import "./index.css";

// Define your routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
  {
    path: "/ProductPage",
    element: (
      <>
        <Header />
        <ProductPage />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <Header />
        <Cart />
      </>
    ),
  },
]);

// Render the app using RouterProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);