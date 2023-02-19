import { configureStore } from '@reduxjs/toolkit';

import wordReducer from '../features/WordSlice';
import figureReducer from '../features/FigureSlice';


export const store = configureStore({
  reducer: {
    word: wordReducer,
    figure: figureReducer,
  },
});
