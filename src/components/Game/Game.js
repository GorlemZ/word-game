import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { Guess } from "./Guess";
import { checkGuess } from "../../game-helpers";
import { Banner } from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [name, setName] = React.useState("");
  const [guessList, setGuessList] = React.useState([]);
  const [theEnd, setTheEnd] = React.useState(false);
  const [win, setWin] = React.useState(false);

  function isWinner(event) {
    event.preventDefault();
    const newGuessList = [...guessList];
    newGuessList.push(checkGuess(name, answer));
    setGuessList(newGuessList);
    if (name === answer) {
      setWin(true);
      setTheEnd(true);
      setGuessList([]);
    }
    if (newGuessList.length > 5) {
      setWin(false);
      setTheEnd(true);
      setGuessList([]);
    }
    setName("");
  }

  return (
    <div>
      {theEnd && <Banner isWinner={win} />}
      <Guess className="guess-results" guessList={guessList}></Guess>
      <form
        onSubmit={(event) => {
          isWinner(event);
        }}
      >
        <label for="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={name}
          required
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          onChange={(event) => {
            setName(event.target.value.toUpperCase());
          }}
        />
      </form>
    </div>
  );
}

export default Game;
