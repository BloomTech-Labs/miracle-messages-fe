import React, { Component } from "react";
import Map from "./Components/MapComponents/map";
import "./CSS/App.css";
import { Route } from "react-router-dom";
import VolunteerForm from "./Components/Forms/VolunteerForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Map} />
        <Route path="/form" component={VolunteerForm} />
      </div>
    );
  }
}

export default App;
