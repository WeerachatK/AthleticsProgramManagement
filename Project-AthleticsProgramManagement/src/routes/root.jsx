import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './root.css'
import { useSelector } from 'react-redux';

const stateLog = true
function Root() {
  const display = useSelector(state => state.display);
  return (
    <div className='navBar'>
      <div className='menu-bar'>
        <div className='menu-item1'><Link to="/"><img width={40} src="https://static.vecteezy.com/system/resources/thumbnails/023/654/784/small/golden-logo-template-free-png.png" alt="" /></Link></div>
        {/* <div className='menu-item'><p>LOGO</p></div> */}
        <div className='menu-item'><Link to="/">Home</Link></div>
        <div className='menu-item'><Link to="/competition">Competition</Link></div>
      </div>
      <div className='user-bar'>
      <IsLog/>
      </div>
    </div>
    
  );
}

function IsLog(){
  return(
    stateLog ? <Profile/> : <NoLogin/>
  )

}
export default Root;
function LineHighlight() {
  return (<div className='Line flex flex-col  items-center mb-2'>
    <div className='bg-white h-[0.1rem]  w-[8.125rem]  '></div>
    <div className='bg-white h-[0.2rem] w-[10.625rem] mt-1 '></div>
  </div>)
}

function Profile() {
  return (
    <ul className='user-profile'>
      <div className='user-manage'><Link to="/usermanagement">User Management</Link></div>
      <a href="#"><li className='user-noti'>
      <svg width="29" height="37" className='mx-[30px]'
         viewBox="0 0 29 37" fill="none"
         xmlns="http://www.w3.org/2000/svg">
         <path d="M27.8043 23.1065L25.9543 20.0355C25.5658 19.351 25.2143 18.056 25.2143 17.2975V12.617C25.2143 8.2695 22.6613 4.514 18.9798 2.7565C18.0178 1.0545 16.2418 0 14.2068 0C12.1903 0 10.3774 1.0915 9.41538 2.812C5.80788 4.6065 3.31038 8.325 3.31038 12.617V17.2975C3.31038 18.056 2.95888 19.351 2.57038 20.017L0.701882 23.1065C-0.0381178 24.346 -0.204617 25.715 0.257883 26.973C0.701883 28.2125 1.75638 29.1745 3.12538 29.637C6.71438 30.858 10.4884 31.45 14.2623 31.45C18.0363 31.45 21.8103 30.858 25.3993 29.6555C26.6943 29.23 27.6933 28.2495 28.1743 26.973C28.6553 25.6965 28.5258 24.2905 27.8043 23.1065Z" fill="white" />
         <path d="M19.4604 33.3185C18.6834 35.4645 16.6299 37 14.2249 37C12.7634 37 11.3204 36.4081 10.3029 35.3536C9.71092 34.7986 9.26692 34.0585 9.00792 33.3C9.24842 33.337 9.48892 33.3555 9.74792 33.3925C10.1734 33.448 10.6174 33.5035 11.0614 33.5405C12.1159 33.633 13.1889 33.6885 14.2619 33.6885C15.3164 33.6885 16.3709 33.633 17.4069 33.5405C17.7954 33.5035 18.1839 33.485 18.5539 33.4295C18.8499 33.3925 19.1459 33.3555 19.4604 33.3185Z" fill="#f4f4f4" />
       </svg>
       </li></a>
       <a href="#">
       <li className='user'>
       <div className='user-image'>
       <img className='rounded-full'  width={40} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAY1BMVEUAAAD////7+/v39/fQ0NCVlZW1tbUdHR3e3t7z8/O7u7vt7e1+fn6kpKTJycmqqqpwcHBERERLS0s8PDzBwcEmJiZkZGQxMTFYWFienp4TExMZGRlpaWnX19fl5eVSUlKGhoblN0JgAAAEF0lEQVRogeWb15riMAxGTXojBQgMAULe/yl38rGzQ2LJllzCxf73cIgtKWqInZGy4lodLoMY+mMbJ4/A7Ft2gv+RsG57sdTtXJSb0Mv4KCBdqsw7PYzXj/2miv38PPpJwZ6190gP7mr2t468x2fQH/CFr3TyQ69vFLgQjQ/6icb+VuyeHpHhQlxd0x8MOMP0afRR42lrRS7pwRcPLm5ExyPRYyZciLs7+siGC1E4ox8M6H3uiF4bwIleT6BzTe6lNHRC57n6ryhOr6dPhvSLC3p+MaSL0QGdE+CXItidls6PND86O6A/jelCb/U6eml87ULok1wd3dTfZumTLB3dLNC9pM8ydPTEgj59lF5Z0xsLevsf0+1P/rNWZ+Nx+kDvM9ok1nSbSPuwphullH9l/5bZVcbwpxaup5ubnYvsoiSW7bIIxZw+q2xN6Xo4gW569JRyQk8PSO0aWYSUllLLmAVbfZCn0XcmdjdQHp1EN7l5Wu+G1D3gm31HqSGJ9JxtePoQT6ezyylqx5DYMePZvT6l4tF3ewac2DJi0BnVZEufk9C7xNSnrxhDGkaHnHb3jB4xbzqQEbIsVnueORmZNOyW1KUzpe+ys4J9qHlfZjARizD+oeDPBA2mgdlVvv90ojbFbenzD0im7h/52DbEsM6nl3VyjacYutJ8zEa4EX/6/kSTRFobVNKDaLoMP9dKP9ri52ZuXazuHCnoedMt7raiudPKLb5OCmPE6YlkWxdKKJED8hM/NYyeg33xVpeyjGDZh2aYCB1N5ZR5Q4C9CFPk+mG6ol/SoQEtSPC5WQqfPkhXv82+EsjNxn2n+lAKhgSIru1XpG29NOSw0A7HB8hkAHo+6L5p1j0uHnkYhHmUxKTJzYFGN5sC6QXkHTLdpkOnlnz1Er1kDnwZekpRT6JP3uDAeHRNLz3C5SHZmm7eoqJoHSlX9NwrXKRq+tUvfd3HWtGV0dKBKhU98wxfd0+XdL82NyvB6aFFS5ioFqf7P3hxzFG6vxD/qwdKVxVprrTH6IFvf5t1xugZKa2wVBcgdPoSm4WGDKH7DrMv1QhdvzbpQg1CN2zEM1XB9CDdhH6A6RtEulk9TDffrGHpfQHrjb6Jw4nFKsobfYsoPyv6KL0G6eY7TTwVIN1/YvNSAtKNR55MNSB9m0CL0bfILT5P3//HdPjkP2vzn402NktNHMFx3mapiaGhBOnlFgn1sn3yntdtUUwsN8/e6du8YiOEvk0tEyL0TTwerSK3yGp7vH7fIOAsRztLemCxy0fSaidi1TEz+XMKQ32gpPtN6tP1ApLUo/aI76XtJ3k6MPoqZc/yZAaYjASTD/YATfLAiVh2dx310gkcViOzyCx26Xtdg/xjDZ8CZ0XcdqndIQzps7qe8FW7P2kjNCqWGnEfAAAAAElFTkSuQmCC" alt="" />
       </div>
       <div className='user-name'>
        User Name
       </div>
       <div className='user-dropdown'> <a href="#">
         <svg width="16" height="9" className='mx-[10px]'
         viewBox="0 0 16 9" fill="none"
         xmlns="http://www.w3.org/2000/svg">
         <path d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7V8H9V7H7Z" fill="black" />
       </svg>
       </a>
       </div>
       </li></a>
       </ul>
  )
}
function NoLogin() {
  return(
        <div className='user-no-login'>
         <Link to="/login">Login/ Sign up</Link> 
      </div>
  )
}

