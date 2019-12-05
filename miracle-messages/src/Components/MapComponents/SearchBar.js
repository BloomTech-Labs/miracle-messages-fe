import React, {useState, useEffect} from "react"; 
import { connect } from "react-redux"; 
import { getChapter, filterChapters } from "../../Actions/SearchBarAction.js"; 
import Chapters from "../dashboard/views/Chapters/Chapters.js";

const SearchBar = props => {
    const [search, setSearch] = useState("")

    useEffect(() => {
       props.getChapter()
    }, [])

    const handleChange = event => {
        setSearch(
             event.target.value
        )
    }

    //    const filterChapters = getChapter.filter(chapter => 
    //        chapter.location
    //        .toLowerCase()
    //        .includes(search.toLowerCase())     
    //    )

    
    console.log('chapter test', props.chapter)

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
    );
}; 

const mapStateToProps = state => {
    return {
        chapter: state.searchBarReducer.chapter
    }
}

export default connect(mapStateToProps, { getChapter, filterChapters })(SearchBar); 


