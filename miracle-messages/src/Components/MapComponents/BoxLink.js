import React from "react";

import "./BoxLink.scss";

class BoxLink extends React.Component {
  state = {
    open: true
  };
  render() {
    return (
      <>
        {this.state.open && (
          <div className="banner">
            <div
              style={{
                position: "relative",
                bottom: "25px"
              }}
            >
              <h4
                className="x"
                style={{
                  position: "relative",
                  top: 31,
                  left: 217
                }}
                onClick={() => this.setState({ open: false })}
              >
                x
              </h4>
              <p>
                Don't see your city listed? We'd love your help bringing Miracle
                Messages to your community!
              </p>
            </div>
            <a
              style={{ position: "relative", bottom: "15px" }}
              href="http://localhost:3000/user/newchapter"
              target="_blank"
              rel="noopener noreferrer"
            >
              GET STARTED
            </a>
          </div>
        )}
      </>
    );
  }
}

export default BoxLink;
