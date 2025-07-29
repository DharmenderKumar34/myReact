import React, { useState } from "react";
// import IMG from "../assets/img/Foodvilla.png";
// const loggedIn = () => {
//   return false;
// };

const Header = () => {
const [login,setlogin]=useState(true)
const handlelogin=()=>{
  setlogin(!login)
}
  return (

    <div className="nav-list">
      <div>
        {/* <a href="/"> */}
          <img
            src={"/lpu.webp"}
            className="logo"
          />
        {/* </a> */}
      </div>
      <div
        style={{
          backgroundColor: "red",
        }}
      >
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {/* {loggedIn() ? <button>Logout</button> : <button onClick={

      }>Login</button>} */}
      <button onClick={handlelogin}>{login?"login":"logout"}</button>
    </div>
  );
};
// const login = () => {
//   return (
//     <div>
//       <input type="text" name="Name" placeholder="Enter your name" />
//       <input type="Number" name="Mobile No." placeholder="Enter your Number" />

//       <button>login</button>
//     </div>
//   );
// };
export default Header;
