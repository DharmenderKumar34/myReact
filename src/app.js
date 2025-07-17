import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./componant/Header"
import Body from "./componant/Body"

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
    </React.Fragment>
  );
};
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
