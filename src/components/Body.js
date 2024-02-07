import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";

const Body = () => {
  const [resturantList, setresturantList] = useState([]);
  const [filteredResturantList, setFilteredResturantList] = useState([]);
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
    setresturantList(
      restData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredResturantList(
      restData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return resturantList.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div className="search">
            <input type="text" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value)
            }}></input>
            <button onClick={()=>{
                console.log(resturantList);
                const filteredList = resturantList.filter((rest)=> rest.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()))
                setFilteredResturantList(filteredList)
                console.log(filteredList)

            }}>Search</button>

        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resturantList.filter(
              (res) => res.info.avgRating > 4
            );
            setresturantList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="rest-container">
        {filteredResturantList?.map((rest) => (
          <RestaurantCard key={rest?.info?.id} restData={rest} />
        ))}
      </div>
    </div>
  );
};

export default Body;
