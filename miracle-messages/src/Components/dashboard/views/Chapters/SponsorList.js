import React from 'react';
import axios from 'axios';
import PartnerCard from './PartnerCard.js';
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

class SponsorList extends React.Component {
  state = {
    allSponsors: [],
    allPartners: [],
    currentSponsors: [],
    currentPartners: []
  };

  componentDidMount() {
    console.log('did mount');
    this.getAllPartners();
    this.getChapterPartners(this.props.chapter.id);
  }

  getAllPartners = () => {
    axios
      .get('https://miracle-messages-staging.herokuapp.com/api/partner')
      .then(res => {
        const data = res.data;
        let sponsors = [];
        let partners = [];
        data.forEach(element => {
          if (element.category == 'partner') {
            partners.push(element);
          } else {
            sponsors.push(element);
          }
        });
        this.setState({
          allSponsors: sponsors,
          allPartners: partners
        });
        console.log('partners');
      })

      .catch(err => console.log(err));
  };

  getChapterPartners = id => {
    axios
      .get(`https://miracle-messages-staging.herokuapp.com/api/partner/${id}`)
      .then(res => {
        const data = res.data;
        let sponsors = [];
        let partners = [];
        data.forEach(element => {
          if (element.category == 'partner') {
            partners.push(element);
          } else {
            sponsors.push(element);
          }
        });
        this.setState({
          currentSponsors: sponsors,
          currentPartners: partners
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div style={{ height: 'auto' }}>
        <div className='partnerColumn'>
          <div className='partSoponCol'>
            {this.state.currentPartners &&
              this.state.currentPartners.map((partner, key) => {
                return <PartnerCard partner={partner} key={key} />;
              })}
          </div>
          <div className='partSoponCol'>
            {this.state.currentSponsors &&
              this.state.currentSponsors.map((sponsor, key) => {
                return <PartnerCard partner={sponsor} key={key} />;
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default SponsorList;
