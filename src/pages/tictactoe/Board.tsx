import React from 'react';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { resetGameState, setCurrentPlayerStats, startGame } from './boardSlice';
const Board = () => {
  const dispatch = useAppDispatch();
  const gameState = useAppSelector((state) => state.game);
  const isGameStarted = useAppSelector((state) => state.game.isGameStarted);
  const playerOneTurns = useAppSelector(
    (state) => state.game.playerOne.stats.turns
  );
  const playerTwoTurns = useAppSelector(
    (state) => state.game.playerOne.stats.turns
  );
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const handlePoint = (point: number) => {
    console.log('point', point);
    dispatch(setCurrentPlayerStats(point));
  };

  const handleStartGame = () => {
    console.log('Game is started');
    dispatch(startGame());
  };
  const handleResetGame = () => {
    console.log('reset game');
    dispatch(
      resetGameState({
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
      })
    );
  };

  console.log('game state', gameState);
  console.log('playerOneTurns', playerOneTurns);
  console.log('playerTwoTurns', playerTwoTurns);

  console.log('player');

  /* To Do list */

  //Disable grid until game is started

  //Disable grid after selected

  return (
    <div className='flex flex-col items-center justify-center h-[100%] mt-[90px]'>
      <div className='grid items-center grid-cols-3 gap-2 disable '>
        {arr.map((point, index) => {
          const firstRow = index >= 0 && index < 3;
          const secondRow = index >= 3 && index < 5;
          const thirdRow = index >= 5 && index < 10;
          return (
            <div className='  bg-white w-[200px] h-[100px] py-10' key={index}>
              <div
                onClick={() => handlePoint(1)}
                className='flex items-center justify-center cursor-pointer'
              >
                {firstRow && 1}
              </div>
              <div
                onClick={() => handlePoint(2)}
                className='flex items-center justify-center cursor-pointer '
              >
                {secondRow && 2}
              </div>
              <div
                onClick={() => handlePoint(3)}
                className='flex items-center justify-center cursor-pointer '
              >
                {thirdRow && 3}
              </div>
            </div>
          );
        })}
      </div>
      <section className='flex justify-center'>
        <div className='mx-4'>
          <button
            className='p-4 mt-10 disabled:cursor-not-allowed focus:outline-none disabled:opacity-20 '
            disabled={isGameStarted}
            onClick={handleStartGame}
          >
            Start Game
          </button>
        </div>
        <div className='mx-4'>
          <button className='p-4 mt-10' onClick={handleResetGame}>
            Reset Game
          </button>
        </div>
      </section>
    </div>
  );
};

export default Board;
