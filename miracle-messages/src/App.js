import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios
      .get('https://miracle-messages-staging.herokuapp.com/users')
      .then(res => {
        console.log(res.data);
        this.setState({data: res.data});
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <h1>TITLE</h1>
        {this.state.data.map(user => {
          return <p>{user.username}</p>
        })}
      </div>
    );
  }
}

export default App;
