import axios from "axios";
import moment from "moment";
import {
  GET_PINS,
  DELETE_PINS,
  ADD_PIN,
  EDIT_PIN,
  GET_PIN,
  GET_PIN_ERROR,
  PIN_LOADING,
  SEARCH_PINS,
  GET_UPVOTE,
  ADD_COMMENT,
  DELETE_COMMENT,
  GET_PINS_BY_OWNER,
  USER_FLAG_PIN,
  USER_FIRST_UPVOTE,
  USER_UPVOTE,
  USER_UNFLAG,
  GET_FLAGGED_PINS,
  GET_NEXT_FLAGGED_PINS,
  GET_MAX_PIN,
  GET_MIN_PIN,
  ADMIN_DELETE_FLAGGED_PIN,
} from "./types";

import { LINK } from "../link/link";
//GET PINS
const config = {
  headers: {
    "X-Arqive-Api-Key": process.env.REACT_APP_API_KEY,
  },
};

export const getPins = () => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_ARQIVE}/pins/`, config)
    .then((res) => {
      // console.log(res.data);
      dispatch({
        type: GET_PINS,
        payload: res.data,
      });
    })
    .catch(
      // => console.log(err)
      (err) => console.log(err)
    );
};

export const getPinsWithBounds = (north, south, east, west) => (dispatch) => {
  axios
    .get(
      `${process.env.REACT_APP_ARQIVE}/pinCoordFilter/?latitude_gte=${south}&latitude_lte=${north}&longitude_gte=${west}&longitude_lte=${east}`,
      config
    )
    .then((res) => {
      dispatch({
        type: GET_PINS,
        payload: res.data,
      });
    })
    .catch

    // => console.log(err)
    ();
};

export const getMinPinDate = () => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_ARQIVE}/minPinDate/`, config)
    .then((res) => {
      const minDate = moment(res.data[0].startDate).format("YYYY/MM/DD");

      dispatch({
        type: GET_MIN_PIN,
        payload: minDate,
      });
    })
    .catch((err) =>
      dispatch({
        type: GET_MIN_PIN,
        payload: moment("1869-04-20").format("YYYY/MM/DD"),
      })
    );
};

export const getMaxPinDate = () => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_ARQIVE}/maxPinDate/`, config)
    .then((res) => {
      // let date = res.data[0].startDate.split("-");

      const maxDate = moment(res.data[0].endDate).format("YYYY/MM/DD");

      dispatch({
        type: GET_MAX_PIN,
        payload: maxDate,
      });
    })
    .catch((err) =>
      dispatch({
        type: GET_MAX_PIN,
        payload: moment("2020-04-20").format("YYYY/MM/DD"),
      })
    );
};

export const searchPins = (searchQuery, categories, startDate, endDate) => (
  dispatch
) => {
  axios
    .get(
      `${process.env.REACT_APP_ARQIVE}/pinSearch/?search=${searchQuery}&categories=${categories}&startDate=${startDate}&endDate=${endDate}`, config)
    .then((res) => {
      dispatch({
        type: SEARCH_PINS,
        payload: res.data,
      });
    })
    .catch

    // => console.log(err)
    ();
};

export const deletePins = (id) => (dispatch) => {
  axios
    .delete(`${process.env.REACT_APP_ARQIVE}/pins/${id}/`, config)
    .then((res) => {
      dispatch({
        type: DELETE_PINS,
        payload: id,
      });
    })
    .catch

    // => console.log(err)
    ();
};

export const addPin = (pin) => (dispatch) => {
  let latitudeSplit = pin.latitude.toString().split(".");
  let latitude = latitudeSplit[0] + "." + latitudeSplit[1].substring(0, 6);
  let longitudeSplit = pin.longitude.toString().split(".");
  let longitude = longitudeSplit[0] + "." + longitudeSplit[1].substring(0, 6);
  pin.latitude = latitude;
  pin.longitude = longitude;

  axios
    .post(`${process.env.REACT_APP_ARQIVE}/pins/`, pin, config)
    .then((res) => {
      dispatch({
        type: ADD_PIN,
        payload: res.data,
      });
    })
    .catch

    // => console.log(err)
    ();
};

export const editPin = (pin, id, userid) => (dispatch) => {
  let latitudeSplit = pin.latitude.toString().split(".");
  let latitude = latitudeSplit[0] + "." + latitudeSplit[1].substring(0, 6);
  let longitudeSplit = pin.longitude.toString().split(".");
  let longitude = longitudeSplit[0] + "." + longitudeSplit[1].substring(0, 6);
  pin.latitude = latitude;
  pin.longitude = longitude;

  axios
    .patch(`${process.env.REACT_APP_ARQIVE}/pins/${id}/`, pin, config)
    .then((res) => {
      dispatch({
        type: EDIT_PIN,
        payload: res.data,
        // payload: payload
      });
    })
    .catch

    // => console.log(err)
    ();
};
export const getPin = (id, userid) => (dispatch) => {
  dispatch({ type: "PIN_LOADING"})
  axios
    .get(`${process.env.REACT_APP_ARQIVE}/pins/${id}/`, config)
    .then((res) => {
      let validUser = false;
      let flagstateofuser = false;
      let userFlaggedBefore = false;
      let upvotedBefore = false;
      let userCurrentUpvote = false;
      if (userid) {
        userFlaggedBefore = res.data.flaggerstory.some(
          (a) => a.flagger === userid
        );
        upvotedBefore = res.data.updotes.some((b) => b.upVoter === userid);
        if (upvotedBefore)
          userCurrentUpvote = res.data.updotes.filter(
            (b) => b.upVoter === userid
          )[0].upvote;
        if (userFlaggedBefore)
          flagstateofuser = res.data.flaggerstory.filter(
            (a) => a.flagger === userid
          )[0].flagged;
        validUser = true;
      }
      const payload = {
        ...res.data,
        userCurrentUpvote: userCurrentUpvote,
        upvotedBefore: upvotedBefore,
        validUser: validUser,
        flagState: flagstateofuser,
        userFlaggedBefore: userFlaggedBefore,
        isLoading: false,
      };

      dispatch({
        type: GET_PIN,
        payload: payload,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_PIN_ERROR,
        payload: error,
      })
    });
};
export const getUpvote = (pinId, userid) => (dispatch) => {
  axios
    .get(
      `${process.env.REACT_APP_ARQIVE}/upVoteStory?pinId=${pinId}&userid=${userid}`, config
    )
    .then((res) => {
      dispatch({
        type: GET_UPVOTE,
        payload: res.data,
      });
    })
    .catch

    // => console.log(error)
    ();
};
export const addComment = (comment) => (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_ARQIVE}/commentStory/`, comment, config)
    .then((res) => {
      dispatch({
        type: ADD_COMMENT,
        payload: res.data,
      });
    })
    .catch

    // => console.log(err)
    ();
};

