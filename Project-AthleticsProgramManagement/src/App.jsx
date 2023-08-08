import React from 'react';
import Index from './components/homePage/componants/sliderShow';
import Root from './routes/root';
import { Routes, Route } from "react-router-dom";
import './App.css'
function App() {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={
          <nav><Root/></nav>
        } /> */}
        <Route path='/' element={
          <nav><Index/></nav>
        } />
      </Routes>

    </>
  )
}
export default App
