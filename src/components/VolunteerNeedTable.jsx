import React from 'react';
import { Link } from 'react-router';

const VolunteerNeedTable = ({ volunteerPosts }) => {
  return (
    <div className="overflow-x-auto mt-10 w-full md:px-4">
      <h2 className="text-xl md:text-3xl font-bold mb-4 text-center text-[#0FA4AF]">
        All Volunteer Need Posts (Table View)
      </h2>

      <div className="min-w-[200px]">
        <table className="table table-zebra w-full text-xs sm:text-sm md:text-base lg:text-lg">
          <thead className="bg-[#0FA4AF] text-white">
            <tr>
              <th className="p-2 md:p-3">#</th>
              <th className="p-2 md:p-3">Thumbnail</th>
              <th className="p-2 md:p-3">Title</th>
              <th className="p-2 md:p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {volunteerPosts.map((vol, index) => (
              <tr key={vol._id}>
                <td className="p-2 md:p-3">{index + 1}</td>
                <td className="p-2 md:p-3">
                  <img
                    src={vol.thumbnail}
                    alt={vol.title}
                    className="w-12 h-8 md:w-16 md:h-10 object-cover rounded"
                  />
                </td>
                <td className="whitespace-nowrap p-2 md:p-3">{vol.title}</td>
                <td className="p-2 md:p-3">
                  <Link to={`/vols/${vol._id}`}>
                    <button className="btn btn-xs sm:btn-sm md:btn-md bg-[#0FA4AF] text-white">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VolunteerNeedTable;
