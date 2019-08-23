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

class CityInfo extends PureComponent {
  render() {
    const { info } = this.props;

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
          <div className='title'>Miracle Messages {info.city}</div>
          <div className='date'>{info.established_date}</div>
        </div>

        {/* Contains the chapter statisics; members/reunions */}
        <div className='chapterStats'>
          <p className='volunteers'>
            <span className='number'>{info.numvolunteers}</span>
            Members
          </p>
          <p className='reunions'>
            <span className='number'>{info.numreunions}</span>
            Reunions
          </p>
        </div>

        {/* Contains the chapters message */}
        <div className='chapterDetails'>{info.description}</div>

        {/* Links out */}
        <div className='buttons'>
          <button className='green'>
            <a
              href='https://miracle-messages-staging.netlify.com/form'
              target='_blank'
              rel='noopener noreferrer'
            >
              JOIN CHAPTER
            </a>
          </button>

          <button className='white'>
            <a href='' target='_blank' rel='noopener noreferrer'>
              SEE REUNION STORIES
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
        <div>
          <a
            href='https://miraclemessages.org'
            target='_blank'
            rel='noopener noreferrer'
            className='contact'
          >
            <span>
              <img src={gmail} alt='gmail logo' className='gmailLogo' />
            </span>
            <span className='email'>{info.email}</span>
          </a>
        </div>

        {/* Contains the Sponser Images */}
        <div className='sponsors'>
          <h2>SPONSORS</h2>
            
              
        </div>

        {/* Contains the Partner Images */}
        <div className='partners'>
          <h2>PARTNERS</h2>
          
        </div>
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
