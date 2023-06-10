import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import FoodCard from "./FoodCard";
import Order from "./Order";
import axios from "axios";
import Loading from "./Loading";

const Home = () => {
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=A"
  );
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setShow(false);
        let requestUrl = url;

        // Check if search query is available
        if (search) {
          requestUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
        }

        const response = await axios.get(requestUrl);
        const { meals } = response.data;
        setItems(meals);
        setShow(true);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [url, search]);

  const setIndex = (alphabet) => {
    setSearch("");
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alphabet}`);
  };

  return (
    <>
      <Navbar searching={(search) => setSearch(search)} />
      <Order alphabet={(alphabet) => setIndex(alphabet)} />

      <div className="container">
        <div className="row justify-content-center mb-3">
          {!show && loading ? (
            <Loading />
          ) : (!show && !loading) || items === null ? (
            <div className="col m-5 text-center text-danger">
              <h3>No Food Found</h3>
            </div>
          ) : (
            items.map((item) => (
              <div
                className="col-xl-3 col-lg-2 col-sm-7 col-md-3 m-2"
                key={item.idMeal}
              >
                <FoodCard meal={item} />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
