import React, { useState } from "react";
import { Link } from "react-router";
const Header = () => {
  const [login, setlogin] = useState(true);
  const handlelogin = () => {
    setlogin(!login);
  };
  return (
    <div className="nav-list">
      <div>
        <a href="/">
          <img
            src="https://content3.jdmagicbox.com/comp/rohtak/j1/9999p1262.1262.230322230029.w5j1/catalogue/food-villa-family-restaurant-and-hotel-rohtak-restaurants-vepedpc3pq.jpg"
            className="logo"
          />
        </a>
      </div>
      <div
        style={{
          backgroundColor: "red",
        }}
      >
        <ul className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {/* {loggedIn() ? <button>Logout</button> : <button onClick={

      }>Login</button>} */}
      <button onClick={handlelogin}>{login ? "login" : "logout"}</button>
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
