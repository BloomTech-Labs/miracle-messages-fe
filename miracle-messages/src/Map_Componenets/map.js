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

class Map extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            viewport:
            {
                // Research how to pull local Lat/Long data to center viewport accordingly
                latitude: 37.785164,
                longitude: -100,
                zoom: 3.5
            },
            chapter_info: [],
            //chapter_contact: [],
            learn_more: false,
            popup_info: null
        };
    }

    // A helper function for moving around the map
    _updateViewport = viewport => {
        this.setState({ viewport });
    };

    render() 
    {
        const { viewport } = this.state;

        return(
            <div className="Map">
                {/* <MapGL 
                {...viewport}
                width = {WIDTH}
                height = {HEIGHT}
                mapStyle = {STYLE}
                onViewportChange={this._updateViewport}
                mapboxApiAccessToken={TOKEN}
                minZoom={3}
                maxPitch={0}
                dragRotate={false}
                /> */}
                <DeckGL initialViewState={viewport} controller={true}>
                    <StaticMap mapboxApiAccessToken={TOKEN} mapStyle={STYLE}/>
                </DeckGL>
            </div>
        );
    }
}

export default Map;