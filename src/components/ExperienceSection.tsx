
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';

const experiences = [
  {
    id: 'instaresz',
    company: 'Instaresz Business Services Private Limited',
    position: 'Associate Network Engineer',
    period: 'Present',
    location: 'Hyderabad, India',
    responsibilities: [
      'Set up and configured Sophos firewalls, managed switches and VLANs for enterprise network security.',
      'Implemented extensive security rules and performed DNS management for 4 domains.',
      'Deployed and maintained critical applications including SMTP servers and analytics dashboards.',
      'Led network infrastructure projects, demonstrating technical leadership and project management skills.'
    ]
  },
  {
    id: 'drdo',
    company: 'Defence Research Development Laboratory (DRDO)',
    position: 'Project Intern',
    period: 'Oct 2023 - Jan 2024',
    location: 'Hyderabad, India',
    responsibilities: [
      'Interned at DRDL, collaborating with a senior scientist on cutting-edge defense research and development projects.',
      'Focused on applying machine learning techniques for detecting aerial vehicles through detailed analysis of data points and parameters.'
    ]
  },
  {
    id: 'paragon',
    company: 'Paragon Power Systems',
    position: 'IT Consultant',
    period: 'March 2020 - Present',
    location: 'Hyderabad, India',
    responsibilities: [
      'Proficiently oversee and maintain the technical infrastructure, ensuring optimal functionality and reliability for the organization.',
      'Efficiently handle HR responsibilities, including recruitment, employee relations, and compliance, fostering a positive workplace culture.',
      'Successfully liaise with clients to understand their needs, align services accordingly, and deliver exceptional results, enhancing overall client satisfaction.'
    ]
  }
];

const leadershipPositions = [
  {
    id: 'ieee',
    company: 'IEEE Vardhaman Student Branch',
    position: 'Secretary',
    period: 'January 2024 - December 2024',
    location: 'Hyderabad, India',
    description: 'Leading and coordinating IEEE student branch activities, promoting technical knowledge and professional development among students.'
  },
  {
    id: 'tedx',
    company: 'TEDxVCE',
    position: 'Executive Producer',
    period: 'March 2024 - Present',
    location: 'Hyderabad, India',
    description: 'Overseeing the planning, organization, and execution of TEDx events at Vardhaman College of Engineering.'
  },
  {
    id: 'innovation',
    company: 'Centre of Innovation and Entrepreneurship',
    position: 'Innovation Coordinator',
    period: 'August 2023 - January 2024',
    location: 'Hyderabad, India',
    description: 'Facilitating innovation and entrepreneurship initiatives within the college community.'
  },
  {
    id: 'sac',
    company: 'Student Affairs Cell, Vardhaman College of Engineering',
    position: 'Executive Board Member',
    period: 'August 2022 - Present',
    location: 'Hyderabad, India',
    description: 'Collaborating with faculty and students to enhance campus activities and student welfare.'
  },
  {
    id: 'ieee_hyd',
    company: 'IEEE Hyderabad Section',
    position: 'Joint Section Student Representative',
    period: 'February 2024 - November 2024',
    location: 'Hyderabad, India',
    description: 'Representing student interests at the sectional level and coordinating inter-college activities.'
  }
];

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState('instaresz');

  return (
    <section id="experience" className="py-20 md:py-32 bg-tech-light-blue/20">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-heading before:content-['02.'] relative">
          <span className="highlight-heading">Where I've Led & Worked</span>
        </h2>
        
        <div className="mt-8 md:mt-12">
          <Tabs defaultValue="instaresz" className="max-w-4xl mx-auto" onValueChange={setActiveTab}>
            <div className="overflow-x-auto pb-4">
              <TabsList className="bg-tech-lightest-blue/20 h-auto p-1">
                {experiences.map(exp => (
                  <TabsTrigger 
                    key={exp.id} 
                    value={exp.id}
                    className={`
                      px-4 py-3 text-sm md:text-base whitespace-nowrap transition-all
                      data-[state=active]:text-tech-cyan data-[state=active]:shadow-[inset_0_-2px_0_0_#64ffda]
                      data-[state=active]:bg-tech-lightest-blue/10
                    `}
                  >
                    {exp.company.split(' ')[0]}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {experiences.map(exp => (
              <TabsContent 
                key={exp.id} 
                value={exp.id}
                className="mt-6 data-[state=active]:animate-fade-in-up"
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-tech-lightest-slate">
                      {exp.position} <span className="text-tech-cyan">@ {exp.company}</span>
                    </h3>
                    <p className="text-tech-slate">{exp.period} | {exp.location}</p>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-tech-cyan mr-2 mt-1.5">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-xl font-medium text-tech-lightest-slate mb-6 highlight-heading">Leadership Positions</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {leadershipPositions.slice(0, 3).map(position => (
              <Card key={position.id} className="tech-card">
                <h4 className="text-tech-cyan font-medium mb-2">{position.position}</h4>
                <p className="text-tech-lightest-slate">{position.company}</p>
                <p>{position.period}</p>
                <p className="mt-3 text-sm">{position.description}</p>
              </Card>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {leadershipPositions.slice(3).map(position => (
              <Card key={position.id} className="tech-card">
                <h4 className="text-tech-cyan font-medium mb-2">{position.position}</h4>
                <p className="text-tech-lightest-slate">{position.company}</p>
                <p>{position.period}</p>
                <p className="mt-3 text-sm">{position.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
