import React from "react";
import CommentStory from "../Map/Story/CommentStory";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import UpvoteStoryCard from "../Map/Story/UpvoteStoryCard";
import useFlagForm from "../Map/CustomHooks/useFlagForm";
import Flag from "../Map/Story/Flag";
import Moment from "react-moment";
import Markup from "interweave";
import FlagReportModal from "../Map/Story/FlagReportModal";
import { Button } from "react-bootstrap";
import BookMark from "../images/Bookmark_Outline_Icon.png";
import ConfirmationModal from "../profile/ConfirmationModal";
function StoryDisplay({
  pin,
  auth,
  storyHeaderRef,
  setEditStory,
  onSubmitComment,
  userComment,
  setuserComment,
  onDeleteComment,
}) {
  const { isAuthenticated, user } = auth;
  const {
    flagForm,
    flagToggle,
    flagModalState,
    onFlagSubmit,
    handleFlagFormChange,
    flagCommentToggle,
    flagCommentModalState,
    onFlagCommentSubmit,
  } = useFlagForm();

  const [loginModalState, setLoginModalState] = React.useState(false);
  const loginModalToggle = () => {
    setLoginModalState(!loginModalState);
  };
  const upvoteButton = (
    <div
      style={{
        cursor: "pointer ",
        border: "none",
        backgroundColor: "transparent",
      }}
    >
      <img
        onClick={loginModalToggle}
        className="story-favorites-icon"
        src={BookMark}
        alt={"favorite this story icon"}
      />
    </div>
  );

  function StorySkeletonLoading() {
    return (
      <Stack spacing={3}>
        <Skeleton variant="rounded" height={"3.5em"} />
        <Stack spacing={2}>
          <Skeleton animation="wave" variant="text" width={"90%"} mb={1} />
          <Skeleton animation="wave" variant="text" width={"75%"} mb={1} />
          <Skeleton animation="wave" variant="text" width={"60%"} mb={1} />
        </Stack>
        <Stack>
          <Skeleton animation="wave" variant="text" />
          <Skeleton animation="wave" variant="text" />
          <Skeleton animation="wave" variant="text" />
          <Skeleton animation="wave" variant="text" />
          <Skeleton animation="wave" variant="text" />
          <Skeleton animation="wave" variant="text" />
        </Stack>
      </Stack>
    );
  }

  return (
    <>
      {pin.isLoading ? <StorySkeletonLoading /> : (
        <>
          {pin.pinError
            ? (
              <>
                <h1
                  style={{
                    textAlign: "center",
                    fontFamily: "Eina, Arial",
                    letterSpacing: "0px",
                    textTransform: "none",
                  }}
                >
                  umm...what?
                </h1>
                <h3
                  style={{
                    textAlign: "center",
                    fontFamily: "Eina, Arial",
                    letterSpacing: "0px",
                    textTransform: "none",
                  }}
                >
                  Looks like something went wrong, maybe try again later?
                </h3>
                <p
                  style={{
                    textAlign: "center",
                    fontFamily: "Eina, Arial",
                    letterSpacing: "0px",
                    textTransform: "none",
                  }}
                >
                  If this problem persists or you think something is wrong
                  please contact us at{" "}
                  <a
                    className="sidebar-story-read-more"
                    href="mailto:info@thearqive.com"
                  >
                    info@thearqive.com
                  </a>
                </p>
              </>
            )
            : (
              <>
                <div
                  ref={storyHeaderRef}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      paddingBottom: "1rem",
                      // paddingTop: "2rem",
                    }}
                  >
                    <div>
                      <h1 className="sidebar-story-title">
                        {pin.title}
                      </h1>
                    </div>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "start",
                      }}
                    >
                      {user && user.id === pin.owner
                        ? (
                          <Button
                            style={{ marginTop: "8px" }}
                            className="btn btn-primary btn-sm default-btn-purple"
                            onClick={() => {
                              setEditStory(true);
                            }}
                          >
                            Edit
                          </Button>
                        )
                        : (null)}
                      {isAuthenticated
                        ? pin && pin.updotes && <UpvoteStoryCard story={pin} />
                        : upvoteButton}

                      {isAuthenticated
                        ? pin &&
                          pin.flaggerstory && (
                          <Flag
                            style={{
                              position: "relative",
                              top: "8px",
                            }}
                            pin={pin}
                            flagToggle={flagToggle}
                            user={user}
                          />
                        )
                        : ""}
                    </div>
                  </div>
                  <div>
                    <h3
                      className={"story-page-story-address"}
                    >
                      {pin.address ? pin.address : ""}{" "}
                      {pin.locality ? pin.locality : ""}{" "}
                      {pin.region ? pin.region : ""}{" "}
                      {pin.postCode ? pin.postCode : ""}{" "}
                      {pin.country ? pin.country : ""}
                      {" "}
                    </h3>
                  </div>
                </div>
                <div>
                  <div>
                    <h4
                      className={"story-page-dates"}
                    >
                      {pin.startDate
                        ? (
                          <Moment format="MM/DD/YYYY">
                            {pin.startDate}
                          </Moment>
                        )
                        : (
                          "No Start Date"
                        )} - {pin.endDate
                        ? (
                          <Moment format="MM/DD/YYYY">
                            {pin.endDate}
                          </Moment>
                        )
                        : (
                          "No End Date"
                        )}
                      {" "}
                    </h4>
                  </div>
                  <div>
                    <h5>
                      {pin.is_anonymous_pin
                        ? (
                          <p className="story-page-story-address">
                            Posted by:{" "}
                            <span className="sidebar-story-username">
                              Anonymous
                            </span>
                          </p>
                        )
                        : (
                          <p className="story-page-story-address">
                            Posted by:
                            <Link
                              style={{ textDecoration: "inherit" }}
                              to={`/users/${pin.username}`}
                            >
                              <span className="sidebar-story-username">
                                {pin.username}
                              </span>
                            </Link>
                          </p>
                        )}
                    </h5>
                  </div>
                </div>
                <div className="sidebar-story-description">
                  <Markup content={pin.description} />
                </div>
                <hr></hr>
                <div style={{ paddingTop: "15px" }}>
                  <div
                    md={8}
                    style={{ marginBottom: "20px" }}
                  >
                    {pin.commentstory && (
                      <CommentStory
                        user={user}
                        comment={pin.commentstory}
                        pinId={pin.id}
                        isAuthenticated={isAuthenticated}
                        onSubmitComment={onSubmitComment}
                        userComment={userComment}
                        setuserComment={setuserComment}
                        onDeleteComment={onDeleteComment}
                        toggle={flagCommentToggle}
                      />
                    )}
                    {isAuthenticated && (
                      <FlagReportModal
                        flagForm={flagForm}
                        title={"Why are you flagging this story?"}
                        toggle={flagToggle}
                        modalState={flagModalState}
                        onSubmit={onFlagSubmit}
                        handleChange={handleFlagFormChange}
                      />
                    )}
                    {isAuthenticated && (
                      <FlagReportModal
                        flagForm={flagForm}
                        title={"Why are you flagging this comment?"}
                        toggle={flagCommentToggle}
                        modalState={flagCommentModalState}
                        onSubmit={onFlagCommentSubmit}
                        handleChange={handleFlagFormChange}
                      />
                    )}
                  </div>
                </div>
                <ConfirmationModal
                  modalState={loginModalState}
                  toggle={loginModalToggle}
                  login={true}
                  title="login or register"
                />
              </>
            )}
        </>
      )}
    </>
  );
}
export default StoryDisplay;
