import React from 'react';
import './Navbar.css';

const Navbar = (props) => (

  // Creates the navbar div 3 columns
  <nav className="navbar navbar-light bg-light">
    <div className="row">
      <div className="col text-center">
        Clicky Game!
      </div>
      <div className="col text-center">
        {/* Displays message passed down from the Parent component */}
        {props.message} 
      </div>
      <div className="col text-center">
        {/* Displays the score and the highScore passed down from the Parent component */}
        Score: <span className="scores">{props.score}</span> | High Score: <span className="scores">{props.highScore}</span>
      </div>
    </div>
  </nav>
)
export default Navbar;  // Exports the Navbar component