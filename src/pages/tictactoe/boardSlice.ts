import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface GameState {
  currentPlayer: string | unknown;
  turn: number;
  playerOne: {
    name: string;
    points: number;
    turns: number;
  };
  playerTwo: {
    name: string;
    points: number;
    turns: number;
  };
}

interface playerState {
  points: number;
  turns: number;
  name: string;
}

const initialState: GameState = {
  currentPlayer: undefined,
  turn: 0,
  playerOne: {
    name: 'player 1',
    points: 0,
    turns: 0,
  },
  playerTwo: {
    name: 'player 2',
    points: 0,
    turns: 0,
  },
};

export const gameSlice = createSlice({
  name: 'tictactoe',
  initialState,
  reducers: {
    setCurrentPlayer: (state) => {
      state.currentPlayer = state.playerOne.name;
      state.turn = state.turn + 1;
    },
    setCurrentPlayerStats: (state, action: PayloadAction<playerState>) => {
      const currentPlayer = state.turn % 2;
      if (currentPlayer === 1) {
        state.playerOne = action.payload;
        state.turn = state.turn + 1;
      } else if (currentPlayer === 0) {
        state.playerTwo = action.payload;
        state.turn = state.turn - 1;
      }
    },
  },
});

export const { setCurrentPlayer, setCurrentPlayerStats } = gameSlice.actions;

export default gameSlice.reducer;
