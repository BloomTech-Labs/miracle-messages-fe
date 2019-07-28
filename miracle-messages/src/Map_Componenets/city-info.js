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
          <span>
            <i
              onClick={e => this.props.toggle(e)}
              className="fas fa-long-arrow-alt-left arrow"
            />
            <span onClick={e => this.props.toggle(e)}>
              <h3>{info.location.toUpperCase()}</h3>
            </span>
          </span>
          <a
            href="https://www.facebook.com/miraclemessages/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
            <span>
              <img src={facbook} alt="facbook logo" />
            </span>
          </a>
          <a
            href="https://miraclemessages.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Hangout
            <span>
              <img src={google} alt="google logo" />
            </span>
          </a>
          <a
            href="https://miraclemessages.org"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          <h3>{info.location.toUpperCase()}</h3>
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
        <div className="info">{display}</div>

        <div className="buttons">
          <a
            href="https://miraclemessages.org/getinvolved"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Chapter
          </a>
          <button onClick={e => this.props.toggle(e)}>{button}</button>
        </div>
      </div>
    );
  }
}
