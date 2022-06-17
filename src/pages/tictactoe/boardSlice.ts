import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface GameState {
  isGameStarted: boolean;
  currentPlayer: string | unknown;
  turn: number;
  playerOne: {
    name: string;
    stats: {
      points: number;
      turns: number;
    };
  };
  playerTwo: {
    name: string;
    stats: {
      points: number;
      turns: number;
    };
  };
}

interface playerState {
  points: number;
  turns: number;
}

const initialState: GameState = {
  isGameStarted: false,
  currentPlayer: undefined,
  turn: 0,
  playerOne: {
    name: 'player 1',
    stats: {
      points: 0,
      turns: 0,
    },
  },
  playerTwo: {
    name: 'player 2',
    stats: {
      points: 0,
      turns: 0,
    },
  },
};

export const gameSlice = createSlice({
  name: 'tictactoe',
  initialState,
  reducers: {
    startGame: (state) => {
      state.isGameStarted = true;
      state.turn = state.turn + 1;
    },
    setCurrentPlayerStats: (state, action: PayloadAction<playerState>) => {
      const currentPlayer = state.turn % 2;
      if (currentPlayer === 1) {
        state.playerOne.stats = action.payload;
        state.turn = state.turn + 1;
      } else if (currentPlayer === 0) {
        state.playerTwo.stats = action.payload;
        state.turn = state.turn - 1;
      }
    },

    resetGameState: (state, action: PayloadAction<GameState>) => {
      state = action.payload;
    },
  },
});

export const { startGame, setCurrentPlayerStats, resetGameState } =
  gameSlice.actions;

export default gameSlice.reducer;
