import React, { useState } from "react";
import "./LoginForm.css";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

import { fetchLogin } from "../../Actions/AdminPageActions";
import { connect } from "react-redux";
import { loginReducer } from "../../Reducers/LoginReducer";

// Octa Imports and Code

import { useOktaAuth } from '@okta/okta-react';

const LoginForm = props => {
  const [user, updateUser] = useState({
    username: '',
    password: ''
  })
  // state = {
  //   username: "",
  //   password: ""
  // }
  //Remove handleSubmit after activiting Octa?
  // handleSubmit = e => {
  //   e.preventDefault()
  //   this.props.fetchLogin(this.state).then(() => {
  //     this.props.history.push("/admin/chapters")
  //   })

    // this.setState({
    //   username: "",
    //   password: ""
    // })
  // }

  const handleOnChange = e => {
    updateUser({
      [e.target.name]: e.target.value
    })
  }

  const { authState, authService } = useOktaAuth();

  const login = async (user) => { 
    // Redirect to '/' after login
    authService.login('/admin/chapters');
  }

  const logout = async () => { 
    // Redirect to '/' after logout
    authService.logout('/');
  }

  if (authState.isPending) { 
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "10%" }}
    >
      <Container className="LoginForm">
        <h2>Admin login</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>User Name</Label>
              <Input
                type="text"
                name="username"
                onChange={handleOnChange}
                value={user.username}
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
                onChange={handleOnChange}
                value={user.password}
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
            onClick={login}
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

const mapStateToProps = state => ({
  isLoggedIn: state.loginReducer.isLoggedIn,
  isLoggedOut: state.loginReducer.isLoggedOut,
  isFetching: state.loginReducer.isFetching
})

export default connect(mapStateToProps, { fetchLogin, loginReducer })(LoginForm)
