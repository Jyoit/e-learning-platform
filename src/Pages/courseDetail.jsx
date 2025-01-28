import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get the course ID from URL
import courses from './courseData'; // Import the courses data

const CourseDetail = () => {
  // Get the course ID from the URL
  const { courseId } = useParams();

  // Find the course by the ID
  const course = courses.find((course) => course.id === parseInt(courseId));

  if (!course) {
    return <div>Course not found.</div>;
  }

  return (
    <div className="course-detail-container">
      <h1 className="course-detail-title">{course.title}</h1>
      <img src={course.image} alt={course.title} className="course-detail-image" />
      <div className="course-detail-description">
        <h2>Course Overview</h2>
        <p>{course.detailedDescription}</p>
      </div>
      <div className="course-instructor-info">
        <h3>Instructor: {course.instructor}</h3>
      </div>
      {/* Add any additional details here */}
    </div>
  );
};

export default CourseDetail;
