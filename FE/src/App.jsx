import { Routes, Route } from "react-router";
import MainPage from "./pages/MainPage/MainPage";
import MyPage from "./pages/MyPage/MyPage";

import { WebcamStreamCapture } from "./pages/RecodingPage/RecodingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/record" element={<WebcamStreamCapture />} />
    </Routes>
  );
}

export default App;
