import React from "react"
import "./LoginForm.css"
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap"

import { fetchLogin } from "../../Actions/AdminPageActions"
import { connect } from "react-redux"
import { loginReducer } from "../../Reducers/LoginReducer"

//Octa Imports and Code

// import { useOktaAuth } from '@okta/okta-react';

// const Home = () => { 
//   const { authState, authService } = useOktaAuth();

//   const login = async () => { 
//     // Redirect to '/' after login
//     authService.login('./admin/chapters');
//   }

// const logout = async () => { 
//   // Redirect to '/' after logout
//   authService.logout('/');
// }

// if (authState.isPending) { 
//   return <div>Loading...</div>;
// }

// return authState.isAuthenticated ?
//     <button onClick={logout}>Logout</button> :
//     <button onClick={login}>Login</button>;
// };

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  }
  //Remove handleSubmit after activiting Octa?
  handleSubmit = e => {
    e.preventDefault()
    this.props.fetchLogin(this.state).then(() => {
      this.props.history.push("./admin/chapters")
    })

    this.setState({
      username: "",
      password: ""
    })
  }

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10%" }}
      >
        <Container className="LoginForm">
          <h2>Admin login</h2>
          <Form className="form" onSubmit={this.handleSubmit}>
            <Col>
              <FormGroup>
                <Label>User Name</Label>
                <Input
                  type="text"
                  name="username"
                  onChange={this.handleOnChange}
                  value={this.state.username}
                  placeholder="User Name"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="********"
                  onChange={this.handleOnChange}
                  value={this.state.password}
                />
              </FormGroup>
            </Col>
            <Button
              style={{
                width: "100px",
                background: "#5FC484",
                borderRadius: "15px;"
              }}
              color="primary"
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </Form>
          <footer className="footer text-center">
            © 2019. Miracle Messages{" "}
            <a href="https://miraclemessages.org/">Miracle Messages</a>.
          </footer>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.loginReducer.isLoggedIn,
  isLoggedOut: state.loginReducer.isLoggedOut,
  isFetching: state.loginReducer.isFetching
})

export default connect(mapStateToProps, { fetchLogin, loginReducer })(LoginForm)
