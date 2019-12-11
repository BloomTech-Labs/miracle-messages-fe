import React, { Component } from "react"
import axios from "axios"
import "./UserLogin.js"
import logo from "../../Assets/Imgs/MM_Logo.png"
import "../Forms/VolunteerForm.scss"
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap"
import { Link } from "react-router-dom"
// import FormFooter from "../Header-Footer/FormFooter"

// import React, { Component } from "react";
// import axios from "axios";
// import "./UserLogin.js";
// import logo from "../../Assets/Imgs/MM_Logo.png";
// import "../Forms/VolunteerForm.scss";
// import FormFooter from "../Header-Footer/FormFooter";
// import { BrowserRouter as Router, Route,  Link } from "react-router-dom"

// import { axiosWithAuth } from "../../Actions/AxiosWithAuth";

class LoginPage extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: "",
      error: ""
    }
  }

  dismissError = () => {
    this.setState({ error: "" })
  }

  handleSubmit = evt => {
    evt.preventDefault()

    if (!this.state.email) {
      return this.setState({ error: "email is required" })
    }

    if (!this.state.password) {
      return this.setState({ error: "Password is required" })
    }

    //return this.setState({ error: "" })

    axios
      .post("http://localhost:5000/api/volunteer/login", this.state)
      .then(res => {
        // console.log(res);
        localStorage.setItem("token", res.data.token)
        this.props.history.push("/")
      })
      .catch(e => console.log(e))
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {
    return (
      <Container className="LoginForm">
        <h2>Volunteer Login</h2>
        <div className="Login">
          <Form className="form" onSubmit={this.handleSubmit}>
            {this.state.error && (
              <h3 data-test="error" onClick={this.dismissError}>
                <button onClick={this.dismissError}>✖</button>
                {this.state.error}
              </h3>
            )}
            <Col>
              <FormGroup>
                <Label>Email*</Label>
                <Input
                  className="formBox"
                  type="email"
                  data-test="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Password</Label>
                <Input
                  className="formBox"
                  type="password"
                  data-test="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
              </FormGroup>
            </Col>

            <Button
              style={{
                width: "100px",
                background: "#5FC484",
                borderRadius: "15px;"
              }}
              type="submit"
              data-test="submit"
            >
              Login
            </Button>
          </Form>
          <footer className="footer text-center">
            Forgot Password?
            <Link to="/user/forgotpassword1">Click Here</Link>
          </footer>
        </div>
      </Container>
    )

    //           <section className="input-wrapper">
    //             <div className="formBox">
    //               <label className="interest-labels">Email*</label>
    //               <input
    //                 className="formBox"
    //                 type="email"
    //                 data-test="email"
    //                 name="email"
    //                 value={this.state.email}
    //                 onChange={this.handleChange}
    //                 required
    //               />
    //             </div>
    //             <div className="formBox">
    //               <label className="interest-labels">Password*</label>
    //               <input
    //                 className="formBox"
    //                 type="password"
    //                 data-test="password"
    //                 name="password"
    //                 value={this.state.password}
    //                 onChange={this.handleChange}
    //                 required
    //               />
    //             </div>
    //             <button className="submitb" type="submit" data-test="submit">
    //               Login
    //             </button>
    //           </section>

    //           <Link to="/user/forgotpassword1">
    //             Rest Password
    //           </Link>

    //         </form>
    //       </div>
    //     </section>
    //     <FormFooter />
    //   </div>
    // );
  }
}

export default LoginPage
