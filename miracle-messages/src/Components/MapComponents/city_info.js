import React, { PureComponent } from "react";
import { connect } from "react-redux";

// Action imports
import { slideToggleAction } from "../../Actions/SlideToggleAction";
import { updatePopupAction } from "../../Actions/updatePopupAction";

// Material UI imports
import { IconButton } from "@material-ui/core";
import ArrowBackIosRounded from "@material-ui/icons/ArrowBackIosRounded";

// Icon imports
import facbook from "../../icons/facebook.png";
import google from "../../icons/google.png";
import gmail from "../../icons/gmail.png";

class CityInfo extends PureComponent {
  render() {
    const closeHandler = () => {
      this.props.updatePopupAction(null);
      this.props.slideToggleAction();
    };
    const { info } = this.props;

    return (
      <div className="popup">
        <div className="info">
          <IconButton onClick={closeHandler}>
            <ArrowBackIosRounded/>
          </IconButton>
          <h3>{info.location.toUpperCase()}</h3>
        </div>

        <div className="buttons">
          <a
            href="https://miracle-messages-staging.netlify.com/form"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Chapter
          </a>
        </div>

        <div>
          <p>
            Volunteers <span className="number">{info.numvolunteers}</span>
          </p>
          <p>Delivered Messages</p>
          <p>Reunions</p>
        </div>
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
  { slideToggleAction, updatePopupAction  }
)(CityInfo);
