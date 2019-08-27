import React from 'react';
import axios from 'axios';
import {
  Button,
  Input,
  Label,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
  Card
} from 'reactstrap';

import { connect } from 'react-redux';
import { getData } from '../../../../Actions/index';
import { thisExpression } from '@babel/types';

class UpdateForm extends React.Component {
  state = {
    chapter: this.props.chapter,
    current_chapter_imgUrl: this.props.chapter.chapter_img_url,
    current_reunion_imgUrl: this.props.chapter.reunion_img_url,
    newChapterImg: null,
    newReunionImg: null
  };

  updateChapter = e => {
    e.preventDefault();

    console.log(this.state.chapter);
    const id = this.props.chapter.id;
    const fd = new FormData();
    if (this.state.newChapterImg != null) {
      fd.append('chapter_img', this.state.newChapterImg);
    }
    if (this.state.newReunionImg != null) {
      fd.append('reunion_img', this.state.newReunionImg);
    }
    fd.append('title', this.state.chapter.title);
    fd.append('established_date', this.state.chapter.established_date);
    fd.append('description', this.state.chapter.description);
    fd.append('city', this.state.chapter.city);
    fd.append('state', this.state.chapter.state);
    fd.append('latitude', this.state.chapter.latitude);
    fd.append('longitude', this.state.chapter.longitude);
    fd.append('email', this.state.chapter.email);
    fd.append('numvolunteers', this.state.chapter.numvolunteers);
    fd.append('msg_delivered', this.state.chapter.msg_delivered);
    fd.append('msg_recorded', this.state.chapter.msg_recorded);
    fd.append('numreunions', this.state.chapter.numreunions);
    fd.append('story', this.state.chapter.story);

    axios
      .put(
        `https://miracle-messages-production.herokuapp.com/api/chapter/${id}`,
        fd
      )
      .then(res => {
        console.log(res);
        this.props.toggleEdit();
        this.props.getData();
      })
      .catch(err => console.log(err));
  };

  changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;

    this.setState(prevState => ({
      chapter: {
        ...prevState.chapter,
        [ev.target.name]: value
      }
    }));
  };

  handleImg = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.files[0]
    });
  };

  // componentDidMount() {
  //   this.props.getData();
  // }

  render() {
    return (
      <div>
        <Label>Title</Label>
        <Input
          value={this.state.chapter.title}
          onChange={this.changeHandler}
          name='title'
          placeholder='Title'
        />
        <br />
        <Label>Establishment Date</Label>
        <Input
          onChange={this.changeHandler}
          name='established_date'
          value={this.state.chapter.established_date}
          type='date'
          placeholder='Establishment Date'
        />
        <div className='dropdown-divider' />
        <Label>Description</Label>
        <Input
          value={this.state.chapter.description}
          onChange={this.changeHandler}
          name='description'
          type='textarea'
          placeholder='Description'
          rows='5'
        />
        <Card>
          <CardImg src={this.state.current_chapter_imgUrl} />
          <CardImgOverlay>
            <CardTitle
              style={{
                fontSize: '2.2rem',
                textAlign: 'center',
                textShadow:
                  '-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white'
              }}
            >
              <strong>Current Chapter Image</strong>
            </CardTitle>
          </CardImgOverlay>
        </Card>
        <Label>Chapter Image</Label>
        <Input onChange={this.handleImg} name='newChapterImg' type='file' />
        <br />

        <Label>City </Label>
        <Input
          value={this.state.chapter.city}
          onChange={this.changeHandler}
          name='city'
          placeholder='City'
        />
        <Label>State</Label>
        <Input
          value={this.state.chapter.state}
          onChange={this.changeHandler}
          name='state'
          placeholder='State'
        />
        <div className='dropdown-divider' />
        <br />
        <Label>Latitude</Label>
        <Input
          value={this.state.chapter.latitude}
          onChange={this.changeHandler}
          name='latitude'
          placeholder='Latitude'
        />
        <Label>Longitude</Label>
        <Input
          value={this.state.chapter.longitude}
          onChange={this.changeHandler}
          name='longitude'
          placeholder='Longitude'
        />
        <div className='dropdown-divider' />
        <Label>Contact Email</Label>
        <Input
          value={this.state.chapter.email}
          onChange={this.changeHandler}
          name='email'
          type='email'
          placeholder='Email'
        />
        <Label>Number of Volunteers</Label>
        <Input
          value={this.state.chapter.numvolunteers}
          onChange={this.changeHandler}
          name='numvolunteers'
          placeholder='Volunteers'
        />
        <Label>Number of Delivered Messages</Label>
        <Input
          value={this.state.chapter.msg_delivered}
          onChange={this.changeHandler}
          name='msg_delivered'
          placeholder='Delivered Messages'
        />
        <Label>Number of Recorded Messages</Label>
        <Input
          value={this.state.chapter.msg_recorded}
          onChange={this.changeHandler}
          name='msg_recorded'
          placeholder='Recorded Messages'
        />
        <Label>Number of Reunions</Label>
        <Input
          value={this.state.chapter.numreunions}
          onChange={this.changeHandler}
          name='numreunions'
          placeholder='Reunions'
        />
        <Card>
          <CardImg src={this.state.current_reunion_imgUrl} />
          <CardImgOverlay>
            <CardTitle
              style={{
                fontSize: '2.2rem',
                textAlign: 'center',
                textShadow:
                  '-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white'
              }}
            >
              <strong>Current Story Image</strong>
            </CardTitle>
          </CardImgOverlay>
        </Card>
        <Label>Featured Story Image</Label>
        <Input onChange={this.handleImg} name='newReunionImg' type='file' />
        <Label>Featured Story</Label>
        <Input
          value={this.state.chapter.story}
          onChange={this.changeHandler}
          name='story'
          type='textarea'
          placeholder='Story'
          rows='5'
        />
        <Button onClick={this.updateChapter}>update</Button>
      </div>
    );
  }
}

// export default UpdateForm;

const mapStateToProps = state => {
  return {
    chapter_data: state.mapReducer.chapter_data
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(UpdateForm);
