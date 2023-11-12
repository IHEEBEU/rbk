import React from "react";

const SearchBar=()=>{
    return (
    <div className="search--div">
        <input type="text" placeholder="Search for a task" className="search--bar"></input>
        <input type="submit" value={"Search"} className="search--btt"></input>
    </div>
    )
}

export default SearchBar;