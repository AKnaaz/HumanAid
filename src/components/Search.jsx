import React, { useState } from 'react';
import AllVolunteerNeedPostsCard from './AllVolunteerNeedPostsCard'; 

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [volPosts, setVolPosts] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const res = await fetch(`https://my-eleventh-assignment-server-mauve.vercel.app/searchVols?title=${searchTerm}`);
    const data = await res.json();
    setVolPosts(data);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <form onSubmit={handleSearch} className="flex gap-2 mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by Post Title"
          className="input input-bordered w-full"
        />
        <button type="submit" className="btn bg-[#0FA4AF] text-white">Search</button>
      </form>

      {volPosts.length === 0 ? (
        <p className="text-center text-gray-500">No results found</p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {volPosts.map((post) => (
            <AllVolunteerNeedPostsCard key={post._id} vol={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
