import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseDetails from './components/CourseDetails';
import StudentDashboard from './components/StudentDashboard';
import CourseDropdown from './components/CourseDropdown'; 
import StudentPage from './components/StudentPage';

const App = () => (
  <Router>
    <div className="App">
      {/* Navbar with heading */}
      <div style={{
        backgroundColor: '#8A2BE2',
        color: '#fff',
        padding: '10px',
        textAlign: 'center'
      }}>
        <h1>Course Management System</h1>
      </div>
      <Routes>
        <Route path="/" element={<CourseDropdown />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/course/:id/students" element={<StudentDashboard />} />
        <Route path="/students/:studentId/courses" element={<StudentPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;