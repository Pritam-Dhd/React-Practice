import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Success from "./Success";
import Failed from "./Failed";

const RouteX = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="/failed" element={<Failed />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouteX;
