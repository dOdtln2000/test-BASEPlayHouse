import { ExamPage } from "./pages/exam";
import {  BrowserRouter as Router,Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
    <Routes>
      <Route path="exams/:id" element={<ExamPage />} />
    </Routes>
    </Router>
  );
}

export default App;
