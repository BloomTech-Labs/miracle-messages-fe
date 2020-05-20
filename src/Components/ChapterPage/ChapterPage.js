import React, { useState } from 'react'
import Connections from './Connections'
import ChapterMembers from "./ChapterMembers"
import './ChapterPage.scss'

import kev from '../../Assets/Imgs/kev.jpg'
import NavBar from '../MapComponents/Navbar'
import { ToastProvider } from "react-toast-notifications";

import headerImg from '../../Assets/Imgs/chapter.jpg'
import pictureOne from '../../Assets/Imgs/Arash1.jpeg';
import pictureTwo from '../../Assets/Imgs/Shawn.jpeg';
import pictureThree from '../../Assets/Imgs/david.jpeg';
import pictureFour from '../../Assets/Imgs/Daniel.jpeg';
import pictureFive from '../../Assets/Imgs/Ramonta.jpeg';
import pictureSix from '../../Assets/Imgs/Will.jpeg';
import { makeStyles } from '@material-ui/core/styles';


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
  },
  {
    name: 'Will VanOrder',
    photo: pictureSix
  },
  {
    name: 'Will VanOrder',
    photo: pictureSix
  }
]


const ChapterPage = () => {
  const [ chapterInfo, setChapterInfo ] = useState({
    members: 12, 
    reunions: 8,
    leaderImg: kev,
    chapterLeader: "Kevin Adler",
    chapterMembers: members
  })

  const joinChapter = (e) => {
    e.preventDefault()
  }
  
  return (
    <div className="chapter-page-container">
      <div className="header-img"></div>
      <div className="inner-container">
        <h1 className="chapter-name">Seattle Chapter</h1>
        <div className="flex-box justify-even">
          <div className="count-container">
            <p>{chapterInfo.members}</p>
            <p>members</p>
          </div>
          <div className="count-container">
            <p>{chapterInfo.reunions}</p>
            <p>reunions</p>
          </div>
        </div>
        <p className="hero-p">
          We believe that EVERYONE IS SOMEONE’S SOMEBODY. We want to inspire people everywhere to embrace their homeless neighbors not as problems to be solved, but as people to be loved.

          We envision a world where everyone is nurtured by a social support system and sense of belonging – a social home – whether or not they currently have access to stable physical housing. Join our Seattle Chapter for more information. 
        </p>
        <button className="join-button" onClick={joinChapter} type="button">
          Join Chapter
        </button>
        <Connections />
        <ChapterMembers chapterInfo={chapterInfo} />
        {/* Should separate out chapter leader section as sep component */}
      </div>
    </div>
  )
}

export default ChapterPage