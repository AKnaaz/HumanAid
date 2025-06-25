import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import AllVolunteerNeedPostsCard from '../components/AllVolunteerNeedPostsCard';
import VolunteerNeedTable from '../components/VolunteerNeedTable';
import Search from '../components/Search';
import { Helmet } from 'react-helmet';

const AllVolunteerNeedPosts = () => {
  const initialData = useLoaderData();
  const [vols, setVols] = useState(initialData || []);
  const [loading, setLoading] = useState(false);

  const [viewMode, setViewMode] = useState(() => {
    return localStorage.getItem("volViewMode") || "card";
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://my-eleventh-assignment-server-8xova3el3-aknaazs-projects.vercel.app/vols', {
        credentials: 'include'
      });
      const data = await res.json();
      setVols(data);
    } catch (err) {
      console.error("Failed to fetch vols:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    const handleViewModeChange = () => {
      const updatedMode = localStorage.getItem("volViewMode") || "card";
      setViewMode(updatedMode);
    };

    window.addEventListener("volViewModeChange", handleViewModeChange);

    return () => {
      window.removeEventListener("volViewModeChange", handleViewModeChange);
    };
  }, []);

  return (
    <div className='w-11/12 mx-auto p-5 m-5'>
      <Helmet>
        <title>My Eleventh Assignment | All Volunteer Need Posts</title>
      </Helmet>

      <h1 className='text-center text-3xl font-bold my-5'>
        All Volunteer Need Posts
      </h1>

      <Search />

      {loading && (
        <div className="flex justify-center mb-4">
          <span className="loading loading-ring loading-md text-[#0FA4AF]"></span>
        </div>
      )}

      {
        viewMode === "card" ? (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {vols.map(vol => (
              <AllVolunteerNeedPostsCard key={vol._id} vol={vol} />
            ))}
          </div>
        ) : (
          <VolunteerNeedTable volunteerPosts={vols} loading={loading} />
        )
      }
    </div>
  );
};

export default AllVolunteerNeedPosts;
