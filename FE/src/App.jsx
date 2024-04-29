import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import Home from './pages/Home';
import VideoList from './pages/VideoList';
import MyPage from "./pages/MyPage/MyPage";
import LoginPage from "./pages/LoginPage/LoginPage";

import { WebcamStreamCapture } from "./pages/RecodingPage/RecodingPage";

function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/videoList' element={<VideoList/>}/>
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/record" element={<WebcamStreamCapture />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
