import React, {PureComponent} from 'react';

export default class CityInfo extends PureComponent {
  render() {
    const {info} = this.props;

    return (
      <div>
        <div>
        <p>City: {info.city}</p>
        <p>Chapter Name: {info.chaptername} </p>
        <p>Number of members: {info.members}</p>
        </div>
      </div>
    );
  }
}