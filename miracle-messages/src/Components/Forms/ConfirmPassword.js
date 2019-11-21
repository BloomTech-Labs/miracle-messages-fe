import React from "react"
import FormFooter from "../../FormFooter"
import FormHeader from "../../FormHeader"

class ConfirmPassword extends React.Component {
  constructor() {
    super()
    this.state = {
      password: ""
    }

    this.handlePassChange = this.handlePassChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.dismissError = this.dismissError.bind(this)
  }

  dismissError() {
    this.setState({ error: "" })
  }

  handleSubmit(evt) {
    evt.preventDefault()

    if (!this.state.password) {
      return this.setState({ error: "Password is required" })
    }

    return this.setState({ error: "" })
  }

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <FormHeader />
        <section className="main">
          <strong className="main-bold">
            <h2>Please enter your new password</h2>
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
                    type="password"
                    data-test="password"
                    value={this.state.password}
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
