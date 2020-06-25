import React, { Component } from "react";
import { connect } from "react-redux";

// Mapbox imports
import MapGL, {
  Marker,
  NavigationControl,
  Popup,
  CustomLayer,
} from "@urbica/react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./Map.scss";
import { ReactSVG } from "react-svg";
import { ArcLayer } from "@deck.gl/layers";
import { MapboxLayer } from "@deck.gl/mapbox";
import Cluster from "@urbica/react-map-gl-cluster";

// Action imports
import { getData, getReunions, getChapterReunions } from "../../Actions/index";
import { updatePopupAction } from "../../Actions/updatePopupAction";
import { updateReunuinAction } from "../../Actions/updatePopupAction";
import {
  popupToggleAction,
  reunionPopupToggle,
  popupClose,
  reunionPopupClose,
} from "../../Actions/popupToggleAction";
import { onViewportChanged } from "../../Actions/OnViewportAction";

// Material UI imports
import Drawer from "@material-ui/core/Drawer";
import { IconButton } from "@material-ui/core";
import { Cancel } from "@material-ui/icons";

// Scrollbar import
import { Scrollbars } from "react-custom-scrollbars";

// Google anilytics imports
import ReactGA from "react-ga";
// import { gaEvent } from "../Analytics/GAFunctions";

// Custom file imports
import CityInfo from "./city_info";
import CityPopup from "./city_popup";
import ReunionPopup from "./ReunionPopup";
import BoxLink from "./BoxLink";
import SearchBar from "./SearchBar";
import Legend from "./Legend";
import "./Navbar.scss";

////////////////////////////////////IMPORTS/////////////////////////////////////////////

require("dotenv").config();

const TOKEN =
  "pk.eyJ1Ijoia2tzbGlkZXIyMTMwIiwiYSI6ImNrYTkzZDF5dzA3bnUzMG1wMTN4andnam4ifQ.zJyId-UEsVM91Luz7TwR4A";
const TIME = new Date().getHours();
const STYLE =
  TIME > 19 || TIME < 6
    ? "mapbox://styles/kkslider2130/ckbr099d50tsc1imn47auz797"
    : "mapbox://styles/kkslider2130/cka93hqym2mju1imatqi7trcs";

const gradientStyle = TIME > 19 || TIME < 6 ? "linGradNight" : "linGrad";

const clusterStyle = TIME > 19 || TIME < 6 ? "clustersNight" : "clusters";

// Google Analytics:
//this initializes GA
ReactGA.initialize(process.env.REACT_APP_GA_ID);
//This tracks the page views on this component/path
ReactGA.pageview("/map");

const ClusterMarker = ({ longitude, latitude, pointCount }) => (
  <Marker longitude={longitude} latitude={latitude}>
    <div className={clusterStyle}>{pointCount}</div>
  </Marker>
);
const ReunionCluster = ({ longitude, latitude, pointCount }) => (
  <Marker longitude={longitude} latitude={latitude}>
    <div className="reunion-clusters">{pointCount}</div>
  </Marker>
);

