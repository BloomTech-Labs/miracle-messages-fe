import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    padding: "2%",
    minHeight: "15vh",
    maxHeight: "90vh",
    overflow: "scroll",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: "2rem",
  },
  description: {
    margin: "3% 0",
    fontSize: "1.5rem",
  },
  link: {
    fontSize: "1.5rem",
  },
  imgContainer: {
    width: "90%",
    height: "auto",
    margin: "3% auto",
    border: "1px solid black",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
  },
  image: {
    width: "100%",
    height: "auto"
  }
});

const ReunionDetails = ({ connection }) => {
  const { story, title, link_to_media, reunion_img } = connection
  const classes = useStyles(connection);

  return (
    <div className={classes.container}>
      <h2>{title}</h2>
      <div className={classes.imgContainer}>
        <img src={reunion_img} alt="homeless person reunited" className={classes.image} />
      </div>
      <p className={classes.description}>{story}</p>
      {link_to_media && (
        <a className={classes.link} href={link_to_media}>
          {`Meet ${title}`}
        </a>
      )}
    </div>
  );
};

export default ReunionDetails;
