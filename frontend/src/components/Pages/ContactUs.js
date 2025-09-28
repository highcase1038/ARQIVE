import React, { useState } from "react";
import axios from "axios";
import { LINK } from "../../link/link";
import useRemovalConfirm from "../profile/CustomHooks/useRemovalConfirm";
import ConfirmationModal from "../profile/ConfirmationModal";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
export default function ContactUs() {
  const { loginregisterModalState, loginToggle } = useRemovalConfirm();
  let token = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = token;

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (email !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "X-Arqive-Api-Key": process.env.REACT_APP_API_KEY,
        },
      };
      // Request Body
      // const body = JSON.stringify({ username, email, password });
      let data = JSON.stringify({ email: email, message: message });
      axios
        .post(`${process.env.REACT_APP_ARQIVE}/contactUs/`, data, config)
        .then((response) => {
          loginToggle();
          setEmail("");
          setMessage("");
        })
        .catch

        // => console.log(err)
        ();
    } else {
       const config = {
        headers: {
          "X-Arqive-Api-Key": process.env.REACT_APP_API_KEY,
        },
      };
      setEmail(`Anonymous@anon.com`);

      axios
        .post(`${process.env.REACT_APP_ARQIVE}/contactUs/`, {
          email: email,
          message: message,
        }, config)
        .then((response) => {
          loginToggle();
          setEmail("");
          setMessage("");
        })
        .catch

        // => console.log(err)
        ();
    }
  };

  return (
    <div className="main-content-div contact-us-div">
      <div className="col-md-6 m-auto contact-us-col">
        <div className="card card-body mt-5 contact-us-card accounts-form-group">
          <h2 className="text-center contact-us-title">What's on your mind?</h2>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label className="contact-us-text">Email (Optional)</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <br></br>
              <label className="contact-us-text">Message</label>
              <textarea
                rows="5"
                type="message"
                className="form-control"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
              >
                {message}
              </textarea>
              <div />
            </div>
            <div className="contact-us-btn-div">
              <button type="submit" className="btn btn-primary contact-us-btn">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <ConfirmationModal
        modalState={loginregisterModalState}
        toggle={loginToggle}
        title="Thank you for contacting us!"
        buttonTitle={"dismiss"}
        onSubmit={loginToggle}
      />
    </div>
  );
}
