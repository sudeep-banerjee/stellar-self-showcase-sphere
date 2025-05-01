
import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // @ts-ignore
      if (window.particlesJS) {
        // @ts-ignore
        window.particlesJS('particles-js', {
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#64ffda" },
            shape: {
              type: "circle",
              stroke: { width: 0, color: "#000000" },
              polygon: { nb_sides: 5 },
            },
            opacity: {
              value: 0.2,
              random: true,
              anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: {
              value: 3,
              random: true,
              anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#64ffda",
              opacity: 0.2,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "grab" },
              onclick: { enable: true, mode: "push" },
              resize: true
            },
            modes: {
              grab: { distance: 140, line_linked: { opacity: 0.5 } },
              push: { particles_nb: 4 },
            }
          },
          retina_detect: true
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div id="particles-js" className="absolute inset-0 z-0"></div>
      <div className="container mx-auto px-6 md:px-12 z-10 pt-16 md:pt-0">
        <div ref={containerRef} className="max-w-4xl space-y-5">
          <p className="text-tech-cyan font-mono text-lg opacity-0 animate-fade-in [animation-delay:300ms]">
            Hello, my name is
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-tech-lightest-slate opacity-0 animate-fade-in [animation-delay:500ms]">
            Sudeep Banerjee Chopra.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-tech-slate opacity-0 animate-fade-in [animation-delay:700ms]">
            I build secure digital solutions.
          </h2>
          <div className="opacity-0 animate-fade-in [animation-delay:900ms]">
            <p className="text-tech-slate max-w-2xl text-lg md:text-xl leading-relaxed">
              I'm an undergraduate student pursuing B.Tech in Computer Science with a focus on 
              Artificial Intelligence, Machine Learning, Networking, and Cybersecurity. 
              Currently, I'm enhancing security frameworks with blockchain and experimenting with 
              AI for threat detection.
            </p>
          </div>
          <div className="pt-6 opacity-0 animate-fade-in [animation-delay:1100ms]">
            <a 
              href="#projects" 
              className="button-primary text-base md:text-lg py-3 px-8 inline-block"
            >
              Check out my work!
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-tech-cyan">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
