import React from 'react';
import { motion } from "framer-motion";

const WhyVolunteerWithUs = () => {
    return (
        <div className='my-6 shadow-md'>
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-xl shadow-md text-center">

            <h2 className="text-3xl font-bold mb-4">Why Volunteer With Us?</h2>
            <p className="max-w-7xl mx-auto text-gray-500">
Make a meaningful difference in your community by offering your time, passion, and unique skills. Every hour you dedicate—whether it’s supporting healthcare initiatives, empowering young minds through education, or caring for animals in need—creates a ripple of positive change that touches countless lives. <br />

Volunteering is more than just giving back; it’s about building connections, learning new perspectives, and growing as an individual. When you step forward to help, you inspire others to do the same, strengthening the bonds within your community and fostering a spirit of hope and collaboration. <br />

No matter your background or expertise, your contribution matters. By choosing to volunteer, you become a catalyst for progress, compassion, and lasting impact. Join us in making our community a better, brighter place—one act of kindness at a time. Your involvement today brings hope for a better tomorrow.
            </p>
            </motion.div>
        </div>
    );
};

export default WhyVolunteerWithUs;