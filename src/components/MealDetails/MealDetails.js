import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MealDetails.css'
const MealDetails = () => {
    const { mealId } = useParams();
    const [meal, setMeal] = useState({});
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]))
    }, [mealId])
    return (
        <div className='stylishCardDetails m-auto my-28'>
            <img className='w-100 stylishImage' src={meal.strMealThumb} alt="" />
            <h3 className='font-bold text-slate-900 text-2xl mt-4 mb-3'>{meal.strIngredient2}</h3>
            <p className='stylishpara'>{meal?.strInstructions?.slice(0, 60)}</p>
            <ul className='stylishpara'>
                <li>{meal.strMeasure1}</li>
                <li>{meal.strMeasure2}</li>
                <li>{meal.strMeasure3}</li>
            </ul>
            <button className='stylishanchor' ><a href={meal.strSource}>This is link</a></button>
        </div>
    );
};

export default MealDetails;