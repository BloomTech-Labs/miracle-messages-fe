
import React, { Component } from "react"
import Map from "./Components/MapComponents/map"
import "./CSS/App.css"
import { Route, Switch, Redirect } from "react-router-dom"
import indexRoutes from "./Components/dashboard/routes/index.js"
import VolunteerForm from "./Components/Forms/VolunteerForm"
import LoginForm from "./Components/Login/LoginForm.js"
import { PrivateRoute } from "./Components/PrivateRoute"
import "./CSS/style.css"
import LoginPage from "./Components/Login/UserLogin"
import ConfirmPassword from "./Components/Forms/ForgotPassword/ConfirmPassword"
import ForgotPasswordForm from "./Components/Forms/ForgotPassword/ForgotPasswordForm"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Map} />

          <Route exact path="/form" component={VolunteerForm} />

          <Route exact path="/login" component={LoginForm} />

          <Route exact path="/user/login" component={LoginPage} />

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

          {indexRoutes.map((prop, index) => {
            return (
              <PrivateRoute
                path={prop.path}
                key={index}
                component={prop.component}
              />
            )
          })}

          <Redirect from="*" to="/" />
        </Switch>
      </div>
    )
  }
}

export default App
