import React, { useState } from "react"
import { makeStyles } from "@material-ui/styles"


const useStyles = makeStyles({
  container: {
    padding: "2%",
    minHeight: "15vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  heading: {
    fontSize: "2rem"
  },
  description: {
    margin: "3% 0",
    fontSize: "1.5rem"
  },
  link: {
    fontSize: "1.5rem"
  }
})

const ReunionDetails = ({ lDescription, sDescription, videoLink }) => {
  const classes = useStyles()


  return (
    <div className={classes.container}>
      <h2>{sDescription}</h2>
      <p className={classes.description}>
        {lDescription}
      </p>
      {videoLink && 
        <a className={classes.link} href={videoLink}>Reunion Video</a> }
    </div>
  )
}

export default ReunionDetails