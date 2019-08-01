import React, { Component } from 'react';

import MapGL, { Marker, Popup, NavigationControl } from 'react-map-gl';
import CityPin from './Map_Componenets/city_pin';
import CityInfo from './Map_Componenets/city_info';
//import Map from './Map_Componenets/map'
import 'mapbox-gl/dist/mapbox-gl.css';
import './CSS/MapGl.css';
import './CSS/App.css';

import { getData } from "./Actions";
import { connect } from "react-redux";

require('dotenv').config();

const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

class App extends Component {
  componentDidMount() {
    this.props.getData();
  }

  

  //this toggle switches the display inside the pop-up
  learnMoreToggle = e => {
    e.preventDefault();

    this.setState({ learnMore: !this.state.learnMore });
  };

  //this is to get chaptes data from the backend. Currently, we get numvolunteers, location, latitude, longitude.
  _renderCityMarker = (city, index) => {
    return (
      <Marker
        key={`marker-${index}`}
        latitude={city.latitude}
        longitude={city.longitude}
      >
        <CityPin size={20} onClick={() => {this.setState({ popupInfo: city })}} />
      </Marker>
    
    );
  };

  _renderPopup() {
  
    if (this.state!=null && this.state.popupInfo){
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
}
  _updateViewport = viewport => {
    this.setState({ viewport });
  };

  //adding a viewport
  render() {
    const { viewport } = this.props;

    return (
      <div className="App">
        <MapGL
          //onClick={() => this.setState({ popupInfo: null })}
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
          <div style={{ position: 'absolute', right: 0, bottom: 30, zIndex: 1 }}>
            <NavigationControl />
          </div>

          {this.props.chapter_data.map(this._renderCityMarker)}
          {this._renderPopup()}
        </MapGL>
        {/* <Map/> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    chapter_data: state.chapterReducer.chapter_data,
    fetching: state.chapterReducer.fetching,
    popupInfo: state.chapterReducer.popupInfo,
    viewport: state.chapterReducer.viewport,
    learnMore: state.chapterReducer.learnMore

  };
};

export default connect(
  mapStateToProps,
  { getData }
)(App); 


// class App extends Component {
//   constructor(props) {
//     super(props);

//     //setting the very intial viewport background with one dot, hard coding required by mapbox. Without this, mapbox doesn't know where to focus and focuses on europe/africa as default.

//     this.state = {
//       viewport: {
//         latitude: 37.785164,
//         longitude: -100,
//         zoom: 3.5,
//         bearing: 0,
//         pitch: 0
//       },
//       chapter_data: [], //this gets populated with componentDidMount
//       popupInfo: null, //null means no pop-ups are being rendered for any of the cities
//       learnMore: false //learn more is a togleinside the pop-ups
//     };
//   }

//   //this toggle switches the display inside the pop-up
//   learnMoreToggle = e => {
//     e.preventDefault();

//     this.setState({ learnMore: !this.state.learnMore });
//   };

//   //this is to get chaptes data from the backend. Currently, we get numvolunteers, location, latitude, longitude.
//   componentDidMount() {
//     axios
//       .get('https://miracle-messages-staging.herokuapp.com/api/chapter')
//       .then(res => {
//         this.setState({ chapter_data: res.data });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }

//   _renderCityMarker = (city, index) => {
//     return (
//       <Marker
//         key={`marker-${index}`}
//         latitude={city.latitude}
//         longitude={city.longitude}
//       >
//         <CityPin size={20} onClick={() => this.setState({ popupInfo: city })} />
        
//       </Marker>
//     );
//   };



//   _renderPopup() {
//     const { popupInfo } = this.state;

//     return (
//       popupInfo && (
//         <Popup
//           className="cityPopup"
//           tipSize={20}
//           offsetTop={-20}
//           latitude={popupInfo.latitude}
//           longitude={popupInfo.longitude}
//           closeButton={true}
//           closeOnClick={false}
//           onClose={() => this.setState({ popupInfo: null })}
//         >
//           <CityInfo
//             info={popupInfo}
//             toggle={this.learnMoreToggle}
//             learnMore={this.state.learnMore}
//           />
//         </Popup>
//       )
//     );
//   }

//   _updateViewport = viewport => {
//     this.setState({ viewport });
//   };

//   render() {
//     const { viewport } = this.state;

//     return (
//       <div className="App">
//         {/* <MapGL
//           onClick={() => this.setState({ popupInfo: null })}
//           {...viewport}
//           width="100vw"
//           height="100vh"
//           mapStyle="mapbox://styles/miraclemessages/cjyhf6b851bii1cq6lr990cf1"
//           onViewportChange={this._updateViewport}
//           mapboxApiAccessToken={TOKEN}
//           minZoom={3}
//           maxPitch={0}
//           dragRotate={false}
//         >
//           <div
//             style={{ position: 'absolute', right: 0, bottom: 30, zIndex: 1 }}
//           >
//             <NavigationControl />
//           </div>
//           {this.state.chapter_data.map(this._renderCityMarker)}
//           {this._renderPopup()}
//         </MapGL> */}
//         <Map/>
//       </div>
//     );
//   }
// }
