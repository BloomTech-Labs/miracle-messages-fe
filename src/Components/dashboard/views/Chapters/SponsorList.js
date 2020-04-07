import React from "react";
import PartnerCard from "./PartnerCard.js";

const SponsorList = props => {
  
    return (
      <div style={{ height: "auto" }}>
        <div className="partnerColumn">
          <div className="partSoponCol">
            <h3>Current Partners:</h3>

            {props.currentPartners &&
              props.currentPartners.map((partner, key) => {
                return (
                  <PartnerCard
                    partner={partner}
                    key={key}
                    btnColor={"danger"}
                    btnText={"Delete"}
                    onsubmit={props.unassign}
                  />
                );
              })}
          </div>
          <div className="dropdown-divider" />
          <div className="partSoponCol">
            <h3>Current Sponsors:</h3>
            {props.currentSponsors &&
              props.currentSponsors.map((sponsor, key) => {
                return (
                  <PartnerCard
                    partner={sponsor}
                    key={key}
                    btnColor={"danger"}
                    btnText={"Delete"}
                    onsubmit={props.unassign}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
}

export default SponsorList;
