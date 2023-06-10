import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Recepies from "./Recepies";
import './Recipe.css'

const RouteX = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:MealId" element={<Recepies/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouteX;
