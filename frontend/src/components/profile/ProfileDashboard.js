import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, useParams } from "react-router-dom";
import ProfilePage from "./ProfilePage";
import { getUserProfile } from "../../actions/users";
import CircularIndeterminate from "../common/CircularIndeterminate";
import useProfileImage from "./CustomHooks/useProfileImage";
import ProfileImageModal from "./ProfileImageModal";
import useRemovalConfirm from "./CustomHooks/useRemovalConfirm";
import ConfirmationModal from "./ConfirmationModal";
export default function ProfileDashboard() {
  const [pinData, setPinData] = useState(""); //dont mind this

  const {
    modalState,
    onSelectFile,
    toggle,
    image,
    crop,
    zoom,
    setcrop,
    setZoom,
    onCropComplete,
    onSubmitPic,
    showCroppedImage,
  } = useProfileImage();
  const {
    removalModalState,
    removalToggle,
    onRemovalSubmit,
  } = useRemovalConfirm();
  return (
    <div className="main-content-div" style={{ padding: "0px" }}>
      <Switch>
        <Route path="/users/:name">
          <GetUserProfile
            removalToggle={removalToggle}
            toggle={toggle}
          />
          <ProfileImageModal
            toggle={toggle}
            modalState={modalState}
            onSelectFile={onSelectFile}
            crop={crop}
            zoom={zoom}
            setcrop={setcrop}
            setZoom={setZoom}
            image={image}
            onCropComplete={onCropComplete}
            onSubmit={onSubmitPic}
            showCroppedImage={showCroppedImage}
          />
          <ConfirmationModal
            modalState={removalModalState}
            toggle={removalToggle}
            onSubmit={onRemovalSubmit}
            title="are you sure you want to unfavorite this story?"
            buttonTitle={"yes, unfavorite story"}
          />
        </Route>
        <Route path="/users">
          <h2>Profile Page</h2>
        </Route>
      </Switch>
    </div>
  );
}
/*
TODO:
redux user profile 
settings in settings page
loggedin user and viewother user  */
const GetUserProfile = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { userProfile, isProfileLoading } = auth; //profileStatus

  let { name } = useParams();

  useEffect(() => {
    dispatch(getUserProfile(name));
  }, [dispatch, name]);

  return (
    <>
      {isProfileLoading ? (
        <div style={{display: "flex", flexDirection: "row", paddingTop: "3rem", justifyContent: "center"}}>
        <CircularIndeterminate />
          <h2> Profile Loading </h2>
        </div>
      ) : (
        <ProfilePage userProfile={userProfile} {...props} />
      )}
    </>
  );
};
