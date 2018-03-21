import React, { Component } from 'react';
import Card from "./components/Cards";
import Navbar from "./components/Navbar";
import cards from "./cards.json";
import './App.css';

// initialize state variables
let score = 0;
let highScore = 0;
let message = "Click an image to begin!";

class App extends Component {
  // Defines variables to hold in the state
  state = {
    cards,
    score,
    highScore,
    message
  };

  // Reset game function that goes through the entire cards array and sets each element's clicked property to false
  resetGame = () => (
    cards.forEach(function(el) {
      el.clicked = false;
    })
  )

  // Shuffles the array when the component mounts and updates the state
  componentDidMount() {
    this.shuffleArray(cards);
    this.setState({cards});
  }

  // Function that takes in an array and shuffles the elements inside of it
  shuffleArray = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array; // Returns the shuffled array
  }
  
  // Check whether a card has been clicked by checking against its ID in the array
  checkCard = (id) => {
    let cards = this.state.cards; // Grabs the current state of the cards array 
    let clickedCard = cards.filter(card => card.id === id); // Finds the card that was clicked by its id
    // console.log(clickedCard);

    // If the card has not been clicked, set the property to clicked and increment the score
    if (clickedCard[0].clicked === false) {
      clickedCard[0].clicked = true;
      score++;

      // Set a new high score if the current score is greater than the HS stored in the state
      if (score > highScore){
        highScore = score;
      }

      // Display victory message and reset the game once all cards have been clicked
      if (score >= 12) {
        message = "You won! Do it again."
        score = 0;
        cards = this.shuffleArray(cards);
        this.resetGame();
      } else {
        // Else, shuffle the cards and set the message when guessed correctly
        message = "You guessed correctly!";
        cards = this.shuffleArray(cards);
      }
    } else {
      // Else, set the incorrect message, reset the score, shuffle the cards, and reset all clicked properties to false
      message = "You guessed incorrectly!";
      score = 0;
      cards = this.shuffleArray(cards);
      this.resetGame();
    }

    // Set the state of all variables at the end of each click event
    this.setState({ cards });
    this.setState({ score });
    this.setState({ message });
    this.setState({ highScore });
  }

  render() {
    return (
        <div>
          {/* Navbar accepts and passes down the score, message, and highScore properties to its component */}
          <Navbar 
            score={score}
            highScore={highScore}
            message={message}
          />
          
          {/* Header  */}
          <div className="header">
            <h5>Click on an image to earn points, but don't click on any more than once!</h5>
          </div>

          {/* Creates a container that holds all the cards */}
          <div className="container">

            {/* Maps through the array of card items and returns a Card component with its content */}
            {/* Card component accepts and passes down the image as well as the click function to its component */}
            {this.state.cards.map(card => 
              (
                <Card 
                  id={card.id}
                  key={card.id}
                  image={card.image}
                  checkCard={this.checkCard}
                />
              )
            )}
          </div>
          
          {/* Static footer  */}
          <footer className="footer">
            <div>
            Made with <img src="images/heart.png" alt="love" width="16" height="16" /> using<img src="images/logo.svg" alt="React" width="25" height="25" />
            </div>
          </footer>
        </div>
    );
  }
}

export default App;
