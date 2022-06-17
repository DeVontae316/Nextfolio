import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { resetGameState } from './boardSlice';
const Board = () => {
  const playerOneTurns = useAppSelector(
    (state) => state.game.playerOne.stats.turns
  );
  const playerTwoTurns = useAppSelector(
    (state) => state.game.playerOne.stats.turns
  );
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const handlePoint = (point: number) => {
    console.log('point', point);
  };

  const handleReset = () => {
    resetGameState({
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
    });
  };

  console.log('playerOneTurns', playerOneTurns);
  console.log('playerTwoTurns', playerTwoTurns);

  console.log('player');
  return (
    <div className='flex flex-col items-center justify-center h-[100%] mt-[90px]'>
      <div className='grid items-center grid-cols-3 gap-2 '>
        {arr.map((point, index) => {
          const firstRow = index >= 0 && index < 3;
          const secondRow = index >= 3 && index < 5;
          const thirdRow = index >= 5 && index < 10;
          return (
            <div className='  bg-white w-[200px] h-[100px] py-10' key={index}>
              <div
                onClick={() => handlePoint(1)}
                className='flex items-center justify-center '
              >
                {firstRow && 1}
              </div>
              <div
                onClick={() => handlePoint(2)}
                className='flex items-center justify-center '
              >
                {secondRow && 2}
              </div>
              <div
                onClick={() => handlePoint(3)}
                className='flex items-center justify-center '
              >
                {thirdRow && 3}
              </div>
            </div>
          );
        })}
      </div>

      <button className='p-4 mt-10' onClick={handleReset}>
        Reset Game
      </button>
    </div>
  );
};

export default Board;
