// SearchBar.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPokemon } from "../../redux/actions";
import style from "../SearchBar/SearchBar.module.css"

const SearchBar = () => {
  const [state, setState] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchPokemon(state));
    setState("")
  };

  return (
    <div className={style.SearchBar}>
      <input
        type="text"
        placeholder="Buscar pokemon por nombre"
        value={state}
        onChange={(event) => setState(event.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      
    </div>
  );
};

export default SearchBar;
