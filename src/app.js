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
import { ErrorPage } from "./components/ErrorPage";
import { RestaurantMenu } from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage/>,
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
      },
      {
        path: '/restaurant/:restId',
        element: <RestaurantMenu/>
      },
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);;
