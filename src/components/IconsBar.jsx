import React from "react";

export default function IconsBar() {
  return (
    <div className="icons-container">
      <button className="icons-left icons-button">Hot</button>
      <select className="icons-right icons-select">
        <option value="">All</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
      </select>
    </div>
  );
}
