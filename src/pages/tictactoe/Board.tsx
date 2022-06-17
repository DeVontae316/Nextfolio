import React from 'react';

const Board = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className='flex items-center justify-center h-screen mt-[90px]'>
      <div className='grid items-center grid-cols-3 gap-14 '>
        {arr.map((point, index) => {
          const firstRow = index >= 0 && index < 3;
          const secondRow = index >= 3 && index < 5;
          const thirdRow = index >= 5 && index < 10;
          return (
            <div className='  bg-white w-[200px] h-[100px] py-10' key={index}>
              <div className='flex items-center justify-center '>
                {firstRow && point}
              </div>
              <div className='flex items-center justify-center '>
                {secondRow && point}
              </div>
              <div className='flex items-center justify-center '>
                {thirdRow && point}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Board;
