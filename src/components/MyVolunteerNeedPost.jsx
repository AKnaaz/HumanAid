import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { RiDeleteBinLine } from 'react-icons/ri';
import Swal from 'sweetalert2';
import { MdModeEdit } from 'react-icons/md';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet';

const MyVolunteerNeedPost = () => {
  const { user } = useAuth();
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/myVols?email=${user.email}`, {
      credentials: 'include'
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        return res.json();
      })
      .then(data => setMyPosts(data))
      .catch(err => console.error('Fetch error:', err));
  }, [user?.email]);

  const handleDelete = (_id) => {
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
        fetch(`http://localhost:3000/myVols/${_id}`, {
          method: "DELETE",
          credentials: 'include'
        })
          .then(res => {
            if (!res.ok) {
              throw new Error(`Error: ${res.status}`);
            }
            return res.json();
          })
          .then(data => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your post has been cancelled.",
                icon: "success"
              });
              setMyPosts(myPosts.filter(post => post._id !== _id));
            }
          })
          .catch(err => {
            console.error('Delete error:', err);
            Swal.fire('Error', 'Failed to delete the post.', 'error');
          });
      }
    });
  };

  return (
    <div className="p-4 md:p-10">
      <Helmet>
        <title>My Eleventh Assignment | My Volunteer Need Posts</title>
      </Helmet>

      <h2 className="text-2xl font-bold text-center mb-6 text-[#0FA4AF]">My Volunteer Need Posts</h2>

      {myPosts.length === 0 ? (
        <p className="text-center text-gray-500">You have not posted any volunteer need yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead className="bg-[#0FA4AF] text-white">
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Deadline</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {myPosts.map((post, index) => (
                <tr key={post._id}>
                  <th>{index + 1}</th>
                  <td>{post.title}</td>
                  <td>{post.deadline}</td>
                  <td className="flex flex-wrap gap-2">
                    <Link to={`/update/${post._id}`}>
                      <button className="btn btn-sm bg-[#0FA4AF] text-white"><MdModeEdit /></button>
                    </Link>
                    <button onClick={() => handleDelete(post._id)} className="btn btn-sm bg-[#0FA4AF] text-white"><RiDeleteBinLine /></button>
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

export default MyVolunteerNeedPost;
