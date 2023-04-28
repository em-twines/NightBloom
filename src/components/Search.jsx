import React from "react";
import SearchIcon from "../media/icon.svg";

export default function Search() {
  return (
    <div className="search">
      <form className = 'search-form'>
        <div className = 'padding-container'>
          <div className = 'search-background'></div>
        </div>
        <input type="search" placeholder="Keyword search"></input>
      </form>
    </div>
  );
}
