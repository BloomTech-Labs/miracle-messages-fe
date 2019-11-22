import React from "react";
import { Button } from "reactstrap";
class PartnerCard extends React.Component {
  render() {
    return (
      <div className="partner-card-s">
        <div>
          <img
            style={{ width: "50px", height: "50px" }}
            src={this.props.partner.icon_url}
            alt=""
          />
          <h4>{this.props.partner.name}</h4>
        </div>
        <Button
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
