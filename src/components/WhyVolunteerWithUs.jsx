import React from 'react';
import { motion } from "framer-motion";
import volImg2 from "../assets/volunteer2.jpg";

const WhyVolunteerWithUs = () => {
    return (
        <div className="my-20 px-4 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center"
            >
                <h2 className="text-3xl font-bold mb-10">Why Volunteer With Us?</h2>

                <div className="w-full flex justify-center items-center mb-12">
                    <motion.img
                        src={volImg2}
                        alt="Volunteer 2"
                        className="w-[320px] h-[320px] md:w-[500px] md:h-[300px] object-cover rounded-t-[40px] rounded-br-[40px] shadow-2xl"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    />
                </div>
                <p className="text-gray-600 leading-relaxed text-center">
                    Make a meaningful difference in your community by offering your time, passion, and unique skills.
                    Every hour you dedicate—whether it’s supporting healthcare initiatives, empowering young minds
                    through education, or caring for animals in need—creates a ripple of positive change that touches
                    countless lives. <br /><br />

                    Volunteering is more than just giving back; it’s about building connections, learning new perspectives,
                    and growing as an individual. When you step forward to help, you inspire others to do the same,
                    strengthening the bonds within your community and fostering a spirit of hope and collaboration. <br /><br />

                    No matter your background or expertise, your contribution matters. By choosing to volunteer, you become
                    a catalyst for progress, compassion, and lasting impact. Join us in making our community a better,
                    brighter place—one act of kindness at a time. Your involvement today brings hope for a better tomorrow.
                </p>
            </motion.div>
        </div>
    );
};

export default WhyVolunteerWithUs;
