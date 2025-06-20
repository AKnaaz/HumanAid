import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import Swal from 'sweetalert2';


const BeAVolunteer = () => {
  const { id: postId } = useParams();
  const { user } = useAuth();

  const [postData, setPostData] = useState(null);
  const [suggestion, setSuggestion] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3000/vols/${postId}`)
      .then((res) => res.json())
      .then((data) => setPostData(data));
  }, [postId]);

  const handleRequest = async (e) => {
    e.preventDefault();

     const checkRes = await
      fetch(`http://localhost:3000/hasRequested?email=${user.email}&postId=${postData._id}`);
    const checkData = await checkRes.json();

    if (checkData.hasRequested) {
      Swal.fire({
        icon: 'info',
        title: 'Already Requested',
        text: 'You have already requested to be a volunteer for this post.',
        confirmButtonColor: '#0FA4AF'
      });
      return;
    }

    if (!postData) return;

    const { _id, ...cleanPostData } = postData;

    const requestInfo = {
      ...cleanPostData,
      postId,
      volunteer_name: user?.displayName,
      volunteer_email: user?.email,
      suggestion,
      status: 'requested',
    };

    axios
      .post('http://localhost:3000/volunteerRequests', requestInfo)
      .then((res) => {
        if (res.data?.success) {
          Swal.fire({
            icon: 'success',
            title: 'Request Sent!',
            text: 'Your volunteer request has been submitted successfully.',
            confirmButtonColor: '#0FA4AF'
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong. Please try again!',
          });
        }
        })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Submission Failed',
          text: 'Failed to submit request. Please try again later.',
        });
      });
  };

  if (!postData) return <div>Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 shadow-lg rounded-lg">
      <Helmet>
        <title>My Eleventh Assignment | Be A Volunteer</title>
      </Helmet>
      <h2 className="text-2xl font-bold text-center text-[#0FA4AF] mb-6">
        Be a Volunteer
      </h2>
      <form onSubmit={handleRequest} className="space-y-4">
        <img src={postData.thumbnail} alt="" className="w-full rounded" />
        <input value={postData.title} readOnly className="input input-bordered w-full" />
        <textarea
          value={postData.description}
          readOnly
          className="textarea textarea-bordered w-full"
          rows={3}
        ></textarea>
        <input value={postData.category} readOnly className="input input-bordered w-full" />
        <input value={postData.location} readOnly className="input input-bordered w-full" />
        <input value={postData.volunteers_needed} readOnly className="input input-bordered w-full" />
        <input value={postData.deadline} readOnly className="input input-bordered w-full" />
        <input value={postData.organizer_name} readOnly className="input input-bordered w-full" />
        <input value={postData.organizer_email} readOnly className="input input-bordered w-full" />
        <input value={user?.displayName || ''} readOnly className="input input-bordered w-full" />
        <input value={user?.email || ''} readOnly className="input input-bordered w-full" />
        <textarea
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          placeholder="Write your suggestion..."
          className="textarea textarea-bordered w-full"
        ></textarea>
        <input type="submit" value="Request" className="btn bg-[#0FA4AF] text-white w-full" />
      </form>
    </div>
  );
};

export default BeAVolunteer;
