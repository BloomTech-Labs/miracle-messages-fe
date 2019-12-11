import React, { useState } from "react"

import "./NewChapter.scss"

class NewChapter extends React.Component {
  state = {
    open: true
  }
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
              href="https://miraclemessages.org/getinvolved"
              target="_blank"
              rel="noopener noreferrer"
            >
              GET STARTED
            </a>
          </div>
        )}
      </>
    )
  }
}

export default NewChapter
