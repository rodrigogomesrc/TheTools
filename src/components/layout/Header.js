import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {

  return(

      <header>
        <div id="header">
          <h1 id="title"><Link className="navLink" to="/">Toolks</Link></h1>
          <div id="button">
          </div>
        </div>
      </header>
  )

}

export default Header