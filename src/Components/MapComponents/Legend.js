import React from "react";
import "./Legend.scss";
import { ReactSVG } from "react-svg";
import Switch from "@material-ui/core/Switch";

export default function Legend(props) {
  const TIME = 7;
  return (
    <div className="legend-con">
      <div className="legend-inner">
        <div className="row">
          <div className="chapter-dot"></div>
          <h4>Chapters</h4>
        </div>
        <div className="row">
          {/* <ReactSVG src="reunion_marker.svg" /> */}
          <div className="reunion-dot"></div>
          <h4>Reunions</h4>
        </div>
        <div className="switch-con">
          <Switch color="default" onClick={props.toggleReunions} />
          <p className="label">toggle reunions</p>
        </div>
      </div>
    </div>
  );
}
