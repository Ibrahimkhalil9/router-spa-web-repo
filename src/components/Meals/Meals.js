import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css'
const Meals = () => {
    const [food, setFood] = useState("");
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`
        console.log(url.length)
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [food])
    const handleFood = e => {
        setFood(e.target.value);
    };
    return (
        <div>
            <input onChange={handleFood} className='mt-8 bg-grey-300 border-4 rounded-md' type="hi" />
            <button className='stylishButtonForSearch'>Search</button>
            <div className='grid md:grid-cols-3 gap-4 container p-4 mx-auto stylishCards'>
                {
                    meals?.map(meal => <Meal meal={meal} key={meal.idMeal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;