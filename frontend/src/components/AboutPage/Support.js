import React, { useState, useRef, useEffect } from "react";
import paypal from "paypal-checkout";
import { PayPalButton } from "react-paypal-button-v2";
import axios from "axios";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

export default function Support() {
  let token = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = token;
  const [isEnabled, setIsEnabled] = useState(false);
  const [amount, setAmount] = useState("0.01");

  return (
    <div className="container">
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Support Us</h2>
          <label>Donation Amount: </label>
          <input
            type="value"
            className="form-control"
            name="amount"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
          <br></br>
          <PayPalButton
            amount={amount}
            onSuccess={(details, data) => {
              const config = {
                headers: {
                  "Content-Type": "application/json",
                   "X-Arqive-Api-Key": process.env.REACT_APP_API_KEY,

                },
              };
              const paypalEmail = details.payer.emails.filter((email) => {
                if (email.primary === true) {
                  return email.value;
                }
              });
              let info = JSON.stringify({
                email: paypalEmail,
                name: details.payer.name.given_name,
              });
              axios
                .post("api/contactUs/support", info, config)
                .then((response) => {});
              alert(
                "Transaction completed by " + details.payer.name.given_name
              );
            }}
            onCancel={(data) => {
              alert("Transaction was cancelled...");
            }}
            style={{
              layout: "vertical",
              shape: "rect",
            }}
          />
        </div>
      </div>
    </div>
  );
}
