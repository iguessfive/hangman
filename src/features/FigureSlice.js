import { createSlice } from "@reduxjs/toolkit";

// Hangman Drawings
import hangman0 from "../hangmandrawings/state1.png";
import hangman1 from "../hangmandrawings/state2.png";
import hangman2 from "../hangmandrawings/state3.png";
import hangman3 from "../hangmandrawings/state4.png";
import hangman4 from "../hangmandrawings/state5.png";
import hangman5 from "../hangmandrawings/state6.png";
import hangman6 from "../hangmandrawings/state7.png";
import hangman7 from "../hangmandrawings/state8.png";
import hangman8 from "../hangmandrawings/state9.png";
import hangman9 from "../hangmandrawings/state10.png";
import hangman10 from "../hangmandrawings/state11.png";

const hangmanDrawings = [hangman0, hangman1, hangman2, hangman3, hangman4, hangman5, hangman6, hangman7, hangman8, hangman9, hangman10];

const figureSlice = createSlice({
    name: "figure",
    initialState: {
        hangmanDrawings: hangmanDrawings,
        hangmanDrawing: hangmanDrawings[0],
        hangmanDrawingIndex: 0,
    },
    reducers: {
        updateFigure: (state) => {
            if (state.hangmanDrawingIndex < 10) {
                state.hangmanDrawingIndex++;
                state.hangmanDrawing = state.hangmanDrawings[state.hangmanDrawingIndex];
            }
        },
        resetFigure: (state) => {
            state.hangmanDrawingIndex = 0;
            state.hangmanDrawing = state.hangmanDrawings[state.hangmanDrawingIndex];
        },
    },
});

export const figureActions = figureSlice.actions;

export default figureSlice.reducer;

