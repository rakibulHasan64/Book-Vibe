// main.jsx বা index.jsx
import React, { Children, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 

import App from "./App.jsx";
import "./index.css";
import About from "./componet/About.jsx";
import AllLayoutHome from "./home/AllLayoutHome.jsx";
import SingleBook from "./home/SingleBook.jsx";
import Register from "./reslogine/Register.jsx";
import Login from "./reslogine/Login.jsx";

import Sort from "./listedbook/Sort.jsx";






const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      
      {
        path: "/home",
        element: <AllLayoutHome />
      },
      {
        path: "/about",
        loader: () => fetch('/data.json'),
        element: <Sort />
      },

      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/logine",
        element: <Login />
      },

    
      {
        path: "data/:id", 
        loader: ()=> fetch('/data.json'),
        element: <SingleBook />
      }



      



      
    ]
  } 

]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
