import React from 'react';
import { Link } from 'react-router-dom';
import './root.css'
import { useSelector } from 'react-redux';

function Root() {
  const display = useSelector(state => state.display);
  return (
    <nav className='Navbar w-screen h-[100px] bg-[#D9D9D9] sticky top-0 pt-[12px] px-[24px] flex flex-row z-10 '>
      <div class="flex flex-col justify-center w-[122px] h-[74px] flex-shrink-0 bg-[#525252]">
        <label class="text-center font-inter text-base font-normal text-[#fff] ">
          LOGO
        </label>
      </div>

      <div className='Menu flex flex-row items-end pl-[100px]'>
        <Link to="/" class={`Home MenuBox ${display === 'home' ? 'bg-white' : ''}`}>
          Home
        </Link>
        <Link to="/competition" class={`Competition MenuBox ${display === 'competition' ? 'bg-white' : ''}`}>
          Competition
        </Link>
        <Link to="/result" class={`Result MenuBox ${display === 'result' ? 'bg-white' : ''}`}>
          Result
        </Link>
      </div>

      <NoLogin />
    </nav>
  );
}

export default Root;

function Profile() {
  return (
    <div className='Profile flex flex-row items-center justify-end w-full'>
      <svg width="29" height="37" className='mx-[10px]'
        viewBox="0 0 29 37" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M27.8043 23.1065L25.9543 20.0355C25.5658 19.351 25.2143 18.056 25.2143 17.2975V12.617C25.2143 8.2695 22.6613 4.514 18.9798 2.7565C18.0178 1.0545 16.2418 0 14.2068 0C12.1903 0 10.3774 1.0915 9.41538 2.812C5.80788 4.6065 3.31038 8.325 3.31038 12.617V17.2975C3.31038 18.056 2.95888 19.351 2.57038 20.017L0.701882 23.1065C-0.0381178 24.346 -0.204617 25.715 0.257883 26.973C0.701883 28.2125 1.75638 29.1745 3.12538 29.637C6.71438 30.858 10.4884 31.45 14.2623 31.45C18.0363 31.45 21.8103 30.858 25.3993 29.6555C26.6943 29.23 27.6933 28.2495 28.1743 26.973C28.6553 25.6965 28.5258 24.2905 27.8043 23.1065Z" fill="#4C4C4C" />
        <path d="M19.4604 33.3185C18.6834 35.4645 16.6299 37 14.2249 37C12.7634 37 11.3204 36.4081 10.3029 35.3536C9.71092 34.7986 9.26692 34.0585 9.00792 33.3C9.24842 33.337 9.48892 33.3555 9.74792 33.3925C10.1734 33.448 10.6174 33.5035 11.0614 33.5405C12.1159 33.633 13.1889 33.6885 14.2619 33.6885C15.3164 33.6885 16.3709 33.633 17.4069 33.5405C17.7954 33.5035 18.1839 33.485 18.5539 33.4295C18.8499 33.3925 19.1459 33.3555 19.4604 33.3185Z" fill="#4C4C4C" />
      </svg>

      <svg width="62" height="62" className='mx-[10px]'
        viewBox="0 0 62 62" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="31" cy="31" r="31" fill="#4C4C4C" />
      </svg>

      <label className='mx-[10px]' >User Name</label>
      <svg width="16" height="9" className='mx-[10px]'
        viewBox="0 0 16 9" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7V8H9V7H7Z" fill="black" />
      </svg>


    </div>
  )
}

function NoLogin() {
  return (
    <div className='NoLogin w-full flex items-center justify-end mr-4'>
      <div className='w-[225px] h-[53px] rounded-full bg-[#4C4C4C] flex items-center justify-center'>
        <label class="text-center font-inter text-base font-normal text-[#fff] ">
          Login/ Sign up
        </label>
      </div>
    </div>
  )
}