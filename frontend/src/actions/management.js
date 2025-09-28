import axios from "axios";

import { GET_ABOUT_US, UPDATE_ABOUT_US } from "./types";
const apiKey = {
  headers: {
    "Content-Type": "application/json",
    "X-Arqive-Api-Key": process.env.REACT_APP_API_KEY,
  },
};

export const updateAboutUs = (aboutUs) => (dispatch) => {
  axios
    .patch(
      `${process.env.REACT_APP_ARQIVE}/management/aboutUs/1/`,
      apiKey,
      aboutUs
    )
    .then((res) => {
      dispatch({
        type: UPDATE_ABOUT_US,
        payload: res.data,
      });
    })
    .catch

    // => console.log(err)
    ();
};

export const getAboutUs = () => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_ARQIVE}/management/aboutUs/1/`, apiKey)
    .then((res) => {
      dispatch({
        type: GET_ABOUT_US,
        payload: res.data,
      });
    })
    .catch

    // => console.log(err)
    ();
};
