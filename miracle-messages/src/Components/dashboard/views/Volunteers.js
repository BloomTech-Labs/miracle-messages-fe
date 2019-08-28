import React from 'react';
import axios from 'axios';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Volunteer from './Volunteer';
import VolunteerForm from './VolunteerForm';

import { connect } from 'react-redux';
import { getVolunteer } from '../../../Actions/index';

class Volunteers extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        modal: false,
        volunteer: {
           fname: '',
           lname: '',
           email: '',
           phone: '',
           city: '',
           state: '',
           country: '',
           comment: ''
        }      
    };
  }

  addVolunteer = e => {
    e.preventDefault();
    const fd = new FormData();

    fd.append('fname', this.state.volunteer.fname);
    fd.append('lname', this.state.volunteer.lname);
    fd.append('email', this.state.volunteer.email);
    fd.append('phone', this.state.volunteer.phone);
    fd.append('city', this.state.volunteer.city);
    fd.append('state', this.state.volunteer.state);
    fd.append('country', this.state.volunteer.country);
    fd.append('comment', this.state.volunteer.comment);
    axios
      .post('https://miracle-messages-staging.herokuapp.com/api/form')
      .then(res => {
        console.log(res);
        this.toggle();
        this.props.getVolunteer();
        })      
      .catch(err => {
        console.log(err);
      });

      this.setState({
        volunteer: {
           fname: '',
           lname: '',
           email: '',
           phone: '',
           city: '',
           state: '',
           country: '',
           comment: ''
        }
      });  
  };

  handleInputChange = e => {
    this.setState({
      volunteer: {
        ...this.state.volunteer,
        [e.target.name]: e.target.value
      }
    });
  };
  
  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  // deleteVolunteer = id => {
  //   axios
  //     .delete(`https://miracle-messages-staging.herokuapp.com/api/form/${id}`)
  //     .then(res => {
  //       this.props.getVolunteer();
  //     })
  //     .catch(err => console.log(err));
  // }

  componentDidMount() {
    this.props.getVolunteer();
  }

  render() {
    return (
      <div onSubmit={this.toggle}>
        {this.props.volunteerData.map(volunteer => {
          console.log(volunteer);
          return <Volunteer  volunteer={volunteer} key={volunteer.id} deleteVolunteer={this.deleteVolunteer}/>                      
        })}
        <Button className='addBtn' onClick={this.toggle}>
          +
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          backdrop='static'
        >
          <ModalHeader toggle={this.toggle}>Add Volunteer</ModalHeader>
          <ModalBody>
            <VolunteerForm
              change={this.handleInputChange}
              volunteer={this.state.volunteer}
            />
            </ModalBody>
            <ModalFooter>
            <Button color='success' onClick={this.addVolunteer}>
              Add Volunteer
            </Button>{' '}
            <Button color='secondary' onClick={this.toggle}>
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
    volunteerData: state.voluntReducer.volunteerData
  };
};
export default connect(
  mapStateToProps,
  {getVolunteer}
)(Volunteers);
