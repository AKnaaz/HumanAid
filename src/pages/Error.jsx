import React from 'react';
import { Link } from 'react-router';
import backgroundImg from "../assets/error4.jpg";

const Error = () => {
  return (
    <div
      className="pt-20 min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="card w-full max-w-md mx-auto rounded-lg">
        <div className="card-body items-center text-center p-6 md:p-10">
          <h2 className="card-title text-2xl md:text-4xl font-bold mb-4">404 - Page Not Found</h2>
          <p className="mb-6 text-base md:text-lg text-black font-semibold">
            Oops! The page you're looking for doesn't exist.
          </p>
          <div className="card-actions">
            <Link to="/">
              <button className="btn bg-orange-200 hover:bg-orange-300 text-orange-900 font-semibold px-6 py-2 rounded transition">
                Go Back Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
