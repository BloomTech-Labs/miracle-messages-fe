import React from 'react';
import './LoginForm.css';
import { fetchLogin } from '../../Actions/AdminPageActions';
import { connect } from 'react-redux';
import { loginReducer } from '../../Reducers/LoginReducer';
import  Button  from '@material-ui/core/Button';
// import Avatar from '@material-ui/core/Avatar';

import logo from "../../Assests/Imgs/MM_Logo.png";
import header from "../../Assests/Imgs/header.png";
class LoginForm extends React.Component {
    state = {
        username: "",
        password: ""
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.fetchLogin(this.state);

        this.setState({
          username: "",
          password: ""
        });
    };

    handleOnChange = e => {
        this.setState({ [e.target.name]: e.target.value });
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
                </nav>
              </div>
              <h1>Log In To Your Account</h1>
              <div className="backImg">
                <div className="overlay">
                  <div className="backImg">
                    <div className="filter" />
                  </div>
                </div>
              </div>
            </header>
            <section className="main">
              <form 
              className="login_form"
              onSubmit={this.handleSubmit}
            >
              <label className="label">User Name</label>
                <input
                  className="input"
                  onChange={this.handleOnChange}
                  type="text"
                  name="username"
                  // placeholder="User Name"
                  value={this.state.user}
                />
                <label className="label">Password</label>
                <input
                  className="input"
                  onChange={this.handleOnChange}
                  type="password"
                  name="password"
                  value={this.state.password}
                />
                 <button  className="submitb"type="submit">Submit</button>         
            </form> 
            </section>
            <footer>
              <div className="coppyright">
                <p>&copy; 2019 Miracle Mesagges</p>
              </div>
            </footer>
              
          </div>
           
        );
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.loginReducer.isLoggedIn,
    isLoggedOut: state.loginReducer.isLoggedOut,
    isFetching: state.loginReducer.isFetching,
    // errors: state.loginReducer.errors
});


export default connect(
    mapStateToProps,
    { fetchLogin, loginReducer }
)(LoginForm);