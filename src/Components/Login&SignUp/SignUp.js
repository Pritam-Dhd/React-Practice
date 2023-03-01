import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
        <div>
          <div>SignUp</div>
            <form action="post">
                <div>First Name:<input type="text" required/></div>
                <div>Last Name:<input type="text" required/></div>
                <div>Email <input placeholder="Enter email" type="email" name="email" id="email" required/> </div>
                <div>Password <input type="password" name="password" id="password"placeholder="Enter password" required/></div>
                <button className="btn btn-success">SignUp</button>
                <div>
                  Already have an account
                    <Link to='/login'>       
                      Login
                    </Link>
                </div>
            </form>
        </div>
    </>
  )
}

export default SignUp