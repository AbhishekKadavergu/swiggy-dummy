import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./components/Home";
import { Aboutus } from "./components/Aboutus";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [,
      {
        path: '/',
        element: <Body/>
      },
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/aboutus',
        element: <Aboutus/>
      }]
  }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);;
