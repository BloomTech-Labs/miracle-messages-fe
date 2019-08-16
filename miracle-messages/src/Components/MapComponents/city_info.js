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
import gmail from "../../Assests/icons/gmail.png";

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
          <div className="title">Miracle Messages {info.city}</div>
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

        {/* Contains the chapters message */}
        <div className="chapterDetails">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
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

        {/* Contains the featured reunioun story */}
        <div className="featuredReunion">
          <h2>FEATURED REUNION STORY</h2>
          <img
            src="https://funattic.com/wp-content/uploads/2016/08/youth-group-icebreakers.jpg"
            alt="Chapter"
            height="200px"
            width="100%"
          />
          <div className="reunionStory">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            ipsum dolor sit amet, consectetur adipiscing elit. Do eiusmod tempor
            incididunt.
          </div>
          <a
            href="https://miraclemessages.org/stories"
            target="_blank"
            rel="noopener noreferrer"
            className="stories"
          >
            See all reunion stories
          </a>
        </div>

        {/* Contains the contact info */}
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

        {/* Contains the Sponser Images */}
        <div className="sponsorImages">
          <h2>SPONSORS</h2>
          {/* some images required */}
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
  { slideToggleAction, updatePopupAction }
)(CityInfo);
