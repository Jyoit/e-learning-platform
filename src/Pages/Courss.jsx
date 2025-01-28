import React from 'react'
import { Link } from 'react-router-dom';
import courses from './courseData';
import "./Courss.css";


export default function Courss() {
  return (
    <div className="courses-container">
      <h1 className="courses-title">Our Courses</h1>
      <div className="course-cards">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} className="course-image" />
            <div className="course-details">
              <h2 className="course-title">{course.title}</h2>
              <p className="course-description">{course.description}</p>
              <p className="course-instructor">Instructor: {course.instructor}</p>
              <Link to={`/course/${course.id}`}>
              <button className="enroll-button">Enroll Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
