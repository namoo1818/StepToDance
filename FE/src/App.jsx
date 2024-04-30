import React from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import MainPage from "./pages/MainPage/MainPage";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cookie, user]);
  return (
    <Routes>
      {cookie && user && (
        <Route path="/" element={<MainPage />}>
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/record" element={<WebcamStreamCapture />} />
        </Route>
      )}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/api/v1/auth/login" element={<KakaoLogin />} />
    </Routes>
  );
}

export default App;
