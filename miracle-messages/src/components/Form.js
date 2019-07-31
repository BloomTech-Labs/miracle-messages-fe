import React from 'react';
import axios from 'axios';
import { connect } from "react-redux"
import { addVolunteers, formReducer } from '../actions/FormActions';

class Form extends React.Component{
    state = {
        fname : '',
        lname : '',
        email : '',
        phone : '',
        city : '',
        state : '',
        country : '',
        comment : ''
    };

    handleOnsubmit = e => { 
       
        e.preventDefault();

         this.props.addVolunteers(this.state)
         this.setState({
             fname: '',
             lname: '',
             email: ''
         }); console.log(this.state)
    }

    handleOnChange = e => {
        this.setState({
            ...this.state, [e.target.name]: e.target.value
        });
    };

    render() {
        return (
            <form
            size="large"
            onSubmit={this.addVolunteers}
            >
            <input
            type="text"
            onChange={this.handleOnChange}
            value={this.state.fname}
            name="fname"
            placeholder="First Name"
            required
            /><br/>
            <input
            type="text"
            onChange={this.handleOnChange}
            value={this.state.lname}
            name="lname"
            placeholder="Last Name"
            required
            /><br/>
            <input
            type="email"
            onChange={this.handleOnChange}
            value={this.state.email}
            name="email"
            placeholder="E-mail"
            required
            /><br/>
            <input
            type="tel"
            onChange={this.handleOnChange}
            value={this.state.phone}
            name="phone"
            placeholder="Phone Number"
            /><br/>
            <input
            type="text"
            onChange={this.handleOnChange}
            value={this.state.city}
            name="city"
            placeholder="City"
            required
            /><br/>
            <input
            type="text"
            onChange={this.handleOnChange}
            value={this.state.state}
            name="state"
            placeholder="State"
            required
            /><br/>
            <input 
            type="text"
            onChange={this.handleOnChange} 
            value={this.state.country}
            name="country"
            placeholder="Country"
            required
            /><br/>
            <textarea
            onChange={this.handleOnChange}
            value={this.state.comment}
            name="comment"
            placeholder="Leave Your Comments"
            /><br/>          
            <button type='submit'>Submit</button>
            <button type='clear'>Clear</button>
            </form>
        )

    }
}

export default Form

