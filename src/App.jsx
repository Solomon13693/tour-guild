import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CourseAccess from "./Pages/CourseAccess";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courseaccess" element={<CourseAccess />} />
      </Routes>
    </Router>
  );
}

export default App;
