import "./App.css";
import { Routes, Route } from "react-router";
import MainPage from "./pages/MainPage/MainPage";
import MyPage from "./pages/MyPage/MyPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
}

export default App;
