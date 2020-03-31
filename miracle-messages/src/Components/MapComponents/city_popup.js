import React, { useState, useEffect, PureComponent } from 'react';
import { connect } from 'react-redux';
// TODO Create Action
import { popupToggleAction } from '../../Actions/popupToggleAction';
import { updatePopupAction } from '../../Actions/updatePopupAction';

import facebook from "../../Assets/icons/facebook.png";
import gmail from "../../Assets/icons/gmail.png";
// TODO Create CSS
import '../../CSS/city_popup.css';

const CityPopup = props => {
    const { info } = props;
    const sponsors = info.partners.filter(
        partner => partner.category === "sponsor"
      );
      const partners = info.partners.filter(
        partner => partner.category === "partner"
      );
    return (
        <div className='chapterInfo'>
            <div className='chapterTitle'>

            </div>
            {/* Contains the chapter statisics; members/reunions */}
            <div className="chapterStats">
                <div className="volunteers">
                    <span className="number">{info.numvolunteers}</span>
                    Members
                </div>
                <p className="reunions">
                    <span className="number">{info.numreunions}</span>
                    Reunions
                </p>
            </div>

        {/* Contains the chapters message */}
        <div className="chapterDetails">{info.description}</div>

        {/* Contains the contact info */}
        <h5 className="emailHeader">CHAPTER CONTACT INFO</h5>
        <div className="contact">
          <span>
            <img src={gmail} alt="gmail logo" className="gmailLogo" />
          </span>
          <span className="email">{info.email}</span>
        </div>

        <h5 className="emailHeader">JOIN OUR CHAPTERS FACEBOOK GROUP</h5>
        <div className="contact">
          <span>
            <img src={facebook} alt="gmail logo" className="gmailLogo" />
          </span>
          <a href={info.facebook}>{info.facebook}</a>
        </div>
        )}
        </div>
    )
}

export default CityPopup;