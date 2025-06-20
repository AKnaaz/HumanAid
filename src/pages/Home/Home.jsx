import React from 'react';
import Autoplay from '../../components/Autoplay';
import WhyVolunteerWithUs from '../../components/WhyVolunteerWithUs';
import VolunteerTestimonials from '../../components/VolunteerTestimonials';
import CurrentVolunteer from '../../components/CurrentVolunteer';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>My Eleventh Assignment | Home</title>
            </Helmet>
            <Autoplay></Autoplay>
            <CurrentVolunteer></CurrentVolunteer>
            <WhyVolunteerWithUs></WhyVolunteerWithUs>
            <VolunteerTestimonials></VolunteerTestimonials>
        </div>
    );
};

export default Home;