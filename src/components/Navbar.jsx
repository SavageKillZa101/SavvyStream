import React from 'react'

export default function Navbar(){
  return (
    <header className="nav">
      <div className="logo">SavvyStream</div>
      <nav>
        <input className="search" placeholder="Search titles (TMDB)" />
      </nav>
    </header>
  )
}
