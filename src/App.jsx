import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Main from "./pages/Explore/Main";
import "tailwindcss/tailwind.css";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Main />} />
      </Routes>
    </Router>
  );
}
