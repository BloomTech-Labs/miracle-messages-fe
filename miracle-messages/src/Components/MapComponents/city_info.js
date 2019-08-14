import React, { PureComponent } from "react";
import { connect } from "react-redux";

// Action imports
import { slideToggleAction } from "../../Actions/SlideToggleAction";
import { updatePopupAction } from "../../Actions/updatePopupAction";

// Material UI imports
import { IconButton, Button } from "@material-ui/core";
import ArrowBackIosRounded from "@material-ui/icons/ArrowBackIosRounded";

// Icon imports
// import facebook from "../../icons/facebook.png";
// import google from "../../icons/google.png";
import gmail from '../../Assests/icons/gmail.png';

// CSS imports
import "../../CSS/city_info.css";

class CityInfo extends PureComponent {
  render() {
    const closeHandler = () => {
      this.props.updatePopupAction(null);
      this.props.slideToggleAction();
    };
    const { info } = this.props;

    return (
      <div className="chapterInfo">
        {/* IconButton = the close Slideout "circle" */}
        <IconButton onClick={closeHandler}>
          {/* the below is the actual arrow Icon that enables closing the drawer */}
          <ArrowBackIosRounded />
        </IconButton>

        {/* Contains the chapter picture, name, and estblish date */}
        <div className="chapterTitle">
          <img
            src="https://funattic.com/wp-content/uploads/2016/08/youth-group-icebreakers.jpg"
            alt="Chapter"
            height="200px"
            width="100%"
          />
          <div className="title">{info.location}</div>
          <div className="date">Est. 8/12/2019</div>
        </div>

        {/* Contains the chapter statisics; members/reunions */}
        <div className="chapterStats">
          <p className="volunteers">
            <span className="number">{info.numvolunteers}</span>
            Members
          </p>
          <p className="reunions">
            <span className="number">{info.numvolunteers}</span>
            Reunions
          </p>
        </div>

        {/* Contains the chapters message, and contact info */}
        <div className="chapterDetails">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </div>

        <div>
          <a
            href="https://miraclemessages.org"
            target="_blank"
            rel="noopener noreferrer"
            className="contact"
          >
            <span>
              <img src={gmail} alt="gmail logo" className="gmailLogo" />
            </span>
            <span className="email">aMiracle@miraclemessages.org</span>
          </a>
        </div>

        {/* Links out */}
        <div className="buttons">
          <button className="green">
            <a
              href="https://miracle-messages-staging.netlify.com/form"
              target="_blank"
              rel="noopener noreferrer"
            >
              JOIN CHAPTER
            </a>
          </button>

          <button className="white">
            <a href="" target="_blank" rel="noopener noreferrer">
              SEE REUNION STORIES
            </a>
          </button>
        </div>

        {/* <div className="buttons">
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
        </div> */}
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
  { slideToggleAction, updatePopupAction }
)(CityInfo);
