import React from "react";
import "./Legend.scss";
// import { ReactSVG } from "react-svg";
// import Switch from "@material-ui/core/Switch";

export default function Legend(props) {
  return (
    <div className="legend-con">
      <div className="legend-inner">
        <div className="row">
          <div className="chapter-dot"></div>
          <h4>Number of Reunions</h4>
          <p>Click pins to see connections made</p>
        </div>
        <div className="row">
          <div className="line"></div>
          <h4>Outreach</h4>
        </div>
        <div className="row">
          {/* <ReactSVG src="reunion_marker.svg" /> */}
          <div className="reunion-dot"></div>
          <h4>Location of Loved Ones</h4>
          <p>Click on dot to view story</p>
        </div>
        <div className="row">
          <div className="animate-btn" onClick={props.animateAll}>
            Show All Reunions
          </div>
        </div>
      </div>
    </div>
  );
}
