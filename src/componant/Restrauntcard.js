import IMG_CDN_URl from "../constants.js"
import React from "react";
 const Restrauntcard = ({ restaurant }) => {
  const { name, avgRating, cloudinaryImageId, cuisines } = restaurant;
  return (
    <div className="card">
      <img
        src={`${IMG_CDN_URl}${cloudinaryImageId}`}
      />
      <h2>{name}</h2>
      <h3>{avgRating} star</h3>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};
export default Restrauntcard;