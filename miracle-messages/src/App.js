import React, { Component } from "react";
import Map from "./Components/MapComponents/map";
import "./CSS/App.css";
import { Route } from "react-router-dom";
import VolunteerForm from "./Components/Forms/VolunteerForm";
import LoginFrom from "./Components/Login/LoginForm.js";
import CitySearch from "./Components/Forms/CitySearch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Map} />
        <Route path="/form" component={VolunteerForm} />
        <Route path="/login" component={LoginFrom} />
        <Route path="/search" component={CitySearch} />
      </div>
    );
  }
}

export default App;
