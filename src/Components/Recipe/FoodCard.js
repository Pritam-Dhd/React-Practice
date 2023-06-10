import React from "react";
import {useNavigate} from 'react-router-dom'

const FoodCard = ({ meal }) => {
  let navigate = useNavigate();
  return (
    <>
      <div className="card mt-2 mb-2 border-light-subtle h-100 h-sm-auto h-md-auto h-lg-auto h-xl-auto" onClick={()=>{
        navigate(`/${meal.idMeal}`)
      }}>
        <img
          className="card-img-top img-fluid food-img"
          src={meal.strMealThumb}
          alt="food"
        />
        <div className="card-body">
          <p className="food-name text-capitalize">{meal.strMeal}</p>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
