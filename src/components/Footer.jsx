import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#915EFF] transition-all duration-300 transform hover:scale-110 group relative"
        title="Instagram"
      >
        <FaInstagram size={24} />
        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#915EFF] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Instagram
        </span>
      </a>
      <a 
        href="https://twitter.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-[#915EFF] transition-all duration-300 transform hover:scale-110 group relative"
        title="Twitter"
      >
        <FaXTwitter size={24} />
        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#915EFF] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Twitter
        </span>
      </a>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#915EFF] transition-all duration-300 transform hover:scale-110 group relative"
        title="LinkedIn"
      >
        <FaLinkedin size={24} />
        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#915EFF] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          LinkedIn
        </span>
      </a>
      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#915EFF] transition-all duration-300 transform hover:scale-110 group relative"
        title="GitHub"
      >
        <FaGithub size={24} />
        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#915EFF] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          GitHub
        </span>
      </a>
    </footer>
  );
};

export default Footer;