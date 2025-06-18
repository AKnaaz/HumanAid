import React from 'react';
import { Link, useLoaderData } from 'react-router';
import BeAVolunteer from './BeAVolunteer';

const VolunteerNeedPostsDetails = () => {
  const vols = useLoaderData();

  if (!vols) {
    return <div className="text-center mt-20 text-red-500">No data found.</div>;
  }

  const {_id, thumbnail, title, category, deadline, description, location, volunteers_needed } = vols;

  return (
    <div className='p-10 md:p-20'>
      <h1 className='text-center text-3xl font-bold mb-5'>Volunteer Task Details</h1>
      <div className="p-6 max-w-md mx-auto rounded-xl shadow-lg space-y-4">
        <img src={thumbnail} alt={title} className="rounded-md w-full object-cover" />
        <h2 className="text-2xl font-bold">{title}</h2>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Category:</strong> {category}</p>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Volunteers Needed:</strong> {volunteers_needed}</p>
        <p><strong>Deadline:</strong> {deadline}</p>
      </div>
      <div className='text-center my-5'>
       <Link to={`/beAVols/${_id}`}>
          <button className='btn bg-[#0FA4AF] text-white'>Be a Volunteer</button>
        </Link>

      </div>
    </div>
  );
};

export default VolunteerNeedPostsDetails;
