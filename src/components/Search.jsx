import React from "react";
import SearchIcon from "../media/icon.svg";

export default function Search() {
  return (
    <div className="search">
      <form>
        <input type="search" placeholder="Keyword search"></input>
      </form>
    </div>
  );
}
