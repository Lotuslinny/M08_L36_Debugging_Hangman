import React from "react";

const TextInput = props => (
  <form onSubmit={props.submit}>
    <input
      type="text"
      maxLength="1"
      value={props.currentChosenLetter}
      disabled={props.isGameOver ? "disabled" : ""}
      onChange={props.change}
    />
    <input
      type="submit"
      value="guess"
      disabled={props.isGameOver ? "disabled" : ""}
    />
  </form>
);

export default TextInput;
