import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/courses/${id}`)
      .then(response => {
        setCourse(response.data);
        setError(null); 
      })
      .catch(error => {
        console.error('Error fetching course details:', error);
        setError('Failed to fetch course details.');
      });
  }, [id]);

  const handleStudentDashboard = () => {
    navigate(`/course/${id}/students`);
  };

  if (error) return <div>{error}</div>;
  if (!course) return <div>Loading...</div>;

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '20px',
        color: '#000',
        backgroundColor: '#f4f4f4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start', 
        maxWidth: '1200px',
        width: '100%',
      }}>
        <div style={{ flex: 2, paddingRight: '20px' }}>
          <h2>{course.name}</h2>
          <p><strong>Instructor's Name:</strong> {course.instructor}</p>
          <p><strong>Description:</strong> {course.description}</p>
          <p><strong>Enrollment Status:</strong> {course.enrollmentStatus}</p>
          <p><strong>Course Duration:</strong> {course.duration}</p>
          <p><strong>Schedule:</strong> {course.schedule}</p>
          <p><strong>Location:</strong> {course.location}</p>
          <p><strong>Pre-requisites:</strong> {course.prerequisites}</p>
          <h3>Syllabus:</h3>
          <ul>
            {course.syllabus.map((item, index) => (
              <li key={index}>
                <h3>Week {item.week}: {item.topic}</h3>
                <p>{item.content}</p>
              </li>
            ))}
          </ul>
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
            }}
          >
            Enrolled Students
          </button>
        </div>

        <div className="course-thumbnail" style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start', 
          marginLeft: '20px', 
        }}>
          <img src={course.thumbnail} alt="Course Thumbnail" style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }} />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;