import React, { useState } from "react"
import { connect } from "react-redux"
import { addEmail } from "../../../Actions/ForgotPasswordActions.js"

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
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="text"
          value={email}
          placeholder="please enter email"
          onChange={event => setEmail(event.target.value)}
          loading={addEmail}
          required
        />
        <button onClick="submit"> Submit </button>
      </form>
    </>
  )
}

const mapStateTopProps = state => {
  return {
    email: state.volunteersReducer.status.email
  }
}

export default connect(mapStateTopProps, { addEmail })(ForgotPasswordForm)
