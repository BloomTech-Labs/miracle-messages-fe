import React from "react";
import axios from "axios";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Chapter from "./Chapter";
import ChapterForm from "./ChapterForm";

import { connect } from "react-redux";
import { getData } from "../../../../Actions/index";

class Chapters extends React.Component {
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

  addChapter = e => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("chapter_img", this.state.chapter.chapter_img);
    fd.append("reunion_img", this.state.chapter.reunion_img);
    fd.append("title", this.state.chapter.title);
    fd.append("established_date", this.state.chapter.established_date);
    fd.append("description", this.state.chapter.description);
    fd.append("city", this.state.chapter.city);
    fd.append("state", this.state.chapter.state);
    fd.append("latitude", this.state.chapter.latitude);
    fd.append("longitude", this.state.chapter.longitude);
    fd.append("email", this.state.chapter.email);
    fd.append("numvolunteers", this.state.chapter.numvolunteers);
    fd.append("msg_delivered", this.state.chapter.msg_delivered);
    fd.append("msg_recorded", this.state.chapter.msg_recorded);
    fd.append("numreunions", this.state.chapter.numreunions);
    fd.append("story", this.state.chapter.story);

    axios
      .post("https://miracle-messages-production.herokuapp.com/api/chapter", fd)
      .then(res => {
        this.toggle();
        this.props.getData();
      })
      .catch(err => console.log(err));

    this.setState({
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
    });
  };

  handleImg = e => {
    this.setState({
      chapter: {
        ...this.state.chapter,
        [e.target.name]: e.target.files[0]
      }
    });
  };

  handleInputChange = e => {
    this.setState({
      chapter: {
        ...this.state.chapter,
        [e.target.name]: e.target.value
      }
    });
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  deleteChapter = id => {
    axios
      .delete(
        `https://miracle-messages-production.herokuapp.com/api/chapter/${id}`
      )
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
          return (
            <Chapter
              info={chapter}
              key={chapter.id}
              deleteChapter={this.deleteChapter}
            />
          );
        })}

        <Button className="addBtn" onClick={this.toggle}>
          +
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          backdrop="static"
        >
          <ModalHeader toggle={this.toggle}>Add Chapter</ModalHeader>
          <ModalBody>
            <ChapterForm
              change={this.handleInputChange}
              chapter={this.state.chapter}
              handleImg={this.handleImg}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.addChapter}>
              Add Chapter
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
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
