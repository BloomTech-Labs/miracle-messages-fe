import React from 'react';
import axios from 'axios';

import PartnerCard from './PartnerCard.js';

class SelectPartner extends React.Component {
  // state = {
  //   allSponsors: [],
  //   allPartners: [],
  //   currentSponsors: [],
  //   currentPartners: []
  // };

  // componentDidMount() {
  //   this.getAllPartners();
  //   this.getChapterPartners(this.props.chapter.id);
  // }

  // getAllPartners = () => {
  //   axios
  //     .get('https://miracle-messages-staging.herokuapp.com/api/partner')
  //     .then(res => {
  //       const data = res.data;
  //       let sponsors = [];
  //       let partners = [];
  //       data.forEach(element => {
  //         if (element.category == 'partner') {
  //           partners.push(element);
  //         } else {
  //           sponsors.push(element);
  //         }
  //       });
  //       this.setState({
  //         allSponsors: sponsors,
  //         allPartners: partners
  //       });
  //     })

  //     .catch(err => console.log(err));
  // };

  // getChapterPartners = id => {
  //   axios
  //     .get(
  //       `https://miracle-messages-staging.herokuapp.com/api/chapter/${id}/partners`
  //     )
  //     .then(res => {
  //       const data = res.data;
  //       // console.log(data, 'add');

  //       let sponsors = [];
  //       let partners = [];
  //       data.forEach(element => {
  //         if (element.category == 'partner') {
  //           partners.push(element);
  //         } else {
  //           sponsors.push(element);
  //         }
  //       });
  //       this.setState({
  //         currentSponsors: sponsors,
  //         currentPartners: partners
  //       });
  //     })
  //     .catch(err => console.log(err));
  // };

  // assignPartner = id => {
  //   const partnerId = { partnerId: id };
  //   axios
  //     .post(
  //       `https://miracle-messages-staging.herokuapp.com/api/chapter/${this.props.chapter.id}/partners`,
  //       partnerId
  //     )
  //     .then(res => {
  //       this.getAllPartners();
  //       this.getChapterPartners(this.props.chapter.id);
  //       this.props.refresh(this.props.chapter.id);
  //     })
  //     .catch(err => console.log(err));
  // };

  render() {
    // console.log(this.props.data);
    return (
      <div>
        <div className='partnerColumn'>
          <div className='partSoponCol'>
            <h2>Available Partners</h2>
            {this.props.data.allPartners &&
              this.props.data.allPartners.map((partner, key) => {
                return (
                  <PartnerCard
                    partner={partner}
                    key={key}
                    btnColor={'info'}
                    btnText={'Add'}
                    onsubmit={this.props.assign}
                  />
                );
              })}
          </div>
          <div className='partSoponCol'>
            <h2>Available sponsors</h2>
            {this.props.data.allSponsors &&
              this.props.data.allSponsors.map((sponsor, key) => {
                return (
                  <PartnerCard
                    partner={sponsor}
                    key={key}
                    btnColor={'info'}
                    btnText={'Add'}
                    onsubmit={this.props.assign}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default SelectPartner;
