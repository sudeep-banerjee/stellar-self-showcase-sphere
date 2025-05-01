
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const technicalSkills = [
    "Python", "C", "Java", "HTML", "CSS", "JavaScript", 
    "Node.js", "Solidity", "SQL", "VMware vSphere",
    "Machine Learning", "Blockchain", "Computer Vision",
    "Network Security", "Cloud Computing"
  ];
  
  const softSkills = [
    "Communication", "Problem Solving", "Time Management", "Leadership",
    "Team Collaboration", "Critical Thinking", "Adaptability",
    "Project Management", "Public Speaking"
  ];
  
  const creativeSkills = [
    "Photoshop", "Canva Designing", "DaVinci Resolve", "Adobe After Effects", 
    "Amateur Audio Engineer", "UI/UX Design", "Content Creation"
  ];
  
  // Function to group skills into columns for display
  const groupIntoColumns = (skills: string[], columns: number) => {
    const result: string[][] = Array.from({ length: columns }, () => []);
    skills.forEach((skill, index) => {
      result[index % columns].push(skill);
    });
    return result;
  };

  return (
    <section id="skills" className="py-20 md:py-32 bg-tech-light-blue/20">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-heading before:content-['04.']">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Technical Skills */}
          <Card className="tech-card h-full">
            <div className="p-6">
              <div className="mb-6">
                <div className="w-12 h-12 rounded-full bg-tech-cyan/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tech-cyan">
                    <path d="m18 16 4-4-4-4" />
                    <path d="m6 8-4 4 4 4" />
                    <path d="m14.5 4-5 16" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-tech-lightest-slate">Technical Skills</h3>
                <div className="w-12 h-1 bg-tech-cyan mt-2 mb-4"></div>
                <p className="text-tech-light-slate">Programming languages, frameworks, and technologies I work with.</p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill, index) => (
                  <Badge key={index} className="bg-tech-lightest-blue/30 hover:bg-tech-lightest-blue/50 text-tech-lightest-slate">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
          
          {/* Soft Skills */}
          <Card className="tech-card h-full">
            <div className="p-6">
              <div className="mb-6">
                <div className="w-12 h-12 rounded-full bg-tech-purple/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tech-purple">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-tech-lightest-slate">Soft Skills</h3>
                <div className="w-12 h-1 bg-tech-purple mt-2 mb-4"></div>
                <p className="text-tech-light-slate">Professional attributes and interpersonal abilities.</p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="border-tech-purple/40 text-tech-light-slate hover:bg-tech-purple/10">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
          
          {/* Creative Skills */}
          <Card className="tech-card h-full">
            <div className="p-6">
              <div className="mb-6">
                <div className="w-12 h-12 rounded-full bg-tech-pink/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tech-pink">
                    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
                    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                    <path d="M12 2v2"></path>
                    <path d="M12 22v-2"></path>
                    <path d="m17 20.66-1-1.73"></path>
                    <path d="M11 10.27 7 3.34"></path>
                    <path d="m20.66 17-1.73-1"></path>
                    <path d="m3.34 7 1.73 1"></path>
                    <path d="M14 12h8"></path>
                    <path d="M2 12h2"></path>
                    <path d="m20.66 7-1.73 1"></path>
                    <path d="m3.34 17 1.73-1"></path>
                    <path d="m17 3.34-1 1.73"></path>
                    <path d="m7 20.66-1-1.73"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-tech-lightest-slate">Creative Skills</h3>
                <div className="w-12 h-1 bg-tech-pink mt-2 mb-4"></div>
                <p className="text-tech-light-slate">Design and multimedia tools I'm proficient with.</p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {creativeSkills.map((skill, index) => (
                  <Badge key={index} className="bg-tech-pink/10 hover:bg-tech-pink/20 text-tech-lightest-slate border border-tech-pink/30">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </div>
        
        {/* Publications Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-tech-lightest-slate mb-8">Publications & Patents</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="tech-card h-full">
              <div className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tech-cyan">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <line x1="10" y1="9" x2="8" y2="9"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-tech-lightest-slate font-medium">Patent: Securing Classified Documents Using blockchain and open source repositories</h4>
                    <p className="text-tech-cyan mt-1">2022 - 2023</p>
                    <p className="text-tech-slate mt-1">Status of Patent: Pending/Published (202241037608)</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="tech-card h-full">
              <div className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tech-cyan">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-tech-lightest-slate font-medium">Research Paper: Optimizing Resume Parsing Processes by Leveraging Large Language Models</h4>
                    <p className="text-tech-cyan mt-1">2024</p>
                    <a href="https://ieeexplore.ieee.org/document/10752300/" target="_blank" rel="noopener noreferrer" className="text-tech-cyan hover:underline mt-1 inline-block">
                      View Publication
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
