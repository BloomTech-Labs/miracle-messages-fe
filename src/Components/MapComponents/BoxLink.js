import React from "react";
import { Link } from "react-router-dom";

import "./BoxLink.scss";

class BoxLink extends React.Component {
  state = {
    open: true,
  };
  render() {
    return (
      <>
        {this.state.open && (
          <div className="banner">
            <div
              style={{
                position: "relative",
                bottom: "28px",
              }}
            >
              <h4
                className="x"
                style={{
                  position: "relative",
                  top: 20,
                  left: 217,
                }}
                onClick={() => this.setState({ open: false })}
              >
                x
              </h4>
              <p>
                Miracle Messages has dedicated chapters around the nation
                commited to our mission of reconnection. Find a chapter near
                you, or start one today
              </p>
            </div>
            <Link to="/user/register" rel="noopener noreferrer">
              Learn More
            </Link>
          </div>
        )}
      </>
    );
  }
}

export default BoxLink;
