import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import "./Navbar.css";

export default function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const toggleNotifications = () => setShowNotifications(!showNotifications);

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchInput}`);
    setSearchInput('');
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="text-xl font-bold hover:text-gray-300">
        E-LearnFlow
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/courses" className="hover:text-gray-300">Courses</Link>
          </li>
          <li>
            <Link to="#" className="hover:text-gray-300">Profile</Link>
          </li>
        </ul>
        <form onSubmit={handleSearch} className="relative">
          
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
            placeholder="Search"
          />
          <button type="submit" className="absolute right-2 top-2 text-gray-300 hover:text-white">
            🔍
          </button>
        </form>
        <button onClick={toggleNotifications} className="hover:text-gray-300">🔔</button>
        {showNotifications && (
          <div className="absolute right-0 mt-2 w-64 bg-gray-700 rounded-lg p-4 shadow-lg">
            <p className="text-lg font-semibold">Notifications</p>
            <ul>
              <li>New message</li>
              <li>Course updated</li>
              <li>Complete your assignment</li>
            </ul>
            <button onClick={toggleNotifications} className="mt-4 w-full bg-blue-500 py-2 rounded-lg">
              Close
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
