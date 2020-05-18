import React from "react";
import { Link } from "react-router-dom";
import "./city_popup.scss";
const CityPopup = (props) => {
  const { info } = props;
  const sponsors = info.partners.filter(
    (partner) => partner.category === "sponsor"
  );
  const partners = info.partners.filter(
    (partner) => partner.category === "partner"
  );
  return (
    <div className="chapter-Info">
      <div className="chapter-Title">
        <h1>{info.title}</h1>
        <div className="chapter-img">
          <img
            src="https://images.pexels.com/photos/1543767/pexels-photo-1543767.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="chapter"
          />
        </div>
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

      <Link className="chapter-btn" to="/chapter-page">
        Chapter Page
      </Link>
    </div>
  );
};

export default CityPopup;
