import React from 'react';
import IndexHomePage from './components/homePage/index';
import IndexSchedulePage from './components/schedulePage/index';
import IndexResultPage from './components/resultPage/index';
import Root from './routes/root';
import { Routes, Route } from "react-router-dom";
import './App.css'
function App() {
  return (
    <>
      <IndexHomePage />
    </>
  )
}
export default App
