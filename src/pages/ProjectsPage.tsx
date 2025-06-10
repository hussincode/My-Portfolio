import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const ProjectsPage = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.1);
  const [projectsRef, projectsVisible] = useScrollAnimation(0.1);

  const allProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with real-time data visualization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'To-Do List',
      description: 'Collaborative task management application with real-time updates.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Java'],
      github: 'https://github.com/hussincode/To-Do-list',
      live: 'https://hussincode.github.io/To-Do-list/',
    },
    // Add more projects here
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <div className="container mx-auto px-4 py-20">
        <div 
          ref={titleRef}
          className={`text-center mb-16 ${titleVisible ? 'slide-up-visible' : 'slide-up'}`}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            All Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my complete portfolio of projects
          </p>
        </div>

        <div 
          ref={projectsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {allProjects.map((project, index) => (
            <div
              key={index}
              className={`glass-hover rounded-2xl overflow-hidden group ${projectsVisible ? 'scale-in-visible' : 'scale-in'} stagger-${index + 1}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 