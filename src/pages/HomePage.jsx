import React from 'react'

import NavBar from '../components/NavBar'
import Search from '../components/Search'
import MainGrid from '../components/MainGrid'

export default function HomePage() {
  return (
    <div>
        <NavBar/>
        <Search/>
        <MainGrid/>
    </div>
  )
}
