import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import { Links } from './Links';
import { SideNavBar } from './SideNavBar';

export const Navigation = () => {
  const [isSideBarDisplayed, setIsSideBarDisplayed] = useState<boolean>(false);
  const handleClick = () => {
    setIsSideBarDisplayed(true);
  };
  return (
    <nav className='sticky top-0 z-[100] w-full h-24 shadow-xl bg-[#a29bfe]'>
      <section className='flex items-center justify-between w-full h-full px-8 2xl:px-16'>
        <h1 className='text-[#ecf0f3]'>Logo Here</h1>
        <Links
          liClassName='ml-10 text-sm text-[#ecf0f3] uppercase ease-in border-blue-500 cursor-pointer duration- hover:border-b'
          ulClassName='hidden  md:flex'
        />
        <div onClick={handleClick} className='md:hidden'>
          <GiHamburgerMenu size={24} />
        </div>
      </section>
      <SideNavBar
        setIsSideBarDisplayed={setIsSideBarDisplayed}
        isSideBarDisplayed={isSideBarDisplayed}
      />
    </nav>
  );
};
