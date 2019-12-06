import React from "react"; 

import getChapter from "../../Actions/SearchBarAction.js"; 

const SearchBar = () => {
    

    useEffect(() => {
        getChapter
    }, [])

    const handleChange = event => {
        setState({
            ...state, 
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
    }

    return(
        <>
        <form> 
            <input 

            />
        </form>
        </>
    );
}; 

