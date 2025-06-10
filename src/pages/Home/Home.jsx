import React from 'react';
import Autoplay from '../../components/Autoplay';
import WhyVolunteerWithUs from '../../components/WhyVolunteerWithUs';
import VolunteerTestimonials from '../../components/VolunteerTestimonials';

const Home = () => {
    return (
        <div>
            <Autoplay></Autoplay>
            <WhyVolunteerWithUs></WhyVolunteerWithUs>
            <VolunteerTestimonials></VolunteerTestimonials>
        </div>
    );
};

export default Home;