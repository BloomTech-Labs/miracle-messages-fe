import React from "react";
import { ToastProvider } from "react-toast-notifications";

//Router
import { Route, Redirect, useHistory } from "react-router-dom";

//Styles
import "./App.scss";
import "./CSS/style.css";

// Header
import Navbar from "./Components/MapComponents/Navbar";

//Imported Components
import Map from "./Components/MapComponents/map";
import FullLayout from "./Components/dashboard/layouts/fulllayout";
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
import { PrivateRoute } from "./Components/PrivateRoute";

//SHAWN OKTA
import CustomLogin from "./Components/Login/CustomLogin";

const App = () => {
  const history = useHistory();
  const onAuthRequired = () => {
    // Redirect to the /login page that has a CustomLoginComponent
    history.push("/login");
  };

  return (
    <div className="App">
      <ToastProvider>
        <Navbar />
      </ToastProvider>
      <Security {...config.oidc} onAuthRequired={onAuthRequired}>
        {/* Routes */}

        <Route exact path="/" render={(props) => <Map {...props} />} />

        {/* <Route exact path="/form" component={VolunteerForm} /> */}

        <Route path="/chapter/:id" component={ChapterPage} />

        <Route exact path="/user/register" component={NewVolunteer} />

        <Route exact path="/login" component={LoginForm} />

        <Route path="/implicit/callback" component={LoginCallback} />

        <Route exact path="/user/newchapterform" component={ChapterForm} />

        <SecureRoute path="/user" component={FullLayout} />
      </Security>
    </div>
  );
};

export default App;
