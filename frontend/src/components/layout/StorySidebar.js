import React, { useEffect, useRef, useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

import EditStory from "./EditStory";
import StoryDisplay from "./StoryDisplay";
import StoryCategory from "./StoryCategory";

function StorySidebar(props) {
  const history = useHistory();
  const auth = useSelector((state) => state.auth);
  const pin = useSelector((state) => state.pins.pin);
  const [editStory, setEditStory] = useState(false);
  const [storySidebarHeight, setStorySidebarHeight] = useState("0%");
  const storyHeaderRef = useRef(null);
  const { user } = auth;
  const { centerMarker } = props;
  const touchStart = React.useRef(null);
  const touchEnd = React.useRef(null);

  // Used check if site is in mobile layout
  const mediaQuery = "(max-width: 770px)";
  const mediaQueryList = window.matchMedia(mediaQuery);

  const onTouchStart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    touchEnd.current = null;
    const timestamp = performance.now();
    let touchobj = e.changedTouches[0];
    touchStart.current = { clientY: touchobj.clientY, time: timestamp };
  };

  // Need to tune this
  const onTouchMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const timestamp = performance.now();
    let touchobj = e.changedTouches[0];
    if (touchEnd.current) {
      // Only update height of Story every 400 microseconds
      // Helps performance on iOs
      if ((touchEnd.current.time + 400) > timestamp) {
        setStorySidebarHeight(`${touchEnd.current.clientY}px`);
      }
    } else {
      touchEnd.current = { clientY: touchobj.clientY, time: timestamp };
    }
  };

  const onTouchEnd = (e) => {
    if (!touchStart.current || !touchEnd.current) return;
    e.preventDefault();
    e.stopPropagation();
    let touchobj = e.changedTouches[0];
    if (
      touchobj.clientY !== null && touchobj.clientY < touchStart.current.clientY
    ) {
      setStorySidebarHeight("100%");
    }
    if (
      touchobj.clientY !== null && touchobj.clientY > touchStart.current.clientY
    ) {
      setStorySidebarHeight("0%");
    }
    touchStart.current = null;
  };
  // END Draggable Drawer (very simplified)

  const toggleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (storySidebarHeight === "100%") {
      setStorySidebarHeight("0%");
      setEditStory(false);
    } else {
      setStorySidebarHeight("100%");
    }
  };

  useEffect(() => {
    // Setup
    //
    // Catches if editStory was passed from a the Profile
    // page "edit story" link in the story card.
    if (
      user &&
      history.location.state &&
      history.location.state.editStory &&
      user.id === history.location.state.userId
    ) {
      return () => {
        console.log(history.location.state);
        setEditStory(true);
        setStorySidebarHeight("100%");
      };
    }
    setEditStory(false);

    // Check if storyHeaderRef exists, if not
    // dont do anything
    if (!storyHeaderRef.current) {
      return;
    }

    // Otherwise set the story height to show the
    // title
    if (mediaQueryList.matches) {
      setStorySidebarHeight(
        (storyHeaderRef.current.clientHeight + 64) + "px",
      );
    } else {
      setStorySidebarHeight("100%");
    }
    centerMarker(pin);
    // When Pin's Id field or the key hash in the hisotry changes (user clicks a link a second time)
    // rerun the setup code above
  }, [pin.id, history.location.key]);

  if (props.pinDeleted) {
    props.setPinDeleted(false);
    return <Redirect to="/" />;
  }

  return (
    <div className="story-sidebar">
      <div
        style={{
          overflow: "hidden",
          zIndex: "4",
          position: "absolute",
          top: "0",
          bottom: "0",
          transition:
            (storySidebarHeight !== "100%" | storySidebarHeight !== "0%")
              ? "transform 0.5s ease-in-out"
              : "transform 1s ease-in-out",
          WebkitTransition:
            (storySidebarHeight !== "100%" | storySidebarHeight !== "0%")
              ? "transform 0.5s ease-in-out"
              : "transform 1s ease-in-out",
          willChange: "transform",
          overflowY: "auto",
          right: "0",
          transform: `translateY(calc(100% - ${storySidebarHeight}))`,
          WebkitTransform: `translateY(calc(100% - ${storySidebarHeight}))`,
          boxShadow: "rgba(0, 0, 0, 0.25) 0px -4px 5px",
          width: "inherit",
          background: "white",
          borderRadius: "14px 14px 0px 0px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            width: "100%",
            zIndex: "1000",
            background: "white",
          }}
        >
          <StoryCategory
            // Draggable Drawer functions
            onTouchStart={(e) => onTouchStart(e)}
            onTouchMove={(e) => onTouchMove(e)}
            onTouchEnd={(e) => onTouchEnd(e)}
            category={pin.category}
            pinError={pin.pinError}
          >
            <div
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <IconButton
                // Has to be done so the touch and click events
                // can be picked up and not used by the Draggable Drawer
                // parent container
                onClick={(e) => toggleClose(e)}
                onTouchEnd={(e) => toggleClose(e)}
                aria-label="close"
              >
                <CloseIcon
                  style={{
                    transition: "transform 1s ease-in-out",
                    willChange: "transform",
                    transform: storySidebarHeight === "100%"
                      ? "none"
                      : "rotate(45deg)",
                    zIndex: "6",
                  }}
                />
              </IconButton>
            </div>
          </StoryCategory>
        </div>
        <div
          style={{
            padding: "5px 5px 5px 5px",
            height: "100%",
            overflowX: "hidden",
          }}
        >
          <div className={"sidebar-story-div"}>
            {editStory
              ? (
                <EditStory
                  setEditStory={setEditStory}
                  pinData={pin}
                  centerMarker={centerMarker}
                />
              )
              : (
                <StoryDisplay
                  pin={pin}
                  auth={auth}
                  setEditStory={setEditStory}
                  // storySidebarHeight={storySidebarHeight}
                  // setStorySidebarHeight={setStorySidebarHeight}
                  storyHeaderRef={storyHeaderRef}
                  settoggleComment={props.settoggleComment}
                  onSubmitComment={props.onSubmitComment}
                  userComment={props.userComment}
                  setuserComment={props.setuserComment}
                  onDeleteComment={props.onDeleteComment}
                />
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default StorySidebar;
