import React from "react";

import hot from "../media/hot.svg";
import newIcon from "../media/new.svg";
import top from "../media/star.svg";
import SelectComponent from "./SelectComponent";


export default function IconsBar() {

  const options = [
    { value: "first", label: "first" },
    { value: "second", label: "second" },
  ];


  return (
    <div className="icons-container">
      <div className="icons-left-container">
        <div className="icons-left icons-button">
          <img src={hot} />
          <button className="icons-button-span">Hot</button>
        </div>
        <div className="icons-left icons-button">
          <img src={newIcon} />
          <button className="icons-button-span">New</button>
        </div>
        <div className="icons-left icons-button">
          <img src={top} />
          <button className="icons-button-span">Top</button>
        </div>
      </div>

      <SelectComponent placeHolder="All" options={options} />
      {/* <select className="icons-right icons-select">
        <option value="">All</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
      </select> */}
    </div>
  );
}
