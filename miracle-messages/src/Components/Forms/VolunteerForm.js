import React from "react";
import "./VolunteerForm.scss";
import { connect } from "react-redux";
import { addVolunteers } from "../../Actions/FormActions";
// import PlacesAutocomplete from 'react-places-autocomplete';
// import "react-phone-number-input/style.css"
// import PhoneInput from "react-phone-number-input"
// import {
//   geocodeByAddress,
//   geocodeByPlaceId,
//   getLatLng
// } from 'react-places-autocomplete';

import FormFooter from "../Header-Footer/FormFooter";
import FormHeader from "../Header-Footer/FormHeader";

class VolunteerForm extends React.Component {
  state = {
    newVolunteer: {
      fname: "",
      lname: "",
      password: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      country: "",
      comment: "",
      volunteering: false,
      donating: false,
      joinmm: false,
      mediacoverage: false,
      somethingelse: false
    }
  };
  handleOnsubmit = e => {
    e.preventDefault();
    this.props.addVolunteers(this.state);
    this.setState({
      newVolunteer: {
        fname: "",
        lname: "",
        password: "",
        email: "",
        phone: "",
        city: "",
        state: "",
        country: "",
        comment: "",
        volunteering: false,
        donating: false,
        joinmm: false,
        mediacoverage: false,
        somethingelse: false
      }
    });
    this.props.history.push("/user/login");
  };
  handleToggle = e => {
    this.setState({
      newVolunteer: {
        ...this.state.newVolunteer,
        [e.target.name]: e.target.checked
      }
    });
  };
  handleOnChange = e => {
    this.setState({
      newVolunteer: {
        ...this.state.newVolunteer,
        [e.target.name]: e.target.value
      }
    });
  };
  handleOnChangePhone = e => {
    this.setState({
      newVolunteer: {
        ...this.state.newVolunteer,
        phone: e.target.value
      }
    });
  };
  handleOnChangeInterest = e => {
    this.setState({
      newVolunteer: {
        ...this.state.newVolunteer,
        [e.target.name]: e.target.value
      }
    });
  };
  render() {
    // console.log(this.state.newVolunteer.phone);
    return (
      <div className="container">
        <FormHeader />
        <section className="main">
          <strong className="main-bold">
            <h2>You're in the right place.</h2>
          </strong>

          <form
            className="form"
            onSubmit={this.handleOnsubmit}
            loading={this.addVolunteers}
          >
            <section className="input-wrapper">
              <div>
                <div className="formBox">
                  <label>First Name *</label>
                </div>
                <div className="formBox">
                  <input
                    className="input"
                    type="text"
                    onChange={this.handleOnChange}
                    value={this.state.newVolunteer.fname}
                    name="fname"
                    required
                  />
                </div>
                <div className="formBox">
                  <label>Last Name *</label>
                </div>
                <div className="formBox">
                  <input
                    className="input"
                    type="text"
                    onChange={this.handleOnChange}
                    value={this.state.newVolunteer.lname}
                    name="lname"
                    required
                  />
                </div>
                <div className="formBox">
                  <label> Password *</label>
                  <input
                    className="input small"
                    type="password"
                    onChange={this.handleOnChange}
                    value={this.state.newVolunteer.password}
                    name="password"
                    required
                  />
                </div>
              </div>
              <div className="formBox">
                <label>Email Address *</label>
                <input
                  className="input"
                  type="text"
                  onChange={this.handleOnChange}
                  value={this.state.newVolunteer.email}
                  name="email"
                  required
                />
              </div>
              <div className="formBox">
                <label>Phone *</label>
                <input
                  className="input"
                  type="text"
                  onChange={this.handleOnChange}
                  value={this.state.newVolunteer.phone}
                  name="phone"
                  required
                />
              </div>
              <div>
                <div className="formBox">
                  <label>City *</label>
                  <input
                    className="input small"
                    type="text"
                    onChange={this.handleOnChange}
                    value={this.state.newVolunteer.city}
                    name="city"
                    required
                  />
                </div>
              </div>
              <div className="formBox" id="stateId">
                <label>State/Province *</label>
                <input
                  className="input"
                  id="state"
                  type="text"
                  onChange={this.handleOnChange}
                  value={this.state.newVolunteer.state}
                  name="state"
                  required
                />
              </div>
              <div className="formBox">
                <label>Country *</label>
                <input
                  className="input small"
                  type="text"
                  onChange={this.handleOnChange}
                  value={this.state.newVolunteer.country}
                  name="country"
                  required
                />
              </div>
            </section>
            {/* This is the start of the 2nd part of the form that has the interested boxes and those inputs.  */}
            <div className="interested">
              <label>I am Interested In *</label>
              <div className="interest-wrapper">
                <label className="interest-labels">
                  <input
                    onChange={this.handleToggle}
                    className="chbox"
                    type="checkbox"
                    name="volunteering"
                    checked={this.state.newVolunteer.volunteering}
                  />
                  Volunteering
                </label>
              </div>
              <div className="interest-wrapper">
                <label className="interest-labels">
                  <input
                    onChange={this.handleToggle}
                    className="chbox"
                    type="checkbox"
                    name="donating"
                    checked={this.state.newVolunteer.donating}
                  />
                  Donating
                </label>
              </div>
              <div className="interest-wrapper">
                <label className="interest-labels">
                  <input
                    onChange={this.handleToggle}
                    className="chbox"
                    type="checkbox"
                    name="joinmm"
                    checked={this.state.newVolunteer.joinmm}
                  />
                  Join MM
                </label>
              </div>
              <div className="interest-wrapper">
                <label className="interest-labels">
                  <input
                    onChange={this.handleToggle}
                    className="chbox"
                    type="checkbox"
                    name="mediacoverage"
                    checked={this.state.newVolunteer.mediacoverage}
                  />
                  Media Coverage
                </label>
              </div>
              <div className="interest-wrapper">
                <label className="interest-labels">
                  <input
                    className="somethingElse chbox"
                    type="checkbox"
                    onChange={this.handleToggle}
                    name="somethingelse"
                    value={this.state.newVolunteer.somethingelse}
                  />
                  Something Else
                </label>
              </div>
              <label className="interest-labels">Comments</label>
              <textarea
                className="comment"
                onChange={this.handleOnChange}
                value={this.state.newVolunteer.comment}
                name="comment"
                placeholder="Leave Your Comments"
              />
              <button className="submitb" type="submit">
                Submit
              </button>
            </div>
          </form>
        </section>

        <FormFooter />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    message: state.formReducer.status.message
  };
};

export default connect(mapStateToProps, { addVolunteers })(VolunteerForm);
