import React from "react";

//Router
import { Route, Switch, Redirect, useHistory } from "react-router-dom";

//Styles
import'./App.scss';
import "./CSS/style.css";

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

// const config = {
//   issuer: `https://donyawebgroup-us.okta.com/oauth2/default`,
//   redirectUri: window.location.origin + `/implicit/callback`,
//   clientId: `0oa4sd1nfAm7D5kIA4x6`,
//   pkce: true
// };

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
      <Security
        issuer="https://dev-750287.okta.com/oauth2/default"
        clientId="0oac2l3f67qM9MChZ4x6"
        redirectUri={window.location.origin + "/implicit/callback"}
        onAuthRequired={onAuthRequired}
        pkce={true}
      >
        {/* Routes */}

        <Switch>
          <Route exact path="/" render={(props) => <Map {...props} />} />

          {/* <Route exact path="/form" component={VolunteerForm} /> */}

          <Route path="/chapter" component={ChapterPage} />

          <Route exact path="/user/register" component={NewVolunteer} />

          <Route
            exact
            path="/login"
            render={() => <LoginForm baseUrl="https://dev-750287.okta.com" />}
          />

          <Route path="/implicit/callback" component={LoginCallback} />

          {/* <Route exact path="/user/newchapter" component={NewChapterInfo} /> */}
          <Route exact path="/user/newchapterform" component={ChapterForm} />

          <SecureRoute path="/user" component={FullLayout} />

          <Redirect from="*" to="/" />
        </Switch>
      </Security>
    </div>
  );
};

export default App;
