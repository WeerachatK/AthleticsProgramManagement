
// Import the necessary React library
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './components/loginPage';
// Define a functional component named App
function Index() {
  return (
    <>
      <Routes>
        <Route path='/' element={
          <nav><Login/></nav>
        } />
      </Routes>

    </>
  )
}

export default Index;


