import React from 'react';

import { Row, Col } from 'reactstrap'
//Material Ui
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

// components
import Navbar from '../MapComponents/Navbar';
//style
import "./ChapterPage.scss"

// import picture from '../../Assets/Imgs/kev.jpg'
import pictureOne from '../../Assets/Imgs/Arash1.jpeg'
import pictureTwo from '../../Assets/Imgs/Shawn.jpeg'
import pictureThree from '../../Assets/Imgs/david.jpeg'
import pictureFour from '../../Assets/Imgs/Daniel.jpeg'
import pictureFive from '../../Assets/Imgs/Ramonta.jpeg'
import pictureSix from '../../Assets/Imgs/Will.jpeg'
const members = [
  {
    name: 'Arash Haji',
    photo: pictureOne
  },
  
  {
    name: 'Shawn Tompke',
    photo: pictureTwo
  },
  {
    name: 'David Betts',
    photo: pictureThree
  },
  {
    name: 'Daniel Mattox',
    photo: pictureFour
  },
  {
    name: 'Ramonta Lee',
    photo: pictureFive
  },
  {
    name: 'Will VanOrder',
    photo: pictureSix
  }
]

const useStyles = makeStyles((theme) => ({
    root: {

        display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));


const ChapterPage = () => {
    const classes = useStyles();

    return (
        <>
        <div className="container">
            <div className="header-image"></div>
            <div className="chapter-avatars">
                {members.map(member => <Avatar  alt={member.name} src={member.photo} />)}
            </div>

            <div className="about-section">
                <h1>This is the ChapterPage</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, error labore ea voluptatibus, ex nam temporibus quo, nemo deserunt obcaecati dolore vero laboriosam? Unde voluptatem est explicabo esse laborum asperiores.</p>
            </div>
            <Grid container spacing={3}>
              <Grid item xs={9}>
              <div className="activity-section">
                <h2>Activity</h2>
              </div>
              </Grid>
              <Grid item xs={3}>
                <div className='aside'>
                  <h2>Active Members</h2>
                  <ul>
                    {members.map(member => (
                      <li><Avatar classname={classes.root} alt={member.name} src={member.photo} /><p>{member.name}</p></li>
                    ))}
                  </ul>
                </div>
              </Grid>
            </Grid>
        </div>
        </>
    )
}

export default ChapterPage;