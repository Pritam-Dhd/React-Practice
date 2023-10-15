import React, { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import { signInWithGoogle } from "./Firebase-Auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Validation from "./Validation";
import "./i.css";

const Signup = () => {
  const navigate =useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState("");

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
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
    // Update confirm password error message if already entered
    if (confirmPassword && password !== confirmPassword) {
      setConfirmPasswordErrorMessage("*Passwords do not match");
    } else {
      setConfirmPasswordErrorMessage("");
    }
  };

  const onBlurConfirmPassword = () => {
    if (password !== confirmPassword) {
      setConfirmPasswordErrorMessage("*Passwords do not match");
    } else {
      setConfirmPasswordErrorMessage("");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <>
      <section className="vh-100 body" style={{ backgroundColor: "#9A616D" }}>
        <div className="container py-4 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-6 col-lg-5 d-flex align-items-center">
              <div
                className="card-body p-4 p-lg-6 text-black"
                style={{ backgroundColor: "#FFFFFF", borderRadius: "1rem" }}
              >
                <form onSubmit={onSubmit}>
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
                    Signup
                  </h5>
                  <label className="form-label">Name:</label>
                  <div className="form-outline mb-2">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control form-control-lg"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      required
                    />
                  </div>
                  <label className="form-label">Email address:</label>
                  <div className="form-outline mb-2">
                    <input
                      type="email"
                      id="email"
                      name="email"
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
                      id="password"
                      name="password"
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
                  <label className="form-label">Confirm Password:</label>
                  <div className="form-outline mb-2">
                    <input
                      type={isConfirmPasswordVisible ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      className="form-control form-control-lg"
                      onChange={(event) =>
                        setConfirmPassword(event.target.value)
                      }
                      onBlur={onBlurConfirmPassword}
                      required
                    />
                    <span
                      className="password-toggle-icon"
                      onClick={handleToggleConfirmPasswordVisibility}
                    >
                      <FontAwesomeIcon
                        icon={isConfirmPasswordVisible ? faEyeSlash : faEye}
                      />
                    </span>
                  </div>
                  {confirmPasswordErrorMessage && (
                    <p className="text-danger">{confirmPasswordErrorMessage}</p>
                  )}
                  <div className="pt-1 mb-4">
                    <button
                      className="btn btn-dark btn-lg btn-block"
                      type="submit"
                    >
                      Signup
                    </button>
                  </div>
                  <p className="mb-2">
                    Already have an account?{" "}
                    <Link to="/login" style={{ color: "#393f81" }}>
                      Login here
                    </Link>
                  </p>
                  <p className="mb-0">Or login using:</p>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                    onClick={() => {
                      signInWithGoogle(navigate);
                    }}
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

export default Signup;