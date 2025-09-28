import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/auth";
import Recaptcha from "react-recaptcha";
import * as EmailValidator from "email-validator";

import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

export default function RegisterForm() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { isAuthenticated, registerFail } = auth;
  const [open, setOpen] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  const [submitted, setSubmitted] = useState(false);
  const [userForm, setuserForm] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    captchaIsVerified: false,
    agreeTOS: false,
    inputs: {},
    errors: {},
  });
  const [captcha, setcaptcha] = useState(false);
  const reCaptchaLoaded = () => {
    console.log("reCaptchaLoaded!")
  };

  useEffect(() => {
    if (submitted) {
      setFailed(registerFail);
    } else {
      setFailed(false);
    }
  }, [registerFail]);

  const verifyCallback = (response) => {
    if (response) {
      setcaptcha(true);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (captcha) {
      //   const { username, email, password, password2 } = userForm;
      if (formIsValid()) {
        const newUser = {
          username: userForm.username,
          password: userForm.password,
          email: userForm.email,
        };
        dispatch(register(newUser));
        setSubmitted(true);
      }
    } else {
      alert("please verify that you are a human!");
    }
    // this.formIsValid();
  };
  const formIsValid = () => {
    let errors = {};
    let formIsValid = true;
    if (userForm.username === "") {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }
    if (userForm.username !== "") {
      errors["username"] = "";
    }
    if (userForm.password !== "") {
      errors["password"] = "";
    }
    if (userForm.password.length < 8) {
      formIsValid = false;
      errors["password"] = "*Password must be at least 8 characters long";
    }
    if (!userForm.password === "") {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }
    if (userForm.email === "") {
      formIsValid = false;
      errors["email"] = "*Please enter your email";
    }
    if (userForm.email !== "") {
      errors["email"] = "";
    }
    if (!EmailValidator.validate(userForm.email)) {
      formIsValid = false;
      errors["email"] = "*Please enter a valid email";
    }
    if (userForm.password !== userForm.password2) {
      formIsValid = false;
      errors["password2"] = "*Passwords do not Match";
    }
    if (userForm.password === userForm.password2) {
      errors["password2"] = null;
    }
    if (userForm.password.search(/[!@#$%^&*_+()]/) === -1) {
      formIsValid = false;
      errors["password"] =
        "*Password must contain a special character like: !@#$%^&*)(_+";
    }
    if (userForm.password.search(/\d/) === -1) {
      formIsValid = false;
      errors["password"] = "*Password must contain at least 1 number";
    }
    if (userForm.password.search(/[a-zA-Z]/) === -1) {
      formIsValid = false;
      errors["password"] = "*Password must contain a Letter";
    }
    if (userForm.agreeTOS !== true) {
      formIsValid = false;
      errors["agreeTOS"] = "*You must agree to the TOS to register";
    }
    setuserForm({
      ...userForm,
      errors: errors,
    });
    // this.setState({ errors: errors });
    return formIsValid;
  };
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div className="main-content-div register-div">
      <div className="col-md-6 m-auto register-col">
        {/* if the form was submitted and register failed, show banner*/}

        <div className="card card-body mt-5 register-card accounts-form-group">
          <h2 className="text-center register-title">register</h2>

          {submitted && failed
            ? (
              <div
                className="card card-body mt-5 alert alert-danger"
                role="alert"
              >
                Username or Email already exists! Please use another.
              </div>
            )
            : (
              ""
            )}
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label className="register-text">Username</label>
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
              <div name="userStatus" />
              <p className="text-danger">{userForm.errors["username"]}</p>
            </div>
            <div className="form-group">
              <label className="register-text">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={(e) =>
                  setuserForm({
                    ...userForm,
                    email: e.target.value,
                  })}
                value={userForm.email}
              />
              <div id="emailStatus" />
              <p className="text-danger">{userForm.errors["email"]}</p>
            </div>
            <ClickAwayListener onClickAway={handleTooltipClose}>
              <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleTooltipClose}
                open={open}
                placement="bottom-start"
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title="Must be at least eight characters with one Uppercase, Lowercase, Number, and Special Character."
              >
                <div className="form-group">
                  <label className="register-text">Password</label>
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
                </div>
              </Tooltip>
            </ClickAwayListener>
            <div className="form-group">
              <label className="register-text">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="password2"
                onChange={(e) =>
                  setuserForm({
                    ...userForm,
                    password2: e.target.value,
                  })}
                value={userForm.password2}
              />
              <p className="text-danger">{userForm.errors["password2"]}</p>
            </div>
            <div className="form-group">
              {/*This is the ReCaptcha*/}
              <Recaptcha
                className="float-left"
                sitekey="6LdvXyEdAAAAAOtm3wHoLVtkV9lBf98A1qans539"
                render="explicit"
                verifyCallback={verifyCallback}
                onloadCallback={reCaptchaLoaded}
              />
            </div>

              <p className="text-danger">{userForm.errors["agreeTOS"]}</p>
            <div className="form-check">
              <span 
              >
              <input
                type="checkbox"
                name="agreeTOS"
                onChange={() => setuserForm({...userForm, agreeTOS: !userForm.agreeTOS})}
                className="form-check-input register-text"
              />
              </span>
              <label>
              <p className="register-text">
                by clicking register, I understand the{"  "}
                <span className="login-register-links">
                  <Link to="/terms">Terms of Service</Link>
                </span>{"  "}
                and{"  "}
                <span className="login-register-links">
                  <Link to="/terms">Privacy Policy</Link>
                </span>{"  "}
                and am over the age of 18
              </p>
              </label>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                type="submit"
                className="btn btn-primary register-btn default-btn-purple"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
