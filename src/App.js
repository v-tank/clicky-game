import React, { Component } from 'react';
import Card from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import cards from "./cards.json";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';


class App extends Component {
  state = {
    cards
  };

  checkCard = (id) => {
    this.setState({cards});
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div className="header">
            <h1>Clicky Game!</h1>
            <h2>Click on an image to earn points, but don't click on any more than once!</h2>
          </div>
          <div className="container">
            {this.state.cards.map(card => (
              <Card 
                id={card.id}
                key={card.id}
                image={card.image}
              />
            ))}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
