
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 px-6 md:px-12 bg-tech-blue border-t border-tech-lightest-blue/20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-tech-light-slate text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Sudeep Banerjee Chopra. All Rights Reserved.
          </div>
          
          <div className="text-tech-light-slate text-sm">
            <span>"Leadership is the capacity to translate vision into reality" - Warren Bennis</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
