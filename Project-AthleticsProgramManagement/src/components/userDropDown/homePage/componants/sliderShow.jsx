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
    <div className="mx-auto overflow-hidden min-w-[80%] mt-[40px]">
      <div
        className="whitespace-nowrap transition-transform duration-1000"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, idx) => (
          <div
            className="inline-block h-96 w-full rounded-xl"
            key={idx}
            style={{ backgroundColor }}
          ></div>
        ))}
      </div>

      <div className="mt-4 flex justify-center space-x-4">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`h-5 w-5 rounded-full cursor-pointer ${index === idx ? "bg-black " : "bg-gray"}`}
            onClick={() => setIndex(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default SlideShow;
