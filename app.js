import React from "react";
import ReactDOM from "react-dom/client";
console.log("hello verma");
const Heading = () => {
  return (
    <>
      <div>
        <a href="/">
          <img src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4=w256-rw" />
        </a>
        <h1 id="title" key="h"></h1>
      </div>
      </>
  );
};
const Headercomponent = () => {
  return (
    <div class="header">
      <Heading />
      <nav>
        <ul>
          <li>home</li>
          <li>about</li>
          <li>contact</li>
          <li>cart</li>
        </ul>
      </nav>
    </div>
  );
};

let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render([Heading]);
root.render(<Headercomponent />);
