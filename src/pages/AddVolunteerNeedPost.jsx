import React, { useState, use } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const AddVolunteerNeedPost = () => {
  const { user } = use(AuthContext);
  const [deadline, setDeadline] = useState(new Date());

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const post = {
      thumbnail: form.thumbnail.value,
      title: form.title.value,
      description: form.description.value,
      category: form.category.value,
      location: form.location.value,
      volunteers_needed: parseInt(form.volunteers_needed.value),
      deadline: deadline.toISOString().split('T')[0],
      organizer_name: user?.displayName || 'N/A',
      organizer_email: user?.email || 'N/A'
    };

    try {
      const res = await fetch('https://my-eleventh-assignment-server-8xova3el3-aknaazs-projects.vercel.app/addVols', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(post)
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      if (data.insertedId) {
        Swal.fire('Success!', 'Volunteer Need Post added successfully.', 'success');
        form.reset();
        setDeadline(new Date());
      }
    } catch (err) {
      console.error('Error adding post:', err);
      Swal.fire('Error', 'Something went wrong.', 'error');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 shadow-lg rounded-lg">
      <Helmet>
        <title>Add Volunteer Need Post</title>
      </Helmet>
      <h2 className="text-3xl font-bold mb-6 text-center">Add Volunteer Need Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="thumbnail" type="url" required placeholder="Thumbnail URL" className="input input-bordered w-full" />
        <input name="title" type="text" required placeholder="Post Title" className="input input-bordered w-full" />
        <textarea name="description" required placeholder="Description" className="textarea textarea-bordered w-full" rows={4} />
        <select name="category" className="select select-bordered w-full" required>
          <option value="">Select Category</option>
          <option value="healthcare">Healthcare</option>
          <option value="education">Education</option>
          <option value="social service">Social Service</option>
          <option value="animal welfare">Animal Welfare</option>
        </select>
        <input name="location" type="text" required placeholder="Location" className="input input-bordered w-full" />
        <input name="volunteers_needed" type="number" min="1" required placeholder="No. of Volunteers Needed" className="input input-bordered w-full" />

        <div className="space-y-4">
          <label className="block font-semibold">Deadline</label>
          <DatePicker
            selected={deadline}
            onChange={(date) => setDeadline(date)}
            className="input input-bordered w-full"
          />

          <input
            type="text"
            value={user?.displayName || ''}
            readOnly
            className="input input-bordered w-full"
            placeholder="Organizer Name"
          />
          <input
            type="email"
            value={user?.email || ''}
            readOnly
            className="input input-bordered w-full"
            placeholder="Organizer Email"
          />
        </div>

        <button type="submit" className="btn bg-[#0FA4AF] text-white w-full mt-4">Add Post</button>
      </form>
    </div>
  );
};

export default AddVolunteerNeedPost;
