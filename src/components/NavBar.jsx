import React from 'react'

import headline from '../media/headline.svg';

export default function NavBar() {
  return (
    <div className = "navBar">
        {/* <h1 className = "logo-night">Night</h1><span><h1 className = "logo-bloom">Bloom</h1></span> */}
        <img src={headline} alt = "NightBloom Logo"/>
    </div>
  )
}
