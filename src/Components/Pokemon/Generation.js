import React, { useState, useEffect } from "react";
import axios from "axios";

const Generation = (props) => {
  const [generation, setGeneration] = useState([]);
  const url = props.url;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}generation`);
        const { results: name } = response.data;
        setGeneration(name);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [url]);

  return (
    <>
  <div className="container">
    <div className="row mt-4 mb-4 generation-row">
      <div className="col m-2 generation ">
        <button className="btn  border-dark rounded-pill btn-block text-uppercase generation-btn">All</button>
      </div>
      {generation.map((item, index) => (
        <div className="col m-2 generation " key={index}>
          <button className="btn border-dark rounded-pill btn-block text-uppercase generation-btn">
            {item.name.split("-")[1]}
          </button>
        </div>
      ))}
    </div>
  </div>
</>

  );
};

export default Generation;
