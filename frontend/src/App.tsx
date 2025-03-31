import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<><h1>About</h1></>} />
      </Routes>
    </Router>
  );
}