import React from "react";
import "./VolunteerForm.scss";
import { connect } from "react-redux";
import { addVolunteers } from "../../Actions/FormActions";

// import headerImg from "../../Assests/Imgs/header.png";
import logo from "../../Assests/Imgs/MM_Logo.png";

class VolunteerForm extends React.Component {
  state = {
    newVolunteer: {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      country: "",
      comment: ""
    },
    newInterests: {
      volunteering: false,
      donating: false,
      joinmm: false,
      mediacoverage: false,
      somethingelse: ""
    }
  };

  handleOnsubmit = e => {
    e.preventDefault();
    console.log(this.props.message);
    this.props.addVolunteers(this.state);

    this.setState({
      newVolunteer: {
        fname: "",
        lname: "",
        email: "",
        phone: "",
        city: "",
        state: "",
        country: "",
        comment: ""
      },
      newInterests: {
        volunteering: false,
        donating: false,
        joinmm: false,
        mediacoverage: false,
        somethingelse: ""
      }
    });
  };

  handleToggle = e => {
    this.setState({
      newInterests: {
        ...this.state.newInterests,
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

  handleOnChangeInterest = e => {
    this.setState({
      newInterests: {
        ...this.state.newInterests,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div className="container">
        <header>
          <div className="navbar">
            <img src={logo} alt="logo" />
            <nav>
              <a href="https://www.google.com/">ABOUT</a>
              <a href="https://www.google.com/">REUNION SERVICE</a>
              <a href="https://www.google.com/">GET INVOLVED</a>
              <a href="https://www.google.com/">DONATE</a>
            </nav>
          </div>
          <h1>Want to get started, learn more, or stay updated?</h1>
          {/* the below  3 divs are for the header image styling */}
          <div className="overlay">
            <div className="backImg">
              <div className="filter" />
            </div>
          </div>
        </header>
        <section className="main">
          <h2>You're in the right place.</h2>
          <p>{this.props.message}</p>
          <form
            className="form"
            onSubmit={this.handleOnsubmit}
            loading={this.addVolunteers}
          >
            <div />
            <section className="input-wrapper">
              <div className="name-wrapper">
                <div className="formBox">
                  <label>First Name *</label>
                  <input
                    className="input small"
                    type="text"
                    onChange={this.handleOnChange}
                    value={this.state.newVolunteer.fname}
                    name="fname"
                    required
                  />
                </div>
                <div className="formBox">
                  <label>Last Name *</label>
                  <input
                    className="input small"
                    type="text"
                    onChange={this.handleOnChange}
                    value={this.state.newVolunteer.lname}
                    name="lname"
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
              <div className="name-wrapper">
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
                <label>State *</label>
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
            </section>

            <div className="interested">
              <label>I am Interested In *</label>
              <div className="interest-wrapper">
                <input
                  onChange={this.handleToggle}
                  className="chbox"
                  type="checkbox"
                  name="volunteering"
                  checked={this.state.newInterests.volunteering}
                />
                <h7>Volunteering</h7>
              </div>

              <div className="interest-wrapper">
                <input
                  onChange={this.handleToggle}
                  className="chbox"
                  type="checkbox"
                  name="donating"
                  checked={this.state.newInterests.donating}
                />

                <h7>Donating</h7>
              </div>

              <div className="interest-wrapper">
                <input
                  onChange={this.handleToggle}
                  className="chbox"
                  type="checkbox"
                  name="joinmm"
                  checked={this.state.newInterests.joinmm}
                />
                <h7>Join MM</h7>
              </div>

              <div className="interest-wrapper">
                <input
                  onChange={this.handleToggle}
                  className="chbox"
                  type="checkbox"
                  name="mediacoverage"
                  checked={this.state.newInterests.mediacoverage}
                />

                <h7>Media Coverage</h7>
              </div>

              <div className="interest-wrapper">
                <input
                  className="chbox"
                  type="text"
                  onChange={this.handleOnChangeInterest}
                  name="somethingelse"
                  value={this.state.newInterests.somethingelse}
                />
              </div>

              <h7>Something Else</h7>
              <textarea
                className="comment"
                onChange={this.handleOnChange}
                value={this.state.newVolunteer.comment}
                name="comment"
                placeholder="Leave Your Comments"
              />
              <br />
              <button className="submitb" type="submit">
                Submit
              </button>
              <button className="clearb" type="reset">
                Clear
              </button>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    message: state.formReducer.status.message
  };
};

export default connect(
  mapStateToProps,
  { addVolunteers }
)(VolunteerForm);
