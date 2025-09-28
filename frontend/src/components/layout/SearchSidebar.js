import React, { useState } from "react";
import { useSelector } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";
import Sidebar from "react-sidebar";
import { createTheme, IconButton, ThemeProvider } from "@material-ui/core";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import AddStory from "../layout/AddStory";
import StorySearch from "./StorySearch.js";

function SearchSidebar(props) {
  const [key, setKey] = useState("stories");
  const mediaQuery = "(max-width: 770px)";
  const mediaQueryList = window.matchMedia(mediaQuery);
  const [sidebarOpen, setSidebarOpen] = useState(!mediaQueryList.matches ? true : false );

  function handleMQChange(mql) {
    if (!mql.matches) {
      setSidebarOpen(true);
    }
  }
  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  }
  mediaQueryList.addEventListener("change", handleMQChange)

  const theme = createTheme({
    overrides: {
      MuiIconButton: {
        root: {
          color: "white",
        },
      },
    },
  });
  return (
    <>
      <div
        className="sidebarCloseIcon"
        style={{ transform: sidebarOpen ? "none" : "rotate(45deg)" }}
      >
        <ThemeProvider theme={theme}>
          <IconButton
            style={{
              borderRadius: "50%",
              backgroundColor: "rgb(77, 65, 133)",
              boxShadow: "rgba(118, 120, 112, 0.55) 3px 4px 3px",
            }}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label={sidebarOpen ? "close" : "open"}
          >
            <CloseIcon color="inherit" />
          </IconButton>
        </ThemeProvider>
      </div>
      <Sidebar
        className="custom-form-text"
        children={<div style={{ backgroundColor: "#f5f2ff" }} />}
        sidebar={
          <div>
            <div style={{ marginBottom: "20px" }}>
              <Tabs
                activeKey={key}
                id="uncontrolled-tab-example"
                onSelect={(k) => setKey(k)}
              >
                <Tab
                  eventKey="stories"
                  tabClassName="sidebar-text"
                  title="Search Stories"
                >
                  <StorySearch
                    isMobile={mediaQueryList.matches}
                    handleCloseSidebar={handleCloseSidebar}
                    {...props}
                  />
                </Tab>
                <Tab
                  eventKey="addStory"
                  tabClassName="sidebar-text"
                  title="add a story"
                >
                  <AddStory
                    currentPage={key === "addStory"}
                    setKey={setKey}
                    centerMarker={props.centerMarker}
                  />
                </Tab>
              </Tabs>
            </div>
          </div>
        }
        open={sidebarOpen}
        onSetOpen={setSidebarOpen}
        pullRight={true}
        touch={false}
        sidebarClassName={"search-sidebar"}
        styles={{
          sidebar: {
            zIndex: 2,
            position: "absolute",
            top: 0,
            bottom: 0,
            transition: "transform .5s ease-out",
            WebkitTransition: "-webkit-transform .5s ease-out",
            willChange: "transform",
            overflowY: "auto",
            backgroundColor: "#f5f2ff",
            padding: "0.75rem",
          },
        }}
      />
    </>
  );
}

export default SearchSidebar;
