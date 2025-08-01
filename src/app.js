import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./componant/Header";
import Body from "./componant/Body";
import About from "./componant/About";
import Error from "./componant/Error";
import Contact from "./componant/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import RestaurantMenu from "./componant/RestaurantMenu";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  );
};

const Approuter = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        Component: Body,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/restaurant/:id",
        Component: RestaurantMenu,
      },
    ],
  },
]);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approuter} />);
