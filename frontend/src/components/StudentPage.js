import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './StudentPage.css'; // Optional: Import CSS for styling

const StudentPage = () => {
  const { studentId } = useParams(); // Extract studentId from URL parameters
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/students/${studentId}/courses`)
      .then(response => {
        setCourses(response.data);
        setError(null);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
        setError('Failed to fetch courses.');
      });
  }, [studentId]);

  const handleCompletionChange = (courseId) => {
    setCourses(courses.map(course => 
      course.id === courseId ? { ...course, completed: !course.completed } : course
    ));
  };

  if (error) return <div>{error}</div>;
  if (courses.length === 0) return <div>No enrolled courses found.</div>;

  return (
    <div className="student-page">
      <h2>Enrolled Courses for Hema</h2>
      <div className="course-list">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <img src={course.thumbnail} alt={`${course.name} Thumbnail`} />
            <h3>{course.name}</h3>
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p><strong>Due Date:</strong> {course.dueDate}</p>
            <p><strong>Progress:</strong></p>
            <progress value={course.progress} max={100}></progress>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={course.completed || false}
                  onChange={() => handleCompletionChange(course.id)}
                />
                Mark as Completed
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentPage;
