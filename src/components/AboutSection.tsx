
import React from 'react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-heading before:content-['01.']">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-start">
          <div className="md:col-span-2 space-y-4">
            <p className="text-lg">
              Hello! I'm Sudeep, an undergraduate student pursuing B.Tech in Computer Science Engineering with a focus on Artificial Intelligence, Machine Learning, Networking, and Cybersecurity. I'm passionate about <span className="text-tech-cyan">leadership</span> and driving technological innovation.
            </p>
            
            <p>
              My journey in technology began with a fascination for solving complex problems. As I progressed in my education at <span className="text-tech-lightest-slate">Vardhaman College of Engineering</span>, I developed a deep interest in cybersecurity and its intersection with emerging technologies.
            </p>
            
            <p>
              Currently, I'm working as an <span className="text-tech-lightest-slate">Associate Network Engineer at Instaresz Business Services</span> where I set up Sophos firewalls, manage switches and VLANs, implement security rules, and handle DNS management for multiple domains. I've also had the privilege of working at <span className="text-tech-lightest-slate">Defence Research Development Laboratory (DRDO)</span> as a Project Intern, where I applied machine learning techniques for detecting aerial vehicles.
            </p>
            
            <p>
              My technical expertise combined with leadership skills has enabled me to drive projects forward and inspire teams to achieve their goals. I believe in leading by example and creating an environment where innovation thrives.
            </p>
            
            <p>
              Beyond technical work, I hold leadership positions at my college, including Executive Board Member of the Student Affairs Cell and Secretary of the IEEE Vardhaman Student Branch. These roles have honed my abilities to lead teams, organize events, and drive initiatives that make a positive impact.
            </p>
          </div>
          
          <div className="flex flex-col gap-6">
            <Card className="tech-card">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-tech-cyan text-xl font-medium mb-2">Education</h3>
                  <p className="text-tech-lightest-slate font-medium">B.Tech in Computer Science Engineering (AIML)</p>
                  <p>Vardhaman College of Engineering</p>
                  <p>2021 - 2025</p>
                  <p className="text-tech-cyan mt-2">CGPA: 7.2</p>
                </div>
              </div>
            </Card>
            
            <Card className="tech-card">
              <div>
                <h3 className="text-tech-cyan text-xl font-medium mb-2">Leadership & Achievements</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-tech-cyan mr-2">▹</span>
                    <span>Led network infrastructure projects at Instaresz Business Services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-tech-cyan mr-2">▹</span>
                    <span>Finalist for the Smart India Hackathon 2022 Grand Finale</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-tech-cyan mr-2">▹</span>
                    <span>EC-Council CCT Cybersecurity Scholarship 2023</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-tech-cyan mr-2">▹</span>
                    <span>Winner of Poster presentation on Face recognition at IEEE SPS Forum</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
