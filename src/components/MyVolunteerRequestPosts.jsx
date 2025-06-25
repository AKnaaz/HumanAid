import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import { TbCancel } from 'react-icons/tb';

const MyVolunteerRequestPosts = () => {
  const { user } = useAuth();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRequests = () => {
    if (!user?.email) return;

    setLoading(true);
    fetch(`https://my-eleventh-assignment-server-8xova3el3-aknaazs-projects.vercel.app/myVolunteerRequests?email=${user.email}`, {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => {
        setRequests(data.data || []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch Error:", err);
        setLoading(false);
        Swal.fire('Error', 'Failed to load volunteer requests.', 'error');
      });
  };

  useEffect(() => {
    fetchRequests();
  }, [user?.email]);

  const handleCancel = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0FA4AF",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://my-eleventh-assignment-server-8xova3el3-aknaazs-projects.vercel.app/myVolunteerRequests/${_id}`, {
          method: 'DELETE',
          credentials: 'include'
        })
          .then(res => {
            if (!res.ok) throw new Error(`Error: ${res.status}`);
            return res.json();
          })
          .then(data => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your request has been cancelled.", "success");
              setRequests(prev => prev.filter(req => req._id !== _id));
            }
          })
          .catch(err => {
            console.error('Delete Error:', err);
            Swal.fire('Error', 'Failed to cancel the request.', 'error');
          });
      }
    });
  };

  return (
    <div className="p-4 md:p-10 min-h-[60vh]">
      <h2 className="text-2xl font-bold text-center mb-6 text-[#0FA4AF]">My Volunteer Request Posts</h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading your requests...</p>
      ) : requests.length === 0 ? (
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
                      className="btn btn-sm bg-[#0FA4AF] text-white hover:bg-[#0e8d98]"
                      onClick={() => handleCancel(req._id)}
                      title="Cancel Request"
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
