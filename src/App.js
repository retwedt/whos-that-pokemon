import { Button, TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import axios from "axios";
import React, { useState } from "react";

import logo from "./logo.svg";
import "./App.css";

export default function App() {
  /* Local State */

  const [searchText, setSearchText] = useState("");
  // const [searchResults, setSearchResults] = useState([]);

  /* Event Listeners */

  /**
   *
   * @param {*} pokemonName
   */
  const search = async (pokemonName) => {
    console.log(`Search: ${pokemonName}`);

    try {
      const results = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );

      console.log(results);
    } catch (err) {
      console.error(err);
    }
  };

  /**
   *
   * @param {*} event
   */
  const handleSearchOnEnter = async (event) => {
    if (event && event.key && event.key === "Enter") {
      await search(searchText);
    }
  };

  /**
   *
   * @param {*} event
   */
  const handleSearchButton = async (event) => {
    await search(searchText);
  };

  /**
   *
   * @param {*} event
   */
  const handleSearchTextUpdate = (event) => {
    if (event && event.target && event.target.value) {
      const newSearchText = event.target.value;
      setSearchText(newSearchText);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>Who's that Pokemon?!</p>
        </div>
        <TextField
          value={searchText}
          placeholder={"Search"}
          onChange={handleSearchTextUpdate}
          onKeyDown={handleSearchOnEnter}
          InputProps={{
            endAdornment: <Search />,
          }}
        />
        <Button onClick={handleSearchButton}>Search</Button>
      </header>
    </div>
  );
}
