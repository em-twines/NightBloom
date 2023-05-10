import React from "react";

import hot from "../media/hot.svg";
import newIcon from '../media/new.svg';
import top from '../media/star.svg';


export default function IconsBar() {
  return (
    <div className="icons-container">
      <div className="icons-left-container">
        <div className="icons-left icons-button">
          <img src={hot}/>
          <button className = 'icons-button-span'> Hot</button>
        </div>
        <div className="icons-left icons-button">
          <img src={newIcon}/>
          <button className = 'icons-button-span'> New</button>
        </div>
        <div className="icons-left icons-button">
          <img src={top}/>
          <button className = 'icons-button-span'> Top</button>
        </div>
      </div>
      <select className="icons-right icons-select">
        <option value="">All</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
      </select>
    </div>
  );
}
