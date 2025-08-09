import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  {
    name: "Helping Hands Foundation",
    description: "Committed to empowering communities through volunteer work.",
    logo: "https://i.postimg.cc/T24VVRHY/hel.jpg",
    website: "https://helpinghands.org",
  },
  {
    name: "Green Earth NGO",
    description: "Focused on environmental sustainability and green projects.",
    logo: "https://i.postimg.cc/9QtwnV19/gggg.jpg",
    website: "https://greenearthngo.org",
  },
  {
    name: "Community Care",
    description: "Providing support and care to vulnerable groups.",
    logo: "https://i.postimg.cc/W4zYn2PN/ccc.jpg",
    website: "https://communitycare.com",
  },
  {
    name: "Bright Future Trust",
    description: "Supporting education initiatives worldwide.",
    logo: "https://i.postimg.cc/7ZfStbbW/bri.jpg",
    website: "https://brightfuturetrust.org",
  },
  {
    name: "Safe Hands Alliance",
    description: "Promoting health and safety through volunteer services.",
    logo: "https://i.postimg.cc/xdVqGdmH/saf.jpg",
    website: "https://safehandsalliance.org",
  },
];

const PartnersSponsors = () => {
  return (
    <motion.section
      className="max-w-7xl mx-auto py-12 px-6 bg-gray-50 rounded-md shadow-md"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h2 className="text-3xl font-bold mb-10 text-center">
        Our Partners & Sponsors
      </h2>

      <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
        {partners.map(({ name, description, logo, website }) => (
          <a
            key={name}
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow cursor-pointer"
          >
            <img
              src={logo}
              alt={`${name} Logo`}
              className="w-24 h-24 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-center text-gray-800">{name}</h3>
            <p className="text-sm text-gray-600 text-center">{description}</p>
          </a>
        ))}
      </div>
    </motion.section>
  );
};

export default PartnersSponsors;
