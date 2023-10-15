import React, { useState, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Route.css";

const RouteX = () => {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          {/* The suspense is used to show the loading screen when the page is loading */}
          <Suspense
            fallback={
              <div className="loading">
                <span class="sr-only">Loading...</span>{" "}
                <div class="spinner-border " role="status"></div>{" "}
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </>
  );
};

export default RouteX;
