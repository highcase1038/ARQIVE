import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../actions/auth";
import Recaptcha from "react-recaptcha";
import { useDispatch, useSelector } from "react-redux";
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

export default function LoginForm() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { isAuthenticated, loginFail } = auth;
  const [open, setOpen] = useState(false);
  const [failed, setFailed] = useState(false);
  const [inProgress, setInProgress] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };
  const handleTooltipOpen = () => {
    setOpen(true);
  };
  const [submitted, setSubmitted] = useState(false);
  const [userForm, setuserForm] = useState({
    username: "",
    password: "",
    captchaIsVerified: false,
    counter: 0,
    errors: {},
  });
  const [attempts, setattempts] = useState(false);

  useEffect(() => {
    if (submitted) {
      setFailed(loginFail);
    } else {
      setFailed(false);
    }
  }, [loginFail]);

  const reCaptchaLoaded = () => {
    // console.log("captcha successfully loaded");
  };
  const verifyCallback = (response) => {
    if (response) {
      setuserForm({
        ...userForm,
        captchaIsVerified: !userForm.captchaIsVerified,
      });
    }
  };
  const validateForm = () => {
    let errors = {};
    let formIsValid = true;
    if (userForm.username === "") {
      formIsValid = false;
      errors.username = "*Please enter your username.";
    }
    if (userForm.username !== "") {
      errors.username = "";
    }
    if (userForm.password !== "") {
      errors.password = "";
    }
    if (userForm.password.length < 8) {
      formIsValid = false;
      errors.password = "*Password must be at least 8 characters long";
    }
    if (userForm.password === "") {
      formIsValid = false;
      errors.password = "*Please enter your password.";
    }

    setuserForm({
      ...userForm,
      errors: errors,
    });
    return formIsValid;
  };

  const submitForm = (e) => {
    setuserForm({
      ...userForm,
      counter: userForm.counter++,
    });
    e.preventDefault();

    if (validateForm()) {
      let willLogin = true;
      if (userForm.counter >= 3) {
        setattempts(true);
        if (!userForm.captchaIsVerified) {
          alert("please verify that you are a human!");
          return;
        }
      }
      dispatch(login(userForm.username, userForm.password)).then(function () {
        setSubmitted(true);
        setFailed(loginFail);
        setInProgress(false);
      });
      setInProgress(true);
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  let siteKey = "6LdvXyEdAAAAAOtm3wHoLVtkV9lBf98A1qans539";
  return (
    <div className={"main-content-div login-div"}>
      <div className="col-md-6 m-auto login-col">
        {/* if form was submitted and login failed then show an error banner*/}

        <div className="card card-body mt-5 login-card accounts-form-group">
          <h2 className="text-center login-title">Login</h2>
          {submitted && failed
            ? (
              <div
                className="card card-body mt-5 alert alert-danger"
                role="alert"
              >
                Invalid username and/or password, please try again
              </div>
            )
            : (
              ""
            )}
          <form onSubmit={submitForm}>
            <div className="form-group">
              <label className="login-text">Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={(e) =>
                  setuserForm({
                    ...userForm,
                    username: e.target.value,
                  })}
                value={userForm.username}
              />
              <p className="text-danger">{userForm.errors["username"]}</p>
            </div>
            <div className="form-group">
              <label className="login-text">Password</label>
              <input
                onClick={handleTooltipOpen}
                type="password"
                className="form-control"
                name="password"
                onChange={(e) =>
                  setuserForm({
                    ...userForm,
                    password: e.target.value,
                  })}
                value={userForm.password}
              />
              <p className="text-danger">{userForm.errors["password"]}</p>
              {" "}
            </div>
            <div className="form-group">
              {attempts
                ? (
                  <Recaptcha
                    loginAttempts={attempts}
                    className="float-left"
                    sitekey={siteKey}
                    render="explicit"
                    verifyCallback={verifyCallback}
                    onloadCallback={reCaptchaLoaded}
                  />
                )
                : (
                  ""
                )}
              <button
                type="submit"
                className="btn btn-primary float-right login-btn default-btn-purple"
                disabled={inProgress}
              >
                Login
              </button>
            </div>
            <p className="login-text">
              Don't have an account?{" "}
              <span className="login-register-links">
                <Link to="/register">Register</Link>
              </span>
            </p>
            <p className="login-text">
              Forgot Password?{" "}
              <span className="login-register-links">
                <Link to="/forgotPassword">Click here</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
