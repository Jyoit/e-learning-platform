import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'; // Import useParams to get the course ID from URL
import courses from './courseData'; // Import the courses data
import "./courseDetail.css";

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
    
  <div className="course-detail-intro">
    <h1 className="course-detail-title">{course.title}</h1>
    <div className="course-detail-instructor-info">
      <h3>Instructor: {course.instructor}</h3>
    </div>
    <p className="course-detail-description">{course.description}</p>
  <img src={course.image} alt={course.title} className="course-detail-image" />
  </div>


      <div className="course-detail-detailDescription">
        <h2>Description</h2>
        <p>{course.detailedDescription}</p>
      </div>

      <div className="course-detail-keyCourseDetails">
        <h2>Key Course Details</h2>
        <p>Start Date:{course.startDate}</p>
        <p>Duration:{course.duration}</p>
        <p>Fees:{course.fees}</p>
        <p>Requirements:{course.requirements}</p>
      </div>
      <Link to={`/course/${course.id}`}>
              <button className="enroll-button course-detail">Enroll Now</button>
              </Link>
      <div className="course-detail-modules">
        <h2>Modules</h2>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        <br/>Phasellus non urna nec magna congue gravida in nec neque. 
            Fusce cursus magna vel lorem fringilla, ac facilisis eros dapibus. 
            Integer sollicitudin tortor vel enim venenatis, nec faucibus libero venenatis. 
            Vestibulum auctor ex id nulla vehicula, non facilisis eros scelerisque. 
            Aliquam erat volutpat. Donec tempor tortor ut metus tincidunt, at malesuada arcu tristique. 
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
            Maecenas ut risus vel odio consequat vehicula. 
            Ut euismod purus ac justo condimentum malesuada. 
            Suspendisse potenti. Nulla facilisi. 
            Nam a lectus sit amet orci pharetra feugiat. 
            Duis suscipit lectus ac enim euismod, in scelerisque elit fermentum. 
            Morbi vestibulum ligula ac massa dapibus, eu gravida arcu tincidunt. 
            Etiam vehicula ligula sed arcu ultricies fermentum. 
            In hac habitasse platea dictumst. 
            Praesent nec orci id sapien hendrerit faucibus non nec felis. 
            Nullam accumsan nunc eget nunc pharetra, ac lacinia ex convallis. 
            Curabitur quis lectus at nunc ultricies ultrices. 
            Quisque eget massa vel orci gravida consequat. 
            Donec elementum magna nec eros varius, ut feugiat felis consectetur.</span>
      </div>

      <div className="course-detail-outcomes">
        <h3>Learning Outcomes</h3>
        <ul>
            <li>Understand the fundamental concepts and principles of the subject.</li>
            <li>Develop problem-solving and critical-thinking skills.</li>
            <li>Gain hands-on experience through practical applications.</li>
            <li>Learn how to apply theoretical knowledge to real-world scenarios.</li>
            <li>Improve technical and analytical skills relevant to the industry.</li>
            <li>Enhance communication and collaboration skills.</li>
            <li>Master the use of essential tools and technologies.</li>
            <li>Build a strong foundation for advanced learning and career growth.</li>
            <li>Develop the ability to work on projects independently and in teams.</li>
            <li>Gain confidence in presenting ideas and solutions effectively.</li>
        </ul>
      </div>

      {/* Add any additional details here */}
      <div><h2>FAQs</h2></div>
    </div>
  );
};

export default CourseDetail;
