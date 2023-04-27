import React from 'react'

import Search from "../components/Search";


export default function Title() {
  return (
    <div className = 'header-box'>
        
        <div className = 'header'>NightBloom</div>
        <div className = 'subtext'>Discover your imagination -- Midjourney search engine </div>

        <Search/>
    </div>
  )
}
