import React from "react";

import NavBar from "../components/NavBar";
import MainGrid from "../components/MainGrid";
import Title from "../components/Title";
import IconsBar from "../components/IconsBar";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <div className="home-page">
        <Title />
        <IconsBar />
        <MainGrid />
      </div>
    </div>
  );
}
