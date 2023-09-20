import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { v4 } from "uuid";

export function Guess({ guessList }) {
  const emptyRow = [];
  for (let i = 0; i < 5; i++) {
    emptyRow.push({ letter: "", status: "" });
  }

  const empties = range(0, NUM_OF_GUESSES_ALLOWED).map(() => {
    return emptyRow;
  });

  const longList = [...guessList, ...empties];
  const returnRows = [];

  for (let i = 0; i < NUM_OF_GUESSES_ALLOWED; i++) {
    returnRows.push(
      <p className="guess" key={v4()}>
        {row(longList[i])}
      </p>
    );
  }
  return returnRows;
}

function row(word) {
  if (word[0].letter.length < 1) {
    return range(0, 5).map(() => {
      return <span className="cell" key={v4()}></span>;
    });
  } else {
    return word.map((item) => {
      return (
        <span key={v4()} className={`cell ${item.status}`}>
          {item.letter}
        </span>
      );
    });
  }
}
