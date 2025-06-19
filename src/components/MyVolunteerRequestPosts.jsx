import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import { TbCancel } from 'react-icons/tb';

const MyVolunteerRequestPosts = () => {
  const { user } = useAuth();
  const [requests, setRequests] = useState([]);

  const fetchRequests = () => {
    fetch(`http://localhost:3000/myVolunteerRequests?email=${user.email}`)
      .then(res => res.json())
      .then(data => setRequests(data.data || []))
      .catch(err => console.error("Fetch Error:", err));
  };

  useEffect(() => {
    if (user?.email) {
      fetchRequests();
    }
  }, [user?.email]);

  const handleCancel = (_id) => {
    console.log(_id)
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    
    fetch(`http://localhost:3000/myVolunteerRequests/${_id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount) {
            Swal.fire({
            title: "Deleted!",
            text: "Your request has been cancelled.",
            icon: "success"
        });

        const remainingVols = requests.filter(req => req._id !== _id);
        setRequests(remainingVols);
        }
    })
    
  }
});
  }

  return (
    <div className="p-4 md:p-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-[#0FA4AF]">My Volunteer Request Posts</h2>

      {requests.length === 0 ? (
        <p className="text-center text-gray-500">You haven’t requested to be a volunteer for any post yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full text-sm md:text-base">
            <thead className="bg-[#0FA4AF] text-white">
              <tr>
                <th>#</th>
                <th>Post Title</th>
                <th>Category</th>
                <th>Deadline</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req, index) => (
                <tr key={req._id}>
                  <td>{index + 1}</td>
                  <td>{req.title}</td>
                  <td>{req.category}</td>
                  <td>{req.deadline}</td>
                  <td>
                    <button
                      className="btn btn-sm bg-[#0FA4AF] text-white"
                      onClick={() => handleCancel(req._id)}
                    >
                      <TbCancel size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyVolunteerRequestPosts;
