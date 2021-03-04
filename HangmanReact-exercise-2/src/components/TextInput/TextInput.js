import React from "react";

const TextInput = props => (
  <form onSubmit={props.guessLetterHandler}>
    <input
      type="text"
      maxLength="1"
      value={props.currentChosenLetter}
      disabled={props.gameIsOver ? "disabled" : ""}
      onChange={props.chosenLetterHandler}

    />
    <input
      type="submit"
      value="guess"
      disabled={props.gameIsOver ? "disabled" : ""}
    />
  </form>
);

export default TextInput;
