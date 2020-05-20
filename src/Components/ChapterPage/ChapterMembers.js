import React from "react"
import { withStyles } from '@material-ui/styles';
import { Avatar } from '@material-ui/core' 
import { AvatarGroup } from '@material-ui/lab';

const LeaderAvatar = withStyles({
  root: {
    width: "30%",
    height: "auto",
    margin: "0 auto"
  },
  img: {
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
  }
})(Avatar)

const VolunteerAvatar = withStyles({
  root: {
    width: "25%",
    height: "auto",
    margin: "0 auto"
  },
})(Avatar)

const StyledAvatarGroup = withStyles({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
})(AvatarGroup)


const ChapterMembers = ({ kev, volunteers }) => {
  return (
    <div>
      <h2 className="members-header">Chapter Members</h2>
      <div className="flex-box">
        <div className="chapter-leader">
          <div>
            <h2>Chapter Leader</h2>
            <LeaderAvatar src={kev} />
            <h2>Kevin</h2>
          </div>
          <div className="bio">
            <p>Kevin F. Adler is the Founder and CEO of Miracle Messages, an award-winning nonprofit organization that helps people experiencing homelessness rebuild their social support systems, through family reunification and a virtual buddy system. To-date, Miracle Messages has facilitated 325+ reunions and 48 new friendships.</p>
          </div>
        </div>
        <div className="chapter-volunteers">
          <h2>Volunteers</h2>
          <StyledAvatarGroup spacing="large" max={10}>
          {volunteers.map(el => {
            return <VolunteerAvatar alt={`${el.fname}${el.lname}`} src={el.profile_img_url} />
          })}
          </StyledAvatarGroup>
        </div>
      </div>
    </div>
  )
}

export default ChapterMembers
