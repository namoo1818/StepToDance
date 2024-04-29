import { Routes, Route } from "react-router";
import MainPage from "./pages/MainPage/MainPage";
import { WebcamStreamCapture } from "./pages/RecodingPage/RecodingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/record" element={<WebcamStreamCapture />} />
    </Routes>
  );
}

export default App;
