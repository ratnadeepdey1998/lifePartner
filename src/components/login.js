import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

import "../login.css";
import axios from "axios";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userLogin, setUserLogin] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // fetch("http://localhost:3001/users")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setUserLogin(data);
    //   });

    axios.get("http://localhost:3001/users").then((res) => {
      // console.log("========>>", res.data);
      setUserLogin(res.data);
    });
    // console.log("userLogin--",userLogin)
  }, [loggedInUser]);

  useEffect(() => {
    if (loggedInUser != "") {
      // localStorage.setItem("loggedInUser", loggedInUser);
      // console.log("userLoggedInUser==useEffect======", loggedInUser);
    }
  }, [loggedInUser]);

  const errors = {
    email: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var { email, pass, id } = document.forms[0];
    const userData = userLogin.find((user) => user.email === email.value);
    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        setLoggedInUser(userData.id);
        localStorage.setItem("loggedInUser", userData.id);
        console.log("userLoggedInUser========", userData.id);
        swal("Successfully logged in.");
        navigate("/home");
      }
    } else {
      setErrorMessages({ name: "email", message: errors.email });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const createNew = () => {
    navigate("/signup");
  };

  const renderForm = (
    <form onSubmit={handleSubmit}>
      <div className="form-outline mb-4 usernamelabel">
        <label className="form-label" htmlFor="form2Example11">
          Username
        </label>
        <br />
        <input type="text" name="email" className="form-control" required />
        {renderErrorMessage("email")}
      </div>

      <div className="form-outline mb-4">
        <label className="form-label passwordlabel" htmlFor="form2Example22">
          Password
        </label>
        <br />
        <input type="password" name="pass" className="form-control" required />
        {renderErrorMessage("pass")}
      </div>

      <div className="text-center pt-1 pb-1 submitlogin">
        <input
          type="submit"
          className="loginbutton"
          value="Login"
          // href="/index.html"
        />
        <br />
        <a className="text-muted" href="/">
          Forgot password?
        </a>
      </div>

      <div className=" text-center align-items-center justify-content-center pb-4">
        <p className="mb-0 me-2">Don't have an account?</p>
        <button
          type="button"
          onClick={() => createNew()}
          className="btn btn-outline-danger"
        >
          Create new
        </button>
      </div>
    </form>
  );

  return (
    <div className="app">
      <section className="h-100 gradient-form totalbackcolor ">
        <div className="container py-5  logincard">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-8 totalcard">
              <div className="cardlog rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body  mx-md-4">
                      <div className="text-center">
                        <h4 className="mt-1 pb-1 titlematrimonyfree">
                          START FOR FREE
                        </h4>
                        <h4 className="mt-1 pb-1 titlematrimony">
                          Login to find your <br /> love
                        </h4>
                      </div>
                      {isSubmitted ? (
                        <div>User is successfully logged in</div>
                      ) : (
                        renderForm
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex  gradient-custom-2">
                    <div className="text-white px-3 py-4 mx-md-4 contenttitle">
                      <div className="text-center">
                        <img
                          src=".././images/logo.png"
                          style={{ width: "35%" }}
                          alt="logo"
                        />
                      </div>
                      <p className="small mb-0">Now</p>
                      <h4 className="mb-4 ">Find your life partner Easy</h4>
                      <p className="small mb-0">and fast.</p>
                      <div className="log-bg">&nbsp;</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
