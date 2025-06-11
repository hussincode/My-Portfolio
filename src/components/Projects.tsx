import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import ChromaGrid from './ChromaGrid';
import StarBorder from './StarBorder';

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
      borderColor: '#3B82F6',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with real-time data visualization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://example.com',
      borderColor: '#10B981',
    },
    {
      title: 'To-Do List',
      description: 'Collaborative task management application with real-time updates.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Java'],
      github: 'https://github.com/hussincode/To-Do-list',
      live: 'https://hussincode.github.io/To-Do-list/',
      borderColor: '#F59E0B',
    },
  ];

  const chromaItems = projects.map(project => ({
    image: project.image,
    title: project.title,
    subtitle: project.description,
    handle: project.technologies.join(' • '),
    borderColor: project.borderColor,
    url: project.live,
  }));

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
          className="relative"
        >
          <ChromaGrid 
            items={chromaItems}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <StarBorder
            as={Link}
            to="/projects"
            color="cyan"
            speed="5s"
            className="transition-all duration-300 hover:scale-105"
          >
            <span className="inline-flex items-center space-x-2 font-semibold">
              <span>View All Projects</span>
              <ArrowRight size={20} />
            </span>
          </StarBorder>
        </div>
      </div>
    </section>
  );
};
