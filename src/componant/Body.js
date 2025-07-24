import React, { useEffect, useState } from "react";
import { Restaurantlist } from "../constants";
import Restrauntcard from "./Restrauntcard";
// import {useState} from "react";
const Body = () => {
  const [searchText, setsearchinput] = useState("");
  const [resto, setsearchclick] = useState(Restaurantlist);
  // console.log("render")

 async function getRestaurant() {
    const data=await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
  console.log(data);
    const json=await data.json()
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setsearchclick(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)||[]
  }

  useEffect(() => {
    // console.log("useeffect",searchText);
    getRestaurant();
  }, []);

  // console.log();
  const filterData = () => {
    // console.log("restrunt", resto);
    const rest = resto.filter((res) => {
      return res.info.name
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase());
    });
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
