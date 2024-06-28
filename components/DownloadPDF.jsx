// components/DownloadButton.jsx
"use client";

import { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import { Button } from "@/components/ui/button";

const DownloadButton = ({ path }) => {
  const handleDownload = () => {
    const anchor = document.createElement('a');
    anchor.href = path;
    anchor.download = 'resume.pdf'; // Nome do arquivo para download
    anchor.click();
  };

  return (
    <Button variant="outline" size="lg" className="uppercase flex items-center gap-2" onClick={handleDownload}>
      <span>Download CV</span>
      <FiDownload className='text-xl' />
    </Button>
  );
};

export default DownloadButton;