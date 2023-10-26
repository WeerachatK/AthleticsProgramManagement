import React from 'react'
import '../index.css'
function ProfileCard() {
  return (
    <>
      <div className='ProfileCard flex flex-col justify-start items-center p-8'>
        <div className='flex-shrink-0  rounded-full w-40  h-40 overflow-hidden'>
          <img className='object-cover w-full h-full' src="https://t3.ftcdn.net/jpg/04/23/59/74/360_F_423597477_AKCjGMtevfCi9XJG0M8jter97kG466y7.jpg"
            alt="" />
        </div>
        <div className='Name text-4xl my-3'>
        Supakit Krongkaha
        </div>
        <div className='ShowInfo text-2xl  text-[#91A3CC] h-full w-full flex justify-center items-center'>
          No athlete information.
        </div>
      </div>
    </>
  )
}

export default ProfileCard