export const deleteComment = (id) => (dispatch) => {
  axios
    .delete(`${process.env.REACT_APP_ARQIVE}/commentStory/${id}/`, config)
    .then((res) => {
      dispatch({
        type: DELETE_COMMENT,
        payload: id,
      });
    })
    .catch

    // => console.log(err)
    ();
};

export const getPinsByOwner = (ownerId) => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_ARQIVE}/pins/?owner=${ownerId}`, config)
    .then((res) => {
      dispatch({
        type: GET_PINS_BY_OWNER,
        payload: res.data,
      });
    })
    .catch

    // => console.log(error)
    ();
};

export const userFlagPin = (userFlag) => (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_ARQIVE}/flagStory/`, userFlag, config)
    .then((res) => {
      dispatch({
        type: USER_FLAG_PIN,
        payload: res.data,
      });
    })
    .catch

    // => console.log(error)
    ();
};

export const userUnFlagPin = (id, state) => (dispatch) => {
  const userflagged = {
    flagged: !state,
  };

  axios
    .patch(`${process.env.REACT_APP_ARQIVE}/flagStory/${id}/`, userflagged, config)
    .then((res) => {
      dispatch({
        type: USER_UNFLAG,
        payload: res.data,
      });
    })
    .catch

    // => console.log(error)
    ();
};

export const userFirstUpvote = (pin, user) => (dispatch) => {
  const submit = {
    upvote: true,
    pinId: pin,
    upVoter: user,
  };

  axios
    .post(`${process.env.REACT_APP_ARQIVE}/upVoteStory/`, submit, config)
    .then((res) => {
      dispatch({
        type: USER_FIRST_UPVOTE,
        payload: res.data,
      });
    })
    .catch

    // => console.log(error)
    ();
};

export const userUpovte = (id) => (dispatch) => {
  axios
    .delete(`${process.env.REACT_APP_ARQIVE}/upVoteStory/${id}/`, config)
    .then((res) => {
      dispatch({
        type: USER_UPVOTE,
        payload: id,
      });
    })
    .catch

    // => console.log(error)
    ();
};

export const getFlaggedPins = () => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_ARQIVE}/pinFlagged`, config)
    .then((res) => {
      dispatch({
        type: GET_FLAGGED_PINS,
        payload: res.data,
      });
    })
    .catch

    // => console.log(error)
    ();
};
export const getNextFlaggedPins = (nextLink) => (dispatch) => {
  axios
    .get(`${nextLink}`, config)
    .then((res) => {
      dispatch({
        type: GET_NEXT_FLAGGED_PINS,
        payload: res.data,
      });
    })
    .catch

    // => console.log(error)
    ();
};

export const getPinsById = (pinIdArray) => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_ARQIVE}/pins/`, config)
    .then((res) => {
      let favoritedPins = res.data.pins.filter((pin) =>
        pinIdArray.includes(pin.id)
      );

      dispatch({
        type: GET_PINS,
        payload: favoritedPins,
      });
    })
    .catch

    // => console.log(err)
    ();
};

export const adminDeleteFlaggedPin = (id) => (dispatch) => {
  axios
    .delete(`${process.env.REACT_APP_ARQIVE}/pinFlagged/${id}/`, config)
    .then((res) => {
      dispatch({
        type: ADMIN_DELETE_FLAGGED_PIN,
        payload: id,
      });
    })
    .catch

    // => console.log(err)
    ();
};
