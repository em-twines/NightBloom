import React from 'react'

import Search from "../components/Search";


export default function Title() {
  return (
    <div className = 'header-box'>
        
        <div className = 'header'>NightBloom</div>
        <div className = 'subtext'>
            <span>Discover your imagination </span>
            — 
            <span> Midjourney search engine</span>
        </div>

        <Search/>
    </div>
  )
}
