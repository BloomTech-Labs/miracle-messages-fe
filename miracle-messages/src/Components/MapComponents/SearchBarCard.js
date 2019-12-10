import React from "react";
import "../../CSS/SearchBar.css";  

const SearchBarCard = props => {
    console.log(props)
    return(
        <div className="card">
        <div classNam="img-center"> 
        <img className="width" src={props.chapter.chapter_img_url} />
        </div>
        
        <h3 className="center"> city: </h3> 
        <p className="center"> {props.chapter.city} </p> 

        <h3 className="center"> state: </h3> 
        <p className="center"> {props.chapter.state} </p> 

        <h3 className="center"> email: </h3>  
        <p className="center"> {props.chapter.email} </p> 
        </div>
    )
}

export default SearchBarCard; 