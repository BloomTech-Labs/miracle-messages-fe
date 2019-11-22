import React, { useState } from "react"
import { connect } from "react-redux"
import { addEmail } from "../../../Actions/ForgotPasswordActions.js"
import FormHeader from "../../Header-Footer/FormHeader"
import FormFooter from "../../Header-Footer/FormFooter"

const ForgotPasswordForm = props => {
  const [email, setEmail] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    props.addEmail(email)
    setEmail({
      email: ""
    })
  }

  return (
    <div className="container">
      <FormHeader />
      <section className="main">
        <strong className="main-bold">
          <h2>Forgot Your Password? </h2>
        </strong>

        <form className="form" onSubmit={handleSubmit}>
          <label>Email*</label>
          <div className="formBox">
            <input
              className="input"
              name="email"
              type="text"
              value={email}
              onChange={event => setEmail(event.target.value)}
              loading={addEmail}
              required
            />
          </div>
          <button className="submitb" onClick="submit">
            Submit
          </button>
        </form>
        <FormFooter />
      </section>
    </div>
  )
}

const mapStateTopProps = state => {
  return {
    email: state.volunteersReducer.status
  }
}

export default connect(mapStateTopProps, { addEmail })(ForgotPasswordForm)
