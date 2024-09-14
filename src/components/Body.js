import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from 'react-router-dom'

const Body = () => {
  const [restaurantList, setrestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    console.log("Use effect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("From fetch data!");
    const restDataJson = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const restData = await restDataJson.json();
    console.log(restData)
    setrestaurantList(
      restData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurantList(
      restData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const search = ()=>{
    if(!searchText.trim()){
      console.log('From Search text');      
      console.log(searchText);      
      return;
    }
    console.log(restaurantList);
    const filteredList = restaurantList.filter((rest)=> rest.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()))
    setFilteredRestaurantList(filteredList)
    console.log(filteredList)
}

const filterTopRestaurants = () => {
  console.log('Top Rated restaurats');
  console.log(restaurantList);
  
  const filteredList = restaurantList.filter(
    (res) => res.info.avgRating > 4.5
  );
  setFilteredRestaurantList(filteredList);
}

  return restaurantList.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div className="search">
            <input type="text" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value)
            }}></input>
            <button onClick={search}>Search</button>

        </div>
        <button
          className="filter-btn"
          onClick={filterTopRestaurants}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="rest-container">
        {filteredRestaurantList?.map((rest) => (
          <Link to={'/restaurant/'+rest?.info?.id} key={rest?.info?.id}>
          <RestaurantCard  restData={rest} />
          </Link>
        ))}
      </div>
    </div >
  );
};

export default Body;
