import React, { useState, useEffect, PureComponent } from 'react';
import { connect } from 'react-redux';

import { popupToggleAction } from '../../Actions/popupToggleAction';
import { updatePopupAction } from '../../Actions/updatePopupAction';

import facebook from "../../Assets/icons/facebook.png";
import gmail from "../../Assets/icons/gmail.png";

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
        <div className='chapter-Info'>
            <div className='chapter-Title'>
              <h1>{info.title}</h1> 
            </div>
            {/* Contains the chapter statisics; members/reunions */}
            <div className="chapter-Stats">
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
        <div className="chapter-Details">{info.description}</div>

        {/* Contains the contact info */}
        <div className="contact">
        <h5 className="email-Header">CHAPTER CONTACT INFO</h5>
          <span>
          </span>
          <a href={"mailto:" +  info.email}><span className="email">{info.email}</span></a>
        </div>
        <div className="contact">
          <span>         
            <div classname='social'>
                <img src={facebook} alt="facebook-logo" className="facLogo" />
            </div>
          </span>
        </div>
        </div>
    )
}

export default CityPopup;