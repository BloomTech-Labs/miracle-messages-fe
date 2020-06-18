import React from "react";
import "./city_popup.scss";

const ReunionPopup = (props) => {
  const { info } = props;
  let youtubeLink = info.link_to_media.split(",")[0].replace(/"/g, "");
  let longUrl = youtubeLink.replace("youtu.be", "youtube.com/embed/");
  let res = youtubeLink.split("=");
  let embeddedUrl;
  if (!youtubeLink.includes("youtu.be")) {
    embeddedUrl = "https://www.youtube.com/embed/" + res[1];
  } else {
    embeddedUrl = longUrl;
  }

  return (
    <div className="chapter-Info reunion-popup">
      <div className="chapter-Title">
        <h1>{info.title}</h1>
        <div className="video-embed">
          <iframe width="420" height="315" title="youtube" src={embeddedUrl}>
            {console.log("url", embeddedUrl)}
          </iframe>
        </div>
      </div>
      <div className="story-container">{info.story}</div>
    </div>
  );
};

export default ReunionPopup;
