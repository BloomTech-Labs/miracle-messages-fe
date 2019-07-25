import React, {PureComponent} from 'react';

export default class CityInfo extends PureComponent {
  render() {
    const {info} = this.props;

    return (
      <div className="popup">
        <div>
        <h3>{info.location}</h3>
        <p>Number of members: {info.numvolunteers}</p>
        </div>
      </div>
    );
  }
}