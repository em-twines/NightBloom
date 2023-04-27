import React from "react";

import NavBar from "../components/NavBar";
import Search from "../components/Search";
import MainGrid from "../components/MainGrid";

export default function HomePage() {
  return (
    <div>
      <NavBar/>
      <div className="home-page">
        <Search/>
        <MainGrid/>
      </div>
    </div>
  );
}
