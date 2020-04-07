import React from "react";
import PartnerCard from "./PartnerCard.js";

const SelectPartner = props => {
  
    return (
      <div>
        <div className="partnerColumn">
          <div className="partSoponCol">
            <h3>Available Partners:</h3>
            {props.partners &&
              props.partners.map((partner, key) => {
                return (
                  <PartnerCard
                    partner={partner}
                    key={key}
                    btnColor={"info"}
                    btnText={"Add"}
                    onsubmit={props.assign}
                  />
                );
              })}
          </div>
          <div className="dropdown-divider" />
          <div className="partSoponCol">
            <h3>Available sponsors:</h3>
            {props.sponsors &&
              props.sponsors.map((sponsor, key) => {
                return (
                  <PartnerCard
                    partner={sponsor}
                    key={key}
                    btnColor={"info"}
                    btnText={"Add"}
                    onsubmit={props.assign}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );

}

export default SelectPartner;
