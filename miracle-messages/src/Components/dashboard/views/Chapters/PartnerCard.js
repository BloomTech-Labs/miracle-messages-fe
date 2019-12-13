import React from "react";
import { Button } from "reactstrap";
class PartnerCard extends React.Component {
  render() {
    return (
      <div className="partner-card-s">
        <div>
          <img
            style={{ width: "60px", height: "50px", marginRight: "2rem" }}
            src={this.props.partner.icon_url}
            alt=""
          />
          <h4 style={{ minWidth: "8.5rem", marginRight: ".5rem" }}>
            {this.props.partner.name}
          </h4>
        </div>
        <Button
          style={{ marginRight: ".5rem" }}
          onClick={() => this.props.onsubmit(this.props.partner.id)}
          color={this.props.btnColor}
        >
          {this.props.btnText}
        </Button>
      </div>
    );
  }
}
export default PartnerCard;
