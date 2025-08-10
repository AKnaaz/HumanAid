import React, { useEffect, useState } from 'react';
import VolunteerNeedCard from './VolunteerNeedCard';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router';
import Loading from '../Shared/Loading';

const CurrentVolunteer = () => {

    const [volNeed, setVolNeed] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true);
    fetch('https://my-eleventh-assignment-server-mauve.vercel.app/volsNeedPost', {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => {
        setVolNeed(data)
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  console.log(volNeed)
  if (loading) {
    return <Loading></Loading>;
  }

    return (
        <div className="p-6 my-20">
            <h2 className="text-xl md:text-3xl font-bold mb-10 text-center">Current Volunteer Needs</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {volNeed.map(vol => (
            <VolunteerNeedCard key={vol._id} vol={vol}></VolunteerNeedCard>
        ))}
      </div>
        <div className='text-center md:text-end py-8'>
          <Link to="/allVolunteerNeedPosts">
            <button className='btn bg-[#0FA4AF] text-white hover:bg-[#0c8c95] transition-colors rounded-3xl'>See All <FaLongArrowAltRight /></button>
          </Link>
        </div>
      
        </div>
    );
};

export default CurrentVolunteer;