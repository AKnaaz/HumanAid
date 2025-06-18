import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';

const BeAVolunteer = () => {
  const { id } = useParams();
  const { user } = useAuth();

  const [postData, setPostData] = useState(null);
  const [suggestion, setSuggestion] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3000/vols/${id}`)
      .then(res => res.json())
      .then(data => setPostData(data));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestInfo = {
      ...postData,
      postId: postData._id.toString(),
      volunteer_name: user?.displayName,
      volunteer_email: user?.email,
      suggestion,
      status: 'requested',
    };

    const res = await fetch('http://localhost:3000/volunteerRequest', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestInfo)
    });

    const result = await res.json();

    if (result.insertedId) {
  Swal.fire({
    title: 'Success!',
    text: 'Request submitted successfully!',
    icon: 'success',
    confirmButtonColor: '#0FA4AF',
    confirmButtonText: 'OK'
  });
}

  };

  if (!postData) return <div className="text-center mt-10">
    <span className="loading loading-ring loading-xl"></span>
    </div>;

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-[#0FA4AF] mb-6">Be a Volunteer</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <img src={postData.thumbnail} alt="Thumbnail" className="w-full rounded" />

        <input value={postData.title} readOnly className="input input-bordered w-full" />
        <textarea value={postData.description} readOnly className="textarea textarea-bordered w-full" rows={3} />

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
        />

        <button type="submit" className="btn bg-[#0FA4AF] text-white w-full">Request</button>
      </form>
    </div>
  );
};

export default BeAVolunteer;
