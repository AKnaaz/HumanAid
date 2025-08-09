import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router'; 
import logo from "../assets/logo3.png";
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import { Helmet } from 'react-helmet';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const { user, signOutUser } = React.useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState(() => {
    return localStorage.getItem("volViewMode") || "card";
  });

  const handleToggleView = () => {
    const newView = viewMode === "card" ? "table" : "card";
    setViewMode(newView);
    localStorage.setItem("volViewMode", newView);
    window.dispatchEvent(new Event("volViewModeChange")); 
  };

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log('signout');
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".profile-dropdown")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
      <div className="navbar container mx-auto shadow-sm px-4 sticky top-0 w-full z-50 bg-[#0FA4AF]">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 shadow"
            >
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/allVolunteerNeedPosts">All Volunteer Need Posts</NavLink></li>
              <li><NavLink to="/about">About Us</NavLink></li>
              {user && (
                <li className="dropdown">
                  <div tabIndex={0} className="btn btn-sm">My Profile</div>
                  <ul tabIndex={0} className="dropdown-content menu bg-base-200 rounded-box z-10 w-52 p-2 shadow-sm">
                    <li><NavLink to="/addVolunteerNeedPost">Add Volunteer Need Post</NavLink></li>
                    <li><NavLink to="/manageMyPosts">Manage My Posts</NavLink></li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
          <img className="w-8 h-8 rounded-full" src={logo} alt="Logo" />
          <h2 className="text-xl font-semibold">
            HumanAid
          </h2>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-4 items-center">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "font-bold" : ""}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/allVolunteerNeedPosts" className={({ isActive }) => isActive ? "font-bold" : ""}>
                All Volunteer Need Posts
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? "font-bold" : ""}>
                About Us
              </NavLink>
            </li>
            {user && (
              <li className="relative profile-dropdown">
                <div
                  onClick={toggleDropdown}
                  className="flex items-center gap-1 cursor-pointer select-none"
                >
                  <Helmet>
                    <title>My Eleventh Assignment | My Profile</title>
                  </Helmet>
                  My Profile
                  {isOpen ? <RiArrowDropUpLine size={20} /> : <RiArrowDropDownLine size={20} />}
                </div>
                {isOpen && (
                  <ul className="absolute top-full mt-2 left-0 menu bg-base-200 rounded-box z-20 w-52 p-2 shadow-sm">
                    <li>
                      <NavLink
                        to="/addVolunteerNeedPost"
                        className={({ isActive }) => isActive ? "font-semibold" : ""}
                      >
                        Add Volunteer Need Post
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/manageMyPosts"
                        className={({ isActive }) => isActive ? "font-semibold" : ""}
                      >
                        Manage My Posts
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
            )}
          </ul>
        </div>

        <div className="navbar-end gap-2">

          <button onClick={handleToggleView} className="btn btn-ghost">
            <FaBars />
          </button>

          <label className="toggle text-base-content">
            <input type="checkbox" value="dark" className="theme-controller" />
            <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </g>
            </svg>
            <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </g>
            </svg>
          </label>

          {
            user ? (
              <div className="flex items-center gap-2 md:gap-3">
                <div className="relative group md:mr-1">
                  <img
                    className="w-5 h-5 md:w-10 md:h-10 rounded-full cursor-pointer bg-white"
                    src={user.photoURL || ""}
                    alt="User"
                  />
                  <span className="absolute top-5 left-1/2 -translate-x-1/2 
                    bg-white text-sm rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-all duration-200 z-50 whitespace-nowrap">
                    {user && user.displayName ? user.displayName : "User"}
                  </span>
                </div>
                <button onClick={handleSignOut} className='btn bg-white text-[#0FA4AF] rounded-3xl'>Log Out</button>
              </div>
            ) : (
              <NavLink to="/login" className="btn bg-white text-[#0FA4AF] rounded-3xl">Login</NavLink>
            )
          }
        </div>
      </div>
  );
};

export default Navbar;   