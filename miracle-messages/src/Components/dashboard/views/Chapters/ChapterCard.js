import React from 'react';
import axios from 'axios';

import SponsorList from './SponsorList.js';
import SelectPartner from './SelectPartners.js';

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
      .get(`https://miracle-messages-staging.herokuapp.com/api/chapter/${id}`)
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
      .get('https://miracle-messages-staging.herokuapp.com/api/partner')
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
        // let filteredSponsor = []
        // sponsors.forEach((sponsor,index) =>{
        //   for(let i =0; i < this.state.data.currentSponsors.length; i++){
        //     if(sponsor.name !=this.state.data.currentSponsors[i].name)
        //   }
        // })
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
        `https://miracle-messages-staging.herokuapp.com/api/chapter/${id}/partners`
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
        `https://miracle-messages-staging.herokuapp.com/api/chapter/${chapterid}/partners/${id}`
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
        `https://miracle-messages-staging.herokuapp.com/api/chapter/${chapterid}/partners`,
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
            <h4>Established: {this.state.chapter.established_date}</h4>
            <h4>Description</h4>
            <p>{this.state.chapter.description}</p>
            <h4>City: {this.state.chapter.city}</h4>
            <h4>State: {this.state.chapter.state}</h4>
            <h4>Latitude: {this.state.chapter.latitude}</h4>
            <h4>Longitude: {this.state.chapter.longitude}</h4>
            <h4>Email: {this.state.chapter.email}</h4>
            <h4>Volunteers: {this.state.chapter.numvolunteers}</h4>
            <h4>Delivered Messages: {this.state.chapter.msg_delivered}</h4>
            <h4>Messages Recorded: {this.state.chapter.msg_recorded}</h4>
            <h4>Reunions: {this.state.chapter.numreunions}</h4>
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

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   Card,
//   CardImg,
//   CardText,
//   CardBody,
//   CardTitle,
//   CardSubtitle,
//   Button,
//   Modal,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Input
// } from 'reactstrap';

// import SponsorList from './SponsorList.js';
// import SelectPartner from './SelectPartners.js';

// const ChapterCard = props => {
//   const [chapter, setChapter] = useState();

//   const getData = () => {
//     const id = props.match.params.id;

//     axios
//       .get(`https://miracle-messages-staging.herokuapp.com/api/chapter/${id}`)
//       .then(response => {
//         setChapter(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   };
//   useEffect(() => {
//     getData();
//   }, []);

//   if (!chapter) {
//     return <div>Loading Chapter information...</div>;
//   }

//   return (
//     <div className='chapter-flex'>
//       <Card className='s-chapter'>
//         <CardImg src={chapter.chapter_img_url} />

//         <CardBody>
//           <CardTitle>{chapter.city}</CardTitle>
//           <CardSubtitle></CardSubtitle>
//           <CardText></CardText>
//           <Button style={{ marginRight: '10px' }}>Edit</Button>

//           <Button color='danger'>Delete</Button>
//         </CardBody>
//       </Card>
//       <div style={{ display: 'flex', flexDirection: 'column' }}>
//         <SponsorList
//           className='s-chapter-right'
//           chapter={chapter}
//           refresh={getData}
//         />
//         <SelectPartner chapter={chapter} />
//       </div>
//     </div>
//   );
// };

// export default ChapterCard;
