import React from "react";
import { Link } from "react-router-dom";

import "./BoxLink.scss";

class BoxLink extends React.Component {
  state = {
    open: true,
  };
  render(props) {
    return (
      <>
        {this.props.state.open && (
          <div className="banner">
            <div className="front">
              <div
                style={{
                  position: "relative",
                  bottom: "25px",
                }}
              >
                <h4
                  className="x"
                  style={{
                    position: "relative",
                    top: 20,
                    left: 217,
                  }}
                  onClick={() => this.props.closeBox()}
                >
                  x
                </h4>
                <p>
                  Miracle Messages has dedicated chapters around the nation
                  commited to our mission of reconnection. Find a chapter near
                  you, or start one today.
                </p>
              </div>
              <div
                className="toggle-btn"
                onClick={() => {
                  document.querySelector(".banner").classList.toggle("flip");
                }}
              >
                Learn More
              </div>
            </div>
            <div className="back">
              <h4
                className="x"
                style={{
                  position: "relative",
                  top: 5,
                  left: 100,
                }}
                onClick={() => this.props.closeBox()}
              >
                x
              </h4>
              <p>
                Miracle Messages offers chapters you can join to link up with
                volunteers and leaders to coordinate events, reunions, and much
                more. Join and you can help us reconnect the world.
              </p>
              <Link className="toggle-btn" to="/login">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default BoxLink;
