import React, { Component } from "react";
import MapGL, { Marker, Popup, NavigationControl} from "react-map-gl";
import DeckGL from "deck.gl";
import CityPin from "./city_pin";
import CityInfo from "./city_info";
import "mapbox-gl/dist/mapbox-gl.css";
//import './CSS/MapGl.css';
import { getData } from "../Actions/index";
import { updatePopupAction } from "../Actions/updatePopupAction"
import { learnMoreAction } from "../Actions/learnMoreAction";
import { connect } from "react-redux"; 

require("dotenv").config();

const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
const STYLE = "mapbox://styles/miraclemessages/cjyhf6b851bii1cq6lr990cf1";



class Map extends Component {
  //this fetches the data from the backend
    componentDidMount() {
        this.props.getData();
      }


  _renderCityMarker = (city, index) => {
    return (
      <Marker
        key={`marker-${index}`}
        latitude={city.latitude}
        longitude={city.longitude}
      >
        <CityPin city={city}/>
      </Marker>
    );
  };

  _renderPopup() {
      const popupInfo = this.props.popupInfo
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
          <CityInfo
            info={popupInfo} />
        </Popup>
      )
    );
  
}

  _updateViewport = viewport => {
    this.setState({ viewport });
    console.log(viewport);
  };

  render() {
      const { viewport } = this.props;
    return (
      <div className="Map">
    
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

const mapStateToProps = state => {
  return {
    chapter_data: state.mapReducer.chapter_data,
    fetching: state.mapReducer.fetching,
    popupInfo: state.mapReducer.popupInfo,
    learnMore: state.mapReducer.learnMore,
    viewport: state.mapReducer.viewport
  };
};

export default connect(
  mapStateToProps,
  { getData, updatePopupAction, learnMoreAction}
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
{/* <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={{ dragRotate: false }}>
<StaticMap mapboxApiAccessToken={TOKEN} mapStyle={STYLE}>
  {this.props.chapter_data.map(this._renderCityMarker)}
</StaticMap>
</DeckGL> */}