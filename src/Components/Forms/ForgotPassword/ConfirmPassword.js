import React from "react"
import FormFooter from "../../Header-Footer/FormFooter"
import FormHeader from "../../Header-Footer/FormHeader"

class ConfirmPassword extends React.Component {
  state = {
    password: "",
    confirmPassword: ""
  }

  dismissError = () => {
    this.setState({ error: "" })
  }

  handleSubmit = event => {
    event.preventDefault()

    if (!this.state.password) {
      return this.setState({ error: "Password is required" })
    }

    return this.setState({ error: "" })
  }

  handlePassChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <FormHeader />
        <section className="main">
          <strong className="main-bold">
            <h2>Please enter your new password.</h2>
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
                  <label className="interest-labels">Password*</label>
                  <input
                    className="formBox"
                    name="password"
                    type="password"
                    data-test="password"
                    value={this.state.password}
                    onChange={this.handlePassChange}
                    required
                  />
                </div>
                <div className="formBox">
                  <label className="interest-labels">Confirm Password*</label>
                  <input
                    className="formBox"
                    name="confirmPassword"
                    type="password"
                    data-test="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.handlePassChange}
                    required
                  />
                </div>
                <input
                  className="submitb"
                  type="submit"
                  value="Update"
                  data-test="submit"
                />
              </section>
            </form>
          </div>
        </section>
        <FormFooter />
      </div>
    )
  }
}

export default ConfirmPassword
