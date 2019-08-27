import React from 'react';
import { fetchLogin } from '../Actions/AdminPageActions';
import { connect } from 'react-redux';
import { loginReducer } from '../Reducers/LoginReducer';
import  Button  from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

class LoginForm extends React.Component {
    state = {
        username: "",
        password: ""
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.fetchLogin(this.state)
    };

    handleOnChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <form 
              className="login_form"
              onSubmit={this.handleSubmit}
            //   loading={this.props.isFetching}
            >
                <input
                  className="input"
                  onChange={this.handleOnChange}
                  type="text"
                  name="username"
                  placeholder="User Name"
                  value={this.state.user}
                />
                <input
                  className="input"
                  onChange={this.handleOnChange}
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={this.state.password}
                />
                <Button color="secondary"variant="contained" size="large"className="submitb"type="submit">Submit</Button>         
            </form>
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
    { fetchLogin }
)(LoginForm);