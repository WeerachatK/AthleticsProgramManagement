import React, { useState, useEffect, useRef } from 'react';
import './slider.css'

const news = [News1, News2, News3, News4];
// 
let hText = "USA take over number two in World Ranking";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#00C49F"];
const delay = 2500;

function SlideShow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setIndex((prevIndex) => (prevIndex === news.length - 1 ? 0 : prevIndex + 1)),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className=" overflow-hidden min-w-[100%] H-news relative">
      <div
        className="SliderShow whitespace-nowrap transition-transform duration-1000 top-0 left-0 w-full h-full"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {news.map((_, idx) => (
          <div
            className="inline-block H-news w-full"
            key={idx}
          >
            <div className=' relative'>
              <div className='Shadows h-full w-full absolute truncate' />
              <div className="w-[63%] absolute text-5xl text-white font-inter font-bold 
              leading-normal  bottom-[240px] left-[77px]  truncate ">
                {hText}
              </div>
              <button className="flex w-[251px] h-[76px] mb-[9%] px-4 justify-center items-center space-x-1 flex-shrink-0 
              rounded-lg border border-white absolute bottom-0 left-[192px]">
                <div class="text-[#FC563D] font-inter text-[30px] font-semibold leading-normal">
                  Read more . . .
                </div>
              </button>
              <div className='ING bg-gray h-screen-4rem w-full'>
                <img className='inline-block h-full w-full object-cover'
                  src='https://img.olympicchannel.com/images/image/private/t_16-9_640/f_auto/v1538355600/primary/ntg4t1lytzt11bzbnkqv'
                  alt="People running to the finish line" />
              </div>

            </div>

          </div>
        ))}
      </div>


      <div className="Tap flex justify-center space-x-4 absolute bottom-2 left-1/2 transform -translate-x-1/2 py-2 ">
        {news.map((_, idx) => (
          <div
            key={idx}
            className={`h-3 w-20 rounded-full cursor-pointer  ${index === idx ? "bg-[#FB3D21]" : " bg-[#707070]"}`}
            onClick={() => setIndex(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default SlideShow;

function News1() {
  return (
    <>
      <div className='Slider'>
        {/* <img className='inline-block h-full w-full object-cover'
          src='https://img.olympicchannel.com/images/image/private/t_16-9_640/f_auto/v1538355600/primary/ntg4t1lytzt11bzbnkqv'
          alt="People running to the finish line" /> */}
      </div>
    </>
  )
}
function News2() {
  return (
    <>
      <div className='Slider'>
        {/* <img src='https://img.olympicchannel.com/images/image/private/t_16-9_640/f_auto/v1538355600/primary/ntg4t1lytzt11bzbnkqv' alt="People running to the finish line" /> */}
      </div>
    </>
  )
}
function News3() {
  return (
    <>
      <div className='Slider'>
        <div>
          new3
        </div>
      </div>
    </>
  )
}
function News4() {
  return (
    <>
      <div className='Slider'>
        <div>
          new4
        </div>
      </div>
    </>
  )
}