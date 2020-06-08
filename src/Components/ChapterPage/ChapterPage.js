import React, { useState, useEffect } from "react";
import {
  fetchChapterInfo,
  fetchChapterReunions,
  fetchChapterVolunteers,
} from "../../Actions/ChapterPageActions";
import Modal from "@material-ui/core/Modal";
import { useLoggedInUser } from "../../Hooks/hooks";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import Reunions from "./Reunions";
import { ReunionForm } from "./ReunionForm";
import ChapterMembers from "./ChapterMembers";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import "./ChapterPage.scss";

import headerImg from "../../Assets/Imgs/chapter.jpg";
import pictureOne from "../../Assets/Imgs/Arash1.jpeg";
import pictureTwo from "../../Assets/Imgs/Shawn.jpeg";
import pictureThree from "../../Assets/Imgs/david.jpeg";
import pictureFour from "../../Assets/Imgs/Daniel.jpeg";
import pictureFive from "../../Assets/Imgs/Ramonta.jpeg";
import pictureSix from "../../Assets/Imgs/Will.jpeg";
import { makeStyles } from "@material-ui/core/styles";

const members = [
  {
    name: "Arash Haji",
    photo: pictureOne,
  },

  {
    name: "Shawn Tompke",
    photo: pictureTwo,
  },
  {
    name: "David Betts",
    photo: pictureThree,
  },
  {
    name: "Daniel Mattox",
    photo: pictureFour,
  },
  {
    name: "Ramonta Lee",
    photo: pictureFive,
  },
  {
    name: "Will VanOrder",
    photo: pictureSix,
  },
  {
    name: "Will VanOrder",
    photo: pictureSix,
  },
  {
    name: "Will VanOrder",
    photo: pictureSix,
  },
];

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "40%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const ChapterPage = (props) => {
  const {
    fetchChapterInfo,
    fetchChapterVolunteers,
    fetchChapterReunions,
  } = props;
  const {
    chapterInfo,
    volunteers,
    reunions,
    reunionCount,
    volunteerCount,
    isFetching,
  } = props;
  console.log(props);
  const user = useLoggedInUser();

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const [open, setOpen] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetchChapterInfo(id);
    fetchChapterVolunteers(id);
    fetchChapterReunions(id);
  }, []);

  const joinChapter = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post(`/api/volunteer/${id}`)
      .then((res) => {
        console.log(res);
      });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return isFetching ? null : (
    <div className="chapter-page-container">
      <div className="header-img">
        <img src={chapterInfo.chapter_img_url} alt="chapter" />
      </div>
      <div className="inner-container">
        <div className="first-section">
          <h1 className="chapter-name">{chapterInfo.title}</h1>
          <div className="flex-box justify-even">
            <div className="count-container">
              <p className="count">{volunteerCount}</p>
              <p>members</p>
            </div>
            <div className="count-container">
              <p className="count">{reunionCount}</p>
              <p>reunions</p>
            </div>
          </div>
          <p className="hero-p">{chapterInfo.description}</p>
          {!volunteers.find((el) => el.name === user.name) && (
            <button
              className="join-button"
              onClick={(e) => joinChapter(e, id)}
              type="button"
            >
              Join Chapter
            </button>
          )}
        </div>
        <Reunions reunions={reunions} />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div style={modalStyle} className={classes.paper}>
            <ReunionForm />
          </div>
        </Modal>
        {volunteers.find((el) => el.name === user.name) && (
          <div className="button-div">
            <button onClick={handleOpen} className="reunion-btn">
              Submit Reunion
            </button>
          </div>
        )}
        <ChapterMembers volunteers={volunteers} leader={props.leader} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  let { chapterInfo, volunteers, reunions, leader } = state.chapterInfoReducer;

  const isFetching =
    chapterInfo.isFetching || volunteers.isFetching || reunions.isFetching;

  chapterInfo = chapterInfo.chapterInfo;
  volunteers = volunteers.volunteers;
  reunions = reunions.reunions;

  return {
    chapterInfo,
    volunteers,
    volunteerCount: volunteers.length,
    leader,
    reunions,
    reunionCount: reunions.length,
    isFetching,
  };
};

export default connect(mapStateToProps, {
  fetchChapterInfo,
  fetchChapterReunions,
  fetchChapterVolunteers,
})(ChapterPage);
