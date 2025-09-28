import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Markup } from "interweave";
import BookMark from "../images/Bookmark_Outline_Icon.png";
import Moment from "react-moment";
import UpvoteStoryCard from "../Map/Story/UpvoteStoryCard";
import { Button } from "reactstrap";
import { Col, Row } from "react-bootstrap";
import { ArrowForward } from "@material-ui/icons";
function StorySearchResults(
  {
    pinData,
    isAuthenticated,
    loginToggle,
    maplink,
    isMobile,
    handleCloseSidebar,
  },
) {
  const handleLinkClick = () => {
    if (isMobile) {
      handleCloseSidebar();
    }
  };
  const [page, setPage] = useState(0);

  const upvoteButton = (
    <div
      className="login-link favorite-story-btn"
      style={{ cursor: "pointer " }}
    >
      <img
        onClick={loginToggle}
        className="story-favorites-icon"
        src={BookMark}
        alt={"favorite this story icon"}
      />
    </div>
  );
  return (
    <>
      <div
        className="sidebar-text"
        style={{
          textAlign: "center",
          textWrap: "nowrap",
          marginLeft: "8px",
          marginRight: "8px",
        }}
      >
        {pinData.length + " "}
        {pinData.length === 1 ? " result" : " results"}
      </div>

      <div
        style={{ padding: "5px" }}
      >
        <div
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Button
                className="search-bar-btn"
                disabled={page === 0}
                onClick={() => setPage(page - 1)}
              >
                <ArrowForward
                  style={{ transform: "rotate(180deg)" }}
                />
              </Button>
              <div
                className="sidebar-text"
                style={{
                  textAlign: "center",
                  textWrap: "nowrap",
                  marginLeft: "8px",
                  marginRight: "8px",
                }}
              >
                <div>
                  {`${page * 10 + 1} to ${
                    page * 10 + 10 > pinData.length
                      ? pinData.length
                      : page * 10 + 10
                  }`}
                </div>
              </div>
              <Button
                className="search-bar-btn"
                disabled={page * 10 + 10 >= pinData.length}
                onClick={() => setPage(page + 1)}
              >
                <ArrowForward />
              </Button>
            </div>
          </div>
        </div>
        <hr />
        <div style={{ marginRight: "1rem" }}>
          {pinData.slice(page * 10, page * 10 + 10).map((story, index) => {
            const categoryStyle = story.category === 1
              ? {
                boxShadow:
                  "rgba(174, 174, 174, 0.73) -0.1px -0.1px 5px, 15px 15px #e01783",
              }
              : story.category === 2
              ? {
                boxShadow:
                  "rgba(174, 174, 174, 0.73) -0.1px -0.1px 5px,  15px 15px #62ca82",
              }
              : {
                boxShadow:
                  "rgba(174, 174, 174, 0.73) -0.1px -0.1px 5px, 15px 15px #478abb",
              };

            const authorLink = (
              <Link
                style={{ textDecoration: "inherit" }}
                to={`/users/${story.username}`}
              >
                {" " + story.username}
              </Link>
            );
            return (
              <div
                style={{ marginTop: "1rem", marginBottom: "20px" }}
                key={story.id}
              >
                <Card
                  style={{ borderRadius: "10px", ...categoryStyle }}
                >
                  <CardContent>
                    <Row>
                      <Col
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Link
                          onClick={handleLinkClick}
                          to={`${maplink}/${story.id}`}
                          // className={"sidebar-story-read-more"}
                        >
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            className={"sidebar-story-title"}
                          >
                            {story.title}
                          </Typography>
                        </Link>

                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "start",
                          }}
                        >
                          {isAuthenticated
                            ? (
                              <UpvoteStoryCard
                                story={story}
                              />
                            )
                            : upvoteButton}
                        </div>
                      </Col>
                    </Row>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="p"
                      className={"sidebar-story-date"}
                    >
                      <span>
                        {story.startDate
                          ? (
                            <Moment format="MM/DD/YYYY">
                              {story.startDate}
                            </Moment>
                          )
                          : ("No Start Date")}
                        {" - "}
                        {story.endDate
                          ? (
                            <Moment format="MM/DD/YYYY">
                              {story.endDate}
                            </Moment>
                          )
                          : ("No End Date")}
                      </span>{" "}
                      <span style={{ color: "rgb(104, 104, 104)" }}>by</span>
                      {story.username ? authorLink : " Anonymous "}
                    </Typography>
                    <div
                      className={"sidebar-story-description"}
                    >
                      <Markup
                        content={(story.description.length < 130)
                          ? story.description
                          : (story.description.substring(0, 130) + "...")}
                        blockList={["img"]}
                        noHtml={true}
                      />
                    </div>
                    <Link
                      onClick={handleLinkClick}
                      to={`${maplink}/${story.id}`}
                      className={"sidebar-story-read-more"}
                    >
                      view story
                    </Link>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default StorySearchResults;
