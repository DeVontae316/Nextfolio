import React, { useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

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

  useEffect(() => {
    const closeSideNavBarOnWindowResize = () => {
      setIsSideBarDisplayed(false);
    };

    window.addEventListener('resize', closeSideNavBarOnWindowResize);
  });
  return (
    <>
      <nav
        className={
          isSideBarDisplayed
            ? 'fixed top-0 left-0 w-full h-screen bg-black/70 lg:hidden ease-in-out duration-700'
            : ''
        }
      >
        <aside
          className={
            isSideBarDisplayed
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[30%] h-screen bg-[#ecf0f3] p-10 ease-in duration-700'
              : 'fixed left-[-100%] top-0 p-10 ease-out duration-700'
          }
        >
          <section className='flex justify-between w-full'>
            <h1>Logo here</h1>
            <div className='p-2 rounded-full shadow-lg shadow-gray-400 '>
              <AiOutlineClose onClick={handleClick} size={14} />
            </div>
          </section>

          <section className='my-8 border-b border-[lightgrey]'>
            <p className='py-4 w-[85%] md:w-[90%]'>
              Lets build your app together
            </p>
          </section>

          <section className='w-[25%]'>
            <Links
              liClassName='py-4 text-sm uppercase ease-in border-blue-500 cursor-pointer duration- hover:border-b'
              ulClassName='flex flex-col'
            />
          </section>

          <section className='mt-40'>
            <p className='uppercase text-[#5651e5] tracking-widest'>
              connect with me
            </p>
            <div className='flex items-center justify-between w-full my-4 sm:w-[85%]'>
              <div className='p-3 duration-300 ease-in rounded-full shadow-lg shadow-gray-400 hover:scale-105'>
                <FaLinkedinIn color='blue' />
              </div>
              <div className='p-3 duration-300 ease-in rounded-full shadow-lg shadow-gray-400 hover:scale-105'>
                <FaGithub color='black' />
              </div>
              <div className='p-3 duration-300 ease-in rounded-full shadow-lg shadow-gray-400 hover:scale-105'>
                <AiOutlineMail color='red' />
              </div>
              <div className='p-3 duration-300 ease-in rounded-full shadow-lg shadow-gray-400 hover:scale-105'>
                <FaTwitter color='lightblue' />
              </div>
            </div>
          </section>
        </aside>
      </nav>
    </>
  );
};
