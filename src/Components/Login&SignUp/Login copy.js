import React, {useState} from 'react'
import {Link}   from 'react-router-dom';
import "./styles.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlesubmit=(event)=>{
        event.preventDefault();
        setEmail(event.target.value);
        setPassword(event.target.value);
        if(email==="admin@gmail.com"&&password==="admin"){
            window.location.href="/AdminDashboard";
        }
    }

    return (
        <>
            <section className="vh-100" >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" >
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg?w=740&t=st=1677838566~exp=1677839166~hmac=a6906ec41585d1a68c1783b8d6a8411f6182d27ba1e463c6f3885c81042aeeb8"
                                        alt="login form" className="img-fluid"  />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">
                                            <span className='Title'>Library Management System</span>
                                            <form action='post'>
                                                <h5 className="fw-normal mb-3 pb-3" >Sign into your account</h5>
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form2Example17">Email address</label>
                                                    <input type="email" placeholder="example@gmail.com"  id="form2Example17" className="form-control form-control-lg" required onChange={(event) => setEmail(event.target.value)}/>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form2Example27">Password</label>
                                                    <input type="password" id="form2Example27" className="form-control form-control-lg"placeholder='Enter password' required onChange={(event) => setPassword(event.target.value)}/>
                                                </div>
                                                <div className="pt-1 mb-4">
                                                    <button className="btn btn-dark btn-lg btn-block" onClick={handlesubmit}>Login</button>
                                                </div>
                                                <p className="mb-5 pb-lg-2">Don't have an account? 
                                                    <Link className='link' to='/signup'>Register Now</Link>
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login