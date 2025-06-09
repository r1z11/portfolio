import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from 'ui/button';
import { Toaster } from 'ui/toaster';
import { toast } from 'ui/use-toast';
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
    Star,
    Zap,
    Rocket
} from 'lucide-react';

import { services, projects } from '../constants/data';
import Projects from './Projects';

const Content = () => {

    const [key, setKey] = useState('all');

    const sequence = [0, 3, 4, 7, 8, 11, 12, 15, 16, 19, 20];

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

    const projects = [
        {
            title: 'Portfolio Website V1',
            description: 'My previous personal portfolio website, showcasing early projects and skills. Built with HTML, CSS, and JavaScript.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            image: 'Screenshot of a clean and simple portfolio website homepage',
            liveLink: 'https://r1z11.github.io/portfolio/'
        },
        {
            title: 'Recipe Finder App',
            description: 'A web application that allows users to search for recipes based on ingredients. Features API integration and dynamic content rendering.',
            tech: ['React', 'Node.js', 'External API'],
            image: 'Interface of a recipe finder app with search bar and recipe cards',
            liveLink: '#'
        },
        {
            title: 'Task Management System',
            description: 'A full-stack task management tool with user authentication, CRUD operations, and a responsive UI. Built with MERN stack.',
            tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
            image: 'Dashboard of a task management system showing to-do lists and task statuses',
            liveLink: '#'
        }
    ];

    const handleContactClick = () => {
        toast({
            title: "Let's Connect! 🚀",
            description: "Feel free to reach out to Eric Sentongo for collaboration opportunities!",
        });
    };

    const scrollToSection = (sectionId) => {
        // document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-animation"></div>
                    <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-animation" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-animation" style={{ animationDelay: '4s' }}></div>
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
                                        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        alt={project.title}
                                        src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
                                </div>
                                <div className="p-6">
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
                                        onClick={() => project.liveLink && project.liveLink !== '#' && window.open(project.liveLink, '_blank')}
                                        disabled={!project.liveLink || project.liveLink === '#'}
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
                                        specializing in creating scalable web applications and cloud solutions.
                                        My journey spans from crafting beautiful WordPress themes to building
                                        complex React applications and robust backend systems.
                                    </p>
                                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                        With a strong foundation in both frontend and backend technologies,
                                        I bring ideas to life through clean code, innovative solutions,
                                        and a keen eye for user experience.
                                    </p>
                                    <div className="flex gap-4">
                                        <Button variant="outline" size="sm" className="glass-effect">
                                            <Github className="mr-2 h-4 w-4" />
                                            GitHub
                                        </Button>
                                        <Button variant="outline" size="sm" className="glass-effect">
                                            <Linkedin className="mr-2 h-4 w-4" />
                                            LinkedIn
                                        </Button>
                                        <Button variant="outline" size="sm" className="glass-effect">
                                            <Download className="mr-2 h-4 w-4" />
                                            Resume
                                        </Button>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="w-full h-80 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                                        <img
                                            class="w-full h-full object-cover rounded-xl"
                                            alt="Eric Sentongo - Professional developer workspace"
                                            src="https://images.unsplash.com/photo-1618402802758-41b86a26a962" />
                                    </div>
                                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                                        <Star className="h-12 w-12 text-white" />
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
                            onClick={handleContactClick}
                        >
                            <Mail className="mr-2 h-5 w-5" />
                            Start a Conversation
                        </Button>
                    </div>
                </div>
            </section>

            <Toaster />
        </div>
    );
}

const styles = {
    box: {
        width: '100%',
        borderTopLeftRadius: 21,
        borderTopRightRadius: 21,
    }
}

export default Content;