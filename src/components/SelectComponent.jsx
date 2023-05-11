import React, { useState, useEffect } from "react";
import triangle from "../media/triangle.svg";

export default function SelectComponent({ placeHolder, options }) {
  const [showMenu, setShowMenu] = useState(false);
  
  useEffect(() => {
    const handler = () => setShowMenu(false);
    
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });

  const handleInputClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
    return placeHolder;
  };





  return (
      <div className="dropdown-container icons-right">
        <div className="dropdown-input icons-select" onClick={handleInputClick}>
          <div className="dropdown-selected-value">{getDisplay()}</div>
          <div className="dropdown-tools">
            <div className="dropdown-tool">
              <img src={triangle} className = 'icons-triangle' />
            </div>
          </div>
        </div>

        {showMenu && (
          <div className="dropdown-menu">
            {options.map((option) => (
              <div key={option.value} className="dropdown-item">
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
  );
}
