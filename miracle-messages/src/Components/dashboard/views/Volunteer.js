import React, { Component } from 'react';
import axios from 'axios';
import VolunteerForm from './VolunteerForm';
import { connect } from 'react-redux';
import {deleteVolunteer, getVolunteer} from '../../../Actions/index'

import { Card, CardBody, CardTitle, Button, Modal,
  ModalHeader,
  ModalBody,
  ModalFooter } from 'reactstrap';
  import VolunteerUpdate from './VolunteerUpdate'

class Volunteer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      volunteer: {
        fname:'',
        lname:'',
        email:'',
        phone:'',
        city:'',
        state:'',
        country:'',
        comments:''
      }
    };    
  }

  deleteVolunteer = () => {
    const id = this.props.volunteer.id;
    console.log(id);
    axios
      .delete(`https://miracle-messages-staging.herokuapp.com/api/form/${id}`)
      .then( res => {
        this.toggle();
        this.props.getVolunteer();
      })
      .catch(err => (console.log(err)));
  };

  
  

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
      <Card className='volunteersCard'>
        <CardBody>
          <CardTitle className="mb-0">{this.props.volunteer.fname} {this.props.volunteer.lname}</CardTitle>
          
        </CardBody>
        <CardBody className="border-top">
          <span style={{ marginRight: '30px' }}>{this.props.volunteer.email}</span>

          <span style={{ marginRight: '30px' }}>{this.props.volunteer.phone}</span>

          <span style={{ marginRight: '30px' }}>{this.props.volunteer.city}</span>

          <span style={{ marginRight: '30px' }}>{this.props.volunteer.state}</span>
          <span style={{ marginRight: '20px' }}>{this.props.volunteer.country}</span>
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
            backdrop='static'
          >
            <ModalHeader toggle={this.toggleEdit}>Update Volunteer</ModalHeader>
            <ModalBody>
              <VolunteerUpdate
                toggleEdit={this.toggleEdit}
                volunteer={this.props.volunteer}
              />
            </ModalBody>
            <ModalFooter>
              <Button color='secondary' onClick={this.toggleEdit}>
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
            <ModalHeader toggle={this.toggle}>Delete Volunteer</ModalHeader>
            <ModalBody>
              Are you sure you want to permanently delete this Volunteer?
            </ModalBody>
            <ModalFooter>
              <Button color='danger' onClick={this.deleteVolunteer}>
                Delete
              </Button>{' '}
              <Button color='secondary' onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>  
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    volunteerData: state.voluntReducer.volunteerData
  }
}
export default connect(mapStateToProps, {deleteVolunteer, getVolunteer})(Volunteer);
