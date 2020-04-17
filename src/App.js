import React from "react"


//Router
import { Route, Switch, Redirect, useHistory } from "react-router-dom"

//Styles
import "./CSS/App.css"
import "./CSS/style.css"

//Imported Components
import Map from "./Components/MapComponents/map";
import FullLayout from "./Components/dashboard/layouts/fulllayout";
import VolunteerForm from "./Components/Forms/VolunteerForm";
import LoginForm from "./Components/Login/LoginForm.js";
import LoginPage from "./Components/Login/UserLogin";
import NewChapterInfo from "./Components/Forms/NewChapterInfo";
import ChapterForm from "./Components/Forms/ChapterForm"
import ForgotPasswordForm from "./Components/Forms/ForgotPassword/ForgotPasswordForm"
import ConfirmPassword from "./Components/Forms/ForgotPassword/ConfirmPassword"
import SearchBar from "./Components/MapComponents/SearchBar.js"
import NewVolunteer from './Components/Forms/onboarding/NewVolunteer';

//Octa Import

import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import config from './config/config.js';
//Custom Imports
import { PrivateRoute } from "./Components/PrivateRoute";

// const config = {
//   issuer: `https://donyawebgroup-us.okta.com/oauth2/default`,
//   redirectUri: window.location.origin + `/implicit/callback`,
//   clientId: `0oa4sd1nfAm7D5kIA4x6`,
//   pkce: true
// };

//SHAWN OKTA
import CustomLogin from './Components/Login/CustomLogin';



const App = () => {
  const history = useHistory();
  const onAuthRequired = () => {
    // Redirect to the /login page that has a CustomLoginComponent
    history.push('/admin/login');
  };
  
    return (
      <div className="App">
        <Security 
        issuer='https://dev-662389.okta.com/oauth2/default'
        clientId='0oa4sulf3qW8OTVdF4x6'
        redirectUri={window.location.origin + '/implicit/callback'}
        onAuthRequired={onAuthRequired}
        pkce={true}
        >
        {/* Routes */}
          <Switch>
            <Route exact path="/" render={props => <Map {...props} />} />

            <Route exact path="/form" component={VolunteerForm} />

            

            <Route exact path="/user/login" component={LoginPage} />
            <Route exact path="/user/Register" component={NewVolunteer} />
            {/* <Route exact path="/admin/login" component={LoginForm} /> */}
            <Route exact path='/admin/login' render={() => <LoginForm baseUrl='https://dev-662389.okta.com' />} />
            <Route path='/implicit/callback' component={LoginCallback}/>

            
              
              <Route exact path="/user/newchapter" component={NewChapterInfo} />
              <Route exact path="/user/newchapterform" component={ChapterForm} />
              
            
            
            {/* Takes to searchbar component  */}
            <Route path="/searchbar" component={SearchBar} />

            {/* <PrivateRoute path="/admin" component={Fulllayout} /> */}
            {/* <SecureRoute path="/admin" component={Fulllayout} /> */}
            {/* <SecureRoute path="/admin" render={props => <FullLayout {...props} />} /> */}
            <SecureRoute path="/admin" component={FullLayout} />


            <Redirect from="*" to="/" />
          </Switch>
        </Security>
      </div>
    );
}

export default App;
