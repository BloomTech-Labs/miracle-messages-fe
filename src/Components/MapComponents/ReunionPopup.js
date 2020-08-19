import React from "react";
import "./city_popup.scss";

const ReunionPopup = (props) => {
  const { info } = props;
  let embeddedUrl;
  if (info.link_to_media) {
    let youtubeLink = info.link_to_media.split(",")[0].replace(/"/g, "");
    let longUrl = youtubeLink.replace("youtu.be", "youtube.com/embed/");
    let res = youtubeLink.split("=");
    if (!youtubeLink.includes("youtu.be")) {
      embeddedUrl = "https://www.youtube.com/embed/" + res[1];
    } else {
      embeddedUrl = longUrl;
    }
  }

  return (
    <div className="chapter-Info reunion-popup">
      <div className="chapter-Title">
        <h1>{info.title}</h1>
        <div className="video-embed">
          {info.link_to_media ? (
            <iframe width="310" height="310" title="youtube" src={embeddedUrl}>
              {console.log("url", embeddedUrl)}
            </iframe>
          ) : (
            <img className="default-img" src={info.photo} alt="logo"></img>
          )}
        </div>
      </div>
      <div className="story-container">
        {info.story.length > 655
          ? `${info.story.substring(0, 656)}...`
          : info.story}
      </div>
    </div>
  );
};

export default ReunionPopup;
