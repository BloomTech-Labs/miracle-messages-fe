import React from 'react';

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from 'reactstrap';
import Chapter from './Chapter.js';

import { connect } from 'react-redux';
import { getData } from '../../../Actions/index';

class Chapters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div className="chapter-felx">
        {this.props.chapter_data.map((chapter, key) => {
          return <Chapter info={chapter} key={key} />;
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
            <Input placeholder="Title" />
            <Input placeholder="Establishment Date" />
            <div className="dropdown-divider" />
            <Input placeholder="City" />
            <Input placeholder="State" />
            <div className="dropdown-divider" />
            <Input placeholder="Longitude" />
            <Input placeholder="Latitude" />
            <div className="dropdown-divider" />
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.toggle}>
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
