import React, { Component } from "react";
import { connect } from "react-redux";

// Mapbox imports
import MapGL, { Marker, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Custom file imports
import CityPin from "./city_pin";
import CityInfo from "./city_info";

// Action imports
import { getData } from "../../Actions/index";
import { updatePopupAction } from "../../Actions/updatePopupAction";
import { slideToggleAction } from "../../Actions/SlideToggleAction";
import { onViewportChanged } from "../../Actions/OnViewportAction";

// Material UI imports
import Drawer from "@material-ui/core/Drawer";
import { IconButton } from "@material-ui/core";
import { Cancel } from "@material-ui/icons";

// Scrollbar import
import { Scrollbars } from "react-custom-scrollbars";

// Google anilytics imports
import ReactGA from "react-ga";
import { gaEvent } from "../Analytics/GAFunctions"; //enable event tracking

require("dotenv").config();

const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const STYLE = "mapbox://styles/miraclemessages/cjyhf6b851bii1cq6lr990cf1";

// Google Analytics:
//this initializes GA
ReactGA.initialize(process.env.REACT_APP_GA_ID);
//This tracks the page views on this component/path
ReactGA.pageview("/map");

class Map extends Component {
  //this fetches the data from the backend:
  componentDidMount() {
    this.props.getData();
  }

  // to handle the GA events and hopefully the auto zoom
  _onClickGA = e => {
    gaEvent("click", "city marker", "Click city marker pin");
  };

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

  closeHandler = () => {
    this.props.updatePopupAction(null);
    this.props.slideToggleAction();
  };

  //_renderSlide replaces _renderPopup, is opened when citypin is clicked
  _renderSlide() {
    const popupInfo = this.props.popupInfo;
    return (
      popupInfo && (
        <div className="chapterDrawer">
          {/* clicking city pin opens the drawer below */}
          <Drawer
            open={this.props.openDrawer}
            variant="persistent"
            className="slide"
          >
            <IconButton
              onClick={this.closeHandler}
              style={{
                position: "absolute",
                right: "0",
                zIndex: "99",
                color: "whitesmoke",
                background: "black",
                width: "2px",
                height: "2px"
              }}
            >
              <Cancel style={{ position: "absolute", right: "0" }} />
            </IconButton>
            <Scrollbars style={{ width: 376 }} autoHide={true}>
              <CityInfo info={popupInfo} />
            </Scrollbars>
          </Drawer>
        </div>
      )
    );
  }

  //_updateViewport updates the map view when a user zooms/pans etc.
  _updateViewport = viewport => {
    this.props.onViewportChanged(viewport);
  };

  //_zoomToCity will zoom into the searched or clicked city
  // _zoomToCity = something => {

  // }

  render() {
    const { viewport } = this.props;

    return (
      <div className="Map">
        {/* MapGL is the actual map that gets displayed  */}
        <MapGL
          {...viewport}
          width="100vw"
          height="100vh"
          onViewportChange={this._updateViewport}
          mapStyle={STYLE}
          mapboxApiAccessToken={TOKEN}
          minZoom={3}
          maxPitch={0}
          dragRotate={false}
        >
          <div
            style={{ position: "absolute", right: 0, bottom: 30, zIndex: 1 }}
          >
            <NavigationControl />
          </div>
          {this.props.chapter_data.map(this._renderCityMarker)}
        </MapGL>
        {this._renderSlide()}
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
    openDrawer: state.mapReducer.openDrawer,
    viewport: state.mapReducer.viewport
  };
};

//this is how we connect the map.js component to the store
export default connect(
  mapStateToProps,
  { getData, updatePopupAction, slideToggleAction, onViewportChanged }
)(Map);
