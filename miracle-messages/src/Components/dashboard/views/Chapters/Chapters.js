import React, { useState, useEffect } from "react";
import axios from "axios";

import Chapter from "./Chapter";

import { connect } from "react-redux";
import { getData } from "../../../../Actions/index";
import { useOktaAuth } from '@okta/okta-react';

const Chapters = props => {
  
  const deleteChapter = id => {
    axios
      .delete(`https://miracle-messages-dev.herokuapp.com/api/chapter/${id}`)
      .then(res => {
        props.getData();
      })
      .catch(err => console.log(err));
  }
  
  useEffect(() => {
    props.getData();
  }, [])

  return (
    <div className="chapter-felx">
      {props.chapter_data.map(chapter => {
        if (chapter.approved === true) {
          return (
            <Chapter
              info={chapter}
              key={chapter.id}
              deleteChapter={deleteChapter}
            />
          )
        }
      })}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    chapter_data: state.mapReducer.chapter_data
  }
};

export default connect(mapStateToProps, { getData })(Chapters);
