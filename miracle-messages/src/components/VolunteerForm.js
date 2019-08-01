import React from 'react';
import '../CSS/form.css' 
import { connect } from "react-redux"
import { addVolunteers } from '../actions/FormActions';

class VolunteerForm extends React.Component{
    state = {
        newVolunteer:{
        fname: 'Jen',
        lname: 'Harry',
        email: 'lalal@tmal.com',
        phone: '123456',
        city: 'San Diego',
        state: 'CAAAA',
        country: 'usa',
        comment: 'ejejejdjudjdncj'
    },
        newInterests: {
            volunteering: false,
            donating:  false,
            joinmm: false,
            mediacoverage: false,
            somethingelse: ''
        }
    };
    
  
    handleOnsubmit = e => {    
        console.log(`Form ${this.state.newInterests.volunteering} `)  
        console.log(`Form 222 ${ this.state.newVolunteer.lname}`) 
        e.preventDefault();
        this.props.addVolunteers(this.state.newVolunteer,this.state.newInterests)
        };
        
    handleToggle= e => {
        // e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    } 
    

    handleOnChange = e => {
        this.setState({
           newVolunteer:{[e.target.name]: e.target.value }           
        });console.log("here")
    };

    

    render() {
        return (
            <form className="form"
               onSubmit={this.handleOnsubmit}
               loading={this.addVolunteers}
            >
            <h2>Get Involved</h2>
            <input className="input"
            type="text"
            onChange={this.handleOnChange}
            value={this.state.newVolunteer.fname}
            name="fname"
            placeholder="First Name"
            required
            /><br/>
            <input className="input"
            type="text"
            onChange={this.handleOnChange}
            value={this.state.newVolunteer.lname}
            name="lname"
            placeholder="Last Name"
            required
            /><br/>
            <input className="input"
            type="email"
            onChange={this.handleOnChange}
            value={this.state.newVolunteer.email}
            name="email"
            placeholder="E-mail"
            required
            /><br/>
            <input className="input"
            type="tel"
            onChange={this.handleOnChange}
            value={this.state.newVolunteer.phone}
            name="phone"
            placeholder="Phone Number"
            /><br/>
            <input className="input"
            type="text"
            onChange={this.handleOnChange}
            value={this.state.newVolunteer.city}
            name="city"
            placeholder="City"
            required
            /><br/>
            <input className="input"
            type="text"
            onChange={this.handleOnChange}
            value={this.state.newVolunteer.state}
            name="state"
            placeholder="State"
            required
            /><br/>
            <input className="input"
            type="text"
            onChange={this.handleOnChange} 
            value={this.state.newVolunteer.country}
            name="country"
            placeholder="Country"
            required
            /><br/>
                <h2>I am Interested In</h2>
            <input onChange={this.handleToggle} className='chbox' type='checkbox'
            name='volunteering'
            value='volunteering'

            />Volunteering<br/>
            <input onChange={this.handleToggle} className='chbox' type='checkbox'
            name='donating'
            value='donating'
            />Donating<br/>
             <input onChange={this.handleToggle} className='chbox' type='checkbox'
            name='joining'
            value='joinmm'
            />Join MM<br/>
             <input className='chbox' type='checkbox'
            name='donating'
            value='donating'
            />Donating<br/>
             <input onChange={this.handleToggle} className='chbox' type='checkbox'
            name='mediacoverage'
            value='mediacoverage'
            />Media Coverage<br/>
             <input className='chbox' 
             type='text'
             onChange={this.handleOnChange}
            name='somethingelse'
            value={this.state.newInterests.somethingelse}
            />Something Else<br/>
            
            
            <textarea className="comment"
            onChange={this.handleOnChange}
            value={this.state.comment}
            name="comment"
            placeholder="Leave Your Comments"
            /><br/>          
            <button  className="submitb" type='submit'>Submit</button>
            <button className="clearb"type='reset'>Clear</button>
            </form>
        );
          
    }

}

 const mapStateToProps = state => ({
    //  volunteer: state.volunteerReducer.newVolunteer,
    //  volunteers: state.volunteerReducer.addVolunteers
});

export default connect(mapStateToProps, {addVolunteers})(VolunteerForm);
