import React from 'react';
import IndexHomePage from './components/homePage/index';
import IndexSchedulePage from './components/competitionPage/index';
import IndexResultPage from './components/resultPage/index';
import IndexLoginPage from './components/login/index';
import IndexManageProfile from './components/manageProfilePage/index'
import IndexUserDropDown from './components/userDropDown/index';
import IndexUserCenter from './components/userCenter/index'
import Root from './routes/root';
import { Routes, Route } from "react-router-dom";
import './App.css'
function App() {
  return (
    <>
      <Root />
      <Routes>
      <Route path="/" element={<IndexHomePage />} />
      <Route path="/userdropdown" element={<IndexUserDropDown/>} />
      <Route path="/usercenter" element={<IndexUserCenter/>} />
      <Route path="/competition" element={<IndexSchedulePage />} />
      <Route path="/result" element={<IndexResultPage />} />
      <Route path="/login" element={<IndexLoginPage />} /> 
      </Routes>
    </>
  )
}
export default App
