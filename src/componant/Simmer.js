import React from "react";

const Simmer = () => {
  console.log();
  return (
    <div className="Simmer-parent">
      {Array(20)
        .fill("")
        .map(() => {
          return <div className="Restrauntlist" key={Math.random()}> </div>
         
        })}
    </div>
  );
};

export default Simmer;
