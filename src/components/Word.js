import React from 'react'
import { useSelector } from 'react-redux'

import { wordActions } from '../features/WordSlice'


const GuessWord = () => {
  const word = useSelector((state) => state.word.word)
  const correctGuesses = useSelector((state) => state.word.correctGuesses)

  const displayLetters = () => {
    let letters = word.toUpperCase().split('')
    let display = letters.map((letter) => {
      if (correctGuesses.includes(letter)) {
        return <span>{letter}</span>
      } else {
        return <span>_</span>
      }
    })
    return display
  }
 
  return (
    <div className= 'underscore-container'>
      {displayLetters()}
    </div>
  )
}

export default GuessWord