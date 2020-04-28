import React, { useState } from 'react';

//Material Ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';

// components
import Calendar from 'react-calendar';

import Navbar from '../Header-Footer/Navbar';
import Speedy from './Speedy';
import SpeedySide from './SpeedySide';
//style
import "./ChapterPage.scss";

import pictureOne from '../../Assets/Imgs/Arash1.jpeg';
import pictureTwo from '../../Assets/Imgs/Shawn.jpeg';
import pictureThree from '../../Assets/Imgs/david.jpeg';
import pictureFour from '../../Assets/Imgs/Daniel.jpeg';
import pictureFive from '../../Assets/Imgs/Ramonta.jpeg';
import pictureSix from '../../Assets/Imgs/Will.jpeg';
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

const chapterLeaders = [
  {
    name: 'Arash Haji',
    photo: pictureOne
  },
  {
    name: 'Daniel Mattox',
    photo: pictureFour
  },
  {
    name: 'David Betts',
    photo: pictureThree
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
    const [date, setDate] = useState(new Date())

    const onChange = date => {
      setDate(date)
    }
    return (
        <>
        <Navbar />
        <div className="container">
          <div className="header-image"></div>
          <div className="chapter-avatars">
                {chapterLeaders.map(leader => (
                <Speedy leader={leader} />
                  ))}
                  
          </div>
            
          
            <Grid container spacing={3}>
              <Grid item xs={9}>
              <div className="about-section">
            <h1>Seattle Chapter</h1>
            <h3>We believe that EVERYONE IS SOMEONE’S SOMEBODY. We want to inspire people everywhere to embrace their homeless neighbors not as problems to be solved, but as people to be loved.
            We envision a world where everyone is nurtured by a social support system and sense of belonging – a social home – whether or not they currently have access to stable physical housing. Join our Seattle Chapter for more information. </h3>
          </div>
              <div className="activity-section">
                <h1>Activity</h1>
              </div>
              <div className='spacer'></div>
              <div className='stats'>
                <Paper variant='outlined' square>
                <div className='blocks'>
                  <div className='block'>
                    Chapter Leader 
                    <div className='Numbers'>
                      <h4>Arash Haji</h4>
                    </div>
                  </div>
                  <div className='block'>
                    Volunteers
                    <div className='Numbers'>
                      <h4>30</h4>
                    </div>
                  </div>
                  <div className='block'>
                    Reunions
                    <div className='Numbers'>
                      <h4>6</h4>
                    </div>
                  </div>
                </div>
                </Paper>
              </div>
              <div className="activity-section">
              <h1> Featured Story </h1>
              </div>
              <div className='spacer'></div>
              <div className='content'>
                <Paper variant='outlined' square>
                <h3>We are on the frontlines of COVID-19, reconnecting our homeless neighbors with their loved ones… and us.</h3>
                </Paper>
              </div>
              </Grid>
              <Grid item xs={3}>
                
                <div className='aside'>
                <div className='cal'>
                  <Calendar
                    onChange={onChange}
                    value={date}
                  />
                </div>
                <div className='spacer'></div>
                <div className='spacer'></div>
                <div className='spacer'></div>
                  <h1>Active Members</h1>
                  
                    {members.map(member => (
                      <SpeedySide member={member} />
                    ))}
                  
                </div>
              </Grid>
            </Grid>
        </div>
        </>
    )
}

export default ChapterPage;