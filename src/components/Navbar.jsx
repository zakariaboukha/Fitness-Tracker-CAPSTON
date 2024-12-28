import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoimage from '../assets/images/logo.png';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsMenuOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <nav className="bg-gray-100 bg-opacity-20 backdrop-filter backdrop-blur-lg z-50 relative">  {/* Ensure Navbar is on top */}
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-1 flex items-center justify-center sm:justify-start">
            <Link to="/">
              <img className="h-20 w-auto sm:h-25" src={logoimage} alt="Your Company" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              <NavLink to="/dashboard" label="Dashboard" activeLink={activeLink} onClick={handleLinkClick} />
              <NavLink to="/workouts" label="Workouts" activeLink={activeLink} onClick={handleLinkClick} />
              <NavLink to="/projects" label="Projects" activeLink={activeLink} onClick={handleLinkClick} />
              <NavLink to="/calendar" label="Calendar" activeLink={activeLink} onClick={handleLinkClick} />
            </div>
          </div>

          {/* Profile Menu */}
          <div className="relative ml-3">
            <div>
              <button
                type="button"
                className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>
            </div>
            {isProfileMenuOpen && (
              <div className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700">Your Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700">Settings</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700">Sign out</a>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-red-700 hover:text-white hover:shadow-[0_0_10px_rgb(255,0,0)] transition-shadow duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="space-y-1 px-2 pb-3 pt-2">
          <NavLink to="/dashboard" label="Dashboard" activeLink={activeLink} onClick={handleLinkClick} mobile />
          <NavLink to="/workouts" label="Workouts" activeLink={activeLink} onClick={handleLinkClick} mobile />
          <NavLink to="/projects" label="Projects" activeLink={activeLink} onClick={handleLinkClick} mobile />
          <NavLink to="/calendar" label="Calendar" activeLink={activeLink} onClick={handleLinkClick} mobile />
        </div>
      </div>
    </nav>
  );
};

//extracted component
const NavLink = ({ to, label, activeLink, onClick, mobile }) => {
  const isActive = activeLink === to;
  return (
    <Link
      to={to}
      className={`rounded-md px-3 py-2 text-${mobile ? 'base' : 'sm'} font-medium text-black-300 ${
        isActive ? 'bg-red-600 text-white' : ''
      } hover:bg-red-600 hover:text-white hover:shadow-[0_0_10px_rgb(255,0,0)] transition-shadow duration-300 block`}
      onClick={() => onClick(to)}
    >
      {label}
    </Link>
  );
};

export default Navbar;
