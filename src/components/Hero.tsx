import { useState, useEffect } from 'react';
import { ChevronDown, Download, Eye, Github, Linkedin, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-developer.jpg';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'MERN Stack Developer',
    'React Specialist',
    'Node.js Developer',
    'JavaScript Expert'
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentFullText = texts[currentIndex];
    
    if (!isDeleting && currentText === currentFullText) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }
    
    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
      return;
    }
    
    const timeout = setTimeout(() => {
      setCurrentText(prev => 
        isDeleting 
          ? prev.slice(0, -1)
          : currentFullText.slice(0, prev.length + 1)
      );
    }, typeSpeed);
    
    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-surface-elevated" />
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-1.5s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-accent font-medium">Hello, I'm</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                <span className="gradient-text">Bakare Kehinde</span>
              </h1>
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground">
                  {currentText}
                  <span className="ml-1 border-r-2 border-primary animate-pulse">|</span>
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-balance">
                With 3+ years of experience and 50+ successful projects, I create exceptional web experiences 
                using modern technologies. I build scalable, performant applications that solve real-world problems.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToProjects}
                className="hero-button group"
              >
                <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View Projects
              </button>
              <button 
                onClick={scrollToContact}
                className="hero-button group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 justify-center lg:justify-start pt-4">
              <a 
                href="https://github.com/bamzykenny" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-surface/50 hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
              >
                <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/bakare-kehinde-ab2608286" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-surface/50 hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="mailto:bakare21ko@gmail.com"
                className="p-3 rounded-full bg-surface/50 hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
              >
                <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-20 scale-110 animate-glow" />
              
              {/* Image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-primary via-secondary to-accent p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-surface to-surface-elevated">
                  <img 
                    src={heroImage} 
                    alt="Developer Profile" 
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-card border-2 border-primary rounded-full px-4 py-2 animate-float">
                <p className="text-sm font-semibold gradient-text">Available for hire!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="p-2 rounded-full bg-surface/50 hover:bg-primary/20 transition-all duration-300"
          >
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;