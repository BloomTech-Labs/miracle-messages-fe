import React from 'react';
import axios from 'axios';

import Sponsor from './Sponsor';
import { getSponsor } from '../../../../Actions/index';
import SponsorForm from '../Sponsors/SponsorForm';
import { connect } from 'react-redux';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Sponsors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      sponsor: {
        name: '',
        site_url: '',
        icon_url: null,
        category: ''
      }
    };
  }


    addSponsor = e => {
        e.preventDefault();
        console.log(this.state.sponsor.icon_url);
        const fd = new FormData();
        fd.append("partner_icon", this.state.sponsor.icon_url )
        fd.append("name", this.state.sponsor.name)
        fd.append("site_url", this.state.sponsor.site_url)
        fd.append("category", this.state.sponsor.category)
        console.log(fd.getAll("partner_icon"));
        axios
          .post('https://miracle-messages-production.herokuapp.com/api/partner', fd)
          .then(res=>  {
        console.log(res);

        this.toggle();
        this.props.getSponsor();
      })
      .catch(err => console.log(err));
    this.setState({
      sponsor: {
        name: '',
        site_url: '',
        icon_url: null,
        category: ''
      }
    });
  };

  handleImg = e => {
    this.setState({
      sponsor: {
        ...this.state.sponsor,
        [e.target.name]: e.target.files[0]
      }
    });
  };

  handleInputChange = e => {
    this.setState({
      sponsor: {
        ...this.state.sponsor,
        [e.target.name]: e.target.value
      }
    });
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  componentDidMount() {
    this.props.getSponsor();
  }
  render() {
    return (
      <div onSubmit={this.toggle}>
        {this.props.sponsorData.map(sponsor => {
          return (
            <Sponsor sponsor={sponsor} key={sponsor.id} delete={this.delete} />
          );
        })}
        <Button className='addBtn' onClick={this.toggle}>
          +
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          backdrop='static'
        >
          <ModalHeader toggle={this.toggle}>Add Sponsor</ModalHeader>
          <ModalBody>
            <SponsorForm
              change={this.handleInputChange}
              sponsor={this.state.sponsor}
              handleImg={this.handleImg}
            />
          </ModalBody>
          <ModalFooter>
            <Button color='success' onClick={this.addSponsor}>
              Add Sponsor
            </Button>{' '}
            <Button color='secondary' onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sponsorData: state.partnerReducer.sponsorData
  };
};

export default connect(
  mapStateToProps,
  { getSponsor }
)(Sponsors);
