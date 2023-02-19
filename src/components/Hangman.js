import React from 'react'

import Header from './Header';
import Figure from './Figure';
import Word from './Word';
import Letterbar from './Letterbar';

import { useSelector, useDispatch } from 'react-redux'
import { wordActions } from '../features/WordSlice'
import { figureActions } from '../features/FigureSlice'

export default function Hangman() {
  // Global state
  const word = useSelector((state) => state.word.word)
  const correctGuesses = useSelector((state) => state.word.correctGuesses)
  const guessesRemaining = useSelector((state) => state.word.guessesRemaining)

  const dispatch = useDispatch()

  const allLetterBtns = document.querySelectorAll('.letters-container button')

  const resetGame = () => {
    dispatch(wordActions.resetWord())
    dispatch(figureActions.resetFigure())
    allLetterBtns.forEach((btn) => {
      btn.disabled = false
    })
  }

  // remove duplicates from word using package 'lodash'
  const wordArray = [...new Set(word.toUpperCase().split(''))]

  const displayResetButton = () => {
    if (guessesRemaining === 0 || wordArray.length === correctGuesses.length) {
      return (
        <button onClick={resetGame}>Play Again</button>
      )
    }
  }

  return (
    <>
      <Header />
      <Figure />
      <Word />
      <div className='play-again'>
        {displayResetButton()}
      </div>
      <Letterbar />
    </>
  )
}