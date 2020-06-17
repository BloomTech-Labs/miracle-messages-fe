import React, { useState } from "react";
import ReunionDetails from "./ReunionDetails";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


export function ReunionCard({ connection }) {
  const { title, reunion_img } = connection;
  const [ open, setOpen ] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="card">
      <div className="connections-inner-container">
        <h3>{title}</h3>
        <div className="img-container" onClick={handleOpen}>
          <img src={reunion_img} alt="homeless person reunited" />
        </div>
      </div>
      <ReunionModal open={open} onClose={handleClose} connection={connection} />
    </div>
  );
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

export function ReunionModal({ connection, open, onClose }){
  const classes = useStyles()
  const [ modalStyle ] = useState(getModalStyle)

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.paper}>
        <ReunionDetails
          connection={connection}
        />
      </div>
    </Modal>
  )
}


