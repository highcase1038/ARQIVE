import {
  ADD_COMMENT,
  ADD_PIN,
  ADMIN_DELETE_FLAGGED_PIN,
  DELETE_COMMENT,
  DELETE_PINS,
  EDIT_PIN,
  GET_FLAGGED_PINS,
  GET_MAX_PIN,
  GET_MIN_PIN,
  GET_NEXT_FLAGGED_PINS,
  GET_PIN,
  GET_PIN_ERROR,
  GET_PINS,
  GET_PINS_BY_OWNER,
  PIN_LOADING,
  SEARCH_PINS,
  USER_FIRST_UPVOTE,
  USER_FLAG_PIN,
  USER_UNFLAG,
  USER_UPVOTE,
} from "../actions/types.js";
import moment from "moment";

const initialState = {
  pins: [],
  pin: [],
  upvote: false,
  flagState: false,
  validUser: false,
  pinId: 0,
  flaggedPins: [],
  pinMinDate: "",
  pinMaxDate: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PINS_BY_OWNER:
      return {
        ...state,
        pins: action.payload,
      };
    case SEARCH_PINS:
      return {
        ...state,
        pins: action.payload,
      };
    case PIN_LOADING:
      return {
        ...state,
        pin: { ...state.pin, isLoading: true },
      };
    case GET_PIN:
      return {
        ...state,
        pin: { ...action.payload, pinError: false },
        validUser: action.payload.validUser,
        flagState: action.payload.flagState,
        pinId: action.payload.id,
      };
    case GET_PIN_ERROR:
      return {
        ...state,
        pin: { ...state.pin, isLoading: false, pinError: true},
        validUser: false,
        flagState: false,
        pinId: 0,
      };
    case GET_PINS:
      return {
        ...state,
        pins: action.payload,
      };
    case GET_MAX_PIN:
      return {
        ...state,
        pinMaxDate: new Date(action.payload),
      };
    case GET_MIN_PIN:
      return {
        ...state,
        pinMinDate: new Date(action.payload),
      };

    case DELETE_PINS:
      return {
        ...state,
        pins: state.pins.filter((pins) => pins.id !== action.payload),

        pin: [],
      };
    case ADD_PIN:
      const minDate = moment
        .min(moment(action.payload.startDate), moment(state.pinMinDate))
        .format("YYYY/MM/DD");
      const maxDate = moment
        .max(moment(action.payload.endDate), moment(state.pinMaxDate))
        .format("YYYY/MM/DD");

      return {
        ...state,
        pins: [...state.pins, action.payload],
        pin: action.payload,
        pinMaxDate: new Date(maxDate),
        pinMinDate: new Date(minDate),
      };
    case EDIT_PIN:
      const editminDate = moment
        .min(moment(action.payload.startDate), moment(state.pinMinDate))
        .format("YYYY/MM/DD");
      const editmaxDate = moment
        .max(moment(action.payload.endDate), moment(state.pinMaxDate))
        .format("YYYY/MM/DD");

      return {
        ...state,
        // fixes duplicated pin on map when editing pin
        pins: [
          ...state.pins.filter((pins) => pins.id !== action.payload.id),
          action.payload,
        ],
        pin: action.payload,
        pinMaxDate: new Date(editmaxDate),
        pinMinDate: new Date(editminDate),
      };
    case ADD_COMMENT:
      const newComment = {
        ...state.pin,
        commentstory: [...state.pin.commentstory, action.payload],
      };

      return {
        ...state,
        pin: newComment,
      };

    case DELETE_COMMENT:
      const newComments = state.pin.commentstory.filter((p) => {
        if (p.id !== action.payload) {
          return p;
        } else {
          return null;
        }
      });

      const delComment = {
        ...state.pin,
        commentstory: newComments,
      };
      return {
        ...state,
        pin: delComment,
      };
    case USER_FLAG_PIN:
      const userFlag = {
        ...state.pin,
        flaggerstory: [...state.pin.flaggerstory, action.payload],
        userFlaggedBefore: true,
        flagState: action.payload.flagged,
      };
      return {
        ...state,
        pin: userFlag,
      };
    case USER_UNFLAG:
      const userUnFlag = {
        ...state.pin,
        flaggerstory: [
          ...state.pin.flaggerstory.filter((x) => x.id !== action.payload.id),
          action.payload,
        ],
        flagState: action.payload.flagged,
      };
      return {
        ...state,
        pin: userUnFlag,
      };
    case USER_FIRST_UPVOTE:
      // If a story / pin is selected (state.pin !== []) alter accordingly
      // otherwise return an empty pin [] , auth reducer takes care of
      // state.user.user_upvoted_stories
      const userFirstUpvote = (state.pin.length > 0)
        ? {
          ...state.pin,
          updotes: [...state.pin.updotes, action.payload],
          upvotedBefore: true,
          userCurrentUpvote: true,
          updooots: state.pin.updooots + 1,
        }
        : {
          ...state.pin,
        };
      return {
        ...state,
        pin: userFirstUpvote,
      };
    case USER_UPVOTE:
      const userUp = (state.pin.length > 0)
        ? {
          ...state.pin,
          updotes: [
            state.pin.updotes.filter((x) => x.id !== action.payload.id),
          ],
          userCurrentUpvote: action.payload.upvote,
          updooots: state.pin.updooots - 1,
          // updooots: action.payload.upvote ? pin.updooots++ : pin.updoots--
        }
        : {
          ...state.pin,
        };
      return {
        ...state,
        pin: userUp,
      };
    case GET_NEXT_FLAGGED_PINS:
    case GET_FLAGGED_PINS:
      return {
        ...state,
        flaggedPins: action.payload,
      };
    case ADMIN_DELETE_FLAGGED_PIN:
      const flagpinscheck = {
        ...state.flaggedPins,
        results: state.flaggedPins.results.filter(
          (flag) => flag.id !== action.payload,
        ),
      };

      return {
        ...state,

        flaggedPins: flagpinscheck,

        pin: [],
      };
    default:
      return state;
  }
}
