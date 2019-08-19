import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from 'reactstrap';
import img1 from '../../../Assets/Imgs/group.jpg';

class Chapter extends Component {
  state = {
    modal: false,
    modalEdit: false
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  toggleEdit = () => {
    this.setState(prevState => ({
      modalEdit: !prevState.modalEdit
    }));
  };
  render() {
    return (
      <Card className="cardChapter">
        <CardImg top width="100%" className="chapterImg" src={img1} />
        {/* <CardImg
          top
          width="100%"
          className="chapterImg"
          src={this.props.info.chapter_img_url}
        /> */}

        <CardBody>
          <CardTitle>{this.props.info.title}</CardTitle>
          <CardSubtitle>
            Volunteers: {this.props.info.numvolunteers}
          </CardSubtitle>
          <CardText>{this.props.info.description}</CardText>
          <Button style={{ marginRight: '10px' }} onClick={this.toggleEdit}>
            Edit
          </Button>
          <Modal
            isOpen={this.state.modalEdit}
            toggle={this.toggleEdit}
            className={this.props.className}
            backdrop="static"
          >
            <ModalHeader toggle={this.toggleEdit}>Add Chapter</ModalHeader>
            <ModalBody>
              <Input value={this.props.info.location} placeholder="Title" />
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
              <Button color="primary" onClick={this.toggleEdit}>
                Update
              </Button>{' '}
              <Button color="secondary" onClick={this.toggleEdit}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>

          <Button color="danger" onClick={this.toggle}>
            Delete
          </Button>

          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Delete Chapter</ModalHeader>
            <ModalBody>
              Are you sure you want to permanently delete this Chapter?
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={this.toggle}>
                Delete
              </Button>{' '}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </CardBody>
      </Card>
    );
  }
}

export default Chapter;
