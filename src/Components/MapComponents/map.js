import React, { Component } from "react";
import { connect } from "react-redux";

// Mapbox imports
import ReactMapGL, { Marker, NavigationControl, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./Map.scss";
import { ReactSVG } from "react-svg";

// Action imports
import { getData, getReunions } from "../../Actions/index";
import { updatePopupAction } from "../../Actions/updatePopupAction";
import { popupToggleAction, popupClose } from "../../Actions/popupToggleAction";
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

// Custom file imports
import CityInfo from "./city_info";
import CityPopup from "./city_popup";
import BoxLink from "./BoxLink";
import SearchBar from "./SearchBar";
import "./Navbar.scss";

////////////////////////////////////IMPORTS/////////////////////////////////////////////

require("dotenv").config();

const TOKEN =
  "pk.eyJ1Ijoia2tzbGlkZXIyMTMwIiwiYSI6ImNrYTkzZDF5dzA3bnUzMG1wMTN4andnam4ifQ.zJyId-UEsVM91Luz7TwR4A";

const STYLE = "mapbox://styles/kkslider2130/cka93hqym2mju1imatqi7trcs";

// Google Analytics:
//this initializes GA
ReactGA.initialize(process.env.REACT_APP_GA_ID);
//This tracks the page views on this component/path
ReactGA.pageview("/map");

class Map extends Component {
  //this fetches the data from the backend:
  state = {
    open: true,
  };
  componentDidMount() {
    console.log(this.props)
    this.props.getData();
    this.props.getReunions();
  }
  componentDidUpdate(prevProps) {
    if (this.props.openPopup !== prevProps.openPopup) {
      this.closeBox();
    }
  }

  closeHandler = () => {
    this.props.updatePopupAction(null);
    //this.props.slideToggleAction();
    this.props.popupToggleAction();
  };

  closeBox = () => {
    this.setState({ open: false });
  };

  toggle = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  //_renderSlide replaces _renderPopup, is opened when citypin is clicked
  _renderSlide() {
    const popupInfo = this.props.popupInfo;
    return (
      popupInfo && (
        <div>
          {/* clicking city pin opens the drawer below */}
          <Drawer
            open={this.props.openDrawer}
            variant="persistent"
            className="open-drawer"
          >
            <IconButton
              style={{
                position: "absolute",
                right: "0",
                zIndex: "99",
                color: "whitesmoke",
                background: "black",
                width: "2px",
                height: "2px",
                margin: "63px 10px 0px 0px",
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
  _updateViewport = (viewport) => {
    this.props.onViewportChanged(viewport);
  };

  PinClickHandler = (city) => {
    this.props.updatePopupAction(city);
    this.props.popupToggleAction(city, this.props.openPopup);
  };

  render() {
    const { viewport } = this.props;

    return (
      <div className="Map">
        {/* MapGL is the actual map that gets displayed  */}

        <BoxLink state={this.state} closeBox={this.closeBox} />
        {!this.props.sideBarOpen && (
          <SearchBar
            chapters={this.props.chapter_data}
            reunions={this.props.reunion_data}
            PinClickHandler={this.PinClickHandler}
          />
        )}

        {/* <Sidebar /> */}

        <ReactMapGL
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
          {this.props.chapter_data.map((city, index) => {
            if (city.approved === true) {
              return (
                <Marker
                  className="markerMAP"
                  key={`chapter-marker-${index}`}
                  latitude={city.latitude}
                  longitude={city.longitude}
                >
                  <ReactSVG
                    src="marker.svg"
                    className="city-pin"
                    onClick={() => this.PinClickHandler(city)}
                  />
                </Marker>
              );
            }
          })}
          {this.props.reunion_data.map((reunion, index) => {
            return (
              <Marker
                className="markerMAP"
                key={`reunion-marker-${index}`}
                latitude={reunion.latitude}
                longitude={reunion.longitude}
              >
                <ReactSVG src="reunion_marker.svg" className="city-pin" />
              </Marker>
            );
          })}
          {this.props.openPopup && (
            <Popup
              className="popup-main"
              latitude={this.props.latitude}
              longitude={this.props.longitude}
              closeButton={true}
              closeOnClick={false}
              onClose={() => this.props.popupClose()}
              anchor="top"
            >
              <CityPopup info={this.props.popupInfo}></CityPopup>
            </Popup>
          )}
        </ReactMapGL>
        {/* {this._renderSlide()} */}
      </div>
    );
  }
}

//this is how we convert the state that was modified by the reducers to props
const mapStateToProps = (state) => {
  return {
    chapter_data: state.mapReducer.chapter_data,
    reunion_data: state.mapReducer.reunion_data,
    fetching: state.mapReducer.fetching,
    popupInfo: state.mapReducer.popupInfo,
    openPopup: state.mapReducer.openPopup,
    latitude: state.mapReducer.latitude,
    longitude: state.mapReducer.longitude,
    viewport: state.mapReducer.viewport,
  };
};

//this is how we connect the map.js component to the store
export default connect(mapStateToProps, {
  getData,
  getReunions,
  updatePopupAction,
  popupToggleAction,
  onViewportChanged,
  popupClose,
})(Map);
