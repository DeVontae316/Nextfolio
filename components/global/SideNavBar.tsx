import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { Links } from './Links';

interface SideNavBarProps {
  isSideBarDisplayed: boolean;

  setIsSideBarDisplayed: React.Dispatch<React.SetStateAction<boolean>>;
}
export const SideNavBar = (props: SideNavBarProps) => {
  const { isSideBarDisplayed, setIsSideBarDisplayed } = props;

  const handleClick = () => {
    setIsSideBarDisplayed(false);
  };
  return (
    <>
      <nav
        className={
          isSideBarDisplayed
            ? 'fixed top-0 left-0 w-full h-screen bg-black/70 lg:hidden ease-in-out duration-700'
            : ''
        }
      >
        SideNavBar
        <aside
          className={
            isSideBarDisplayed
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-700'
              : 'fixed left-[-100%] top-0 p-10 ease-out duration-700'
          }
        >
          <section className='flex justify-between w-full'>
            <h1>Logo here</h1>
            <div className='p-3 rounded-full shadow-lg shadow-gray-400 '>
              <AiOutlineClose onClick={handleClick} size={14} />
            </div>
          </section>

          <section className='my-8 border-b border-[lightgrey]'>
            <p className='py-4 w-[85%] md:w-[90%]'>
              Lets build your app together
            </p>
          </section>

          <Links
            liClassName='text-sm uppercase ease-in border-blue-500 cursor-pointer duration- hover:border-b'
            ulClassName='flex flex-col'
          />
        </aside>
      </nav>
    </>
  );
};
