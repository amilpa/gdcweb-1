import React from 'react';

import { FaFacebookSquare, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

import logo from '../../assets/newlogo.png';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  return (
    <div
      id="contact"
      className="font-bold text-white flex flex-col md:flex-row justify-center items-center md:items-center gap-10 md:gap-5 md:justify-between p-4 w-full border-t-[1px]  md:h-auto"
    >
      <div className="w-full flex flex-col items-center justify-start md:items-start gap-2">
        <p className="text-base">Get in touch</p>
        <p className="text-xl font-light">gdcmec@mec.ac.in</p>
        <div className="text-primary font-light border-[1px] border-gray-500 hover:border-primary px-3">
          <Link to="/team">Our Team</Link>
        </div>
      </div>
      <ul className="social pr-22">
        <li>
          <FaFacebookSquare size={25} className="mx-auto mt-2" />
        </li>
        <li>
          <FaLinkedin size={25} className="mx-auto mt-2" />
        </li>
        <li>
          <FaTwitter size={25} className="mx-auto mt-2" />
        </li>
        <li>
          <FaInstagram size={25} className="mx-auto mt-2" />
        </li>
      </ul>
      {/* <div className="flex pr-[35px]"> */}
      {/* <div className="w-full flex justify-center items-center gap-8"> */}
      {/*   <FaFacebookSquare size={25} /> */}
      {/*   <FaLinkedin size={25} /> */}
      {/*   <FaTwitter size={25} /> */}
      {/*   <FaInstagram size={25} /> */}
      {/* </div> */}
      <div className="w-full flex flex-row md:flex-col justify-center md:justify-end md:items-end">
        <div className="flex flex-col justify-center relative items-center">
          <img src={logo} alt="true" className="absolute right-12 w-[110px]" />
          <p className="text-sm">GDC MEC</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
