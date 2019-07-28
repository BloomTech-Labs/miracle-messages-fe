import React, { PureComponent } from 'react';
import facbook from '../icons/facebook.png';
import google from '../icons/google.png';
import gmail from '../icons/gmail.png';

export default class CityInfo extends PureComponent {
  render() {
    const { info } = this.props;

    let display;
    let button;

    if (this.props.learnMore) {
      display = (
        <div>
          <a href="#">
            Facebook
            <span>
              <img src={facbook} alt="facbook logo" />
            </span>
          </a>
          <a href="#">
            Google Hangout
            <span>
              <img src={google} alt="google logo" />
            </span>
          </a>
          <a href="#">
            Contact
            <span>
              <img src={gmail} alt="gmail logo" />
            </span>
          </a>
        </div>
      );
      button = 'Back';
    } else {
      display = (
        <div>
          <p>
            Volunteers <span className="number">{info.numvolunteers}</span>
          </p>
          <p>Delivered Messages</p>
          <p>Reunions</p>
        </div>
      );
      button = 'Learn More';
    }

    return (
      <div className="popup">
        <div className="info">
          <h3>{info.location.toUpperCase()}</h3>
          {display}
        </div>

        <div className="buttons">
          <button>Join Chapter</button>
          <button onClick={e => this.props.toggle(e)}>{button}</button>
        </div>
      </div>
    );
  }
}
