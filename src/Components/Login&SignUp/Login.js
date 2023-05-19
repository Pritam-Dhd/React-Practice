import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Validation from "./Validation";
import "./i.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errorMessages, setErrorMessages] = useState({
    email: "",
    password: "",
  });

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const onBlurEmail = () => {
    const validation = Validation(email, password);
    setErrorMessages((prevErrors) => ({
      ...prevErrors,
      email: validation.email,
    }));
  };

  const onBlurPassword = () => {
    const validation = Validation(email, password);
    setErrorMessages((prevErrors) => ({
      ...prevErrors,
      password: validation.password,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // Continue with form submission
    console.log(email, password);
  };

  return (
    <>
      <section className="vh-100 body" style={{ backgroundColor: "#9A616D" }}>
        <div className="container py-4 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-6 col-lg-5 d-flex align-items-center">
              <div
                className="card-body p-4 p-lg-5 text-black"
                style={{ backgroundColor: "#FFFFFF", borderRadius: "1rem" }}
              >
                <form>
                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i
                      className="fas fa-cubes fa-2x me-3"
                      style={{ color: "#ff6219" }}
                    ></i>
                    <span className="h1 fw-bold mb-0">Logo</span>
                  </div>
                  <h5
                    className="fw-normal mb-3 pb-3"
                    style={{ letterSpacing: "1px" }}
                  >
                    Log in to your account
                  </h5>
                  <label className="form-label">Email address:</label>
                  <div className="form-outline mb-2">
                    <input
                      type="email"
                      id="typeText"
                      className="form-control form-control-lg"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      onBlur={onBlurEmail}
                      required
                    />
                  </div>
                  {errorMessages.email && (
                    <p className="text-danger">{errorMessages.email}</p>
                  )}
                  <label className="form-label">Password:</label>
                  <div className="form-outline mb-2">
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      id="form2Example27"
                      className="form-control form-control-lg"
                      onChange={(event) => setPassword(event.target.value)}
                      onBlur={onBlurPassword}
                      required
                    />
                    <span
                      className="password-toggle-icon"
                      onClick={handleTogglePasswordVisibility}
                    >
                      <FontAwesomeIcon
                        icon={isPasswordVisible ? faEyeSlash : faEye}
                      />
                    </span>
                  </div>
                  {errorMessages.password && (
                    <p className="text-danger">{errorMessages.password}</p>
                  )}
                  <div className="pt-1 mb-4">
                    <button
                      className="btn btn-dark btn-lg btn-block"
                      type="button"
                      onClick={onSubmit}
                    >
                      Login
                    </button>
                  </div>
                  <p className="mb-2">
                    Don't have an account?{" "}
                    <Link to="/signup" style={{ color: "#393f81" }}>
                      Sign up here
                    </Link>
                  </p>
                  <p className="mb-0">Or login using:</p>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-google"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;