import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Social Media Links */}
        <div className="footer-container ">
          <a 
            href="https://www.linkedin.com/in/ruvi-ansari-b79a7120b/ "
            target="_blank"
            rel="noopener noreferrer"
            className="footer-container"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-container"
          >
            <FaGithub />
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 text-xl transition-colors"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Copyright */}
        <div className="header">
          © {new Date().getFullYear()} Rumana Ansari | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
