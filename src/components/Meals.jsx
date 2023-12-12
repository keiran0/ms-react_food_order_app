import { useEffect, useState } from "react"

import Meal from "./Meal"

export default function Meals({addToCart}){

    function handleAddToCart(name){
        addToCart(name)
    }

    useEffect(()=>{
        async function fetchMeals(){
            const response = await fetch("http://localhost:3000/meals")
            const data = await response.json()
            setMeals(data)
        }
        fetchMeals();
    },[])

    const [meals, setMeals] = useState([])

    return(
        <div id="meals">
            {meals.map(meal=>
                <Meal handleAddToCart={handleAddToCart} key={meal.id} price={meal.price} description={meal.description} image = {meal.image} name={meal.name}/>
            )}
        </div>
    )
}