class Map extends Component {
  //this fetches the data from the backend:
  state = {
    open: true,
    toggleReunions: true,
    currentChapterReunions: [],
    isInteracted: false,
    clickedChapter: [],
  };
  componentDidMount() {
    this.props.getData();
    this.props.getReunions();
  }
  componentDidUpdate(prevProps) {
    if (this.props.openPopup !== prevProps.openPopup) {
      this.closeBox();
    }
    this.setNewLayer();
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

  toggleReunions = () => {
    this.setState((prevState) => ({
      toggleReunions: !prevState.toggleReunions,
    }));
  };

  getCurrentReunions = (id) => {
    this.props.getChapterReunions(id);
  };

  deckLayer = new MapboxLayer({
    id: "reunion-arcs",
    type: ArcLayer,
    data: this.props.reunion_data,
    getSourcePosition: (d) => {
      return [d.origin.longitude, d.origin.latitude];
    },
    getTargetPosition: (d) => {
      return [d.longitude, d.latitude];
    },
    getSourceColor: () => [255, 97, 2, 120],
    getTargetColor: () => [255, 97, 2, 120],
    getWidth: 2,
  });

  setNewLayer = () => {
    this.deckLayer.setProps({
      data: this.props.clicked_chapters_reunion,
    });
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

  reunionClickHandler = (reunion) => {
    this.props.updateReunuinAction(reunion);
    this.props.reunionPopupToggle(reunion, this.props.openReunionPopup);
  };

  render() {
    const { viewport } = this.props;

    return (
      <div className={`Map ${gradientStyle}`}>
        {/* MapGL is the actual map that gets displayed  */}

        <BoxLink state={this.state} closeBox={this.closeBox} />
        <Legend toggleReunions={this.toggleReunions} />
        {!this.props.sideBarOpen && (
          <SearchBar
            chapters={this.props.chapter_data}
            reunions={this.props.reunion_data}
            PinClickHandler={this.PinClickHandler}
          />
        )}

        {/* <Sidebar /> */}

        <MapGL
          latitude={viewport.latitude}
          longitude={viewport.longitude}
          style={{ width: "100%", height: "100vh" }}
          onViewportChange={this._updateViewport}
          viewportChangeMethod={"flyTo"}
          mapStyle={STYLE}
          accessToken={TOKEN}
          zoom={3.5}
          pitch="60"
        >
          <NavigationControl showCompass showZoom position="bottom-right" />

          {/* eslint-disable-next-line array-callback-return*/}

          {!this.state.isInteracted ? (
            this.props.reunion_data.map((reunion, index) => {
              return (
                <Marker
                  className="markerReunion"
                  key={`reunion-marker-${index}`}
                  latitude={reunion.latitude}
                  longitude={reunion.longitude}
                >
                  <ReactSVG
                    src="reunion_marker.svg"
                    id="reunion-pin"
                    beforeInjection={(svg) => {
                      svg.classList.add("reunion-pin");
                      svg.setAttribute("style", "width: 24px");
                    }}
                    style={
                      this.state.toggleReunions
                        ? {
                            opacity: "1",
                            transition: ".3s",
                            cursor: "pointer",
                          }
                        : {
                            opacity: "0",
                            transition: ".3s",
                            cursor: "grab",
                          }
                    }
                    onClick={() => {
                      console.log("clicked", this.props.popupInfo);
                      this.reunionClickHandler(reunion);
                    }}
                  />
                </Marker>
              );
            })
          ) : (
            <Cluster
              radius={20}
              extent={512}
              nodeSize={64}
              component={ReunionCluster}
            >
              {this.props.clicked_chapters_reunion.map((reunion, index) => {
                return (
                  <Marker
                    className="markerReunion"
                    key={`reunion-marker-${index}`}
                    latitude={reunion.latitude}
                    longitude={reunion.longitude}
                  >
                    <ReactSVG
                      src="reunion_marker.svg"
                      id="reunion-pin"
                      className="city-pin"
                      beforeInjection={(svg) => {
                        svg.classList.add("reunion-pin");
                        svg.setAttribute("style", "width: 26px");
                      }}
                      style={
                        this.state.toggleReunions
                          ? {
                              opacity: "1",
                              transition: ".3s",
                              cursor: "pointer",
                            }
                          : {
                              opacity: "0",
                              transition: ".3s",
                              cursor: "grab",
                            }
                      }
                      onClick={() => {
                        console.log("clicked", this.props.popupInfo);
                        this.reunionClickHandler(reunion);
                      }}
                    />
                  </Marker>
                );
              })}
            </Cluster>
          )}
          <Cluster
            radius={10}
            extent={512}
            nodeSize={64}
            component={ClusterMarker}
          >
            {/*eslint-disable-next-line array-callback-return*/}
            {!this.state.isInteracted
              ? this.props.chapter_data.map((city, index) => {
                  if (city.approved === true) {
                    return (
                      <Marker
                        className="markerCity"
                        key={`chapter-marker-${index}`}
                        latitude={city.latitude}
                        longitude={city.longitude}
                      >
                        <ReactSVG
                          src={
                            TIME > 19 || TIME < 6
                              ? "whitePin.svg"
                              : "marker.svg"
                          }
                          className="city-pin"
                          style={{ cursor: "pointer" }}
                          beforeInjection={(svg) => {
                            svg.classList.add("city-pin");
                          }}
                          onClick={() => {
                            this.PinClickHandler(city);
                            this.getCurrentReunions(city.id);
                            this.setState({ isInteracted: true });
                            this.setState({ clickedChapter: [city] });
                            this.props.reunionPopupClose();
                          }}
                        />
                      </Marker>
                    );
                  }
                })
              : this.state.clickedChapter.map((city, index) => {
                  if (city.approved === true) {
                    return (
                      <Marker
                        className="markerCity"
                        key={`chapter-marker-${index}`}
                        latitude={city.latitude}
                        longitude={city.longitude}
                      >
                        <ReactSVG
                          src={
                            TIME > 19 || TIME < 6
                              ? "whitePin.svg"
                              : "marker.svg"
                          }
                          className="city-pin"
                          style={{ cursor: "pointer" }}
                          beforeInjection={(svg) => {
                            svg.classList.add("city-pin");
                          }}
                          onClick={() => {
                            this.PinClickHandler(city);
                            this.getCurrentReunions(city.id);
                            this.setState({ isInteracted: true });
                            this.setState({ clickedChapter: [city] });
                            this.props.reunionPopupClose();
                          }}
                        />
                      </Marker>
                    );
                  }
                })}
          </Cluster>

          {this.props.openPopup && !this.props.openReunionPopup && (
            <Popup
              className="popup-main"
              latitude={this.props.latitude}
              longitude={this.props.longitude}
              closeButton={true}
              closeOnClick={false}
              onClose={() => {
                this.props.popupClose();
                this.setState({ isInteracted: false });
              }}
              anchor="top"
            >
              <CityPopup info={this.props.popupInfo}></CityPopup>
            </Popup>
          )}

          {/* Reunion popup */}
          {this.props.openReunionPopup && (
            <Popup
              className="popup-reunion"
              latitude={this.props.latitude}
              longitude={this.props.longitude}
              closeButton={true}
              closeOnClick={false}
              anchor="left"
              maxWidth="340px"
              onClose={() => {
                this.props.reunionPopupClose();
              }}
            >
              <ReunionPopup info={this.props.popupInfo}></ReunionPopup>
            </Popup>
          )}

          <CustomLayer layer={this.deckLayer} />
        </MapGL>
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
    openReunionPopup: state.mapReducer.openReunionPopup,
    latitude: state.mapReducer.latitude,
    longitude: state.mapReducer.longitude,
    viewport: state.mapReducer.viewport,
    clicked_chapters_reunion: state.mapReducer.clicked_chapters_reunion,
  };
};

//this is how we connect the map.js component to the store
export default connect(mapStateToProps, {
  getData,
  getReunions,
  getChapterReunions,
  updatePopupAction,
  updateReunuinAction,
  popupToggleAction,
  reunionPopupClose,
  reunionPopupToggle,
  onViewportChanged,
  popupClose,
})(Map);
