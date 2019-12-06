import React from "react"; 

const SearchBarCard = props => {
    console.log(props)
    return(
        <>
        <h3> city: {props.chapter.city} </h3>
        <h3> state: {props.chapter.state} </h3>
        {/* <h3> description: {props.chapter.description} </h3> */}
        <h3> email: {props.chapter.email} </h3> 
        </>
    )
}

export default SearchBarCard