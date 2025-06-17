import React, { useEffect, useState } from 'react';
import VolunteerNeedCard from './VolunteerNeedCard';

const MyVolunteerNeedPosts = () => {

    const [volNeed, setVolNeed] = useState([]);

    useEffect(() => {
    fetch('http://localhost:3000/volsNeedPost')
      .then(res => res.json())
      .then(data => setVolNeed(data));
  }, []);
    return (
        <div className="p-6 my-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Current Volunteer Needs</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {volNeed.map(vol => (
            <VolunteerNeedCard key={vol._id} vol={vol}></VolunteerNeedCard>
        ))}
      </div>
        </div>
    );
};

export default MyVolunteerNeedPosts;