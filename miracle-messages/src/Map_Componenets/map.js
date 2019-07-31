import React, { Component } from 'react';
import MapGL, { Marker, Popup, NavigationControl, StaticMap } from 'react-map-gl';
import DeckGL from 'deck.gl';
import CityPin from './city_pin';
import CityInfo from './city-info';
import 'mapbox-gl/dist/mapbox-gl.css';
//import './CSS/MapGl.css';

require('dotenv').config();

const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
const STYLE = "mapbox://styles/miraclemessages/cjyhf6b851bii1cq6lr990cf1";
const WIDTH = "100vw";
const HEIGHT = "100vh";
const INITIAL_VIEW_STATE = {
    latitude: 37.785164,
    longitude: -100,
    zoom: 3.5
}

class Map extends Component {
    // A helper function for moving around the map
    _updateViewport = viewport => {
        this.setState({ viewport });
    };

    render() 
    {
        return(
            <div className="Map">
                <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={{dragRotate: false}}> 
                    <StaticMap mapboxApiAccessToken={TOKEN} mapStyle={STYLE}/>
                </DeckGL>
            </div>
        );
    }
}

export default Map;