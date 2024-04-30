import { Routes, Route } from "react-router";
import MainPage from "./pages/MainPage/MainPage";
import MyPage from "./pages/MyPage/MyPage";
import LoginPage from "./pages/LoginPage/LoginPage";

import { WebcamStreamCapture } from "./pages/RecodingPage/RecodingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/record" element={<WebcamStreamCapture />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
