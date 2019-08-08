import React, { Component } from "react";
import MapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import DeckGL from "deck.gl";
import CityPin from "./city_pin";
import CityInfo from "./city_info";
import "mapbox-gl/dist/mapbox-gl.css";
//import './CSS/MapGl.css';
import { getData } from "../../Actions/index";
import { updatePopupAction } from "../../Actions/updatePopupAction";
import { learnMoreAction } from "../../Actions/learnMoreAction";
import { connect } from "react-redux";

require("dotenv").config();

const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
const STYLE = "mapbox://styles/miraclemessages/cjyhf6b851bii1cq6lr990cf1";

class Map extends Component {
  //this fetches the data from the backend

  state = {
    viewport: {
      latitude: 37.785164,
      longitude: -100,
      zoom: 3.5,
      bearing: 0,
      pitch: 0
    }
  };

  componentDidMount() {
    this.props.getData();
  }

  //_renderCityMarker plugs into line 83 array map to enable the marker for each city to display on map
  _renderCityMarker = (city, index) => {
    return (
      <Marker
        key={`marker-${index}`}
        latitude={city.latitude}
        longitude={city.longitude}
      >
        <CityPin city={city} />
      </Marker>
    );
  };

  //_renderPopup enables a pop-up to show if a city marker/pin is clicked

  _renderPopup() {
    const popupInfo = this.props.popupInfo;
    //popupInfo=city means popup will show for that city else =null means no popup will show
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
          onClose={() => this.props.updatePopupAction(null)}
        >
          <CityInfo info={popupInfo} />
        </Popup>
      )
    );
  }

  //_updateViewport updates the map view when a user zooms/pans etc.
  _updateViewport = viewport => {
    this.setState({ viewport });
    //viewport represents the current view/state of the map.
  };

  render() {
    const { viewport } = this.state;
    return (
      <div className="Map">
        {/* MapGL is the actual map that gets displayed  */}
        <MapGL
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
          {this.props.chapter_data.map(this._renderCityMarker)}
          {this._renderPopup()}
        </MapGL>
      </div>
    );
  }
}
//this is how we convert the state that was modified by the reducers to props
const mapStateToProps = state => {
  return {
    chapter_data: state.mapReducer.chapter_data,
    fetching: state.mapReducer.fetching,
    popupInfo: state.mapReducer.popupInfo,
    learnMore: state.mapReducer.learnMore
  };
};

//this is how we connect the map.js component to the store
export default connect(
  mapStateToProps,
  { getData, updatePopupAction, learnMoreAction }
)(Map);

// For use with DECK-GL:

//initial state settings:
// const WIDTH = "100vw";
// const HEIGHT = "100vh";
// const INITIAL_VIEW_STATE = {
//   latitude: 37.785164,
//   longitude: -100,
//   zoom: 3.5
// };

//for use in the <map> div:
{
  /* <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={{ dragRotate: false }}>
<StaticMap mapboxApiAccessToken={TOKEN} mapStyle={STYLE}>
  {this.props.chapter_data.map(this._renderCityMarker)}
</StaticMap>
</DeckGL> */
}
