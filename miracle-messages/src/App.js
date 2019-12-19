import React, { Component } from "react";

//Router
import { Route, Switch, Redirect } from "react-router-dom";

//Styles
import "./CSS/App.css";
import "./CSS/style.css";

//Imported Components
import Map from "./Components/MapComponents/map";
import Fulllayout from "./Components/dashboard/layouts/fulllayout";
import VolunteerForm from "./Components/Forms/VolunteerForm";
import LoginForm from "./Components/Login/LoginForm.js";
import LoginPage from "./Components/Login/UserLogin";
import NewChapter from "./Components/Forms/NewChapter";
import ForgotPasswordForm from "./Components/Forms/ForgotPassword/ForgotPasswordForm";
import ConfirmPassword from "./Components/Forms/ForgotPassword/ConfirmPassword";

//Custom Imports
import { PrivateRoute } from "./Components/PrivateRoute";
import SearchBar from "./Components/MapComponents/SearchBar.js";
import ChapterInfo from "./Components/Forms/ChapterInfo";

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

          {/* Takes to searchbar component  */}
          <Route path="/searchbar" component={SearchBar} />

          <PrivateRoute path="/admin" component={Fulllayout} />

          <Redirect from="*" to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
