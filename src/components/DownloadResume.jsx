// components/DownloadResume.jsx
import React from "react";

export default function DownloadResume({
  filePath = "/Resume@.pdf", // public folder me resume.pdf rakhna
  label = "Download Resume (PDF)",
}) {
  return (
    <a
      href={filePath}
      download="Resume@.pdf" // downloaded filename
      className="Arrow"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Resume PDF"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v12m0 0l4-4m-4 4l-4-4M21 21H3" />
      </svg>
      {label}
    </a>
  );
}
