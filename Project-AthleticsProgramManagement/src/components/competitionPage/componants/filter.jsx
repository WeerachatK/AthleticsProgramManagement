import React from 'react'
import "./filter.css"
function Filter() {
  return (
    <>
      <div className='container-filter'>
        <div className='sport-container'> 
            <h1>Sports type</h1>
            <div className='sport-item'><a href="">All</a></div>
            <div className='sport-item'><a href="">Track Events</a></div>
            <div className='sport-item'><a href="">Road Races</a></div>
            <div className='sport-item'><a href="">Field Events</a></div>
        </div>
        <div v className='map-container'>
          <div className="map-image">
              <img src="https://www.google.com/maps/d/thumbnail?mid=1IiSZmA46ha-bnHijm9cdN-kwVwI&hl=en_US" alt="Description" className="object-cover w-full h-full" />
          </div>
          <div className='map-text'>
            <div className='map-location'> Central Stadium of Khon Kaen University</div>
            <div className='map-subscrib' > Sila Subdistrict, Mueang Khon Kaen District Khon Kaen 40000</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Filter