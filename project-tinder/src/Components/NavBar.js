import React from 'react'
import "./Components.css";

const NavBar = () => {
  return (

      <nav className='navBar'>
        <div className='navBar__container'>
          <ul className='navBar__menu'>

            <li className="navBar__item"> 
              <a href="/add-announcement" className="navBar__links" id="list-page">Add announcement</a>
            </li>

            <li className="navBar__item"> 
              <a href="/search-groups" className="navBar__links" id="list-page">Search for groups</a>
            </li>

            <li className="navBar__item"> 
              <a href="/add-group" className="navBar__links" id="list-page">Create group</a>
            </li>

          </ul>
        </div>
      </nav>
  )
}

export default NavBar