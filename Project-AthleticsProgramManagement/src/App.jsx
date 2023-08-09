import React from 'react';
import Index from './components/homePage/index';
import Root from './routes/root';
import { Routes, Route } from "react-router-dom";
import './App.css'
function App() {
  return (
    <>
      <Root />
      <Index />
    </>
  )
}
export default App
