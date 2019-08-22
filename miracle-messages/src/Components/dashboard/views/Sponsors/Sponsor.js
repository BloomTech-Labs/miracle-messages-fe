import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Button, CardImg, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label } from 'reactstrap';
import axios from 'axios';
class Sponsor extends Component {

  state = {
    modal: false,
    editModal: false,
    sponsor: {
      id: "",
      name: "",
      site_url: "",
      icon_url: null
    }
  };

  handleDelete = e => {
        e.preventDefault();
        axios
          .delete(`https://miracle-messages-staging.herokuapp.com/api/partner/${this.state.id}`)
          .then(res => (console.log(res.data)))
          .catch(err => console.log(err));
         
    }


  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  toggleEdit = () => {
    this.setState(prevState => ({
      editModal: !prevState.editModal
    }));
  };
  render() {
    return (
      <>
        <Card className="partnersCard">
          <CardBody>
            <CardTitle className="mb-0">
              {/* <i className="mdi mdi-comment-processing-outline mr-2"> </i> */}
              {this.props.sponsor.name}
            </CardTitle>
          </CardBody>
          <CardBody className="border-top">
            <CardImg
              src={this.props.sponsor.icon_url}
              style={{ heigh: '50px', width: '50px' }}
            />

            <span style={{ marginLeft: '190px' }}>
             {this.props.sponsor.site_url}
            </span>

            <Button
              style={{ width: '100px', right: '200px', position: 'absolute' }}
              onClick={this.toggleEdit}
            >
              Update
            </Button>
            <Modal
            isOpen={this.state.editModal}
            toggle={this.toggleEdit}
            className={this.props.className}
            backdrop="static"
            >
            <ModalHeader toggle={this.toggleEdit}>Update Sponsor</ModalHeader>
            <ModalBody>
              <Input value={this.props.name} placeholder="Update Name" />
              <div className="dropdown-divider" />
              <Input value={this.props.site_url} placeholder="Update Web Adress" />
              <div className="dropdown-divider" />
              <Label>Update Logo</Label>
              <Input value={this.props.icon_url} type="file"  />
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

            <Button
              color="danger"
              style={{ width: '100px', right: '60px', position: 'absolute' }}
              onClick={this.toggle}
            >
              Delete
            </Button>
            
            <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
            >
            <ModalHeader toggle={this.toggle}>Delete Sponsor</ModalHeader>
            <ModalBody>
              Are you sure you want to permanently delete this Sponsor?
              Will Be deleted from all the Chapters!!!
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={this.handleDelete}>
                Delete
              </Button>{' '}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
            </Modal>
          </CardBody>
        </Card>       
      </>
    );
  }
}
export default Sponsor;
