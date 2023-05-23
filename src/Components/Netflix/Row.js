import React from "react";
import Card from "./Card";
const imgUrl = "https://image.tmdb.org/t/p/original";

const Row = ({ title, arr = [] }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <h2>{title}</h2>
        <div className="image">
          {arr.map((item, index) => (
            <Card img={`${imgUrl}/${item.poster_path}`} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Row;
