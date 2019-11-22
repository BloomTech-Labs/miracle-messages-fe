import React, { Component } from "react";
import axios from "axios";
import "./UserLogin.js";
import logo from "../../Assets/Imgs/MM_Logo.png";
import "../Forms/VolunteerForm.scss";
import FormFooter from "../Header-Footer/FormFooter";
// import { axiosWithAuth } from "../../Actions/AxiosWithAuth";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }

  dismissError = () => {
    this.setState({ error: "" });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (!this.state.email) {
      return this.setState({ error: "email is required" });
    }

    if (!this.state.password) {
      return this.setState({ error: "Password is required" });
    }

    //return this.setState({ error: "" })

    axios
      .post("http://localhost:5000/api/volunteer/login", this.state)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        this.props.history.push("/");
      })
      .catch(e => console.log(e));
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  render() {
    return (
      //did not import Form Header because I needed to update the h1 tag on line 94
      <div className="container">
        <header>
          <div className="navbar">
            <div className="logonavbar">
              <img src={logo} alt="logo" />
            </div>
            <div className="tabsnavbar">
              <nav>
                <a
                  href="https://miraclemessages.org/who"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>ABOUT</div>
                </a>
                <a
                  href="https://miraclemessages.org/partner"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>REUNION SERVICE</div>
                </a>
                <a href="localhost:3000/form">
                  <div>GET INVOLVED</div>
                  {/* this anchor tag should have a drop down to the register page, login form, forgot password page */}
                </a>
                <a
                  href="https://www.classy.org/give/231839/#!/donation/checkout"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>DONATE</div>
                </a>
              </nav>
            </div>
          </div>
          <h1>Already apart of the Miracle Messages Community?</h1>
          {/* the below  3 divs are for the header image styling */}
          <div className="overlay">
            <div className="backImg">
              <div className="filter" />
            </div>
          </div>
        </header>
        <section className="main">
          <strong className="main-bold">
            <h2>Login Here</h2>
          </strong>
          <div className="Login">
            <form onSubmit={this.handleSubmit}>
              {this.state.error && (
                <h3 data-test="error" onClick={this.dismissError}>
                  <button onClick={this.dismissError}>✖</button>
                  {this.state.error}
                </h3>
              )}

              <section className="input-wrapper">
                <div className="formBox">
                  <label className="interest-labels">Email*</label>
                  <input
                    className="formBox"
                    type="email"
                    data-test="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="formBox">
                  <label className="interest-labels">Password*</label>
                  <input
                    className="formBox"
                    type="password"
                    data-test="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <button className="submitb" type="submit" data-test="submit">
                  Login
                </button>
              </section>
            </form>
          </div>
        </section>
        <FormFooter />
      </div>
    );
  }
}

export default LoginPage;
