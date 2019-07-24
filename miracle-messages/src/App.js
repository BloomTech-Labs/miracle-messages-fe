import React, { Component } from "react";
import MapGL, {Marker, Popup} from "react-map-gl";
import CityPin from './Map_Componenets/city_pin';
import CityInfo from './Map_Componenets/city-info';
//import axios from "axios";

import "./CSS/App.css";
import "mapbox-gl/dist/mapbox-gl.css";

import CITIES from './cities.json'

require('dotenv').config();

const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
// process.env.REACT_APP_MAPBOX_TOKEN; //<-Put your public token here, besure to remove before uploading changes to git

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 37.785164,
        longitude: -100,
        zoom: 3.5,
        bearing: 0,
        pitch: 0
      }
    };
  }

  // componentDidMount() {
  //   axios
  //     .get("https://miracle-messages-staging.herokuapp.com/users")
  //     .then(res => {
  //       console.log(res.data);
  //       this.setState({ data: res.data });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  _renderCityMarker = (city, index) => {
    return (
      <Marker
        key={`marker-${index}`}
        longitude={city.longitude}
        latitude={city.latitude}
      >
        <CityPin size={20} onClick={() => this.setState({ popupInfo: city })} />
      </Marker>
    );
  };

  _renderPopup() {
    const { popupInfo } = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <CityInfo info={popupInfo} />
        </Popup>
      )
    );
  }

  _updateViewport = viewport => {
    this.setState({ viewport });
  };

  render() {
    const { viewport } = this.state;

    return (
      <div className="App">
        <MapGL
          {...viewport}
          width="100vw"
          height="100vh"
          mapStyle="mapbox://styles/miraclemessages/cjyhf6b851bii1cq6lr990cf1"
          onViewportChange={this._updateViewport}
          mapboxApiAccessToken={TOKEN}
        >
          {CITIES.map(this._renderCityMarker)}

          {this._renderPopup()}
        </MapGL>
      </div>
    );
  }
}

export default App;
