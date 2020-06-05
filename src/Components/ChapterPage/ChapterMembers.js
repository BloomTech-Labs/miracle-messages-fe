import React from "react";
import { withStyles } from "@material-ui/styles";
import { Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import "./ChapterMembers.scss";

const LeaderAvatar = withStyles({
  root: {
    width: "30%",
    height: "auto",
    margin: "0 auto",
    "& img": {
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    },
  },
})(Avatar);

const VolunteerAvatar = withStyles({
  root: {
    width: "20%",
    height: "100%",
    margin: "0 auto",
  },
})(Avatar);

const StyledAvatarGroup = withStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
})(AvatarGroup);

const ChapterMembers = ({ leader, volunteers }) => {
  return volunteers ? (
    <div>
      <div className="members-box">
        {leader ? (
          <div className="chapter-leader">
            <div>
              <h2 className="leader-title">Chapter Leader</h2>
              <LeaderAvatar src={leader.profile_img_url} />
              <h2 id="leader-name">{leader.name}</h2>
            </div>
            <div className="bio">
              <p id="leader-bio">{leader.bio} </p>
            </div>
          </div>
        ) : (
          <div className="no-leader">
            <h4>This Chapter does not yet have a leader</h4>
            <div className="apply-btn">Apply to be a Leader</div>
          </div>
        )}

        <div className="chapter-volunteers">
          <h2>Volunteers</h2>
          <StyledAvatarGroup spacing="large" max={10}>
            {volunteers.length > 0 ? (
              volunteers.map((el) => {
                return (
                  <VolunteerAvatar
                    alt={`${el.fname}${el.lname}`}
                    src={el.profile_img_url}
                  />
                );
              })
            ) : (
              <p className="no-members">There are currently no members</p>
            )}
          </StyledAvatarGroup>
        </div>
      </div>
    </div>
  ) : null;
};

export default ChapterMembers;
