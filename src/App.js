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

//Custom Imports
import { PrivateRoute } from "./Components/PrivateRoute"

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

          <Route exact path="/user/newchapter" component={NewChapterInfo} />

          <Route exact path="/user/newchapterform" component={ChapterForm} />

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

          {/* Takes to searchbar component  */}
          <Route path="/searchbar" component={SearchBar} />

          <Route path="/admin" component={Fulllayout} />

          <Redirect from="*" to="/" />
        </Switch>
      </div>
    )
  }
}

export default App
