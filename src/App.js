import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Footerr from "./Components/Footerr";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Courss from './Pages/Courss';
import CourseDetail from './Pages/courseDetail';



function App() {
  return (
    <div>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courss/>} />
        <Route path="/course/:courseId" element={<CourseDetail/>} />
        
        {/* <Route path="/profile" element={<Profile />} /> */}
        </Routes>
        <Footerr/>
    </div>
  );
}

export default App;


