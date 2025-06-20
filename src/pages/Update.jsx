import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';

const Update = () => {
 
  const { id } = useParams();
  const { user } = useAuth();

  const [postData, setPostData] = useState(null);
  const [deadline, setDeadline] = useState(new Date());

  useEffect(() => {
    fetch(`http://localhost:3000/vols/${id}`)
      .then(res => res.json())
      .then(data => {
        setPostData(data);
        if (data.deadline) {
          setDeadline(new Date(data.deadline));
        }
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedPost = Object.fromEntries(formData.entries())
    console.log(updatedPost)

    fetch(`http://localhost:3000/vols/${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(updatedPost)
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your post updated successfully",
                showConfirmButton: false,
                timer: 1500
             });
        }
    })
  }

  if (!postData) return <div className="text-center mt-10"><span className="loading loading-ring loading-xl"></span></div>;

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 shadow-lg rounded-lg bg-cover bg-center"
    style={{ backgroundImage: `url('https://i.postimg.cc/FRf69y59/up.jpg')` }}
    >
      <Helmet>
        <title>My Eleventh Assignment | Update</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center mb-6">Update Volunteer Need Post</h2>
      <form onSubmit={handleUpdate} className="space-y-4">

        <input
          name="thumbnail"
          type="url"
          defaultValue={postData.thumbnail}
          placeholder="Thumbnail URL"
          className="input input-bordered w-full bg-transparent text-white placeholder-white"
        />

        <input
          name="title"
          type="text"
          defaultValue={postData.title}
          placeholder="Post Title"
          className="input input-bordered w-full bg-transparent text-white placeholder-white"
        />

        <textarea
          name="description"
          defaultValue={postData.description}
          placeholder="Description"
          className="textarea textarea-bordered w-full bg-transparent text-white placeholder-white"
          rows={4}
        />

        <select
          name="category"
          defaultValue={postData.category}
          className="select select-bordered w-full bg-transparent text-white placeholder-white"
        >
          <option className='text-black' value="">Select Category</option>
          <option className='text-black' value="healthcare">Healthcare</option>
          <option className='text-black' value="education">Education</option>
          <option className='text-black' value="social service">Social Service</option>
          <option className='text-black' value="animal welfare">Animal Welfare</option>
        </select>

        <input
          name="location"
          type="text"
          defaultValue={postData.location}
          placeholder="Location"
          className="input input-bordered w-full bg-transparent text-white placeholder-white"
        />

        <input
          name="volunteers_needed"
          type="number"
          min="1"
          defaultValue={postData.volunteers_needed}
          placeholder="No. of Volunteers Needed"
          className="input input-bordered w-full bg-transparent text-white placeholder-white"
        />

        <div className="space-y-2">
          <label className="font-semibold block text-white">Deadline</label>
          <DatePicker
            selected={deadline}
            onChange={(date) => setDeadline(date)}
            className="input input-bordered w-full bg-transparent text-white placeholder-white"
          />
        </div>

        <input
          type="text"
          value={user?.displayName || ''}
          readOnly
          className="input input-bordered w-full bg-transparent text-white placeholder-white"
          placeholder="Organizer Name"
        />
        <input
          type="email"
          value={user?.email || ''}
          readOnly
          className="input input-bordered w-full bg-transparent text-white placeholder-white"
          placeholder="Organizer Email"
        />

        <button type="submit" className="btn bg-transparent text-white w-full mt-4">Update Post</button>
      </form>
    </div>
  );
};

export default Update;
