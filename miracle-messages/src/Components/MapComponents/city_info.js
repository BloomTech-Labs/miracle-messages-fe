import React, { PureComponent } from "react";
import facbook from "../../icons/facebook.png";
import google from "../../icons/google.png";
import gmail from "../../icons/gmail.png";
import { learnMoreAction } from "../../Actions/learnMoreAction";
import { connect } from "react-redux";

class CityInfo extends PureComponent {
  learnMoreToggle = e => {
    e.preventDefault();
    this.props.learnMoreAction(this.props.learnMore);
  };
  render() {
    const { info } = this.props;

    let display;
    let button;

    if (this.props.learnMore) {
      display = (
        <div>
          <a
            href="https://www.facebook.com/miraclemessages/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
            <span>
              <img src={facbook} alt="facbook logo" />
            </span>
          </a>
          <a
            href="https://miraclemessages.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Hangout
            <span>
              <img src={google} alt="google logo" />
            </span>
          </a>
          <a
            href="https://miraclemessages.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
            <span>
              <img src={gmail} alt="gmail logo" />
            </span>
          </a>
        </div>
      );
      button = "Back";
    } else {
      display = (
        <div>
          <p>
            Volunteers <span className="number">{info.numvolunteers}</span>
          </p>
          <p>Delivered Messages</p>
          <p>Reunions</p>
        </div>
      );
      button = "Learn More";
    }

    return (
      <div className="popup">
        <div className="info">
          <h3>{info.location.toUpperCase()}</h3>
          {display}
        </div>

        <div className="buttons">
          <a
            href="https://miracle-messages-staging.netlify.com/form"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Chapter
          </a>
          <button onClick={e => this.learnMoreToggle(e)}>{button}</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    learnMore: state.mapReducer.learnMore
  };
};

export default connect(
  mapStateToProps,
  { learnMoreAction }
)(CityInfo);
