import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Financial Operaton Simulation Platform',
      description: 'A full-stack application built with React, Node.js, and MongoDB, designed to simulate financial transactions and operations. It includes secure user authentication, integrated payment processing, and a comprehensive admin dashboard for management and monitoring.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      github: 'https://github.com/bamzykenny/',
      live: 'https://financial-simulation-nine.vercel.app/',
      featured: true
    },
    {
      title: 'AI Powered Healthcare Web Application',
      description: 'A modern web app leveraging AI to enhance healthcare services, featuring real-time communication, file sharing, and user presence tracking.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
      github: 'https://github.com/bamzykenny/',
      live: 'http://ai-medics-sandy.vercel.app/',
      featured: true
    },
  
    {
      title: 'Cybersecurity Learning Platform',
      description: 'Educational platform for cybersecurity courses with interactive labs, progress tracking, and certification system.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop',
      technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'AWS'],
      github: 'https://github.com/bamzykenny/',
      live: 'https://bytitude.netlify.app/',
      featured: false
    },
      {
      title: 'Task Management System',
      description: 'Kanban-style task management with drag-and-drop, team collaboration, and progress tracking. Features dark mode and responsive design.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      technologies: ['React', 'TypeScript', 'Tailwind', 'Firebase'],
      github: 'https://github.com/bamzykenny/',
      live: 'https://github.com/bamzykenny/',
      featured: false
    },
    {
      title: 'Library Management System',
      description: 'Comprehensive library management with book cataloging, member management, and automated fine calculation.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop',
      technologies: ['React', 'Express', 'MySQL', 'JWT'],
      github: 'https://github.com/bamzykenny/',
      live: 'https://github.com/bamzykenny/',
      featured: false
    },
  
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-surface/30" />
      
      {/* Floating elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-1s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            A showcase of my recent work, demonstrating expertise in full-stack development and modern web technologies.
          </p>
        </div>

        {/* Carousel Container */}
        <div className={`relative transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-surface/90 hover:bg-surface rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-border/20 shadow-lg"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-foreground" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-surface/90 hover:bg-surface rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-border/20 shadow-lg"
            aria-label="Next project"
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-foreground" />
          </button>

          {/* Slides Container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={project.title} className="min-w-full">
                  <div className="card-interactive group overflow-hidden mx-2 sm:mx-4">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className="relative overflow-hidden h-48 sm:h-64 lg:h-96 order-1">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Overlay Actions - Hidden on mobile, visible on hover on desktop */}
                        <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300 hidden sm:flex">
                          <a 
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-primary rounded-full text-primary-foreground hover:bg-primary/80 transition-colors duration-300"
                          >
                            <Eye className="w-5 h-5" />
                          </a>
                          <a 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-surface rounded-full text-foreground hover:bg-muted transition-colors duration-300"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        </div>

                        {/* Project Number */}
                        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 px-2 sm:px-3 py-1 bg-primary/90 text-primary-foreground rounded-full text-xs sm:text-sm font-semibold">
                          {index + 1} / {projects.length}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 sm:p-6 lg:p-12 flex flex-col justify-center order-2">
                        <div className="space-y-4 sm:space-y-6">
                          <div>
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4 group-hover:text-primary transition-colors duration-300">
                              {project.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg">
                              {project.description}
                            </p>
                          </div>
                          
                          {/* Technologies */}
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {project.technologies.map((tech) => (
                              <span 
                                key={tech}
                                className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-muted rounded-full text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors duration-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Actions */}
                          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 pt-2 sm:pt-4">
                            <a 
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                            >
                              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                              <span className="font-medium">Live Demo</span>
                            </a>
                            <a 
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 border border-border rounded-lg hover:bg-surface transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                            >
                              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                              <span className="font-medium">Source Code</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-muted-foreground mb-6">
            Interested in working together? Let's create something amazing!
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="hero-button"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
