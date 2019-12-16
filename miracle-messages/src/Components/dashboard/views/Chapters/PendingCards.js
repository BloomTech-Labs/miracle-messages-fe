import React, { Component } from "react";
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
  ModalFooter
} from "reactstrap";

import PendingTrue from "./PendingTrue";

class PendingCards extends Component {
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

  deleteChapt = () => {
    this.toggle();
    this.props.deleteChapter(this.props.info.id);
  };

  render() {
    return (
      <Card
        className="cardChapter"
        style={{ maxWidth: "50%", maxHeight: "50%", minWidth: "250px" }}
      >
        {/* {console.log(this.props)} */}

        <CardImg
          top
          width="100%"
          height="auto"
          className="chapterImg"
          src={this.props.info.chapter_img_url}
        />

        <CardBody>
          <CardTitle>{this.props.info.title}</CardTitle>
          <CardSubtitle>
            Volunteers: {this.props.info.numvolunteers}
          </CardSubtitle>
          <CardText>{this.props.info.description}</CardText>

          <Button
            style={{
              marginRight: "10px",
              position: "static",
              marginBottom: "10px"
            }}
            onClick={this.toggleEdit}
          >
            Approve
          </Button>
          {/* {console.log(this.props.info.approved)} */}
          <Modal
            isOpen={this.state.modalEdit}
            toggle={this.toggleEdit}
            className={this.props.className}
            backdrop="static"
          >
            <ModalHeader toggle={this.toggleEdit}>Edit Chapter</ModalHeader>
            <ModalBody>
              <PendingTrue
                toggleEdit={this.toggleEdit}
                chapter={this.props.info}
              />
            </ModalBody>
          </Modal>

          <Button
            style={{
              marginRight: "10px",
              position: "static",
              marginBottom: "10px"
            }}
            color="danger"
            onClick={this.toggle}
          >
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
              <Button color="danger" onClick={this.deleteChapt}>
                Delete
              </Button>{" "}
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

export default PendingCards;
