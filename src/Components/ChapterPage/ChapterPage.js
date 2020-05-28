import React, { useState, useEffect } from "react";
import {
  fetchChapterInfo,
  fetchChapterReunions,
  fetchChapterVolunteers,
} from "../../Actions/ChapterPageActions";
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import Reunions from "./Reunions";
import ChapterMembers from "./ChapterMembers";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import "./ChapterPage.scss";

import kev from "../../Assets/Imgs/kev.jpg";
import NavBar from "../MapComponents/Navbar";
import { ToastProvider } from "react-toast-notifications";

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
  } = props;

  console.log(props);
  const { id } = useParams();
  const leaderImg = kev;

  useEffect(() => {
    fetchChapterInfo(id);
    fetchChapterVolunteers(id);
    fetchChapterReunions(id);
  }, []);

  const joinChapter = (e) => {
    e.preventDefault()

    axiosWithAuth()
      .get(`/api/chapter/testtesttest1/volunteer`)
      .then(res => {
        console.log(res)
      })  
  };

  return (
    (chapterInfo && (
      <div className="chapter-page-container">
        <div className="header-img"></div>
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
            <p className="hero-p">
              We believe that "Everyone is someone's somebody". We want to
              inspire people everywhere to embrace their homeless neighbors not
              as problems to be solved, but as people to be loved. We envision a
              world where everyone is nurtured by a social support system and
              sense of belonging – a social home – whether or not they currently
              have access to stable physical housing. Join our Seattle Chapter
              for more information.
            </p>
            <button className="join-button" onClick={(e) => joinChapter(e, id)} type="button">
              Join Chapter
            </button>
          </div>
          <Reunions reunions={reunions} />
          <ChapterMembers volunteers={volunteers} kev={kev} />
        </div>
      </div>
    )) ||
    // Probably need some type of loading page to render while data is fetched
    null
  );
};

const mapStateToProps = (state) => {
  const { chapterInfo, volunteers, reunions } = state.chapterInfoReducer;

  return {
    chapterInfo,
    volunteers,
    volunteerCount: volunteers.length,
    reunions,
    reunionCount: reunions.length,
  };
};

export default connect(mapStateToProps, {
  fetchChapterInfo,
  fetchChapterReunions,
  fetchChapterVolunteers,
})(ChapterPage);
