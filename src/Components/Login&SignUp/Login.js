import React from 'react'
import {Link}   from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div> Login </div>
      <form action='post'>
        <div>Email <input placeholder="Enter email" type="email" name="email" id="email" required/> </div>
        <div>Password <input type="password" name="password" id="password"placeholder="Enter password" required/></div>
        <button className="btn btn-success">SignUp</button>
        <div>
          Don't have an account?
          <Link className='link' to='/signup'>
            Register Now
          </Link>
        </div>
      </form>
    </>
  )
}

export default Login;