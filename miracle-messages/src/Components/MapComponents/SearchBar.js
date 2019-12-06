import React, {useState, useEffect} from "react"; 
// import { connect } from "react-redux"; 
// import { getChapter } from "../../Actions/SearchBarAction.js"; 
import axios from "axios"; 
import SearchBarCard from "./SearchBarCard.js"; 

const SearchBar = props => {
    const [search, setSearch] = useState("")
    const [chapters, setChapters] = useState([
        {
            id: 1, 
            city: "", 
            state: "", 
            description: "", 
            email: ""
        }
    ])

    // useEffect(res => {
    //     props.getChapter()
    //     console.log(res)
    // }, [])
    
    useEffect(() => {
        axios
    .get("http://localhost:5000/api/chapter", chapters)
    .then(res => {
        console.log("response from SearchBar axios call", res)
        setChapters(res.data)
    })
    .catch(error => {
       console.log("this is catch from SearchBar", error) 
    })
}, [])
 
    const handleChange = event => {
        setSearch(
            event.target.value
        )
    }
     
    // maybe decided to do filter on searchbar component

    const filterFunction = chapters.filter(chapter => 
        chapter.city
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    
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
        {/* map here */}
        { filterFunction.map(chapter => {
           return  <SearchBarCard key={chapter.id} chapter={chapter} history={props.history} />
        })}
        </>
    );
}; 

// const mapStateToProps = state => {
//     return {
//         chapter: state.searchBarReducer.chapters
//     }
// }

// export default connect(mapStateToProps, { getChapter })(SearchBar); 

export  default SearchBar; 