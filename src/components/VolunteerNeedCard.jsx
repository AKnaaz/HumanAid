import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

const VolunteerNeedCard = ({ vol }) => {
  const {_id, thumbnail, title, category, deadline } = vol;

  return (
      <motion.div
      className="card w-full shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      viewport={{ once: true }}
    >
      <figure className="px-10 pt-10">
        <img
          src={thumbnail}
          alt={title}
          className="rounded-xl w-full h-40 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>
          <span className="font-bold">Category:</span> {category}
        </p>
        <p>
          <span className="font-bold">Deadline:</span> {deadline}
        </p>
        <div className="card-actions">
        <Link to={`/vols/${_id}`}>
            <button className="btn bg-[#0FA4AF] text-white">View Details</button>
          </Link>
        </div>
      </div>
    </motion.div>
    
  );
};

export default VolunteerNeedCard;
