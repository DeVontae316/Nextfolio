import { configureStore } from '@reduxjs/toolkit';
import tictactoeReducer from '../pages/tictactoe/boardSlice';

export const store = configureStore({
  reducer: {
    game: tictactoeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
