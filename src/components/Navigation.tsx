
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12",
        isScrolled ? "bg-tech-blue/90 backdrop-blur shadow-lg" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="font-bold text-2xl text-tech-cyan">SB<span className="text-tech-light-slate">C</span></a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 items-center">
            <li><a href="#about" className="nav-link"><span className="text-tech-cyan">01.</span> About</a></li>
            <li><a href="#experience" className="nav-link"><span className="text-tech-cyan">02.</span> Experience</a></li>
            <li><a href="#projects" className="nav-link"><span className="text-tech-cyan">03.</span> Projects</a></li>
            <li><a href="#skills" className="nav-link"><span className="text-tech-cyan">04.</span> Skills</a></li>
            <li><a href="#contact" className="nav-link"><span className="text-tech-cyan">05.</span> Contact</a></li>
            <li>
              <a href="/Sudeep_Resume.pdf" target="_blank" rel="noopener noreferrer" className="button-primary">
                Resume
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-tech-cyan z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={cn(
              "w-full h-0.5 bg-tech-cyan transition-all duration-300",
              isMenuOpen ? "transform rotate-45 translate-y-2" : ""
            )} />
            <span className={cn(
              "w-full h-0.5 bg-tech-cyan transition-opacity duration-300",
              isMenuOpen ? "opacity-0" : "opacity-100"
            )} />
            <span className={cn(
              "w-full h-0.5 bg-tech-cyan transition-all duration-300",
              isMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
            )} />
          </div>
        </button>

        {/* Mobile Menu */}
        <div className={cn(
          "fixed inset-0 bg-tech-light-blue/95 backdrop-blur flex flex-col justify-center items-center transition-transform duration-300 md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <nav>
            <ul className="flex flex-col space-y-8 items-center text-xl">
              <li><a onClick={() => setIsMenuOpen(false)} href="#about" className="nav-link"><span className="text-tech-cyan">01.</span> About</a></li>
              <li><a onClick={() => setIsMenuOpen(false)} href="#experience" className="nav-link"><span className="text-tech-cyan">02.</span> Experience</a></li>
              <li><a onClick={() => setIsMenuOpen(false)} href="#projects" className="nav-link"><span className="text-tech-cyan">03.</span> Projects</a></li>
              <li><a onClick={() => setIsMenuOpen(false)} href="#skills" className="nav-link"><span className="text-tech-cyan">04.</span> Skills</a></li>
              <li><a onClick={() => setIsMenuOpen(false)} href="#contact" className="nav-link"><span className="text-tech-cyan">05.</span> Contact</a></li>
              <li>
                <a href="/Sudeep_Resume.pdf" target="_blank" rel="noopener noreferrer" className="button-primary">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
