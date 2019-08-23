import React from 'react';
import axios from 'axios';

import Sponsor from './Sponsor'
import {getSponsor} from '../../../../Actions/index';
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
                icon_url: null
            }
        };
    }

    addSponsor = e => {
        e.preventDefault();
        console.log(this.state.sponsor);
        axios
          .post('https://miracle-messages-staging.herokuapp.com/api/partner', this.state.sponsor)
          .then(res=> console.log(res))
          .catch(err=> console.log(err));
          this.setState({
              sponsor: {
                  name: "",
                  site_url: "",
                  icon_url: null
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
            <div>
                {this.props.sponsorData.map(sponsor => {console.log(sponsor);
                    return < Sponsor sponsor={sponsor} key={sponsor.id} />
                })}
                <Button className="addBtn" onClick={this.toggle}>
                   +
                </Button>
                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                className={this.props.className}
                backdrop="static"
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
                    <Button color="success" onClick={this.addSponsor}>
                        Add Sponsor
                    </Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>
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
    {getSponsor}
)(Sponsors);