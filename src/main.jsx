import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";

//CONTEXT
import { AuthProvider } from "./context/AuthProvider";

//PAGES
import App from "./App.jsx";
import Login from "./pages/Login";
import Register from "./pages/Register";

//LOADERS
import { loader as appLoader } from "./App.jsx";
import Headers from "./components/Headers";
import ErrorElement from "./components/errorElement";

import Perfil from "./pages/Perfil";




const router = createHashRouter([
  {
    path: "/",
    element: <Headers />,
    children: [
      {
        index: true,
        element: <App />,
        loader: appLoader,
        errorElement: <ErrorElement />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/perfil",
        element: <Perfil />,
      },
    ],
  },
]);




ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider
        router={router}
      ></RouterProvider> 
    </AuthProvider>
  </React.StrictMode>
);
