import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

// Action imports
import { slideToggleAction } from '../../Actions/SlideToggleAction';
import { updatePopupAction } from '../../Actions/updatePopupAction';

// Icon imports
// import facebook from "../../icons/facebook.png";
// import google from "../../icons/google.png";
import gmail from '../../Assets/icons/gmail.png';

// CSS imports
import '../../CSS/city_info.css';

//GA Imports:
import ReactGA from 'react-ga';
import { gaEvent } from '../Analytics/GAFunctions';

//initializing GA
ReactGA.initialize(process.env.REACT_APP_GA_ID);
//tracking slide-out view
ReactGA.pageview('/slide-out');

class CityInfo extends PureComponent {
  render() {
    const { info } = this.props;

    const sponsors = info.partners.filter(
      partner => partner.category === 'sponsor'
    );
    const partners = info.partners.filter(
      partner => partner.category === 'partner'
    );

    return (
      <div className='chapterInfo'>
        {/* Contains the chapter picture, name, and estblish date */}
        <div className='chapterTitle'>
          <img
            src={info.chapter_img_url}
            alt='Chapter'
            height='200px'
            width='100%'
          />
          <div className='title'>{info.title}</div>
          <div className='date'>Established on {info.established_date}</div>
        </div>

        {/* Contains the chapter statisics; members/reunions */}
        <div className='chapterStats'>
          <div className='volunteers'>
            <span className='number'>{info.numvolunteers}</span>
            Members
          </div>
          <p className='reunions'>
            <span className='number'>{info.numreunions}</span>
            Reunions
          </p>
        </div>

        {/* Contains the chapters message */}
        <div className='chapterDetails'>{info.description}</div>

        {/* Links out */}
        <div className='buttons'>
          <button
            className='green'
            onClick={() => {
              gaEvent('click', 'Get Involved Button', `${info.title}`);
            }}
          >
            <a
              href='https://miraclemessages.org/getinvolved'
              target='_blank'
              rel='noopener noreferrer'
            >
              GET INVOLVED
            </a>
          </button>

          <button
            className='white'
            onClick={() => {
              gaEvent('click', 'Donate Button', `${info.title}`);
            }}
          >
            <a
              href='https://www.classy.org/give/231839/#!/donation/checkout'
              target='_blank'
              rel='noopener noreferrer'
            >
              DONATE
            </a>
          </button>
        </div>

        {/* Contains the featured reunioun story */}
        <div className='featuredReunion'>
          <h2>FEATURED REUNION STORY</h2>
          <img
            src={info.reunion_img_url}
            alt='Chapter'
            height='200px'
            width='100%'
          />
          <div className='reunionStory'>{info.story}</div>
          <a
            href='https://miraclemessages.org/stories'
            target='_blank'
            rel='noopener noreferrer'
            className='stories'
          >
            See all reunion stories
          </a>
        </div>

        {/* Contains the contact info */}
        <h5 className='emailHeader'>CHAPTER CONTACT INFO</h5>
        <div className='contact'>
          <span>
            <img src={gmail} alt='gmail logo' className='gmailLogo' />
          </span>
          <span className='email'>{info.email}</span>
        </div>

        {/* Contains the Sponsor Images */}
        {sponsors.length > 0 && (
          <div className='sponsors'>
            <h2>SPONSORS</h2>
            <div className='icons-container'>
              {sponsors.map((sponsor, index) => (
                <a
                  href={sponsor.site_url}
                  target='_blank'
                  rel='noopener noreferrer'
                  key={`sponsor-${index}`}
                >
                  <div className='icon-container'>
                    <img
                      src={sponsor.icon_url}
                      alt='Icon'
                      height='75px'
                      width='57.71px'
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Contains the Partner Images */}
        {partners.length > 0 && (
          <div className='partners'>
            <h2>PARTNERS</h2>

            <div className='icons-container'>
              {partners.map((partner, index) => (
                <a
                  href={partner.site_url}
                  target='_blank'
                  rel='noopener noreferrer'
                  key={`partner-${index}`}
                >
                  <div className='icon-container'>
                    <img src={partner.icon_url} alt='Icon' />
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    learnMore: state.mapReducer.learnMore
  };
};

export default connect(
  mapStateToProps,
  { slideToggleAction, updatePopupAction }
)(CityInfo);
