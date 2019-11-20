import React from "react"; 
import { connect } from "react-redux"; 
import { addEmail } from "../../Actions/ForgotPasswordActions.js"; 


const ForgotPasswordForm = () => {
   
    const [addExistingEmail, setAddExistingEmail] = useState({
        email: ""
    })

    handleSubmit = event => {
        event.preventDefault()
        
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
                />
            </form>
            </>
        )
}

export default ForgotPasswordForm; 