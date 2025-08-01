import React, { useEffect, useState } from "react";
// import { Restaurantlist } from "../constants";
import Restrauntcard from "./Restrauntcard";
import Simmer from "./Simmer";
// import {useState} from "react";
const Body = () => {
  const [searchText, setsearchinput] = useState("");
  const [resto, setsearchclick] = useState([]);
  const [Filterresto, setFiltersearchclick] = useState([]);

  // console.log("render")

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // console.log(data);
    const json = await data.json();
    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setsearchclick(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ) || [];
    setFiltersearchclick(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ) || [];
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
    // setsearchclick(rest);
    setFiltersearchclick(rest);
  };
  console.log("renderbody");
  return resto?.length === 0 ? (
    <Simmer />
  ) : (
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
        {Filterresto.length == 0 ? (
          <h1>No data found</h1>
        ) : (
          Filterresto.map((restaurant, index) => (
            <a
              href={`/restaurant/${restaurant.info.id}`}
              key={restaurant.info.id}
            >
              <Restrauntcard restaurant={restaurant.info} />
            </a>
          ))
        )}
      </div>
    </React.Fragment>
  );
};
export default Body;
