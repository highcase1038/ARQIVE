import React from "react";

import { userFirstUpvote, userUpovte } from "../../../actions/pins";
import { useDispatch, useSelector } from "react-redux";
import BookMark from "../../images/Bookmark_Outline_Icon.png";
import AlreadyBookMarked from "../../images/Bookmark_Icon.png";

function Upvote(props) {
  const auth = useSelector((state) => state.auth);

  const { favoritedPin, upvoteid, user } = auth;
  const dispatch = useDispatch();

  return (
    <FavoriteButton
      onClick={() =>
        favoritedPin
          ? dispatch(userUpovte(upvoteid))
          : dispatch(userFirstUpvote(props.id, user.id))
      }
    >
      {favoritedPin ? AlreadyBookMarked : BookMark}
    </FavoriteButton>
  );
}

export default Upvote;

const FavoriteButton = ({ children, onClick }) => {
  return (
    <button 
      style={{ cursor: "pointer ", border: "none", backgroundColor: "transparent", }}
      // className="favorite-story-btn" 
      onClick={onClick}>
      <img
        className="story-favorites-icon"
        src={children}
        alt={"favorite this story icon"}
      />
    </button>
  );
};
