import { useEffect, useState } from "react"
import { MENU_URL } from "../utils/constants"
import { Shimmer } from "./Shimmer"

export const RestaurantMenu = ()=>{

    const [restMenuList, setRestMenuList] = useState(null)
    useEffect(()=>{
        fetchRestaurantMenu();
        
    }, [])
    
    const fetchRestaurantMenu = async ()=>{
        const restMenu = await fetch(MENU_URL)
        const jsonData = await restMenu.json()
        setRestMenuList(jsonData)
        console.log(jsonData)
    }
    if(restMenuList === null){
        console.log("Inside if")
        return <Shimmer/>
    }

    const restoName = restMenuList?.data?.cards[0]?.card?.card?.info?.name
    const menuList = restMenuList.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards


    return (
        <div>
            <h1>
                {restoName}
            </h1>
            <h2>
                Menu
            </h2>
            <ul>
                {menuList.map(menu=> <li key={menu.card.info.id}>{menu.card.info.name}</li>)}
            </ul>

        </div>
    )
}