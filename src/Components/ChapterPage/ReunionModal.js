import React, { useState } from "react";
import ReunionDetails from "./ReunionDetails";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "50%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ReunionModal({ connection }) {
  const { story, link_to_media, title, reunion_img } = connection;

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <ReunionDetails
        lDescription={story}
        sDescription={title}
        videoLink={link_to_media}
      />
    </div>
  );

  return (
    <div className="card">
      <div className="connections-inner-container">
        <h3>{title}</h3>
        <div className="img-container" onClick={handleOpen}>
          <img src={reunion_img} alt="persons face" />
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
