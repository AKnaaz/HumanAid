import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <section className="px-8 py-12 rounded-md">
      <Helmet>
        <title>My Eleventh Assignment | About Us</title>
      </Helmet>
      <div className='mb-6 text-center'>
        <h2 className="text-2xl font-bold text-[#0FA4AF]">About Our Volunteer Platform</h2>

        <p className="text-[15px] leading-relaxed mt-2">
          Our platform is designed to bring together two important groups of people in the spirit of community service and social responsibility.
        </p>
      </div>

      <h3 className="text-xl font-bold mb-4">
        For Volunteers
      </h3>
      <p className="text-[15px] leading-relaxed mb-8">
        If you are someone eager to contribute your time, skills, or energy, our platform offers you an easy way to find and choose volunteer opportunities that match your interests and availability. Browse through a variety of posts created by organizations or individuals who need helping hands. You can send requests to join projects that inspire you, making volunteering flexible and accessible. Whether you want to help in community events, social causes, education, or environmental projects, you will find something meaningful here.
      </p>

      <h3 className="text-xl font-bold mb-4">
        For Organizations and Individuals
      </h3>
      <p className="text-[15px] leading-relaxed mb-8">
        If you represent an organization, community group, or simply have a cause where volunteers are needed, this platform empowers you to create volunteer posts easily. Share details about your project, specify the number and type of volunteers required, and manage volunteer requests all in one place. By connecting you directly with motivated volunteers, we make it simpler to build strong teams and achieve your goals efficiently.
      </p>

      <p className="text-[15px] leading-relaxed">
        Join our community today to help create lasting positive change — whether you want to volunteer or need volunteers. Together, we can make a difference!
      </p>
    </section>
  );
};

export default About;
