 import React from "react";
 import ReactDOM from "react-dom/client";
   console.log("hello verma");
    const Heading=()=>(
       <h1
      id="title" key="h">
      Nameste react
      </h1>
    )
    const Headercomponent=()=>{
      return(
        <div>
          {<Heading/>}
          <h1>Nameste react by Akshay saini</h1>
          <h2>This is h2 tag</h2>
          
        </div>
      )
    }

    
      let root = ReactDOM.createRoot(document.getElementById("root"));
      // root.render([Heading]);
      root.render(<Headercomponent/>);