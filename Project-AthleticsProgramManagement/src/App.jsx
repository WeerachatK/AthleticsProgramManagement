import React from 'react';
import IndexHomePage from './components/homePage/index';
import IndexSchedulePage from './components/competitionPage/index';
import IndexResultPage from './components/resultPage/index';
import IndexLoginPage from './components/login/index';
import Root from './routes/root';
import { Routes, Route } from "react-router-dom";
import './App.css'
function App() {
  return (
    <>
      <Root />
      <Routes>
        <Route path="/" element={<IndexHomePage />} />
        <Route path="/competition" element={<IndexSchedulePage />} />
        <Route path="/result" element={<IndexResultPage />} />
        <Route path="/login" element={<IndexLoginPage />} />
      </Routes>
    </>
  )
}
export default App
