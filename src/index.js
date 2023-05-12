
import ReactDom from "react-dom/client";
import App from './App';
import Products from './Pages/AllProducts/AllProducts';
import React from "react";

import {
    createBrowserRouter,
    RouterProvider,route,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>
    },
    {
      path: "/Products",
      element: <Products/>
    },
  ]);

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
);