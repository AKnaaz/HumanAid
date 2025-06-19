import React from 'react';
import { useLoaderData } from 'react-router';
import AllVolunteerNeedPostsCard from '../components/AllVolunteerNeedPostsCard';
import Search from '../components/Search';

const AllVolunteerNeedPosts = () => {
    const vols = useLoaderData();
    console.log(vols)
    return (
        <div className='w-11/12 mx-auto p-5 m-5'>
            <h1 className='text-center text-3xl font-bold my-5'>All volunteer Need posts</h1>
            <Search></Search>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-6'>
                {
                    vols.map(vol => <AllVolunteerNeedPostsCard key={vol._id} vol={vol}></AllVolunteerNeedPostsCard>)
                }
            </div>
        </div>
    );
};

export default AllVolunteerNeedPosts;