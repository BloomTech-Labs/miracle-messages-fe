import React from "react";
import axios from "axios";

import Chapter from "./Chapter";

import { connect } from "react-redux";
import { getData } from "../../../../Actions/index";

class Chapters extends React.Component {
  deleteChapter = id => {
    axios
      .delete(`http://localhost:5000/api/chapter/${id}`)
      .then(res => {
        this.props.getData();
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div className="chapter-felx">
        {this.props.chapter_data.map(chapter => {
          if (chapter.approved === true) {
            return (
              <Chapter
                info={chapter}
                key={chapter.id}
                deleteChapter={this.deleteChapter}
              />
            );
          }
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    chapter_data: state.mapReducer.chapter_data
  };
};

export default connect(mapStateToProps, { getData })(Chapters);
