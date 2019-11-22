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
// import logo from "../../Assets/Imgs/MM_Logo.png";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  }

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
      <Container className="LoginForm">
        <h2>Sign In</h2>
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
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.loginReducer.isLoggedIn,
  isLoggedOut: state.loginReducer.isLoggedOut,
  isFetching: state.loginReducer.isFetching
})

export default connect(mapStateToProps, { fetchLogin, loginReducer })(LoginForm)
