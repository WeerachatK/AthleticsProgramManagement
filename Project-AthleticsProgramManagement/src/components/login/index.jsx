
// Import the necessary React library
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './components/loginPage';
import LoginPage from './components/loginPage';
// Define a functional component named App
function Index() {
  return (
    <>
      <Routes>
        <Route path='/' element={
          <LoginPage/>
        } />
      </Routes>

    </>
  )
}

export default Index;


