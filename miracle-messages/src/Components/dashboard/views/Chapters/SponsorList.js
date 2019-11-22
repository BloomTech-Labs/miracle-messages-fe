import React from "react";
import PartnerCard from "./PartnerCard.js";

class SponsorList extends React.Component {
  render() {
    return (
      <div style={{ height: "auto" }}>
        <div className="partnerColumn">
          <div className="partSoponCol">
            <h3>Current Partners:</h3>

            {this.props.data.currentPartners &&
              this.props.data.currentPartners.map((partner, key) => {
                return (
                  <PartnerCard
                    partner={partner}
                    key={key}
                    btnColor={"danger"}
                    btnText={"Delete"}
                    onsubmit={this.props.unassign}
                  />
                );
              })}
          </div>
          <div className="partSoponCol">
            <h3>Current Sponsors:</h3>
            {this.props.data.currentSponsors &&
              this.props.data.currentSponsors.map((sponsor, key) => {
                return (
                  <PartnerCard
                    partner={sponsor}
                    key={key}
                    btnColor={"danger"}
                    btnText={"Delete"}
                    onsubmit={this.props.unassign}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default SponsorList;
