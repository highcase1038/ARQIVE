import React from "react";
import {
  Switch,
  Route,
  Redirect,
  useParams,
  useRouteMatch,
  useLocation,
} from "react-router-dom";

import ManageFlag from "./ManageFlag";
import ManageUsers from "./ManageUsers";
import ManageComments from "./ManageComments";
// import ManageCategory from "./ManageCategory";
import { NavTab } from "react-router-tabs";
import "./styles/react-router-tabs.css";
export default function Manage() {
  let { path } = useRouteMatch();

  return (
    <div className="main-content-div management-div">
      <NavTab to="/manage/flag">Flags</NavTab>
      <NavTab to="/manage/users">Users</NavTab>
      <NavTab to="/manage/comments">Comments</NavTab>
      {/*<NavTab to="/manage/category">Manage Category</NavTab>*/}
      <Switch>
        <Route exact path={`/manage`}>
          <MainManage />
          {path}
          <Locate />
        </Route>
        <Route path={`/manage/flag`}>
          <ManageFlag />
        </Route>
        <Route path={`/manage/users`}>
          <ManageUsers />
        </Route>
        <Route path={`/manage/comments`}>
          <ManageComments />
        </Route>
        {/* commenting out just for now*/}
        {/*<Route path={`/manage/category`}>*/}
        {/*  <ManageCategory />*/}
        {/*</Route>*/}
      </Switch>
    </div>
  );
}

function MainManage() {
  let { setting } = useParams();

  return (
    <div>
      {setting}
      <Redirect to="/manage/flag" />;
    </div>
  );
}

function Locate() {
  let location = useLocation();
  return <div>{location.pathname}</div>;
}
