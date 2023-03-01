// import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Login';
import SignUp from './SignUp';
import "./Route.css"

const RouteX = () => {



    return (
        <>
            <BrowserRouter>
                <div className="App">
                    <Routes>
                    <Route path="/" element={<Login/>} />
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )


}

export default RouteX;
