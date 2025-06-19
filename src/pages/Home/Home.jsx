import React from 'react';
import Autoplay from '../../components/Autoplay';
import WhyVolunteerWithUs from '../../components/WhyVolunteerWithUs';
import VolunteerTestimonials from '../../components/VolunteerTestimonials';
import CurrentVolunteer from '../../components/CurrentVolunteer';

const Home = () => {
    return (
        <div>
            <Autoplay></Autoplay>
            <CurrentVolunteer></CurrentVolunteer>
            <WhyVolunteerWithUs></WhyVolunteerWithUs>
            <VolunteerTestimonials></VolunteerTestimonials>
        </div>
    );
};

export default Home;