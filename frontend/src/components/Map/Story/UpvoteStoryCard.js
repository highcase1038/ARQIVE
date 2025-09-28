import React from "react";

import { userFirstUpvote, userUpovte, getPin } from "../../../actions/pins";
import { useDispatch, useSelector } from "react-redux";
import BookMark from "../../images/Bookmark_Outline_Icon.png";
import AlreadyBookMarked from "../../images/Bookmark_Icon.png";

function UpvoteStoryCard(props) {
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated, user } = auth;
  const story = props.story;
  const userUpvotedStory = user.user_upvoted_stories.find((upvotedStory) => upvotedStory.pinId === story.id);
  const favoritedPin = isAuthenticated ? user.user_upvoted_stories.some((upvotedStories) => upvotedStories.pinId === story.id) : false;

  const dispatch = useDispatch();

  return (
    <FavoriteButton
      onClick={() =>
        favoritedPin
          ? dispatch(userUpovte(userUpvotedStory.id)) 
          : dispatch(userFirstUpvote(story.id, user.id))
}
    >
  { favoritedPin? AlreadyBookMarked: BookMark }
    </FavoriteButton >
  );
}

export default UpvoteStoryCard;

const FavoriteButton = ({ children, onClick }) => {
  return (
    <button className="favorite-story-btn" onClick={onClick}>
      <img
        className="story-favorites-icon"
        src={children}
        alt={"favorite story icon"}
      />
    </button>
  );
};
