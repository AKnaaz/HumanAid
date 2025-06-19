import React from 'react';
import MyVolunteerNeedPost from '../components/MyVolunteerNeedPost';
import MyVolunteerRequestPosts from '../components/MyVolunteerRequestPosts';

const ManageMyPosts = () => {
    return (
        <div>
            <MyVolunteerNeedPost></MyVolunteerNeedPost>
            <MyVolunteerRequestPosts></MyVolunteerRequestPosts>
        </div>
    );
};

export default ManageMyPosts;