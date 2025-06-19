import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { GrUpdate } from 'react-icons/gr';
import { RiDeleteBinLine } from 'react-icons/ri';

const MyVolunteerNeedPost = () => {
  const { user } = useAuth();
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/myVols?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setMyPosts(data));
  }, [user?.email]);

  return (
    <div className="p-4 md:p-10">
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
                    <button className="btn btn-sm bg-[#0FA4AF] text-white"><GrUpdate /></button>
                    <button className="btn btn-sm bg-[#0FA4AF] text-white"><RiDeleteBinLine /></button>
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
