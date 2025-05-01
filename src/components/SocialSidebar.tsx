
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const SocialSidebar = () => {
  return (
    <>
      {/* Left Sidebar - Social Links */}
      <div className="fixed left-6 bottom-0 hidden md:block z-10">
        <div className="flex flex-col items-center space-y-6">
          <a 
            href="https://github.com/sudeepbanerjeechopra" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-tech-light-slate hover:text-tech-cyan transform hover:-translate-y-1 transition-all"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://linkedin.com/in/sudeepbanerjee08" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-tech-light-slate hover:text-tech-cyan transform hover:-translate-y-1 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:sudeepbanerjeechopra@hotmail.com" 
            className="text-tech-light-slate hover:text-tech-cyan transform hover:-translate-y-1 transition-all"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <div className="h-24 w-px bg-tech-light-slate/50 mt-4"></div>
        </div>
      </div>

      {/* Right Sidebar - Email */}
      <div className="fixed right-6 bottom-0 hidden md:block z-10">
        <div className="flex flex-col items-center">
          <a 
            href="mailto:sudeepbanerjeechopra@hotmail.com" 
            className="vertical-email text-tech-light-slate hover:text-tech-cyan tracking-widest text-xs font-mono transform hover:-translate-y-1 transition-all"
          >
            sudeepbanerjeechopra@hotmail.com
          </a>
          <div className="h-24 w-px bg-tech-light-slate/50 mt-4"></div>
        </div>
      </div>

      {/* Adding the CSS directly in the document with proper React syntax */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .vertical-email {
            writing-mode: vertical-rl;
            letter-spacing: 0.1em;
          }
        `
      }} />
    </>
  );
};

export default SocialSidebar;
