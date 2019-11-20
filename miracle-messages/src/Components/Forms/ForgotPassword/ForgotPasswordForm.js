import React, { useState } from "react"
import { connect } from "react-redux"
import { addEmail } from "../../../Actions/ForgotPasswordActions.js"

const ForgotPasswordForm = props => {
  const [addExistingEmail, setAddExistingEmail] = useState({
    email: ""
  })

  const handleSubmit = event => {
    event.preventDefault()
    props.addEmail({ type: props.email })
    setAddExistingEmail({
      email: ""
    })
  }

  const handleChange = event => {
    setAddExistingEmail({
      ...addExistingEmail,
      [event.target.name]: event.target.value
    })
    console.log(event.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="text"
          placeholder="please enter email"
          onChange={handleChange}
          loading={addEmail}
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
