import React from 'react';
import axios from 'axios';
import {
  Button,
  Input,
  Label,
  CardText,
  CardTitle,
  Card
} from 'reactstrap';

import { connect } from 'react-redux';
import { getVolunteer } from '../../../Actions/index';


class VolunteerUpdate extends React.Component {
  state = {
    volunteer: this.props.volunteer,
  };

  updateVolunteer = e => {
    e.preventDefault();

    
    const id = this.props.volunteer.id;
    const fd = new FormData();

    fd.append('fname', this.state.volunteer.fname);
    fd.append('lname', this.state.volunteer.lname);
    fd.append('email', this.state.volunteer.email);
    fd.append('city', this.state.volunteer.city);
    fd.append('state', this.state.volunteer.state);
    fd.append('country', this.state.volunteer.country);
    fd.append('phone', this.state.volunteer.phone);
    fd.append('comments', this.state.volunteer.comments);

    axios
      .put(
        `https://miracle-messages-staging.herokuapp.com/api/form/${id}`,
        fd
      )
      .then(res => {
        console.log(res);
        this.props.toggleEdit();
        this.props.getVolunteer();
      })
      .catch(err => console.log(err));
  };

  changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;

    this.setState(prevState => ({
      volunteer: {
        ...prevState.volunteer,
        [ev.target.name]: value
      }
    }));
  };


  // componentDidMount() {
  //   this.props.getData();
  // }

  render() {
    return (
      <div>
        <Label>First Name</Label>
        <Input
          value={this.state.volunteer.fname}
          onChange={this.changeHandler}
          name='fname'
          placeholder='First Name'
        />
        <br />
        <Label>Last Name</Label>
        <Input
          onChange={this.changeHandler}
          name='lname'
          value={this.state.volunteer.lname}
          type='text'
          placeholder='Last Name'
        />
        <div className='dropdown-divider' />
        <Label>E-mail</Label>
        <Input
          value={this.state.volunteer.email}
          onChange={this.changeHandler}
          name='email'
          type='email'
          placeholder='E-mail'
        />
        <br />
        <Label>City </Label>
        <Input
          value={this.state.volunteer.city}
          onChange={this.changeHandler}
          name='city'
          placeholder='City'
        />
        <Label>State</Label>
        <Input
          value={this.state.volunteer.state}
          onChange={this.changeHandler}
          name='state'
          placeholder='State'
        />
        <div className='dropdown-divider' />
        <br />
        <Label>Phone Number</Label>
        <Input
          value={this.state.volunteer.phone}
          onChange={this.changeHandler}
          name='phone'
          placeholder='Phone Number'
          type='tel'
          pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
        />
        <Label>Country</Label>
        <Input
          value={this.state.volunteer.country}
          onChange={this.changeHandler}
          name='country'
          placeholder='Country'
        />
        <Button color="primary" onClick={this.updateVolunteer}>Update</Button>
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
  { getVolunteer }
)(VolunteerUpdate);
