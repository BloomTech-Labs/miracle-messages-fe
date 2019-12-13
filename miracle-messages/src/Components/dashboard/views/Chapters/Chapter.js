import React, { Component } from "react";
import { Link } from "react-router-dom";
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

import UpdateFrom from "./UpdateForm";

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
            Edit
          </Button>

          <Button
            style={{
              marginRight: "10px",
              position: "static",
              marginBottom: "10px"
            }}
          >
            <Link to={`/admin/chapters/${this.props.info.id}`}>
              Chapter Info
            </Link>
          </Button>

          <Modal
            isOpen={this.state.modalEdit}
            toggle={this.toggleEdit}
            className={this.props.className}
            backdrop="static"
          >
            <ModalHeader toggle={this.toggleEdit}>Edit Chapter</ModalHeader>
            <ModalBody>
              <UpdateFrom
                toggleEdit={this.toggleEdit}
                chapter={this.props.info}
              />
            </ModalBody>
            {/* <ModalFooter>
              <Button color='primary' onClick={this.toggleEdit}>
                Update
              </Button>{' '}
              <Button color="secondary" type="submit" onClick={this.toggleEdit}>
                Cancel
              </Button>
            </ModalFooter> */}
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

export default Chapter;
