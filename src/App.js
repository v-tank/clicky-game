import React, { Component } from 'react';
import Card from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import cards from "./cards.json";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

let score = 0;
let highScore = 0;
let message = "Click an image to begin!";

class App extends Component {
  state = {
    cards,
    score,
    highScore,
    message
  };

  resetGame = () => (
    cards.forEach(function(el) {
      el.clicked = false;
    })
  )

  checkCard = (id) => {
    let cards = this.state.cards;
    let clickedCard = cards.filter(card => card.id === id);
    console.log(clickedCard);

    if (clickedCard[0].clicked === false) {
      // console.log("in here");
      clickedCard[0].clicked = true;
      score++;

      if (score > highScore){
        highScore = score;
      }

      if (score >= 12) {
        message = "You won! Do it again."
        score = 0;
        this.resetGame();
      } else {
        message = "You guessed correctly!";
      }
    } else {
      message = "You guessed incorrectly!";
      score = 0;
      this.resetGame();
    }

    console.log(cards);
    this.setState({ cards });
    this.setState({ score });
    this.setState({ message });
    this.setState({ highScore });
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar 
            score={score}
            highScore={highScore}
            message={message}
          />
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
                checkCard={this.checkCard}
              />
            ))}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
