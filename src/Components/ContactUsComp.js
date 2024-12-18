import React from 'react'
import { BiPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { DarkMode } from './DarkMode';

export const ContactUsComp = () => {
  return (
    <div class="grid grid-cols-2 gap-2">
  <div className="flex justify-center h-14 ">
    <div className="flex items-center">
    <a href="#"><BiPhoneCall size={20}/></a>
       <p className="text-sm ml-2">+91-123456789 </p>
       <a href="#"><MdEmail size={20} className="ml-5" /></a>
       <p className="text-sm ml-2">techAir@gmail.com</p>
    </div>
  </div>
  <div className="flex justify-center h-14 items-center">
    <a href="#"><FaFacebook size={20} /></a>
    <a href="#"><FaTwitter size={20} className="ml-2"/></a>
    <a href="#"><FaLinkedin size={20} className="ml-2"/></a>
    <a href="#"><FaInstagram size={20} className="ml-2"/></a>
    <a href="#"><FaYoutube size={20} className="ml-2"/></a>
    <div className="ml-10 justify-end">
      <DarkMode/>
    </div>
  </div>
</div>
  );
};

