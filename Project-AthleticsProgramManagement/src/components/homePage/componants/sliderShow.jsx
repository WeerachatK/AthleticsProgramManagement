import React, { useState, useEffect, useRef } from 'react';

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
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
      () => setIndex((prevIndex) => (prevIndex === colors.length - 1 ? 0 : prevIndex + 1)),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="mx-auto overflow-hidden w-[1137px] h-[280px] mt-[44px]">
      <div
        className="whitespace-nowrap transition-transform duration-1000"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, idx) => (
          <div
            className="inline-block h-[280px] w-full rounded-xl"
            key={idx}
            style={{ backgroundColor }}
          ></div>
        ))}
      </div>

      <div className="mt-4 flex justify-center space-x-4">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`h-[10px] w-[10px] rounded-full cursor-pointer ${index === idx ? "bg-[#000000]" : "bg-[#c4c4c4]"}`}
            onClick={() => setIndex(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default SlideShow;
