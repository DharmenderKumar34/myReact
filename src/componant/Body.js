import React, { useState } from "react";
import { Restaurantlist } from "../constants";
import Restrauntcard from "./Restrauntcard";
// import {useState} from "react";
const Body = () => {
  const [searchText, setsearchinput] = useState("kfc");
  return (
    <React.Fragment>
      <div>
        <input
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setsearchinput(e.target.value);
          }}
        />
        <button className="searchbtn">Search-{searchText}</button>
      </div>
      
      <div className="rest">
        {Restaurantlist.map((restaurant, index) => (
          <Restrauntcard restaurant={restaurant.info} key={index} />
        ))}
      </div>
    </React.Fragment>
  );
};
export default Body;
