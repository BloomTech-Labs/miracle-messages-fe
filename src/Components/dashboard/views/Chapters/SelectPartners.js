import React from "react";
import PartnerCard from "./PartnerCard.js";

class SelectPartner extends React.Component {
  render() {
    return (
      <div>
        <div className="partnerColumn">
          <div className="partSoponCol">
            <h3>Available Partners:</h3>
            {this.props.partners &&
              this.props.partners.map((partner, key) => {
                return (
                  <PartnerCard
                    partner={partner}
                    key={key}
                    btnColor={"info"}
                    btnText={"Add"}
                    onsubmit={this.props.assign}
                  />
                );
              })}
          </div>
          <div className="dropdown-divider" />
          <div className="partSoponCol">
            <h3>Available sponsors:</h3>
            {this.props.sponsors &&
              this.props.sponsors.map((sponsor, key) => {
                return (
                  <PartnerCard
                    partner={sponsor}
                    key={key}
                    btnColor={"info"}
                    btnText={"Add"}
                    onsubmit={this.props.assign}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default SelectPartner;
