
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';

const experiences = [
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
  },
  {
    id: 'ieee',
    company: 'IEEE Vardhaman Student Branch',
    position: 'Secretary',
    period: 'January 2024 - December 2024',
    location: 'Hyderabad, India',
    responsibilities: [
      'Lead and coordinate IEEE student branch activities, promoting technical knowledge and professional development.',
      'Organize workshops, seminars, and technical events to enhance student learning and engagement.',
      'Represent the student branch in meetings with IEEE section and regional bodies.'
    ]
  },
  {
    id: 'tedx',
    company: 'TEDxVCE',
    position: 'Executive Producer',
    period: 'March 2024 - Present',
    location: 'Hyderabad, India',
    responsibilities: [
      'Oversee the planning, organization, and execution of TEDx events at Vardhaman College of Engineering.',
      'Collaborate with speakers, sponsors, and team members to create impactful and inspiring events.',
      'Ensure high-quality production standards for talks and event management.'
    ]
  },
  {
    id: 'innovation',
    company: 'Centre of Innovation and Entrepreneurship',
    position: 'Innovation Coordinator',
    period: 'August 2023 - January 2024',
    location: 'Hyderabad, India',
    responsibilities: [
      'Facilitate innovation and entrepreneurship initiatives within the college community.',
      'Connect students with mentors, resources, and platforms to develop their innovative ideas.',
      'Organize ideation workshops and competitions to foster a culture of innovation.'
    ]
  }
];

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState('drdo');

  return (
    <section id="experience" className="py-20 md:py-32 bg-tech-light-blue/20">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-heading before:content-['02.']">Where I've Worked</h2>
        
        <div className="mt-8 md:mt-12">
          <Tabs defaultValue="drdo" className="max-w-4xl mx-auto" onValueChange={setActiveTab}>
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
          <h3 className="text-xl font-medium text-tech-lightest-slate mb-6">Academic Positions</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="tech-card">
              <h4 className="text-tech-cyan font-medium mb-2">Executive Board Member</h4>
              <p className="text-tech-lightest-slate">Student Affairs Cell, Vardhaman College of Engineering</p>
              <p>August 2022 - Present</p>
              <p className="mt-3 text-sm">Collaborating with faculty and students to enhance campus activities and student welfare.</p>
            </Card>
            
            <Card className="tech-card">
              <h4 className="text-tech-cyan font-medium mb-2">Joint Section Student Representative</h4>
              <p className="text-tech-lightest-slate">IEEE Hyderabad Section</p>
              <p>February 2024 - November 2024</p>
              <p className="mt-3 text-sm">Representing student interests at the sectional level and coordinating inter-college activities.</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
