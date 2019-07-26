import React, {PureComponent} from 'react';

export default class CityInfo extends PureComponent {
  render() {
    const {info} = this.props;

    return (
      <div className="popup">
        <div className='info'>
          <h3>{info.location.toUpperCase()}</h3>
          <p>Volunteers <span className='number'>{info.numvolunteers}</span></p>
          <p>Delivered Messages</p>
          <p>Reunions</p>
        </div>

        <div className='buttons'>
          <button>Join Chapter</button>
          <button>Learn More</button>
        </div>
      </div>
    );
  }
}