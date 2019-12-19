import React, { Component } from "react"
import Map from "./Components/MapComponents/map"
import "./CSS/App.css"
import { Route, Switch, Redirect } from "react-router-dom"
import Fulllayout from "./Components/dashboard/layouts/fulllayout"
import VolunteerForm from "./Components/Forms/VolunteerForm"
import LoginForm from "./Components/Login/LoginForm.js"
import { PrivateRoute } from "./Components/PrivateRoute"
import "./CSS/style.css"
import LoginPage from "./Components/Login/UserLogin"
import ConfirmPassword from "./Components/Forms/ForgotPassword/ConfirmPassword"
import ForgotPasswordForm from "./Components/Forms/ForgotPassword/ForgotPasswordForm"
import NewChapter from "./Components/Forms/NewChapter"

import NewChapterForm from "./Components/Forms/NewChapterForm"

import ChapterInfo from "./Components/Forms/ChapterInfo"

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Routes */}
        <Switch>
          <Route exact path="/" render={props => <Map {...props} />} />

          <Route exact path="/form" component={VolunteerForm} />

          <Route exact path="/admin/login" component={LoginForm} />

          <Route exact path="/user/login" component={LoginPage} />

          <Route exact path="/user/newchapter" component={NewChapter} />

          <Route exact path="/user/newchapterform" component={NewChapterForm} />

          <Route
            exact
            path="/user/forgotpassword1"
            component={ForgotPasswordForm}
          />

          <Route
            exact
            path="/user/forgotpassword2"
            component={ConfirmPassword}
          />
          <Route exact path="/testing" component={ChapterInfo} />

          <PrivateRoute path="/admin" component={Fulllayout} />

          <Redirect from="*" to="/" />
        </Switch>
      </div>
    )
  }
}

export default App
