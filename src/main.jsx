import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Contacts from "./components/Contacts";
import About from "./components/About";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
);
