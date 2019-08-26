// import React from 'react';
// import axios from 'axios';

// class ChapterCard extends React.Component {
//   state = {
//     chapter: null
//   };

//   componentDidMount() {
//     const target = this.props.match.params.id;
//     const id = 1;
//     console.log(`my idddddddddd is : ${id} and ${target}`);
//     // this.getChapter(id);
//     axios
//       .get(`https://miracle-messages-staging.herokuapp.com/api/chapter/${id}`)
//       .then(res => {
//         console.log(res);
//         this.setState({ chapter: res.data });
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }

//   componentDidUpdate(newProps) {
//     if (this.props.match.params.id !== newProps.match.params.id) {
//       this.getChapter(newProps.match.params.id);
//     }
//   }

//   getChapter = id => {
//     axios
//       .get(`https://miracle-messages-staging.herokuapp.com/api/chapter/${id}`)
//       .then(res => {
//         console.log(res);
//         this.setState({ chapter: res.data });
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   };

//   render() {
//     // console.log(this.state.chapter.latitude);
//     if (!this.state.chpater) {
//       return <div>Loading Chapter information...</div>;
//     }
//     return (
//       <div>
//         <h1 style={{ color: 'red' }}>hello</h1>
//         <h1>{this.state.chapter.city}</h1>
//       </div>
//     );
//   }
// }

// export default ChapterCard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from 'reactstrap';

import SponsorList from './SponsorList.js';

const ChapterCard = props => {
  const [chapter, setChapter] = useState();

  useEffect(() => {
    const id = props.match.params.id;

    axios
      .get(`https://miracle-messages-staging.herokuapp.com/api/chapter/${id}`)
      .then(response => {
        setChapter(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (!chapter) {
    return <div>Loading Chapter information...</div>;
  }

  return (
    <div className='chapter-flex'>
      <Card className='s-chapter'>
        <CardImg src={chapter.chapter_img_url} />

        <CardBody>
          <CardTitle>{chapter.city}</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText></CardText>
          <Button style={{ marginRight: '10px' }}>Edit</Button>

          <Button color='danger'>Delete</Button>
        </CardBody>
      </Card>
      <SponsorList className='s-chapter-right' chapter={chapter} />
    </div>
  );
};

export default ChapterCard;
