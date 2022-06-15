import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export const Hero = () => {
  return (
    <section className='flex ssm:w-[100%] flex-col items-center justify-center w-full h-screen'>
      <p className='text-gray-600 ssm:text-xl md:text-2xl lg:text-3xl'>
        Lets build your app
      </p>
      <div className='flex ssm:w-[100%]items-center justify-center  max-w-[40%] text-center py-3'>
        <h1 className='py-2 mb-2 ssm:text-3xl md:text-4xl lg:text-5xl '>
          Hi, I'm <span className='text-[#5651e5] '>DeVontae</span>
          <br /> <span className='mt-8'>A Software Developer</span>
        </h1>
      </div>
      <div className='flex items-center  ssm:w-[100%]justify-center max-w-[60%] text-center '>
        <h3 className=' md:text-xl lg:text-2xl'>
          I'm a Software developer who specializes in React and Javascript. I'm
          currently focused on the following technologies: Next.js,
          Typescript,and Tailwind. Connnect with me if you need my skills.
        </h3>
      </div>
      <section className='mt-10 '>
        <div className='flex items-center justify-between w-full my-4 sm:w-[85%] '>
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
  );
};
