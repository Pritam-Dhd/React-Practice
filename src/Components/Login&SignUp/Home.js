import React from 'react'
import { logout } from './Firebase-Auth';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate=useNavigate();
  return (
    <>
    <div>Hello {localStorage.name} Email: {localStorage.email} <img src={localStorage.profilePic } alt="" /></div>
    <button onClick={()=>{
        logout();
        navigate("/login");
        }}>Logout</button>
    </>
  )
}

export default Home