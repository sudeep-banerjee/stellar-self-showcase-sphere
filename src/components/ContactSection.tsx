
import React from 'react';
import { Card } from '@/components/ui/card';
import { Github, Linkedin, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-heading before:content-['05.']">Get In Touch</h2>
        
        <div className="max-w-3xl mx-auto text-center mt-12">
          <h3 className="text-3xl md:text-4xl font-semibold text-tech-lightest-slate mb-6">
            Let's Connect!
          </h3>
          
          <p className="text-tech-light-slate text-lg md:text-xl mb-8">
            I'm currently looking for new opportunities in cybersecurity, AI/ML, and blockchain development. Whether you have a question or just want to say hello, I'll do my best to get back to you!
          </p>
          
          <a 
            href="mailto:sudeepbanerjeechopra@hotmail.com" 
            className="button-primary text-base inline-block py-3 px-8 text-lg"
          >
            Say Hello
          </a>
          
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <Card className="tech-card text-center py-8 transform transition-transform hover:-translate-y-2">
              <a 
                href="mailto:sudeepbanerjeechopra@hotmail.com"
                className="flex flex-col items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={32} className="text-tech-cyan mb-4" />
                <h4 className="text-tech-lightest-slate font-medium mb-2">Email</h4>
                <p className="text-tech-light-slate text-sm break-all">
                  sudeepbanerjeechopra@hotmail.com
                </p>
              </a>
            </Card>
            
            <Card className="tech-card text-center py-8 transform transition-transform hover:-translate-y-2">
              <a 
                href="https://linkedin.com/in/sudeepbanerjee08"
                className="flex flex-col items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={32} className="text-tech-cyan mb-4" />
                <h4 className="text-tech-lightest-slate font-medium mb-2">LinkedIn</h4>
                <p className="text-tech-light-slate text-sm">
                  linkedin.com/in/sudeepbanerjee08
                </p>
              </a>
            </Card>
            
            <Card className="tech-card text-center py-8 transform transition-transform hover:-translate-y-2">
              <a 
                href="https://github.com/sudeepbanerjeechopra"
                className="flex flex-col items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={32} className="text-tech-cyan mb-4" />
                <h4 className="text-tech-lightest-slate font-medium mb-2">GitHub</h4>
                <p className="text-tech-light-slate text-sm">
                  github.com/sudeepbanerjeechopra
                </p>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
