import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./componant/Header";
import Body from "./componant/Body";
import About from "./componant/About";
import Error from "./componant/Error";
import { createBrowserRouter, RouterProvider } from "react-router";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
    </React.Fragment>
  );
};

const Approuter = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    errorElement: <Error />,
  },
  {
    path: "/about",
    Component: About,
  },
]);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approuter} />);
