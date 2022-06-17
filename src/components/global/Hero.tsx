import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export const Hero = () => {
  return (
    <main className='w-full h-screen'>
      <section
        className='flex  flex-col items-center justify-center max-w-[100%]  h-screen
        '
      >
        <p className='tracking-widest text-gray-600 uppercase ssm:text-sm md:text-l lg:text-xl'>
          Lets build your app
        </p>
        <div className='flex flex-col items-center justify-center py-3 text-center'>
          <h1 className='mb-2 ssm:text-3xl md:text-4xl lg:text-5xl'>
            Hi, I'm <span className=''>DeVontae</span>
          </h1>
          <h1 className='mb-2 ssm:text-xl md:text-2xl lg:text-3xl'>
            <span className='text-[#5651e5]'>Javascript</span> Developer
          </h1>
        </div>
        <div className='mt-10 text-center max-w-[70%]'>
          <p className=' ssm:text-sm sm:text-lg md:text-xl lg:text-2xl'>
            I'm a Software developer who specializes in React and Javascript.
            I'm currently focused on the following technologies:
            Next.js,Typescript,React Native and Tailwind. Connnect with me if
            you need my skills.
          </p>
        </div>
        <section className='mt-10'>
          <div className='flex items-center justify-center sm:flex-row ssm:flex-col '>
            <div className='p-5 mx-4 duration-300 ease-in rounded-full shadow-lg shadow-gray-400 hover:scale-105'>
              <FaLinkedinIn color='blue' />
            </div>
            <div className='p-5 mx-4 duration-300 ease-in rounded-full shadow-lg shadow-gray-400 hover:scale-105'>
              <FaGithub color='black' />
            </div>
            <div className='p-5 mx-4 duration-300 ease-in rounded-full shadow-lg shadow-gray-400 hover:scale-105'>
              <AiOutlineMail color='red' />
            </div>
            <div className='p-5 mx-4 duration-300 ease-in rounded-full shadow-lg shadow-gray-400 hover:scale-105'>
              <FaTwitter color='lightblue' />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};
