
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import courses from './courseData';

export default function Home() {
   // Importing course data

  // Function to randomly shuffle courses and pick the first 2-3
  const getRandomCourses = (num) => {
    const shuffled = [...courses].sort(() => Math.random() - 0.5); // Random shuffle
    return shuffled.slice(0, num);  // Get the first 'num' courses
  };

  const events = [
    {
      title: 'AI Conference 2025',
      date: 'March 15, 2025',
      description: 'Join us for an exciting conference on Artificial Intelligence.',
    },
    {
      title: 'Web Development Bootcamp',
      date: 'April 10, 2025',
      description: 'A comprehensive bootcamp to master web development.',
    },
  ];

  const popularCourses = getRandomCourses(3);



  return (
    <div>
       {/*  Hero Banner */ }
       <section className="hero-banner">
        <div className="hero-text">
          <h1>Upgrade Your Skills Today!</h1>
          <p>Explore 1000+ courses in technology, design, and more.</p>
          <Link to="/courses">
          <button className="cta-btn">Browse Courses</button>
        </Link>
        </div>
      </section>

       {/* Popular Courses Section */}
       <section className="popular-courses">
      <h2>Popular Courses</h2>
      <div className="course-grid">
        {popularCourses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} />
            <div className="course-info">
              <h3>{course.title}</h3>
              <p>{course.instructor}</p>
              <div className="rating">{course.rating}</div>
              <div className="price">{course.price}</div>
              
              <Link to={`/course/${course.id}`}>
                <button className="enroll-btn">View Details</button>
               </Link>
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* Upcoming Events Section */}
      <section className="upcoming-events">
        <h2>Upcoming Events</h2>
        <div className="event-grid">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.description}</p>
              <Link to="/">
              <button className="register-btn">Register Now</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h4>How to enroll?</h4>
          <p>Simply select a course and click "Enroll Now" to get started.</p>
        </div>
        <div className="faq-item">
          <h4>Are the courses certified?</h4>
          <p>Yes, all our courses offer certification upon completion.</p>
        </div>
        <div className="faq-item">
          <h4>Is there a refund policy?</h4>
          <p>Yes, we offer a 30-day refund policy if you are not satisfied with the course.</p>
        </div>
      </section>

      {/* Final CTA Button */}
      <section className="cta-final">
        <Link to="/courses">
          <button className="cta-btn">Enroll in Courses Now</button>
        </Link>
      </section>
       
    </div>
  )
}
