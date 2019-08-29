import React from 'react';
import axios from 'axios';
import { Button, Input, Label } from 'reactstrap';

import { connect } from 'react-redux';
import { getSponsor } from '../../../../Actions/index';

class UpdateSponsor extends React.Component {

    state = {
        sponsor: this.props.sponsor,
        newIcon: null,
    };
    
    updateSponsor = e => {
        console.log("this.state",this.state);
        e.preventDefault();
        const id = this.props.sponsor.id;
        const fd = new FormData();
        if (this.state.newIcon != null)  {
            fd.append("partner_icon", this.state.newIcon)
        }
        fd.append("name", this.state.sponsor.name);   
        fd.append("site_url", this.state.sponsor.site_url);
        fd.append("category", this.state.sponsor.category);
console.log(fd.getAll("partner_icon"));
        axios
          .put(`https://miracle-messages-production.herokuapp.com/api/partner/${id}`, fd)
          .then(res => {console.log(res);
              this.props.toggleEdit();
              this.props.getSponsor();
          })
          .catch(err => console.log(err));
    };

  updateSponsor = e => {
    e.preventDefault();
    const id = this.props.sponsor.id;
    const fd = new FormData();
    if (this.state.newIcon != null) {
      fd.append('partner_icon', this.state.newIcon);
    }
    fd.append('name', this.state.sponsor.name);
    fd.append('site_url', this.state.sponsor.site_url);
    fd.append('category', this.state.sponsor.category);
    axios
      .put(
        `https://miracle-messages-production.herokuapp.com/api/partner/${id}`,
        fd
      )
      .then(res => {
        this.props.toggleEdit();
        this.props.getSponsor();
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    e.persist();
    let value = e.target.value;
    this.setState(prevState => ({
      sponsor: {
        ...prevState.sponsor,
        [e.target.name]: value
      }
    }));
  };

  handleImg = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.files[0]
    });
  };

  render() {
    return (
      <div>
        <Label>Name</Label>
        <Input
          value={this.state.sponsor.name}
          onChange={this.handleChange}
          name='name'
          placeholder='Name'
        />
        <div className='dropdown-divider' />
        <Label>Site Url</Label>
        <Input
          value={this.state.sponsor.site_url}
          name='site_url'
          type='url'
          onChange={this.handleChange}
          placeholder='www.example.com'
        />
        <div className='dropdown-divider' />
        <Label>Logo</Label>
        <Input onChange={this.handleImg} name='newIcon' type='file' />
        <div className='dropdown-divider' />
        <Label>Category</Label>
        <Input
          value={this.state.sponsor.category}
          name='category'
          onChange={this.handleChange}
          type='text'
        />
        <Button color='primary' onClick={this.updateSponsor}>
          Update
        </Button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    sponsorData: state.partnerReducer.sponsorData
  };
};
export default connect(
  mapStateToProps,
  { getSponsor }
)(UpdateSponsor);
