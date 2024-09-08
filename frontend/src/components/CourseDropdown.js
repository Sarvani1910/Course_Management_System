import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CourseDropdown.css'; // Ensure this file includes the necessary CSS

const CourseDropdown = () => {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isListVisible, setIsListVisible] = useState(false); // Track visibility of the list
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  const handleCourseClick = (courseId) => {
    navigate(`/courses/${courseId}`);
  };

  const handleStudentDashboard = () => {
    const studentId = 1; // Replace with actual student ID from your authentication system
    navigate(`/students/${studentId}/courses`);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleDropdownToggle = () => {
    setIsListVisible(!isListVisible); // Toggle list visibility
  };

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      style={{
        backgroundImage: 'url("https://www.shutterstock.com/image-photo/training-courses-business-concept-stack-260nw-549736798.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        color: '#fff',
      }}
    >
      <div className="course-container">
        <h2>Available Courses</h2>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by course name or instructor"
            value={searchQuery}
            onChange={handleSearchChange}
            style={{
              padding: '10px',
              fontSize: '16px',
              width: '100%',
              borderRadius: '4px',
              border: '1px solid #ddd',
              marginBottom: '20px',
              boxSizing: 'border-box'
            }}
          />
          <button
            className="dropdown-toggle"
            onClick={handleDropdownToggle}
          >
            {isListVisible ? '▲' : '▼'}
          </button>
        </div>
        <div className={`course-list ${isListVisible ? 'show' : 'hide'}`}>
          {filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
              <div
                key={course.id}
                className="course-item"
                onClick={() => handleCourseClick(course.id)}
              >
                <h3>{course.name}</h3>
                <p><strong>Instructor:</strong> {course.instructor}</p>
                <p><strong>Description:</strong> {course.description}</p>
                <p><strong>Due Date:</strong> {course.dueDate}</p>
              </div>
            ))
          ) : (
            <p>No courses found.</p>
          )}
        </div>
        <button
          onClick={handleStudentDashboard}
          style={{
            marginTop: '20px',
            padding: '10px',
            backgroundColor: '#8A2BE2',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Go to Student Dashboard
        </button>
      </div>
    </div>
  );
};

export default CourseDropdown;
