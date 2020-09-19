import React from "react";
import { connect } from "react-redux";
import "./Map.scss";
import { getClusterReunions } from "../../Actions/index";

import { Marker } from "@urbica/react-map-gl";

const ClusterMarker = ({
  getClusterReunions,
  longitude,
  latitude,
  pointCount,
  clicked_chapters_reunion,
}) => (
  <Marker longitude={longitude} latitude={latitude}>
    <div
      className="clusters"
      onClick={() => {
        getClusterReunions(latitude, longitude);
        console.log(latitude, longitude);
        console.log(clicked_chapters_reunion);
      }}
    >
      {pointCount}
    </div>
  </Marker>
);

const mapStateToProps = (state) => {
  return {
    clicked_chapters_reunion: state.mapReducer.clicked_chapters_reunion,
  };
};

//this is how we connect the map.js component to the store
export default connect(mapStateToProps, { getClusterReunions })(ClusterMarker);
