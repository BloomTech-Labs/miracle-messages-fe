import React from 'react';
import axios from 'axios';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Chapter from './Chapter.js';
import ChapterForm from './ChapterForm';

import { connect } from 'react-redux';
import { getData } from '../../../Actions/index';

class Chapters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      chapter: {
        title: '',
        established_date: '',
        description: '',
        chapter_img: null,
        city: '',
        state: '',
        latitude: '',
        longitude: '',
        email: '',
        numvolunteers: '',
        msg_delivered: '',
        msg_recorded: '',
        numreunions: '',
        story: '',
        reunion_img: null
      }
    };
  }

  addChapter = e => {
    e.preventDefault();
    console.log(this.state.chapter);
    // const fd = new FormData();
    // fd.append('img', this.state.chapter.chapter_img);
    axios
      .post(
        'https://miracle-messages-staging.herokuapp.com/api/chapter',
        this.state.chapter
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));

    this.setState({
      chapter: {
        title: '',
        established_date: '',
        description: '',
        chapter_img: null,
        city: '',
        state: '',
        latitude: '',
        longitude: '',
        email: '',
        numvolunteers: '',
        msg_delivered: '',
        msg_recorded: '',
        numreunions: '',
        story: '',
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
    // console.log(this.state.chapter);
  };

  handleInputChange = e => {
    this.setState({
      chapter: {
        ...this.state.chapter,
        [e.target.name]: e.target.value
      }
    });
    // console.log(this.state.chapter);
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div className="chapter-felx">
        {this.props.chapter_data.map(chapter => {
          // console.log(chapter);
          return <Chapter info={chapter} key={chapter.id} />;
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
            </Button>{' '}
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

export default connect(
  mapStateToProps,
  { getData }
)(Chapters);
