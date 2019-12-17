import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBarCard from "./SearchBarCard.js";

import "./SearchBar.scss";

// Scrollbar import
import { Scrollbars }  from "react-custom-scrollbars"; 

const SearchBar = props => {
  const [search, setSearch] = useState("");
  const [chapters, setChapters] = useState([
    {
      id: 1,
      city: "",
      state: "",
      description: "",
      email: ""
    }
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/chapter", chapters)
      .then(res => {
        // console.log("response from SearchBar axios call", res)
        setChapters(res.data);
      })
      .catch(error => {
        console.log("this is catch from SearchBar", error);
      });
  }, []);

  const handleChange = event => {
    setSearch(event.target.value);
  };

  const filterFunction = chapters.filter(chapter =>
    chapter.city.toLowerCase().includes(search.toLowerCase())
  );

  // For scroll bar
    const style = ({style, ...props}) => {
      const thumbStyle = {
        borderRadius: 6,
        width: 376
      }
      return <div style={{ ...style, ...thumbStyle}} {...props} />
    }

    const Scroll = props => (
      <Scrollbars 
      renderThumbHorizontal={style}
      renderThumbVertical={style}
      {...props}
      />
    )
  // For scroll bar

  return (
    <>
      <form className="search-form">
        <a name="chapters"></a>
        <input
          type="text"
          // name="location"
          placeholder="Search Chapters"
          value={search}
          onChange={handleChange}
          style={{ margin: "50px" }}
          className="input"
        />
      </form>
      {/* side-by-side */}
      {/* map here */}
      <Scroll> 
      <div>
         {filterFunction.map(chapter => {
          return (
            <SearchBarCard
              key={chapter.id}
              chapter={chapter}
              history={props.history}
            />
          );
        })}
        </div>
       </Scroll> 
    </>
  );
};

export default SearchBar;
