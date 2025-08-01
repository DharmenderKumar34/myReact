import React from "react";
import { useParams } from "react-router";
const RestaurantMenu = () => {
  const params = useParams();
  console.log(params);
  return <div>Restaurant{params.id}</div>;
};

export default RestaurantMenu;
