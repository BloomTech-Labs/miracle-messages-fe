import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBarCard from "./SearchBarCard.js";
import SideBar from "./Sidebar.js"; 
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

  return (
    <>
    <SideBar className="sidebar-search"/> 
    <div> 
      <form className="search-form">
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

      {/* map here */}
       <aside>
      <div>
        <Scrollbars style={{height: "800px", width: "800px"}}> 
         {filterFunction.map(chapter => {
           return (
            <SearchBarCard
              key={chapter.id}
              chapter={chapter}
              history={props.history}
            />
          );
        })}
        </Scrollbars>
        </div>
        </aside>
        </div>
    </>
  );
};

export default SearchBar;
