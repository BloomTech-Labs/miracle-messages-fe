import React, { Component } from "react";
import Map from "./Components/MapComponents/map";
import "./CSS/App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import indexRoutes from "./Components/dashboard/routes/index.js";
import VolunteerForm from "./Components/Forms/VolunteerForm";
import LoginFrom from "./Components/Login/LoginForm.js";
import "./CSS/style.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Map} />
          <Route exact path="/form" component={VolunteerForm} />
          <Route exact path="/login" component={LoginFrom} />
          {indexRoutes.map((prop, index) => {
            if (localStorage.getItem("token")) {
              return (
                <Route
                  path={prop.path}
                  key={index}
                  component={prop.component}
                />
              );
            } 
            // else {
            //   return <Redirect to="/login" />;
            // }
          })}
        </Switch>
      </div>
    );
  }
}

export default App;
