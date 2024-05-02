import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";
import MainPage from "./pages/MainPage/MainPage";
import Home from "./pages/Home";
import VideoList from "./pages/VideoList";
import GuideUpload from "./pages/GuideUpload";
import VideoEditor from "./pages/VideoEditor";
import GuideDetail from "./pages/VideoPage/GuideDetail";
import MyPage from "./pages/MyPage/MyPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import KakaoLogin from "./pages/LoginPage/KakaoLogin";
import { WebcamStreamCapture } from "./pages/RecordingPage/RecordingPage";
import { userLoggedInSelector } from "./stores/UserSlice";
import { getCookie } from "./cookie";
import { useEffect } from "react";
import Layout from "./components/Layout";

function App() {
  const user = useSelector(userLoggedInSelector);
  const cookie = getCookie("accessToken");
  console.log(cookie);
  console.log(user);
  const navigate = useNavigate();

  useEffect(() => {
    if (cookie && user) {
      navigate("/home");
    }
    if (!cookie) {
      navigate("/login");
    }
  }, [cookie, user]);

  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/videoList" element={<VideoList />} />
          <Route path="/guideUpload" element={<GuideUpload />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/videoEditor" element={<VideoEditor />} />
          <Route path="/record" element={<WebcamStreamCapture />} />
          <Route path="/guideDetail" element={<GuideDetail />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/api/v1/auth/login" element={<KakaoLogin />} />
      </Routes>
    </div>
  );
}

export default App;
