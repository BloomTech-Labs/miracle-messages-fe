import React from "react";
import axios from "axios";

import PendingCards from "./PendingCards";

import { connect } from "react-redux";
import { getData } from "../../../../Actions/index";

class PendingChapter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      chapter: {
        title: "",
        established_date: "",
        description: "",
        chapter_img: null,
        city: "",
        state: "",
        latitude: "",
        longitude: "",
        email: "",
        numvolunteers: "",
        msg_delivered: "",
        msg_recorded: "",
        numreunions: "",
        story: "",
        reunion_img: null
      }
    };
  }

  deleteChapter = id => {
    axios
      .delete(`http://localhost:5000/api/chapter/${id}`)
      .then(res => {
        // console.log(res, this.props.getData());
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
          //   console.log(chapter);
          if (chapter.approved === false) {
            return (
              <PendingCards
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

export default connect(mapStateToProps, { getData })(PendingChapter);
