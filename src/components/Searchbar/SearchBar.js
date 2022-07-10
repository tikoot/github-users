import React from "react";
import './Searchbar.css';

const SearchBar = (props) => {

   const inputChange = (event) => {
        props.setUsername(event.target.value);
    }
   
    return(
		<div className="input_wrapper">
            <input className="search_input" placeholder="search github user" type='text' onChange={inputChange}  value={props.username}/>
        </div>
	);
}

export default SearchBar;

