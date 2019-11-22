import React from 'react';
import axios from 'axios';

import SponsorList from './SponsorList.js';
import SelectPartner from './SelectPartners.js';
// import "../../../../CSS/style.css"; 

import { Card, CardImg, CardBody } from 'reactstrap';

class ChapterCard extends React.Component {
  state = {
    chapter: null,
    data: {
      allSponsors: [],
      allPartners: [],
      currentSponsors: [],
      currentPartners: []
    }
  };

  getChapter = id => {
    axios
      .get(`https://miracle-messages-production.herokuapp.com/api/chapter/${id}`)
      .then(res => {
        this.setState({ chapter: res.data });
      })
      .catch(error => {
        console.error(error);
      });
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.getAllPartners();
    this.getChapterPartners(id);
    this.getChapter(id);
  }

  getAllPartners = () => {
    axios
      .get(`https://miracle-messages-production.herokuapp.com/api/partner`)
      .then(res => {
        const data = res.data;
        let sponsors = [];
        let partners = [];

        data.forEach(element => {
          if (element.category === 'partner') {
            partners.push(element);
          } else {
            sponsors.push(element);
          }
        });

        this.setState({
          data: {
            ...this.state.data,
            allSponsors: sponsors,
            allPartners: partners
          }
        });
      })

      .catch(err => console.log(err));
  };

  getChapterPartners = id => {
    axios
      .get(
        `https://miracle-messages-production.herokuapp.com/api/chapter/${id}/partners`
      )
      .then(res => {
        const data = res.data;
        let sponsors = [];
        let partners = [];
        data.forEach(element => {
          if (element.category === 'partner') {
            partners.push(element);
          } else {
            sponsors.push(element);
          }
        });
        this.setState({
          data: {
            ...this.state.data,
            currentSponsors: sponsors,
            currentPartners: partners
          }
        });
      })
      .catch(err => console.log(err));
  };

  unassignPartner = id => {
    const chapterid = this.props.match.params.id;
    axios
      .delete(
        `https://miracle-messages-production.herokuapp.com/api/chapter/${chapterid}/partners/${id}`
      )
      .then(res => {
        this.getAllPartners();
        this.getChapterPartners(chapterid);
      })
      .catch(err => console.log(err));
  };

  assignPartner = id => {
    const chapterid = this.props.match.params.id;

    const partnerId = { partnerId: id };
    axios
      .post(
        `https://miracle-messages-production.herokuapp.com/api/chapter/${chapterid}/partners`,
        partnerId
      )
      .then(res => {
        this.getAllPartners();
        this.getChapterPartners(chapterid);
      })
      .catch(err => console.log(err));
  };

  render() {
    if (!this.state.chapter) {
      return <div>Loading Chapter information...</div>;
    }
    return (
      <div className='chapter-flex'>
        <Card className='s-chapter'>
          <CardImg src={this.state.chapter.chapter_img_url} />

          <CardBody> 
            <h1>{this.state.chapter.title}</h1>
            <h4>Established: </h4> 
            <p> {this.state.chapter.established_date} </p>  
            <h4>Description</h4>
            <p>{this.state.chapter.description}</p>
            <h4>City: </h4> 
            <p> {this.state.chapter.city} </p>
            <h4>State: </h4> 
            <p> {this.state.chapter.state} </p>
            <h4>Email: </h4> 
            <p> {this.state.chapter.email} </p>
            <h4>Volunteers: </h4> 
            <p> {this.state.chapter.numvolunteers} </p>
            <h4>Delivered Messages: </h4> 
            <p> {this.state.chapter.msg_delivered} </p>
            <h4>Messages Recorded: </h4> 
            <p> {this.state.chapter.msg_recorded} </p>
            <h4>Reunions: </h4> 
            <p> {this.state.chapter.numreunions} </p>
            <h4>Featured Story</h4>
            <p>{this.state.chapter.story}</p>
            <CardImg src={this.state.chapter.reunion_img_url} />
          </CardBody>
        </Card>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <SponsorList
            className='s-chapter-right'
            data={this.state.data}
            unassign={this.unassignPartner}
          />
          <SelectPartner data={this.state.data} assign={this.assignPartner} />
        </div>
      </div>
    );
  }
}

export default ChapterCard;
