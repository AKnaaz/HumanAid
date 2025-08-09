import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Amina Rahman",
    role: "Founder & CEO",
    description: "Passionate about community building and social impact, Amina leads our mission to connect volunteers and organizations.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Jahid Hasan",
    role: "Project Coordinator",
    description: "Jahid manages volunteer projects, ensuring smooth communication between volunteers and partner organizations.",
    img: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "Nabila Akter",
    role: "Marketing & Outreach",
    description: "Nabila spreads the word about our platform and recruits passionate volunteers through creative campaigns.",
    img: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    name: "Rafiq Islam",
    role: "Technical Lead",
    description: "Rafiq develops and maintains the platform, ensuring a smooth user experience for everyone.",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "Sumaiya Chowdhury",
    role: "Volunteer Engagement Specialist",
    description: "Sumaiya fosters relationships with volunteers and helps create rewarding volunteer experiences.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const MeetOurTeam = () => {
  return (
    <div className="my-20">
      <motion.section
        className="py-10 px-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-xl md:text-3xl font-bold mb-10">Meet Our Team</h2>

        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
          {teamMembers.map(({ name, role, description, img }, index) => (
            <div
              key={index}
              className="card shadow-md rounded-lg p-6 flex flex-col items-center text-center"
            >
              <img
                src={img}
                alt={name}
                className="rounded-full w-24 h-24 object-cover mb-4 border-4 border-[#0FA4AF]"
              />
              <h3 className="font-semibold text-lg">{name}</h3>
              <p className="text-[#0FA4AF] font-medium mb-2">{role}</p>
              <p className="text-sm italic">{description}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default MeetOurTeam;
