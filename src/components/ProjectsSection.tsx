import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Link } from 'lucide-react';

const projects = [
  {
    title: "Securing Documents using Blockchain and TSA Authorities",
    description: "This solution integrates blockchain technology with TSA oversight to ensure tamper-proof, secure, and transparent document management and verification.",
    badges: ["Blockchain", "Security", "Document Management"],
    link: "#",
    github: "#",
    featured: true
  },
  {
    title: "Offline Medical LLM based Chatbot Using GPT-4 and Llama CPP",
    description: "Our team developed an offline medical chatbot using GPT-4 and Llama CPP, fine-tuned with Hugging Face's weights for medical data, ensuring privacy through local data usage and contributing to healthcare innovation.",
    badges: ["AI/ML", "Healthcare", "LLM", "Privacy"],
    link: "#",
    github: "#",
    featured: true
  },
  {
    title: "Unmanned Vehicle and Drone Detection Using Machine Learning",
    description: "This project utilizes YOLOv4 and CNN technologies to develop a real-time, accurate system for detecting unmanned vehicles (UMVs) and drones, enhancing safety and security across applications.",
    badges: ["Computer Vision", "Machine Learning", "Drones", "Security"],
    link: "#",
    github: "#",
    featured: true
  },
  {
    title: "Password Manager Using Java Applet",
    description: "This Java applet-based password manager provides a secure and convenient solution for storing and managing passwords, featuring a random password generator to enhance online security and privacy.",
    badges: ["Java", "Security", "Password Management"],
    link: "#",
    github: "#"
  },
  {
    title: "Augmenting SDN Security Through User Behavior Analysis and Ensemble Learning",
    description: "Enhanced SDN security with ensemble models (XGBoost, CatBoost, LightGBM) and user behavior analysis, achieving 79.23% accuracy for real-time threat detection using UNSW-NB15 and KDD Cup 1999 datasets.",
    badges: ["Network Security", "Machine Learning", "User Behavior", "SDN"],
    link: "#",
    github: "#"
  }
];

const ProjectsSection = () => {
  // Split projects into featured and other projects
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-heading before:content-['03.']">Some Things I've Built</h2>
        
        {/* Featured Projects */}
        <div className="space-y-32 mb-20">
          {featuredProjects.map((project, index) => (
            <div 
              key={index} 
              className={`relative md:grid md:grid-cols-12 md:gap-4 items-center ${
                index % 2 === 0 ? '' : 'md:text-right'
              }`}
            >
              {/* Project Image */}
              <div 
                className={`md:col-span-7 relative rounded-lg overflow-hidden h-80 ${
                  index % 2 === 0 ? 'md:col-start-6' : 'md:col-start-1'
                }`}
              >
                <div className="absolute inset-0 bg-tech-cyan/20 hover:bg-transparent transition-all duration-300 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-tech-blue via-tech-light-blue to-tech-blue flex items-center justify-center">
                  <div className="text-tech-cyan text-6xl font-bold opacity-30">PROJECT</div>
                </div>
              </div>
              
              {/* Project Content */}
              <div 
                className={`md:col-span-7 md:absolute ${
                  index % 2 === 0 ? 'md:left-0' : 'md:right-0'
                } z-20`}
              >
                <div className={`bg-tech-light-blue/90 backdrop-blur-sm rounded-lg p-6 shadow-xl tech-card ${
                  index % 2 === 0 ? '' : 'md:ml-auto'
                }`}>
                  <p className="text-tech-cyan font-mono text-sm mb-1">Featured Project</p>
                  <h3 className="text-tech-lightest-slate text-2xl font-semibold mb-4">
                    {project.title}
                  </h3>
                  <div className="text-tech-light-slate mb-4">
                    {project.description}
                  </div>
                  <div className={`flex flex-wrap gap-2 mb-6 ${
                    index % 2 === 0 ? '' : 'md:justify-end'
                  }`}>
                    {project.badges.map((badge, i) => (
                      <Badge key={i} className="bg-tech-lightest-blue/30 hover:bg-tech-lightest-blue/50 text-tech-lightest-slate">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  <div className={`flex gap-4 ${
                    index % 2 === 0 ? '' : 'md:justify-end'
                  }`}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-tech-light-slate hover:text-tech-cyan transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-tech-light-slate hover:text-tech-cyan transition-colors">
                      <Link size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Other Projects */}
        <h3 className="text-2xl font-semibold text-center text-tech-lightest-slate mb-12">Other Noteworthy Projects</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <Card key={index} className="tech-card h-full flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div className="text-tech-cyan">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-tech-light-slate hover:text-tech-cyan transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-tech-light-slate hover:text-tech-cyan transition-colors">
                      <Link size={20} />
                    </a>
                  </div>
                </div>
                <CardTitle className="text-tech-lightest-slate">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-tech-light-slate">{project.description}</p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 pt-4">
                {project.badges.map((badge, i) => (
                  <Badge key={i} className="bg-tech-lightest-blue/30 hover:bg-tech-lightest-blue/50 text-tech-lightest-slate">
                    {badge}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
