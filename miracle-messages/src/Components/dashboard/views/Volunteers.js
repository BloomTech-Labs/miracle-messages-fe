import React from 'react';
import axios from 'axios';
import Volunteer from './Volunteer';

class Volunteers extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios
      .get('https://miracle-messages-staging.herokuapp.com/api/form')
      .then(res => {
        this.setState({
          data: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {this.state.data.map((vol, key) => {
          return <Volunteer vol={vol} key={key} />;
        })}
      </div>
    );
  }
}

export default Volunteers;
