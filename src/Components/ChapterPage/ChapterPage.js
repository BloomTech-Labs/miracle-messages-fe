import React, { useState, useEffect } from "react";
import {
  fetchChapterInfo,
  fetchChapterReunions,
  fetchChapterVolunteers,
  fetchPendingVols,
} from "../../Actions/ChapterPageActions";
import Modal from "@material-ui/core/Modal";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import Reunions from "./Reunions";
import { ReunionForm } from "./ReunionForm";
import ChapterMembers from "./ChapterMembers";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import "./ChapterPage.scss";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "50%",
    [theme.breakpoints.down("md")] : {
      width: "60%"
    },
    [theme.breakpoints.down("sm")] : {
      width: "80%"
    },
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
    fetchPendingVols,
  } = props;
  const {
    chapterInfo,
    volunteers,
    reunions,
    reunionCount,
    volunteerCount,
    isFetching,
    pendingVols,
  } = props;

  const [user, setUser] = useState({});
  const [isApproved, setIsApproved] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const [open, setOpen] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetchChapterInfo(id);
    fetchChapterVolunteers(id);
    fetchChapterReunions(id);
    fetchPendingVols(id);

    axiosWithAuth()
      .get(`/api/user`)
      .then((res) => {
        setUser(res.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (volunteers.some((el) => el.name === user.name)) {
      setIsApproved(true);
    }
    if (pendingVols.some((el) => el.volunteersid === user.oktaid
    )) {
      setIsPending(true);
    }
  }, [volunteers, pendingVols, user.name, user.oktaid]);

  const joinChapter = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post(`/api/chapter/${id}/register`)
      .then((res) => {
        setIsPending(true);
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
          {!isApproved && !isPending && (
            <button
              className="join-button"
              onClick={(e) => joinChapter(e, id)}
              type="button"
            >
              Join Chapter
            </button>
          )}
          {isPending && (
            <button className="join-button" type="button" disabled={true}>
              Volunteer Request Pending Approval
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
        {isApproved && (
          <div className="button-div">
            <button onClick={handleOpen} className="reunion-btn">
              Submit a Successful Reunion
            </button>
          </div>
        )}
        <ChapterMembers volunteers={volunteers} leader={props.leader} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  let {
    chapterInfo,
    volunteers,
    reunions,
    leader,
    pendingVols,
  } = state.chapterInfoReducer;

  const isFetching =
    chapterInfo.isFetching ||
    volunteers.isFetching ||
    reunions.isFetching ||
    pendingVols.isFetching;

  chapterInfo = chapterInfo.chapterInfo;
  volunteers = volunteers.volunteers;
  reunions = reunions.reunions;
  pendingVols = pendingVols.pendingVols;

  return {
    chapterInfo,
    volunteers,
    volunteerCount: volunteers.length,
    leader,
    reunions,
    reunionCount: reunions.length,
    isFetching,
    pendingVols,
  };
};

export default connect(mapStateToProps, {
  fetchChapterInfo,
  fetchChapterReunions,
  fetchChapterVolunteers,
  fetchPendingVols,
})(ChapterPage);
