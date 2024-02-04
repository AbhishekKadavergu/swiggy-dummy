import { RESTO_IMG } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, cuisines, costForTwo, avgRating, sla } =
    props.restData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          RESTO_IMG +
          cloudinaryImageId
        }
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} min</h4>
    </div>
  );
};

export default RestaurantCard;
