 import React from "react";
 import ReactDOM from "react-dom/client";
   console.log("hello verma");
    const heading=(
       <h1
      id="title" key="h">
      Nameste react
      </h1>
    )
      let root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(heading);