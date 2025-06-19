import React from 'react';
import MyVolunteerNeedPost from '../components/MyVolunteerNeedPost';
import MyVolunteerRequestPosts from '../components/MyVolunteerRequestPosts';

const ManageMyPosts = () => {
    return (
        <div className='space-y-10'>
            <MyVolunteerNeedPost></MyVolunteerNeedPost>
            <MyVolunteerRequestPosts></MyVolunteerRequestPosts>
        </div>
    );
};

export default ManageMyPosts;