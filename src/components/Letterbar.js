import React from "react";

import {useSelector, useDispatch} from "react-redux";

import { figureActions } from "../features/FigureSlice";
import { wordActions } from "../features/WordSlice";

const LetterBar = () => {
  const word = useSelector((state) => state.word.word);

  const dispatch = useDispatch();

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  function handleGuess(e) {
    let letter = e.target.innerText;
    word.toUpperCase().split("").includes(letter)
      ? dispatch(wordActions.addCorrectGuess(letter)) 
      : dispatch(figureActions.updateFigure()) && dispatch(wordActions.addIncorrectGuess(letter));
    e.target.disabled = true;
  }

  const displayLetters = () =>
    alphabet.map((letter) => (
      <button key={letter} onClick={handleGuess}>
        {letter}
      </button>
    ));

  return(
    <div className="letters-container">
      {displayLetters()}
    </div>
  );
};

export default LetterBar;
