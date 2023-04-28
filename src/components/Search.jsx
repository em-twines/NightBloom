import {React, useRef} from "react";


export default function Search() {

  const ref = useRef(null);

  const handleClick = () => {
    ref.current.focus();
  };

  return (
    <div className="search">
      <form className = 'search-form' onClick = {handleClick} >
        <div className = 'padding-container'>
          <div className = 'search-background'></div>
        </div>
        <input type="search" placeholder="Keyword search" ref={ref}></input>
      </form>
    </div>
  );
}
