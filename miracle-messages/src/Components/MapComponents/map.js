import React, { Component } from "react";
import { connect } from "react-redux";

// Mapbox imports
import MapGL, { Marker, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Custom file imports
import PlaceTwoTone from "@material-ui/icons/PlaceTwoTone";
import CityPin from "./city_pin";
import CityInfo from "./city_info";

// Action imports
import { getData, getDefault } from "../../Actions/index";

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

// React strap imports
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import axios from "axios";

import Navbar from "./Navbar";
import NewChapter from "./NewChapter";

import Sidebar from './Sidebar';

import ChapterForm from "../dashboard/views/Chapters/ChapterForm";


require("dotenv").config();

const TOKEN =
  "pk.eyJ1IjoibWlyYWNsZW1lc3NhZ2VzIiwiYSI6ImNqeWhleGtzbTAwdXAzZ21uaGlienhmdHMifQ.FYmU9s5SYQbUonIeBAG9Lw";

const STYLE = "mapbox://styles/miraclemessages/cjyhf6b851bii1cq6lr990cf1";

// Google Analytics:
//this initializes GA
ReactGA.initialize(process.env.REACT_APP_GA_ID);
//This tracks the page views on this component/path
ReactGA.pageview("/map");

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      chapter: {
        title: "",
        established_date: "",
        description: "",
        chapter_img: null,
        city: "",
        state: "",
        latitude: "",
        longitude: "",
        email: "",
        numvolunteers: "",
        msg_delivered: "",
        msg_recorded: "",
        numreunions: "",
        story: "",
        reunion_img: null
      }
    };
  }
  //this fetches the data from the backend:
  componentDidMount() {
    this.props.getData();
    this.props.getDefault();
  }

  //_renderCityMarker plugs into line 83 array map to enable the marker for each city to display on map

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
                height: "2px",
                margin: "5px 10px 0px 0px"
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

  addChapter = e => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("chapter_img", this.state.chapter.chapter_img);
    fd.append("reunion_img", this.state.chapter.reunion_img);
    fd.append("title", this.state.chapter.title);
    fd.append("established_date", this.state.chapter.established_date);
    fd.append("description", this.state.chapter.description);
    fd.append("city", this.state.chapter.city);
    fd.append("state", this.state.chapter.state);
    fd.append("latitude", this.state.chapter.latitude);
    fd.append("longitude", this.state.chapter.longitude);
    fd.append("email", this.state.chapter.email);
    fd.append("numvolunteers", this.state.chapter.numvolunteers);
    fd.append("msg_delivered", this.state.chapter.msg_delivered);
    fd.append("msg_recorded", this.state.chapter.msg_recorded);
    fd.append("numreunions", this.state.chapter.numreunions);
    fd.append("story", this.state.chapter.story);

    axios
      .post("http://localhost:5000/api/chapter", fd)
      .then(res => {
        this.toggle();
        this.props.getData();
      })
      .catch(err => console.log(err));

    this.setState({
      chapter: {
        title: "",
        established_date: "",
        description: "",
        chapter_img: null,
        city: "",
        state: "",
        latitude: "",
        longitude: "",
        email: "",
        numvolunteers: "",
        msg_delivered: "",
        msg_recorded: "",
        numreunions: "",
        story: "",
        reunion_img: null
      }
    });
  };

  handleImg = e => {
    this.setState({
      chapter: {
        ...this.state.chapter,
        [e.target.name]: e.target.files[0]
      }
    });
  };

  handleInputChange = e => {
    this.setState({
      chapter: {
        ...this.state.chapter,
        [e.target.name]: e.target.value
      }
    });
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  render() {
    const { viewport } = this.props;

    return (
      <div className="Map">
        {/* MapGL is the actual map that gets displayed  */}
        <Navbar />
        <NewChapter />

        <Sidebar />

       
        

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
          <div style={{ position: "absolute", right: 0, top: 30, zIndex: 1 }}>
            <NavigationControl />
          </div>

          {this.props.chapter_data.map((city, index) => (
            <Marker
              className="markerMAP"
              key={`marker-${index}`}
              latitude={city.latitude}
              longitude={city.longitude}
              onClick={() => {
                gaEvent("click", "chapter pin", `${city.title}`);
              }}
            >
              {/* <PlaceTwoTone /> */}
              <CityPin city={city} />
            </Marker>
          ))}

          <Button className="addBtn" onClick={this.toggle}>
            +
          </Button>

          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
            backdrop="static"
          >
            <ModalHeader toggle={this.toggle}>Add Chapter</ModalHeader>
            <ModalBody>
              <ChapterForm
                change={this.handleInputChange}
                chapter={this.state.chapter}
                handleImg={this.handleImg}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="success" onClick={this.addChapter}>
                Add Chapter
              </Button>{" "}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
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
export default connect(mapStateToProps, {
  getData,
  updatePopupAction,
  slideToggleAction,
  onViewportChanged,
  getDefault
})(Map);
