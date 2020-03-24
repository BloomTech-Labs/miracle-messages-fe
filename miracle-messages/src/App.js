import React from "react"

//Router
import { Route, Switch, Redirect, useHistory } from "react-router-dom"

//Styles
import "./CSS/App.css"
import "./CSS/style.css"

//Imported Components
import Map from "./Components/MapComponents/map";
import Fulllayout from "./Components/dashboard/layouts/fulllayout";
import VolunteerForm from "./Components/Forms/VolunteerForm";
import LoginForm from "./Components/Login/LoginForm.js";
import LoginPage from "./Components/Login/UserLogin";
import NewChapterInfo from "./Components/Forms/NewChapterInfo";
import ChapterForm from "./Components/Forms/ChapterForm"
import ForgotPasswordForm from "./Components/Forms/ForgotPassword/ForgotPasswordForm"
import ConfirmPassword from "./Components/Forms/ForgotPassword/ConfirmPassword"
import SearchBar from "./Components/MapComponents/SearchBar.js"

//Octa Import

import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import config from './config/config';
//Custom Imports
import { PrivateRoute } from "./Components/PrivateRoute";

// const config = {
//   issuer: `https://donyawebgroup-us.okta.com/oauth2/default`,
//   redirectUri: window.location.origin + `/implicit/callback`,
//   clientId: `0oa4sd1nfAm7D5kIA4x6`,
//   pkce: true
// };

//const history = useHistory();

const customAuthHandler = () => {
  // Redirect to the /login page that has a CustomLoginComponent
  //history.push('/login');
};

const App = props => {

    return (
      <div className="App">
        <Security {...config.oidc}
        onAuthRequired={customAuthHandler}>
        {/* Routes */}
          <Switch>
            <Route exact path="/" render={props => <Map {...props} />} />

            <Route exact path="/form" component={VolunteerForm} />

            

            <Route exact path="/user/login" component={LoginPage} />
            <Route exact path="/admin/login" component={LoginForm} />
            
              
              <Route exact path="/user/newchapter" component={NewChapterInfo} />
              <Route exact path="/user/newchapterform" component={ChapterForm} />
              
            
            
            {/* Takes to searchbar component  */}
            <Route path="/searchbar" component={SearchBar} />
            <Route path='/implicit/callback' component={LoginCallback}/>
            <PrivateRoute path="/admin" component={Fulllayout} />

            <Redirect from="*" to="/" />
          </Switch>
        </Security>
      </div>
    );
}

export default App;
