import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Briefcase, Award, Calendar } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const experiences = [
  {
      year: 'April 2024 - December 2024',
      title: 'Junior Developer',
      company: 'Tedprime Hub.',
      description: 'Leading development of scalable web applications using React, Node.js, and MongoDB.',
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      year: '2021 - Present',
      title: 'MERN Stack Developer',
      company: 'Freelancer',
      description: 'Built responsive web applications and RESTful APIs for various client projects.',
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      year: '2021 - 2025',
      title: 'Bachelor of Computer Science',
      company: 'Precious Cornerstone University',
      description: 'Specialized in software engineering and web development technologies.',
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Certified React Developer',
      description: 'Advanced React certification from Meta'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'AWS Cloud Practitioner',
      description: 'Cloud computing fundamentals certification'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Node.js Specialist',
      description: 'Backend development certification'
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-surface/30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            I'm a passionate developer who loves creating digital experiences that make a difference. 
            With expertise in modern web technologies, I turn ideas into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Story */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="card-interactive p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Started my coding journey in 2021 with a curiosity about how websites work. 
                What began as a hobby quickly became a passion, leading me to pursue computer science 
                and specialize in full-stack web development.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With over 3 years of professional experience and 50+ successful projects, I focus on creating 
                exceptional user experiences using the MERN stack. I have a keen eye for performance optimization 
                and clean, maintainable code. I believe in continuous learning and staying updated with the latest technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold gradient-text">Certifications</h3>
              <div className="grid gap-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className={`card-interactive p-4 transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-primary">{achievement.icon}</div>
                      <div>
                        <h4 className="font-semibold">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className={`transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <h3 className="text-2xl font-bold mb-8 gradient-text">Experience & Education</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div 
                    key={index}
                    className={`relative flex items-start space-x-6 transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${600 + index * 150}ms` }}
                  >
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground border-4 border-background">
                      {exp.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="card-interactive p-6 flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium text-accent">{exp.year}</span>
                      </div>
                      <h4 className="text-lg font-bold mb-1">{exp.title}</h4>
                      <p className="text-primary font-medium mb-2">{exp.company}</p>
                      <p className="text-muted-foreground text-sm">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;