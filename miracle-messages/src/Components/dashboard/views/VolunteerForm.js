import React from 'react';

import { Button, Input, Label } from 'reactstrap';

class VolunteerForm extends React.Component {
  render() {
    return (
      <div>
        <Label>First Name</Label>
        <Input
          value={this.props.volunteer.fname}
          onChange={this.props.change}
          name='fname'
          placeholder='First Name'
          type='text'
          required
        />
        <br />
        <Label>Last Name</Label>
        <Input
          onChange={this.props.change}
          name='lname'
          value={this.props.volunteer.lname}
          type='text'
          placeholder='Last Name'
          required
        />
        <br />
        <Label>E-mail</Label>
        <Input
          value={this.props.volunteer.email}
          onChange={this.props.change}
          name='email'
          type='email'
          placeholder='yourname@email.com'
          required
        />
        <br />
        <Label>Phone Number</Label>
        <Input 
          onChange={this.props.change} 
          value={this.props.volunteer.phone}
          name='phone' 
          type='tel' 
          pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' 
          required
        />
        <br />

        <Label>City</Label>
        <Input
          value={this.props.volunteer.city}
          onChange={this.props.change}
          name='city'
          placeholder='City'
          required
        />
        <br />
        <Label>State</Label>
        <Input
          value={this.props.volunteer.state}
          onChange={this.props.change}
          name='state'
          placeholder='State'
          required
        />
        <br />
        <Label>Country</Label>
        <Input
          value={this.props.volunteer.countrye}
          onChange={this.props.change}
          name='country'
          placeholder='Country'
          required
        />
        <br />
        <Label>Comments</Label>
        <Input
          value={this.props.volunteer.comments}
          onChange={this.props.change}
          name='comments'
          placeholder='Comments Here'
          type="textarea"
          rows='5'
          required
        />        
      </div>
    );
  }
}

export default VolunteerForm;
