import React from 'react'

function Filter() {
  return (
    <>
      <div className='w-full flex flex-col items-center font-inter justify-between '>
        <div className='SportsType w-[92%] mt-9 '>
<div className='font-semibold text-2xl'>Sports type</div>
<div className='bg-white h-1 w-full]'/>
<div className='my-2 font-light '>All</div>
<div className='my-2 font-light text-sm '>Track Events</div>
<div className='my-2 font-light text-sm '>Road Races</div>
<div className='my-2 ont-light text-sm '>Field Events</div>
        </div>
        <div className='Map w-[92%]'>
          <Map />
          <div className='Desclip my-2'>
            <div className=''> Central Stadium of Khon Kaen University</div>
            <div className=' text-xs font-extralight mt-1 mb-5' > Sila Subdistrict, Mueang Khon Kaen District Khon Kaen 40000</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Filter

function Map() {
  return (
    <div className="w-full bg-gray h-[12.5rem] ">
  <img src="https://www.google.com/maps/d/thumbnail?mid=1IiSZmA46ha-bnHijm9cdN-kwVwI&hl=en_US" alt="Description" className="object-cover w-full h-full" />
</div>

  )
}