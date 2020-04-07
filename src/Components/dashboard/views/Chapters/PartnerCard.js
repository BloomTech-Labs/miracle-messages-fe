import React from "react";
import { Button } from "reactstrap";

const PartnerCard = (props) => {
    return (
      <div className="partner-card-s">
        <div>
          <img
            style={{ width: "60px", height: "50px", marginRight: "2rem" }}
            src={props.partner.icon_url}
            alt=""
          />
          <h4 style={{ minWidth: "8.5rem", marginRight: ".5rem" }}>
            {props.partner.name}
          </h4>
        </div>
        <Button
          style={{ marginRight: ".5rem" }}
          onClick={() => props.onsubmit(props.partner.id)}
          color={props.btnColor}
        >
          {props.btnText}
        </Button>
      </div>
    );
  
}
export default PartnerCard;
