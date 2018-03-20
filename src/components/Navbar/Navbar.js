import React from 'react';
import './Navbar.css';

const Navbar = (props) => (

  <nav className="navbar navbar-light bg-light">
    <div className="row">
      <div className="col text-center">
        Clicky Game!
      </div>
      <div className="col text-center">
        {props.message}
      </div>
      <div className="col text-center">
        Score: {props.score} | High Score: {props.highScore}
      </div>
    </div>
  </nav>
)
export default Navbar;