import React from "react";
import { connect } from "react-redux";
import "./Map.scss";
import { zoomIn } from "../../Actions/index";
import { Marker } from "@urbica/react-map-gl";

const ReunionCluster = ({ zoomIn, longitude, latitude, pointCount }) => (
  <Marker longitude={longitude} latitude={latitude}>
    <div
      className="reunion-clusters"
      onClick={() => {
        zoomIn(latitude, longitude);
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
export default connect(mapStateToProps, { zoomIn })(ReunionCluster);
