import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editUser, getUserProfile } from "../../actions/users";
import { Redirect, useParams } from "react-router-dom";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { userSelfDelete } from "../../actions/auth";
import Switch from "react-switch";
import ConfirmationModal from "./ConfirmationModal";
import useRemovalConfirm from "./CustomHooks/useRemovalConfirm";

import { Row, Col } from "react-bootstrap";

export default function Settings(props) {
  const [accountDeleted, setAccountDeleted] = useState(false);
  const [redirectToProfile, setRedirectToProfile] = useState(false);

  let { name } = useParams();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const userProfile = useSelector((state) => state.auth.userProfile);
  const [bio, setBio] = useState("");
  const [checked, setChecked] = useState(false);
  const [profileVisibilityChecked, setProfileVisibilityChecked] = useState(
    false
  );

  const updateAccessibility = () => {
    setChecked(!checked);
  };

  const updateProfileVisibility = () => {
    setProfileVisibilityChecked(!profileVisibilityChecked);
  };

  const deleteAccount = () => {
    dispatch(userSelfDelete());
    setAccountDeleted(!accountDeleted);
  };
  const {
    removalModalState,
    removalToggle,
    onConfirmDelete,
  } = useRemovalConfirm(deleteAccount);
  const onSubmit = (e) => {
    e.preventDefault(); //prevents refresh of page

    const accessibility_mode_active = checked;

    const is_profile_private = profileVisibilityChecked;

    const userData = { bio, accessibility_mode_active, is_profile_private };

    dispatch(editUser(userProfile.id, user.id, userData));
    setRedirectToProfile(true);
  };
  useEffect(() => {
    dispatch(getUserProfile(name));
  }, [dispatch, name]);

  useEffect(() => {
    if (userProfile) {
      setBio(userProfile.bio);
      setChecked(userProfile.accessibility_mode_active);
      setProfileVisibilityChecked(userProfile.is_profile_private);
    }
  }, [userProfile]);

  const { user } = auth;

  if (accountDeleted) {
    return <Redirect to="/" />;
  }
  if (redirectToProfile) {
    const profilePath = `/users/${user.username}`;
    return <Redirect to={profilePath} />;
  }
  let userCanEdit = "";

  if (userProfile && user) {
    if (userProfile.id === user.id || user.is_administrator) {
      userCanEdit = (
        <form
          onSubmit={onSubmit}
          style={{ width: "100%", minHeight: "100%", height: "auto" }}
        >
          <Row>
            <Col
              className={"col-xl-4 col-md-8 offset-lg-2 offset-md-1 col-12"}
              style={{ paddingTop: "50px" }}
            >
              <h1>profile settings</h1>
              {/*<Redirect to="/" />*/}
              <div className="form-group">
                <br />
                <label>Bio</label>
                <textarea
                  className="form-control profile-settings-bio-form"
                  type="text"
                  name="bio"
                  onChange={(e) => setBio(e.target.value)}
                >
                  {bio}
                </textarea>
              </div>
             
              <div>
                <br />

                <Switch
                  className="react-switch"
                  onColor={"#00ce7d"}
                  offColor={"#e63f52"}
                  width={90}
                  height={35}
                  onChange={updateProfileVisibility}
                  checked={profileVisibilityChecked}
                />
                <span>make profile private</span>
              </div>
              <div>
                <br />

                <Switch
                  className="react-switch"
                  onColor={"#00ce7d"}
                  offColor={"#e63f52"}
                  width={90}
                  height={35}
                  onChange={updateAccessibility}
                  checked={checked}
                />
                <span>turn on accessibility</span>
              </div>
              <br />
              <button
                onClick={() => removalToggle(user.id)}
                type="button"
                className="btn-delete-profile"
              >
                delete profile
              </button>
            </Col>
            <Col
              className={"col-xl-4 col-md-10 offset-lg-1 offset-md-1 col-12"}
              style={{
                paddingTop: "50px",
                marginTop: "auto",
                marginBottom: "auto",
                textAlign: "center",
              }}
            >
              <div>
                <button
                  className={"profile-settings-cancel-btn "}
                  onClick={() => setRedirectToProfile(true)}
                >
                  Cancel
                </button>
              </div>
              <div style={{ marginTop: "20px" }}>
                <button className={"profile-settings-submit-btn "}>save</button>
              </div>
            </Col>
          </Row>
        </form>
      );
    } else {
      userCanEdit = (
        <div>
          <h2
            style={{
              textTransform: "lowercase",
              color: "white",
              fontFamily: "Eina, Arial",
            }}
          >
            Forbidden!
          </h2>
        </div>
      );
    }
  } else {
    userCanEdit = (
      <div>
        <h2
          style={{
            textTransform: "lowercase",
            color: "white",
            fontFamily: "Eina, Arial",
          }}
        >
          Forbidden!
        </h2>
      </div>
    );
  }
  return (
    <div className={"main-content-div profile-settings-div"}>
      <div style={{ padding: "20px" }}>{userCanEdit}</div>;
      <ConfirmationModal
        modalState={removalModalState}
        toggle={removalToggle}
        onSubmit={onConfirmDelete}
        title="are you sure you want to delete your profile?"
        buttonTitle={"yes, delete my profile"}
      />
    </div>
  );
}
