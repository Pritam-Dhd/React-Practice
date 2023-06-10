import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import { useParams } from "react-router-dom";
import axios from "axios";
import Ingredients from "./Ingredients";
import Video from "./Video";

const Recepies = () => {
  const { MealId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`
        );
        const { meals } = response.data;
        setItems(meals);
        setLoading(false); // Data fetched, set loading to false
      } catch (error) {
        // Handle error if needed
        console.log(error);
        setLoading(false); // Error occurred, set loading to false
      }
    };

    if (MealId !== "") {
      fetchData();
    }
  }, [MealId]);
  

  return (
    <>
      <div className="container">
        <div className="row ">
          {loading ? (
            <Loading />
          ) : (
            <div className="col">
              <img
                src={items[0].strMealThumb}
                alt=""
                className="card-img-top mx-auto d-block mt-2 img-fluid recipe-img"
              />
              <div className="containts">
                <h3 className="mt-4">{items[0].strMeal}</h3>
                <h6 className="mt-2">
                  <span className="category">Category: </span>
                  <span className="text-primary">{items[0].strCategory}</span>
                </h6>
                <div className="row mt-4">
                  <div className="col-5">
                    <Ingredients items={items} />
                  </div>
                  <div className="col-7">
                    <h5>Instructions:</h5>
                    <p className="instruction">{items[0].strInstructions}</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Video items={items}/>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Recepies;
