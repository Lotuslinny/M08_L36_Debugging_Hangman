import React from "react";
import App from "../../components/App/App";
// Handling submit letter input doesn't work. Something with state.
// props.submit is undefined in TextInput.js
//de functie chosenLetterHandler en guessLetterHandler was niet goed doorgegeven aan de componenten... naam etc.
// nu weer naar submit(guessLetterHandler) kijken=GUESSEDLETTERS met 1 s
const wordList = [
  "vis",
  "toeter",
  "developer",
  "telefoon",
  "moeder",
  "snoer",
  "geeuw"
];

const maxGuesses = 5;

class AppContainer extends React.Component {
  state = {
    chosenWord: "",
    guessedLetters: [],
    currentChosenLetter: "",
    maxGuesses: maxGuesses
  };

  chooseWord(list) {
    let index = Math.floor(Math.random() * list.length);
    console.log(`We chose word: ${list[index]}`);
    return list[index];
  }

  restartGameHandler = event => {
    this.setState({
      chosenWord: this.chooseWord(wordList),
      guessedLetters: [],
      currentChosenLetter: ""
    });
  };

  chosenLetterHandler = event => {
    const newState = { ...this.state };
    //console.log(newState)
    newState.currentChosenLetter = event.target.value;
    //console.log(currentChosenLetter)
    this.setState(newState);
  };

  guessLetterHandler = event => {
    const inputGiven = this.state.currentChosenLetter.length > 0;
    //alert(inputGiven)// GUESSEDLETTERS met 1 s
    const newLetter = !this.state.guessedLetters.includes(
      this.state.currentChosenLetter
    );
    if (inputGiven && newLetter) {
      const newGuessedLetters = [...this.state.guessedLetters];
      newGuessedLetters.push(this.state.currentChosenLetter);
      this.setState({
        guessedLetters: newGuessedLetters
      });
    }
    this.setState({ currentChosenLetter: "" });
    event.preventDefault();
  };

  componentDidMount = () => {
    this.restartGameHandler();
  };

  render() {
    return (
      <App
        game={this.state}
        chosenLetterHandler={this.chosenLetterHandler}
        guessLetterHandler={this.guessLetterHandler}
        restartGameHandler={this.restartGameHandler}
      />
    );
  }
}

export default AppContainer;
