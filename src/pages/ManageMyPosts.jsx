import React from 'react';
import MyVolunteerNeedPost from '../components/MyVolunteerNeedPost';
import MyVolunteerRequestPosts from '../components/MyVolunteerRequestPosts';
import { Helmet } from 'react-helmet';

const ManageMyPosts = () => {
    return (
        <div className='space-y-10'>
            <Helmet>
                <title>My Eleventh Assignment | Manage My Posts</title>
            </Helmet>
            <MyVolunteerNeedPost></MyVolunteerNeedPost>
            <MyVolunteerRequestPosts></MyVolunteerRequestPosts>
        </div>
    );
};

export default ManageMyPosts;