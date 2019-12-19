import React from "react";
import "./SearchBar.scss";
import { Card } from "reactstrap";

const SearchBarCard = props => {
  // console.log(props)
  return (
    <>
    <div className="search-card">
      <div className="img-center">
        <img className="width" src={props.chapter.chapter_img_url} />
      </div>

      <h3 className="center"> city: </h3>
      <p className="center"> {props.chapter.city} </p>

      <h3 className="center"> state: </h3>
      <p className="center"> {props.chapter.state} </p>

      <h3 className="center"> email: </h3>
      <p className="center"> {props.chapter.email} </p>
    </div>
    </>
  );
};

export default SearchBarCard;
