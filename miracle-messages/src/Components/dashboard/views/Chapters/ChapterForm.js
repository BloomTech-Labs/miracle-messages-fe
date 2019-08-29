import React from 'react';

import { Input, Label } from 'reactstrap';

class ChapterForm extends React.Component {
  render() {
    return (
      <div>
        <Label>Title</Label>
        <Input
          value={this.props.chapter.title}
          onChange={this.props.change}
          name='title'
          placeholder='Title'
        />
        <br />
        <Label>Establishment Date</Label>
        <Input
          onChange={this.props.change}
          name='established_date'
          value={this.props.chapter.established_date}
          placeholder='Establishment Date'
        />
        <div className='dropdown-divider' />
        <Label>Description</Label>
        <Input
          value={this.props.chapter.description}
          onChange={this.props.change}
          name='description'
          type='textarea'
          placeholder='Description'
          rows='5'
        />

        <Label>Chapter Image</Label>
        <Input onChange={this.props.handleImg} name='chapter_img' type='file' />
        <br />

        <Label>City</Label>
        <Input
          value={this.props.chapter.city}
          onChange={this.props.change}
          name='city'
          placeholder='City'
        />
        <Label>State</Label>
        <Input
          value={this.props.chapter.state}
          onChange={this.props.change}
          name='state'
          placeholder='State'
        />
        <div className='dropdown-divider' />
        <br />
        <Label>Latitude</Label>
        <Input
          value={this.props.chapter.latitude}
          onChange={this.props.change}
          name='latitude'
          placeholder='Latitude'
        />
        <Label>Longitude</Label>
        <Input
          value={this.props.chapter.longitude}
          onChange={this.props.change}
          name='longitude'
          placeholder='Longitude'
        />
        <div className='dropdown-divider' />
        <Label>Contact Email</Label>
        <Input
          value={this.props.chapter.email}
          onChange={this.props.change}
          name='email'
          type='email'
          placeholder='Email'
        />
        <Label>Number of Volunteers</Label>
        <Input
          value={this.props.chapter.numvolunteers}
          onChange={this.props.change}
          name='numvolunteers'
          placeholder='Volunteers'
        />
        <Label>Number of Delivered Messages</Label>
        <Input
          value={this.props.chapter.msg_delivered}
          onChange={this.props.change}
          name='msg_delivered'
          placeholder='Delivered Messages'
        />
        <Label>Number of Recorded Messages</Label>
        <Input
          value={this.props.chapter.msg_recorded}
          onChange={this.props.change}
          name='msg_recorded'
          placeholder='Recorded Messages'
        />
        <Label>Number of Reunions</Label>
        <Input
          value={this.props.chapter.numreunions}
          onChange={this.props.change}
          name='numreunions'
          placeholder='Reunions'
        />
        <Label>Featured Story Image</Label>
        <Input onChange={this.props.handleImg} name='reunion_img' type='file' />
        <Label>Featured Story</Label>
        <Input
          value={this.props.chapter.story}
          onChange={this.props.change}
          name='story'
          type='textarea'
          placeholder='Story'
          rows='5'
        />
      </div>
    );
  }
}

export default ChapterForm;
