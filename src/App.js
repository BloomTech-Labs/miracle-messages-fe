import React, { useState } from "react";
import { ToastProvider } from "react-toast-notifications";

//Router
import { Route, useHistory } from "react-router-dom";

//Styles
import "./App.scss";
import "./CSS/style.css";

// Header
import Navbar from "./Components/MapComponents/Navbar";

//Imported Components
import Map from "./Components/MapComponents/map";
import Volunteers from "./Components/dashboard/views/Volunteers.js";
import Chapters from "./Components/dashboard/views/Chapters/Chapters.js";
import Sponsors from "./Components/dashboard/views/Sponsors/Sponsors.js";
import ChapterCard from "./Components/dashboard/views/Chapters/ChapterCard";
import Pending from "./Components/dashboard/views/Chapters/Pending";
import Sidebar from "./Components/dashboard/sidebar/sidebar";
import UserSettings from "./Components/dashboard/UserSettings";
// import VolunteerForm from "./Components/Forms/VolunteerForm";

import LoginForm from "./Components/Login/LoginForm.js";

// import NewChapterInfo from "./Components/Forms/NewChapterInfo";
import ChapterForm from "./Components/Forms/ChapterForm";
import NewVolunteer from "./Components/Forms/onboarding/NewVolunteer";
import ChapterPage from "./Components/ChapterPage/ChapterPage";

//Octa Import

import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import config from "./config/config.js";
//Custom Imports
// import { PrivateRoute } from "./Components/PrivateRoute";

const App = () => {
  const history = useHistory();
  const onAuthRequired = () => {
    // Redirect to the /login page that has a CustomLoginComponent
    history.push("/login");
  };
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <div className="App">
      <ToastProvider>
        <Navbar setSideBarOpen={setSideBarOpen} sideBarOpen={sideBarOpen} />
      </ToastProvider>
      <Sidebar setSideBarOpen={setSideBarOpen} sideBarOpen={sideBarOpen} />
      <Security {...config.oidc} onAuthRequired={onAuthRequired}>
        {/* Routes */}

        <Route
          exact
          path="/"
          render={(props) => <Map {...props} sideBarOpen={sideBarOpen} />}
        />

        {/* <Route exact path="/form" component={VolunteerForm} /> */}

        <Route path="/chapter/:id" component={ChapterPage} />

        <Route exact path="/user/register" component={NewVolunteer} />

        <Route exact path="/login" component={LoginForm} />

        <Route exact path="/implicit/callback" component={LoginCallback} />

        <Route exact path="/user/newchapterform" component={ChapterForm} />

        {/* Dashboard */}
        {/* <SecureRoute path="/admin" component={FullLayout} /> */}
        <ToastProvider>
          <SecureRoute path="/admin/dashboard" component={Chapters} />
        </ToastProvider>
        <ToastProvider>
          <SecureRoute exact path="/admin/pending" component={Pending} />
        </ToastProvider>

        <SecureRoute exact path="/admin/Sponsors" component={Sponsors} />
        <SecureRoute exact path="/admin/volunteers" component={Volunteers} />
        <SecureRoute
          path="/admin/chapters/:id"
          render={(props) => <ChapterCard {...props} />}
        />
        <SecureRoute exact path="/admin/settings" component={UserSettings} />
      </Security>
    </div>
  );
};

export default App;
