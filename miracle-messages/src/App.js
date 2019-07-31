import React, { Component } from 'react';
import MapGL, { Marker, Popup, NavigationControl } from 'react-map-gl';
import CityPin from './Map_Componenets/city_pin';
import CityInfo from './Map_Componenets/city-info';
import axios from 'axios';
import Form from './components/Form'

import 'mapbox-gl/dist/mapbox-gl.css';
import './CSS/MapGl.css';
import './CSS/App.css';

// require('dotenv').config();

const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

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
      },
      chapter_data: [],
      popupInfo: null,
      learnMore: false
    };
  }

  learnMoreToggle = e => {
    e.preventDefault();

    this.setState({ learnMore: !this.state.learnMore });
  };

  componentDidMount() {
    axios
      .get('https://miracle-messages-staging.herokuapp.com/api/chapter')
      .then(res => {
        this.setState({ chapter_data: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  _renderCityMarker = (city, index) => {
    return (
      <Marker
        key={`marker-${index}`}
        latitude={city.latitude}
        longitude={city.longitude}
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
          className="cityPopup"
          tipSize={20}
          offsetTop={-20}
          latitude={popupInfo.latitude}
          longitude={popupInfo.longitude}
          closeButton={true}
          closeOnClick={false}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <CityInfo
            info={popupInfo}
            toggle={this.learnMoreToggle}
            learnMore={this.state.learnMore}
          />
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
        {/* <MapGL
          onClick={() => this.setState({ popupInfo: null })}
          {...viewport}
          width="100vw"
          height="100vh"
          mapStyle="mapbox://styles/miraclemessages/cjyhf6b851bii1cq6lr990cf1"
          onViewportChange={this._updateViewport}
          mapboxApiAccessToken={TOKEN}
          minZoom={3}
          maxPitch={0}
          dragRotate={false}
        >
          <div
            style={{ position: 'absolute', right: 0, bottom: 30, zIndex: 1 }}
          >
            <NavigationControl />
          </div>
          {this.state.chapter_data.map(this._renderCityMarker)}
          {this._renderPopup()}
        </MapGL> */}
        <Form/>
      </div>
    );
  }
}

export default App;
