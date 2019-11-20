import React from "react"; 
// import { connect } from "react-redux"; 


class ForgotPasswordForm extends React.Component  {
    constructor() {
        super()
        this.state = {
            resetEmail: ""
        }  
    }

    render() {
        return(
            <>
            <form>
                <input 
                name="email"
                type="text"
    
                onChange={}
                />
            </form>
            </>
        )
    }
}

export default ForgotPasswordForm; 