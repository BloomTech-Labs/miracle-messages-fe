import React from "react";
import "../../CSS/SearchBar.css";  

const SearchBarCard = props => {
    console.log(props)
    return(
        <div className="card">
        <h3 className="center"> city: {props.chapter.city} </h3>
        <h3 className="center"> state: {props.chapter.state} </h3>
        <h3 className="center"> email: {props.chapter.email} </h3> 
        </div>
    )
}

export default SearchBarCard