import React from "react"; 
import { connect } from "react-redux"; 
import { addEmail } from "../../Actions/ForgotPasswordActions.js"; 


const ForgotPasswordForm = (props) => {
   
    const [addExistingEmail, setAddExistingEmail] = useState({
        email: ""
    })

    handleSubmit = event => {
        event.preventDefault()
        props.addEmail({type: payload})
        setAddExistingEmail({
            email: ""
        })
    }

    handleChange = event => {
        setAddExistingEmail({
            ...addExistingEmail, 
            [event.target.name]: event.target.value
        })
    }

        return(
            <>
            <form onSubmit={handleSubmit}>
                <input 
                name="email"
                type="text"
                placeholder="please enter email"
                onChange={handleChange}
                loading={addEmail}
                />
            </form>
            </>
        )
}

const mapStateTopProps = state => {
    return {
        email: state.volunteersReducer.status.email
    }
}

export default connect(mapStateTopProps, {addEmail})(ForgotPasswordForm)