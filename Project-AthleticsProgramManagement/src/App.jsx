import React from 'react';
import IndexHomePage from './components/homePage/index';
import IndexSchedulePage from './components/competitionPage/index';
import IndexResultPage from './components/resultPage/index';
import IndexLogin from './components/login/index';
import Root from './routes/root';
import { Routes, Route } from "react-router-dom";
import './App.css'
function App() {
  return (
    <>
      <Root />
      <Routes>
        <Route path="/" element={<IndexLogin/>} />
        {/* <Route path="/" element={<IndexHomePage />} />
        <Route path="/competition" element={<IndexSchedulePage />} />
        <Route path="/result" element={<IndexResultPage />} /> */}
      </Routes>
    </>
  )
}
export default App
