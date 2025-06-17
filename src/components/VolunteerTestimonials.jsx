import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Rima",
    role: "Education Volunteer",
    message: "Volunteering through this platform gave me purpose and the chance to connect with amazing people.",
    img: "https://i.postimg.cc/SsjXy7NM/wo.avif"
  },
  {
    name: "Tanvir",
    role: "Community Outreach Volunteer",
    message: "Being part of this initiative helped me grow both personally and professionally.",
    img: "https://i.postimg.cc/wvdJg4bb/m.avif"
  },
  {
    name: "Farah",
    role: "Healthcare Support Volunteer",
    message: "I never imagined how impactful a few hours a week could be — it truly changed my perspective.",
    img: "https://i.postimg.cc/GmHvQyyz/wo3.jpg"
  }
];

const VolunteerTestimonials = () => {
  return (
        <div className='my-20'>
            <motion.section
      className="py-10 px-4 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h2 className="text-3xl font-bold mb-10">What Volunteers Say</h2>

      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="card shadow-md">
            <figure className="pt-6">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="rounded-full w-20 h-20 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <p className="italic">“{testimonial.message}”</p>
              <h2 className="mt-4 font-semibold">
                – {testimonial.name}, {testimonial.role}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
        </div>
  );
};

export default VolunteerTestimonials;
