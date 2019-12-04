import React, {useState, useEffect} from "react"; 
import { connect } from "react-redux"; 

import getChapter from "../../Actions/SearchBarAction.js"; 

const SearchBar = props => {
    const [search, setSearch] = useState("")

    useEffect(() => {
        getChapter()
    }, [])

    const handleChange = event => {
        setSearch(
             event.target.value
        )
    }

    const handleSubmit = event => {
        event.preventDefault()
    }

    // filter to filter through chapters below 
        const filterChapters = getChapter.filter(chapter => 
            chapter.location
            .toLowerCase()
            .includes(search.toLowerCase())     
        )
    // filter to filter through chapter above 

    return(
        <>
        <form onSubmit={handleSubmit}> 
            <input 
            type="text"
            name="location"
            placeholder="Search Chapters"
            value={search}
            onChange={handleChange}
            />
        </form>
        </>
    );
}; 

const mapStateToProps = state => {
    return{
        chapter: state.searchBarReducer.chapter
    }
}

export default connect(mapStateToProps, {getChapter})(SearchBar)


