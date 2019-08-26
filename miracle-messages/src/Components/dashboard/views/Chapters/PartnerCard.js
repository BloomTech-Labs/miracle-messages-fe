import React from 'react';
import { Card, CardImg, CardTitle } from 'reactstrap';

class PartnerCard extends React.Component {
  render() {
    return (
      <div className='partner-card-s'>
        <img
          style={{ width: '50px', height: '50px' }}
          src={this.props.partner.icon_url}
        />
        <h3>{this.props.partner.name}</h3>
      </div>
    );
  }
}
export default PartnerCard;
