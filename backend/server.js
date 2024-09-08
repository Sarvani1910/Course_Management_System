const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors()); // Enable CORS
app.use(express.json());

// Sample data with students for each course
const courses = [
  {
    id: 1,
    name: "React for Beginners",
    instructor: "Prof Kannan Moudgalya",
    description: "Learn the basics of React",
    enrollmentStatus: "Closed",
    duration: "4 weeks",
    schedule: "Mon-Wed-Fri",
    location: "Online",
    prerequisites: "Basic JavaScript",
    syllabus: [
      {
      week: 1,
      topic: 'Introduction to React Native',
      content: 'Overview of React Native, setting up your development environment.'
      },
      {
      week: 2,
      topic: 'Building Your First App',
      content: 'Creating a simple mobile app using React Native components.'
      },
      {
      week: 3,
      topic: 'Connect with backend',
      content: 'Connecting your React Native app to a backend using a REST API.'
      },
      {
        week: 4,
        topic: 'Navigation',
        content: 'Implementing navigation between screens in React Native.'
      },
      ],
    thumbnail: "https://cdn.prod.website-files.com/661dc153b706dbb6ca6be504/663b222726c7f9b37d3c6d05_react.png",
    progress: 70,
    dueDate: "2024-12-31",
    students: [ // Example students for this course
      { id: 1, name: "Hema", email: "hema@gmail.com", progress: 80 },
      { id: 2, name: "Rishita", email: "rishita@gmail.com", progress: 60 }
    ]
  },
  {
    id: 2,
    name: "Advanced Node.js",
    instructor: "Prof Padmaja",
    description: "Advanced concepts in Node.js",
    enrollmentStatus: "Closed",
    duration: "6 weeks",
    schedule: "Mon-Fri",
    location: "Online",
    prerequisites: "Basic Node.js",
    syllabus: [
      {
        week: 1,
        topic: 'Asynchronous Programming and Event Loop',
        content: 'Deep dive into callbacks, promises, async/await, and Node.js process model.'
      },
      {
        week: 2,
        topic: 'Advanced Express.js ',
        content: 'Develop RESTful APIs, use middleware, and implement authentication/authorization.'
      },
      {
        week: 3,
        topic: 'Performance Optimization ',
        content: 'Profile and monitor applications, address bottlenecks, and use caching and clustering'
      },
      {
        week: 4,
        topic: 'Advanced Database Integration ',
        content: ' Integrate SQL/NoSQL databases, use ORM/ODM libraries, and handle transactions.'
      },
      {
        week: 5,
        topic: 'Microservices and Serverless Architectures',
        content: 'Design microservices, handle inter-service communication, and deploy serverless functions.'
      },
      {
        week: 6,
        topic: 'Security and Best Practices ',
        content: 'Secure applications, implement rate limiting, and follow best development and deployment practices.'
      },
    ],
    thumbnail: "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
    progress: 40,
    dueDate: "2024-11-15",
    students: [ // Example students for this course
      { id: 1, name: "Hema", email: "hema@gmail.com", progress: 30 },
      { id: 2, name: "Sushmitha", email: "sushmitha@gmail.com", progress: 20 },
      { id: 2, name: "Ravi", email: "ravi@gmail.com", progress: 15 }
    ]
  },
  {
    id: 3,
    name: "Advanced Java",
    instructor: "Dr. Anil Kumar",
    description: "Advanced concepts in Java programming",
    enrollmentStatus: "Closed",
    duration: "6 weeks",
    schedule: "Mon-Fri",
    location: "Online",
    prerequisites: "Basic Java",
    syllabus: [
      {
        week: 1,
        topic: "Object-Oriented Programming Principles",
        content: "Deep dive into inheritance, polymorphism, encapsulation, and abstraction in Java."
      },
      {
        week: 2,
        topic: "Java Concurrency and Multithreading",
        content: "Explore threads, synchronization, concurrent collections, and executors in Java."
      },
      {
        week: 3,
        topic: "Java Streams and Lambda Expressions",
        content: "Understand functional programming, lambda expressions, and stream API for data processing."
      },
      {
        week: 4,
        topic: "Java I/O and Serialization",
        content: "Learn about file handling, serialization, and deserialization in Java."
      },
      {
        week: 5,
        topic: "Java Networking and Web Services",
        content: "Build and consume RESTful web services and understand Java networking fundamentals."
      },
      {
        week: 6,
        topic: "Java Best Practices and Design Patterns",
        content: "Implement design patterns and follow best practices for clean and maintainable Java code."
      }
    ],
    thumbnail: "https://lh3.googleusercontent.com/GFE5jAmT9jFuj7XqDxccIuKOAxW7FC0oyBu8V-HbO3VaRXKI705Y7Ho8j8TL_tZJqEPpuYZ4Ntg77pbUGIZ5-uZOvphoCJf9bXianfLWslwSb4AcXbIX4baXex3PdfjaKWSlvAeY",
    progress: 50,
    dueDate: "2024-11-20",
    students: [
      { "id": 1, "name": "Raj", "email": "raj@gmail.com", "progress": 40 },
      { "id": 2, "name": "Meera", "email": "meera@gmail.com", "progress": 30 },
      { "id": 3, "name": "Vijay", "email": "vijay@gmail.com", "progress": 25 }
    ]
  },
  {
    id: 4,
    name: "Advanced Python",
    instructor: "Dr. Priya Sharma",
    description: "In-depth concepts in Python programming",
    enrollmentStatus: "Open",
    duration: "6 weeks",
    schedule: "Mon-Fri",
    location: "Online",
    prerequisites: "Basic Python",
    syllabus: [
      {
        week: 1,
        topic: "Advanced Python Features",
        content: "Explore decorators, generators, and context managers in Python."
      },
      {
        week: 2,
        topic: "Concurrency and Parallelism",
        content: "Understand threading, multiprocessing, and asynchronous programming in Python."
      },
      {
        week: 3,
        topic: "Data Science and Machine Learning",
        content: "Introduction to libraries like NumPy, pandas, and scikit-learn for data analysis and ML."
      },
      {
        week: 4,
        topic: "Web Development with Django",
        content: "Build web applications using Django, focusing on models, views, and templates."
      },
      {
        week: 5,
        topic: "Python Testing and Debugging",
        content: "Learn about unit testing, integration testing, and debugging techniques in Python."
      },
      {
        week: 6,
        topic: "Python Best Practices and Design Patterns",
        content: "Implement design patterns and follow best practices for clean and efficient Python code."
      }
    ],
    thumbnail: "https://media.licdn.com/dms/image/D4D12AQGkjC4g7LwHMA/article-cover_image-shrink_600_2000/0/1678515120746?e=2147483647&v=beta&t=AQJkpUeeJ8vciEI8cQ2nQuAH6CvlsuytB7duosMI2s0",
    progress: 60,
    dueDate: "2024-12-05",
    students: [
      { id: 1, name: "Aditi", email: "aditi@gmail.com", progress: 50 },
      { id: 2, name: "Rohan", email: "rohan@gmail.com", progress: 40 },
      { id: 3, name: "Sanya", email: "sanya@gmail.com", progress: 35 }
    ]
  }  
];

// API Endpoints
app.get('/courses', (req, res) => {
  res.json(courses);
});

app.get('/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('Course not found');
  res.json(course);
});

app.get('/courses/:id/students', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('Course not found');
  res.json(course.students);
});

const students = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    enrolledCourses: [1, 2] // List of course IDs
  }
];

const enrolledCourses = (studentId) => {
  // Filter courses based on enrolledCourses
  const student = students.find(s => s.id === studentId);
  if (!student) return [];
  
  return courses.filter(course => student.enrolledCourses.includes(course.id));
};

app.get('/students/:id/courses', (req, res) => {
  const studentId = parseInt(req.params.id);
  const enrolledCoursesList = enrolledCourses(studentId);
  res.json(enrolledCoursesList);
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});