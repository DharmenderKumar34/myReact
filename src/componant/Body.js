import React, { useEffect, useState } from "react";
import { Restaurantlist } from "../constants";
import Restrauntcard from "./Restrauntcard";
// import {useState} from "react";
const Body = () => {
  const [searchText, setsearchinput] = useState("");
  const [resto, setsearchclick] = useState(Restaurantlist);
  // console.log("render")
  useEffect(()=>{
    console.log("render");
  },[searchText])
  console.log("object");
  const filterData = () => {
    // console.log("restrunt", resto);
    const rest = Restaurantlist.filter((res) => {
      return res.info.name
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase());
    });
    // console.log(rest);

    setsearchclick(rest);
  
  };
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

        {/* <h1>{searchClicked}</h1> */}
        <button
          className="searchbtn"
          onClick={() => {
            filterData();
          }}
        >
          Search
        </button>
      </div>

      <div className="rest">
        {resto.map((restaurant, index) => (
          <Restrauntcard restaurant={restaurant.info} key={index} />
        ))}
      </div>
    </React.Fragment>
  );
};
export default Body;
