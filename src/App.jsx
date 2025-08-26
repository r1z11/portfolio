import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import { 
  Code, 
  Database, 
  Cloud, 
  Globe, 
  Mail, 
  Github, 
  Linkedin, 
  Download,
  ExternalLink,
  ChevronDown,
  Zap,
  Rocket
} from 'lucide-react';

import { projects } from '@/constants/data';
import eric from "@/assets/images/eric.jpg";

const App = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const techStack = [
    { name: 'WordPress', icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { name: 'React', icon: Code, color: 'from-cyan-500 to-blue-500' },
    { name: 'Node.js', icon: Zap, color: 'from-green-500 to-emerald-500' },
    { name: 'PHP', icon: Code, color: 'from-purple-500 to-indigo-500' },
    { name: 'MySQL', icon: Database, color: 'from-orange-500 to-red-500' },
    { name: 'MongoDB', icon: Database, color: 'from-green-600 to-green-400' },
    { name: 'Google Cloud', icon: Cloud, color: 'from-blue-600 to-blue-400' }
  ];

  const handleContactClick = () => {
    toast({
      title: "Let's Connect! 🚀",
      description: "Feel free to reach out to Eric Sentongo for collaboration opportunities!",
    });

    document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' });
  };

  // Open link in new tab
  const openLink = (link) => { window.open(link, '_blank'); }

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-animation"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-animation" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-animation" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="gradient-text">Eric Sentongo</span>
              <br />
              <span className="text-white">Software Developer</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Crafting exceptional digital experiences with modern technologies
              <br />
              <span className="text-purple-400">WordPress • React • Node.js • Cloud Solutions</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gradient-bg hover:scale-105 transition-transform duration-300 pulse-glow"
                onClick={() => scrollToSection('projects')}
              >
                <Rocket className="mr-2 h-5 w-5" />
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="glass-effect hover:scale-105 transition-transform duration-300"
                onClick={handleContactClick}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-8 w-8 text-white/60" />
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            id="tech-stack"
            className={`scroll-reveal text-center mb-16 ${isVisible['tech-stack'] ? 'revealed' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Leveraging cutting-edge technologies to build scalable and robust solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="tech-card rounded-xl p-6 text-center group cursor-pointer"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${tech.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                  {tech.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div 
            id="projects-title"
            className={`scroll-reveal text-center mb-16 ${isVisible['projects-title'] ? 'revealed' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Showcasing innovative solutions and creative implementations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-effect rounded-xl overflow-hidden group hover:scale-105 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                  <img   
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    alt={project.name}
                    src={project.image} />
                </div>
                <div className="p-6">
                  <h3 className="text-xxl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {project.name}
                  </h3>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full glass-effect hover:bg-purple-500/20"
                    onClick={() => project.link && project.link !== '#' && window.open(project.link, '_blank')}
                    disabled={!project.link || project.link === '#'}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div 
            id="about"
            className={`scroll-reveal ${isVisible['about'] ? 'revealed' : ''}`}
          >
            <div className="glass-effect rounded-2xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                <span className="gradient-text">About Eric</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Hi, I'm Eric Sentongo, a passionate software developer with expertise in full-stack development, 
                    specializing in creating scalable cloud solutions, web and mobile applications.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6"> 
                    I bring ideas to life through code.
                  </p>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="glass-effect" onClick={() => openLink("https://github.com/r1z11")}>
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                    <Button variant="outline" size="sm" className="glass-effect" onClick={() => openLink("https://www.linkedin.com/in/eric-sentongo")}>
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm" className="glass-effect" onClick={() => openLink("https://docs.google.com/document/d/1y8kQvNeqkDiJpr0agtWb6vC0TtR8hqhrgucqC4eDSUw/edit?usp=sharing")}>
                      <Download className="mr-2 h-4 w-4" />
                      Resume
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-full h-80 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                    <img 
                      className="w-full h-full object-cover rounded-xl"
                      alt="Eric Sentongo - Professional developer workspace"
                      src={eric} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            id="contact"
            className={`scroll-reveal ${isVisible['contact'] ? 'revealed' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="gradient-text">Let's Build Something Amazing</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's collaborate and create 
              something extraordinary together.
            </p>
            <Button 
              size="lg" 
              className="gradient-bg hover:scale-105 transition-transform duration-300 pulse-glow"
              onClick={() => { window.location.href = "mailto:sentongoeric@gmail.com"; }}
            >
              <Mail className="mr-2 h-5 w-5" />
              Start a Conversation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Eric Sentongo. Crafted with passion and modern tech.
          </p>
        </div>
      </footer>

      <Toaster />
    </div>
  );
};

export default App;