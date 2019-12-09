import React from "react";
import "../../CSS/SearchBar.css";  

const SearchBarCard = props => {
    console.log(props)
    return(
        <div className="card">
        <div className="center"> {props.chapter.chapter_img_url} </div> 
        <h3 className="center"> city: <p> {props.chapter.city} </p>  </h3>
        <h3 className="center"> state: <p> {props.chapter.state} </p> </h3>
        <h3 className="center"> email: <p> {props.chapter.email} </p> </h3> 
        </div>
    )
}

export default SearchBarCard