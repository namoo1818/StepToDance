import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import Home from './pages/Home';
import VideoList from './pages/VideoList';
function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/videoList' element={<VideoList/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
