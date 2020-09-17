import React, { useState } from "react";
import "./Legend.scss";
// import { ReactSVG } from "react-svg";
// import Switch from "@material-ui/core/Switch";
import chapterPin from "../../Assets/Imgs/reunionPin.png";
export default function Legend(props) {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="legend-con">
      <div className="legend-inner">
        <div className="row first-row">
          <img className="reunionPin" src={chapterPin} alt="" />
          <h4>Number of Reunions</h4>
          <p>Click pins to see connections</p>
        </div>
        <div className="row">
          <div className="line"></div>
          <h4>Connections</h4>
        </div>
        <div className="row">
          {/* <ReactSVG src="reunion_marker.svg" /> */}
          <div className="reunion-dot"></div>
          <h4>Location of Loved Ones</h4>
          <p>Click on dot to view story</p>
        </div>
        <div className="row btn-row">
          {!clicked ? (
            <div
              className="animate-btn"
              onClick={() => {
                setClicked(true);
                props.animateAll();
              }}
            >
              Show All Reunions
            </div>
          ) : (
            <div
              className="animate-btn"
              onClick={() => {
                props.defaultView();
                setClicked(false);
              }}
            >
              Hide All Reunions
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
