import React from 'react';
import { HashRouter, Route, NavLink, Routes, Navigate } from 'react-router-dom';
import Resume from './pages/Resume';
import Home from './pages/Home';
import './App.css';

const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "text-white px-4 py-2 rounded bg-gray-700"
    : "text-white px-4 py-2 rounded hover:bg-gray-700";

const App = () => {
  return (
    <HashRouter>
      <div>
        <nav className="sticky top-0 bg-gray-800 p-4 overflow-x-auto">
          <NavLink
            to="/"
            className={navLinkClassName}
          >
            Home
          </NavLink>
          <NavLink
            to="/resume"
            className={navLinkClassName}
          >
            Resume
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          {/* Redirect any other path to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;