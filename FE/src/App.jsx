import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import { useSelector } from "react-redux";
import MainPage from "./pages/MainPage/MainPage";
import Home from './pages/Home';
import VideoList from './pages/VideoList';
import GuideUpload from './pages/GuideUpload';
import VideoEditor from './pages/VideoEditor';
import MyPage from "./pages/MyPage/MyPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import KakaoLogin from "./pages/LoginPage/KakaoLogin";
// import { WebcamStreamCapture } from "./pages/RecordingPage/RecordingPage";
import { WebcamStreamCapture } from "./pages/RecodingPage/RecodingPage";
import { userLoggedInSelector } from "./stores/UserSlice";
import { getCookie } from './cookie';
import { useEffect } from 'react';

function App() {
  const user = useSelector(userLoggedInSelector);
  const cookie = getCookie('accessToken');
  console.log(cookie)
  console.log(user)
  const navigate = useNavigate();

  useEffect(() => {
    if (cookie && user) {
      navigate('/');
    }
    if (!cookie) {
      navigate('/login');
    }
  }, [cookie, user]);

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/videoList' element={<VideoList/>}/>
          <Route path='/guideUpload' element={<GuideUpload/>}/>
          <Route path='/mypage' element={<MyPage/>}/>
          <Route path='/videoEditor' element={<VideoEditor/>}/>
          <Route path="/record" element={<WebcamStreamCapture />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/api/v1/auth/login" element={<KakaoLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
