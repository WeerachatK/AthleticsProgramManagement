import React from 'react'
import "./filter.css"
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../../redux/slices/filterSlice';
function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter); // สังเกต line นี้

  const handleFilterClick = (event) => {
    event.preventDefault();
    const filterValue = event.target.innerText;
    dispatch(setFilter(filterValue));
  };
  return (
    <>
      <div className='flex flex-col justify-between'>
        <div className='sport-container'>
          <h1>Sports type</h1>
          <a className={`sport-item ${filter === 'All' ? 'sport-item-active' : ''}`} href="" onClick={handleFilterClick}>All</a>
          <a className={`sport-item ${filter === 'Track Events' ? 'sport-item-active' : ''}`} href="" onClick={handleFilterClick}>Track Events</a>
          <a className={`sport-item ${filter === 'Road Races' ? 'sport-item-active' : ''}`} href="" onClick={handleFilterClick}>Road Races</a>
          <a className={`sport-item ${filter === 'Field Events' ? 'sport-item-active' : ''}`} href="" onClick={handleFilterClick}>Field Events</a>
          <a className={`sport-item ${filter === 'The Sprints' ? 'sport-item-active' : ''}`} href="" onClick={handleFilterClick}>The Sprints</a>
          <a className={`sport-item ${filter === 'Combined Competitions' ? 'sport-item-active' : ''}`} href="" onClick={handleFilterClick}>Combined Competitions</a>
          <a className={`sport-item ${filter === 'Cross-Country Races' ? 'sport-item-active' : ''}`} href="" onClick={handleFilterClick}>Cross-Country Races</a>
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