import React, { useEffect } from "react";
import Header from "./components/layout/Header";
import MapDashboard from "./components/Map/MapDashboard";
import About from "./components/Pages/About";
import FAQ from "./components/Pages/FAQ";
import Resources from "./components/Pages/Resources";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegisterForm from "./components/accounts/RegisterForm";
// if deployed to apache, mess with congig htt file
import { Provider } from "react-redux";
import store from "./store";
import LoginForm from "./components/accounts/LoginForm";

import styles from "./components//styles/styles.css";
import PrivateRoute from "./components/common/PrivateRoute";
import { loadUser } from "./actions/auth";

import Manage from "./components/AdminMod/Manage";

import Settings from "./components/profile/ProfileSettings";

import ForgotPasswordForm from "./components/accounts/ForgotPasswordForm";
import Support from "./components/Pages/Support";
import ResetPasswordForm from "./components/accounts/ResetPasswordForm";
import ContactUs from "./components/Pages/ContactUs";
import ProfileDashboard from "./components/profile/ProfileDashboard";
import NotFoundPage from "./components/Pages/NotFoundPage";
import Terms from "./components/Pages/Terms";
import Credits from "./components/Pages/Credits";
import PrivacyStatement from "./components/Pages/App Privacy.js";

export default function App() {
  useEffect(() => store.dispatch(loadUser()), []);

  return (
    <Provider store={store}>
      <Router>
        <>
          <Header />
          <div style={{ height: "100%", overflowY: "scroll" }}>
            <Switch>
              <Route exact path="/" component={MapDashboard} />
              <Route exact path="/story" component={MapDashboard} />
              <Route exact path="/story/:id" component={MapDashboard} />
              <Route exact path="/About" component={About} />
              <Route exact path="/Credits" component={Credits} />
              <Route exact path="/resources" component={Resources} />
              <Route exact path="/faq" component={FAQ} />
              <Route exact path="/login" component={LoginForm} />
              <Route exact path="/register" component={RegisterForm} />
              <Route exact path="/users/:name" component={ProfileDashboard} />
              <Route exact path="/users/:name/settings" component={Settings} />
              <Route exact path="/users" component={ProfileDashboard} />
              <PrivateRoute exact path="/manage" component={Manage} />
              <PrivateRoute exact path="/manage/flag" component={Manage} />
              <PrivateRoute exact path="/manage/users" component={Manage} />
              <PrivateRoute exact path="/manage/comments" component={Manage} />
              <PrivateRoute exact path="/manage/category" component={Manage} />
              <Route path="/forgotPassword" component={ForgotPasswordForm} />
              <Route path="/resetPassword" component={ResetPasswordForm} />
              <Route path="/Support" component={Support} />
              <Route path="/ContactUs" component={ContactUs} />
              <Route path="/Terms" component={Terms} />
              <Route path="/PrivacyPolicy"component={PrivacyStatement} />
              <Route path="*">
                <NotFoundPage />
              </Route>
            </Switch>
          </div>
        </>
      </Router>
    </Provider>
  );
}
