import React from 'react';
import Autoplay from '../../components/Autoplay';
import WhyVolunteerWithUs from '../../components/WhyVolunteerWithUs';
import VolunteerTestimonials from '../../components/VolunteerTestimonials';
import MyVolunteerNeedPosts from '../../components/MyVolunteerNeedPosts';

const Home = () => {
    return (
        <div>
            <Autoplay></Autoplay>
            <MyVolunteerNeedPosts></MyVolunteerNeedPosts>
            <WhyVolunteerWithUs></WhyVolunteerWithUs>
            <VolunteerTestimonials></VolunteerTestimonials>
        </div>
    );
};

export default Home;