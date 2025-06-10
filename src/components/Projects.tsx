import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

export const Projects = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.1);
  const [projectsRef, projectsVisible] = useScrollAnimation(0.1);

  const projects = [
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
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`text-center mb-16 ${titleVisible ? 'slide-up-visible' : 'slide-up'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Some of the projects I've worked on recently
          </p>
        </div>

        <div 
          ref={projectsRef}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
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
          {/* Coming Soon Card */}
          <div className={`relative glass-hover rounded-2xl flex flex-col items-center justify-center min-h-[300px] scale-in stagger-${projects.length + 1} ${projectsVisible ? 'scale-in-visible' : ''} overflow-hidden`}>
            {/* Blurred background project card */}
            {projects.length > 0 && (
              <div className="absolute inset-0 z-0">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-cover filter blur-md brightness-75 scale-110"
                  draggable={false}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
            )}
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2">More Projects Coming Soon</h3>
              <p className="text-muted-foreground text-center max-w-xs">Stay tuned for more exciting projects that are currently in development!</p>
            </div>
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 glass-hover px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            <span>View All Projects</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};
