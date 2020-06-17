import React from "react";
import { Link } from "react-router-dom";
import "./city_popup.scss";

const ReunionPopup = (props) => {
  
  console.log(props);

  return (
    <div className="chapter-Info">
      {/* <div className="chapter-Title">
        <h1>{info.title}</h1>
        <div className="chapter-img">
          <img src={info.chapter_img_url} alt="chapter" />
        </div>
      </div> */}
      {/* Contains the chapter statisics; members/reunions */}

      {/* <div className="chapter-Stats">
        <div className="volunteers">
          <span className="number">{info.volunteers.length}</span>
          Members
        </div>
        <p className="reunions">
          <span className="number">{info.reunionCount}</span>
          Reunions
        </p>
      </div> */}

      {/* Contains the chapters message */}
      {/* <div className="chapter-Details">{info.description}</div> */}

      {/* Contains the contact info */}

      {/* <Link className="chapter-btn" to={`/chapter/${info.id}`}>
        Chapter Page
      </Link>  */}
    </div>
  );
};

export default ReunionPopup;
