import { createSlice } from '@reduxjs/toolkit';

const dictionary = ['hello', 'world', 'goodbye', 'goodnight', 'goodmorning', 'goodafternoon'];

const getRandomWord = () => dictionary[Math.floor(Math.random() * dictionary.length)];

const initialWordState = {
  word: getRandomWord(),
  correctGuesses: [],
  addIncorrectGuess: [],
  guessesRemaining: 10,
}

export const wordSlice = createSlice({
  name: 'word',
  initialState: initialWordState,
  reducers: {
    addCorrectGuess: (state, action) => {
        state.correctGuesses.push(action.payload);
    },
    resetWord: (state) => {
      state.word = getRandomWord();
      state.correctGuesses= [];
      state.guessesRemaining = 10;
    },
    addIncorrectGuess: (state, action) => {
        state.addIncorrectGuess.push(action.payload);
        state.guessesRemaining--;
    },
  },
});

export const wordActions = wordSlice.actions;

export default wordSlice.reducer;
