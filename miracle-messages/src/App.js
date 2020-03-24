import React, { Component } from "react"

//Router
import { Route, Switch, Redirect } from "react-router-dom"

//Styles
import "./CSS/App.css"
import "./CSS/style.css"

//Imported Components
import Map from "./Components/MapComponents/map"
import Fulllayout from "./Components/dashboard/layouts/fulllayout"
import VolunteerForm from "./Components/Forms/VolunteerForm"
import LoginForm from "./Components/Login/LoginForm.js"
import LoginPage from "./Components/Login/UserLogin"
import NewChapterInfo from "./Components/Forms/NewChapterInfo"
import ChapterForm from "./Components/Forms/ChapterForm"
import ForgotPasswordForm from "./Components/Forms/ForgotPassword/ForgotPasswordForm"
import ConfirmPassword from "./Components/Forms/ForgotPassword/ConfirmPassword"
import SearchBar from "./Components/MapComponents/SearchBar.js"

//Octa Import

import { Security, LoginCallback } from '@okta/okta-react';

//Custom Imports
import { PrivateRoute } from "./Components/PrivateRoute"

const config = {
  issuer: `https://donyawebgroup-us.okta.com/oauth2/default`,
  redirectUri: window.location.origin + `/implicit/callback`,
  clientId: `0oa4sd1nfAm7D5kIA4x6`,
  pkce: true
};

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Routes */}
        <Switch>
          <Route exact path="/" render={props => <Map {...props} />} />

          <Route exact path="/form" component={VolunteerForm} />

          

          <Route exact path="/user/login" component={LoginPage} />
          <Route exact path="/admin/login" component={LoginForm} />
          <Security {...config}>
            
            <Route exact path="/user/newchapter" component={NewChapterInfo} />
            <Route exact path="/user/newchapterform" component={ChapterForm} />
            <Route path='/implicit/callback' component={LoginCallback}/>
          </Security>
          
          {/* Takes to searchbar component  */}
          <Route path="/searchbar" component={SearchBar} />

          <PrivateRoute path="/admin" component={Fulllayout} />

          <Redirect from="*" to="/" />
        </Switch>
      </div>
    )
  }
}

export default App
