
import ReactDom from "react-dom/client";
import App from './App';
import React from "react";

import {
    createBrowserRouter,
    RouterProvider,route,
  } from "react-router-dom";
import { AllProducts } from "./Pages";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>
    },
  ]);

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <App/>
      <AllProducts/>
      {/* therw is problem when i use BrowserRouter so 
    <RouterProvider router={router} /> */}
    </React.StrictMode>
);