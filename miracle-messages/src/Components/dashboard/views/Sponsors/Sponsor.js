import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  CardImg,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import axios from 'axios';
import { deleteSponsor, getSponsor } from '../../../../Actions/index';
import { connect } from 'react-redux';
import UpdateSponsor from './UpdateSponsor';
class Sponsor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      dropdownOpen: false,
      sponsor: {
        name: '',
        site_url: '',
        icon_url: null,
        category: ''
      }
    };
  }

  delete = () => {
    const id = this.props.sponsor.id;
    console.log(id);
    axios

      .delete(
        `https://miracle-messages-production.herokuapp.com/api/partner/${id}`
      )
      .then(res => {
        this.toggle();
        this.props.getSponsor();
      })
      .catch(err => console.log(err));
  };

  //  updateSponsor = e => {
  //         console.log("this.state",this.state);
  //         e.preventDefault();
  //         const id = this.props.sponsor.id;
  //         const fd = new FormData();
  //         if (this.state.newIcon != null)  {
  //             fd.append("partner_icon", this.state.newIcon)
  //         }
  //         fd.append("name", this.state.sponsor.name);
  //         fd.append("site_url", this.state.sponsor.site_url);
  //         fd.append("category", this.state.sponsor.category);
  // console.log(fd.getAll("partner_icon"));
  //         axios
  //           .put(`https://miracle-messages-production.herokuapp.com/api/partner/${id}`, fd)
  //           .then(res => {console.log(res);
  //               this.props.toggleEdit();
  //               this.props.getSponsor();
  //           })
  //           .catch(err => console.log(err));
  //     };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  // toggleDrop = () => {
  //   this.setState(prevState => ({
  //     dropdownOpen: !prevState.dropDown
  //   }));
  // };

  toggleEdit = () => {
    this.setState(prevState => ({
      editModal: !prevState.editModal
    }));
  };

  render() {
    return (
      <>
        <Card className='partnersCard'>
          <CardBody>
            <CardTitle className='mb-0'>{this.props.sponsor.name}</CardTitle>
          </CardBody>
          <CardBody className='border-top'>
            <CardImg
              src={this.props.sponsor.icon_url}
              style={{ heigh: '50px', width: '50px' }}
            />

            <span style={{ marginLeft: '190px' }}>
              {this.props.sponsor.site_url}
            </span>
            <span style={{ marginLeft: '190px', position: 'center' }}>
              {this.props.sponsor.category}
            </span>
            <Button
              style={{ width: '100px', right: '200px', position: 'absolute' }}
              onClick={this.toggleEdit}
            >
              Update
            </Button>
            <Modal
              isOpen={this.state.editModal}
              toggle={this.toggleEdit}
              className={this.props.className}
              backdrop='static'
            >
              <ModalHeader toggle={this.toggleEdit}>Update Sponsor</ModalHeader>
              <ModalBody>
                <UpdateSponsor
                  toggleEdit={this.toggleEdit}
                  sponsor={this.props.sponsor}
                />
              </ModalBody>
              <ModalFooter>
                <Button color='secondary' onClick={this.toggleEdit}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>

            <Button
              color='danger'
              style={{ width: '100px', right: '60px', position: 'absolute' }}
              onClick={this.toggle}
            >
              Delete
            </Button>

            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className={this.props.className}
            >
              <ModalHeader toggle={this.toggle}>Delete Sponsor</ModalHeader>
              <ModalBody>
                Are you sure you want to permanently delete this Sponsor? Will
                Be Deleted From All The Chapters!!!
              </ModalBody>
              <ModalFooter>
                <Button color='danger' onClick={this.delete}>
                  Delete
                </Button>{' '}
                <Button color='secondary' onClick={this.toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </CardBody>
        </Card>
      </>
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
  { deleteSponsor, getSponsor }
)(Sponsor);
