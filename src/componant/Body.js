import React from "react";
import {Restaurantlist} from "../constants"
import Restrauntcard from "./Restrauntcard"
const Body = () => {
  return (
    <div className="rest">
      {Restaurantlist.map((restaurant, index) => (
        <Restrauntcard restaurant={restaurant.info} key={index} />
      ))}
    </div>
  );
};
export default Body