import React, {useState, useEffect} from "react"; 
import { connect } from "react-redux"; 
import { getChapter } from "../../Actions/SearchBarAction.js"; 

const SearchBar = props => {
    const [search, setSearch] = useState("")

    useEffect(res => {
       props.getChapter()
       console.log(res)
    }, [])

    // console.log(getChapter())

    const handleChange = event => {
        console.log(event)
        setSearch(
             event.target.value
        )
    }
     
    // maybe decided to do filter on searchbar component

    return(
        <>
        <form> 
            <input 
            type="text"
            name="location"
            placeholder="Search Chapters"
            value={search}
            onChange={handleChange}
            style={{margin: "100px"}}
            />
        </form>
        </>
        // map here
    );
}; 

const mapStateToProps = state => {
    return {
        chapter: state.searchBarReducer.chapters
    }
}

export default connect(mapStateToProps, { getChapter })(SearchBar); 


