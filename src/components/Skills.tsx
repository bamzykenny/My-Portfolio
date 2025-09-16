import { useEffect, useRef, useState } from 'react';
import { Code, Database, Server, Wrench, Globe, Smartphone } from 'lucide-react';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedBars, setAnimatedBars] = useState<boolean[]>([]);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-primary to-primary-light',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'JavaScript', level: 92 },
        { name: 'TypeScript', level: 88 },
        { name: 'HTML/CSS', level: 96 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Next.js', level: 85 }
      ]
    },
    {
      title: 'Backend',
      icon: <Server className="w-6 h-6" />,
      color: 'from-secondary to-secondary-light',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'REST APIs', level: 92 },
        { name: 'GraphQL', level: 75 },
        { name: 'JWT Auth', level: 85 },
        { name: 'Socket.io', level: 80 }
      ]
    },
    {
      title: 'Database',
      icon: <Database className="w-6 h-6" />,
      color: 'from-accent to-accent-light',
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'MySQL', level: 82 },
        // { name: 'PostgreSQL', level: 78 }, 
        // { name: 'Redis', level: 70 },
        { name: 'Firebase', level: 85 },
        // { name: 'Prisma ORM', level: 75 }
      ]
    },
    {
      title: 'Tools & Others',
      icon: <Wrench className="w-6 h-6" />,
      color: 'from-primary via-secondary to-accent',
      skills: [
        { name: 'Git/GitHub', level: 92 },
        // { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Postman', level: 88 },
        // { name: 'Jest', level: 80 },
        // { name: 'Webpack', level: 75 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate progress bars with delay
          setTimeout(() => {
            setAnimatedBars(new Array(skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)).fill(true));
          }, 500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  let skillIndex = 0;

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface/30 to-background" />
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            A comprehensive toolkit built through years of development experience and continuous learning.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={`card-interactive p-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndexInCategory) => {
                  const currentSkillIndex = skillIndex++;
                  return (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: animatedBars[currentSkillIndex] ? `${skill.level}%` : '0%',
                            transitionDelay: `${500 + (currentSkillIndex * 100)}ms`
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Badges */}
        <div className={`mt-16 transition-all duration-700 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Technologies I Work With
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'React', 'Node.js', 'MongoDB', 'Express.js', 'TypeScript', 'JavaScript',
              'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Git', 'GitHub',
              'AWS', 'Firebase', 'Postman', 'MySQL',
              'Socket.io', 'GraphQL', 'Next.js'
            ].map((tech, index) => (
              <span 
                key={tech}
                className={`skill-badge transition-all duration-500 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${1200 + (index * 50)}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;