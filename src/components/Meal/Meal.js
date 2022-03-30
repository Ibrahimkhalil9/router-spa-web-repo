import React, { useState } from 'react';
import './Meal.css';
import { GiftIcon } from '@heroicons/react/solid'
import { useNavigate } from 'react-router-dom';

const Meal = ({ meal }) => {
    const { strMealThumb, strMeal, strInstructions, idMeal } = meal;

    const navigate = useNavigate();
    const mealDetails = () => {
        const path = `/Meal/${idMeal}`;
        navigate(path);
    }

    return (
        <div className='stylishCard'>
            <img className='ml-1 mt-1 w-72 h-72 rounded-md' src={strMealThumb} alt="" />
            <h1 className='text-3xl'>{strMeal}</h1>
            <p>{strInstructions.slice(0, 60)}</p>
            <button onClick={mealDetails} className='stylishButton'>
                <p> Order Now </p>
                <GiftIcon className='w-6 h-6'></GiftIcon>
            </button>
        </div>
    );
};

export default Meal;