
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Skills = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.1);
  const [skillsRef, skillsVisible] = useScrollAnimation(0.1);
  const [techRef, techVisible] = useScrollAnimation(0.1);

  const skills = [
    { name: 'React', level: 95 },
    { name: 'Next.js', level: 92 },
    { name: 'Java', level: 90 },
    { name: 'C++', level: 90 },
    { name: 'C#', level: 90 },
    { name: 'Python', level: 80 },
    { name: 'TypeScript', level: 65 },
  ];

  const technologies = [
    'JavaScript', 'TypeScript', 'React', 'Next.js',
    'Node.js', 'Git', 'Tailwind CSS',
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`text-center mb-16 ${titleVisible ? 'slide-up-visible' : 'slide-up'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill Bars */}
          <div 
            ref={skillsRef}
            className={`glass p-8 rounded-2xl ${skillsVisible ? 'slide-left-visible' : 'slide-left'}`}
          >
            <h3 className="text-2xl font-bold mb-8">Proficiency</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className={`${skillsVisible ? 'fade-in-visible' : 'fade-in'} stagger-${index + 1}`}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-purple-400 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: skillsVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Grid */}
          <div 
            ref={techRef}
            className={`glass p-8 rounded-2xl ${techVisible ? 'slide-right-visible' : 'slide-right'}`}
          >
            <h3 className="text-2xl font-bold mb-8">Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className={`glass-hover p-3 rounded-lg text-center text-sm font-medium transition-all duration-300 hover:scale-105 ${techVisible ? 'scale-in-visible' : 'scale-in'} stagger-${(index % 6) + 1}`}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
