import React from 'react';
import footerLogo from "../assets/logo3.png"
import { FaFacebook, FaInstagramSquare, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal p-10">
  <div className='flex items-center gap-0'>
    <img className='w-6 rounded-full' src={footerLogo} alt="" />
    <h1 className="app text-xl">Human<span className='text-[#0FA4AF] font-bold'>Aid</span></h1>
  </div>
  <nav>
    <h6 className="footer-title">LEGAL</h6>
    <Link to="/*">Term & Conditions</Link>
    <Link to="/about">About Us</Link>
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <a href="https://www.facebook.com/anmoon.islam.31"><FaFacebook className='text-blue-400' size={25}/></a>
      <a href="https://www.instagram.com/?hl=en"><FaInstagramSquare className='text-pink-400' size={25}/></a>
      <a href="https://www.youtube.com/"><FaYoutube className='text-red-500' size={25}/></a>
    </div>
  </nav>
</footer>
    );
};

export default Footer;