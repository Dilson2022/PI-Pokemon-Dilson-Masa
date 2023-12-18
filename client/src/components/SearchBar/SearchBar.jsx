// SearchBar.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPokemon } from "../../redux/actions";

const SearchBar = () => {
  const [state, setState] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchPokemon(state));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokemon by name"
        value={state}
        onChange={(event) => setState(event.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;













// import  {useState} from "react"
// import {useDispatch} from "react-redux"
// import {searchPokemon} from "../../redux/actions"

// const SearchBar = () => {

//     const [state, setState] = useState("")
//     const dispatch = useDispatch();

//     const handleChange = (event) => {
//         setState(event.target.value)
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         dispatch(searchPokemon(state))
//     }

//     return(
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input onChange={handleChange} type="text" />
//             <input type="submit" />
//             </form>
//         </div>
//     )
// }

// export default SearchBar ;