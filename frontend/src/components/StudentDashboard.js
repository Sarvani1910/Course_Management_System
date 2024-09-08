import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './StudentDashboard.css'; 

const StudentDashboard = () => {
  const { id } = useParams();
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/courses/${id}/students`)
      .then(response => {
        setStudents(response.data);
        setError(null); 
      })
      .catch(error => {
        console.error('Error fetching students:', error);
        setError('Failed to fetch student details.');
      });
  }, [id]);

  if (error) return <div>{error}</div>;
  if (students.length === 0) return <div>No students enrolled in this course.</div>;

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '20px',
        color: '#000',
        backgroundColor: '#f4f4f4',
        display: 'flex',
        justifyContent: 'Top',
        alignItems: 'Top',
      }}
    >
      <div className="student-dashboard-container">
        <h2>Students Enrolled</h2>
        <table className="student-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.progress}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentDashboard;