
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 text-center">
        <div className="slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="gradient-text">
              Hussin Hesham
            </span>
          </h1>
        </div>
        
        <div className="slide-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Full Stack Web Developer crafting beautiful, functional, and user-friendly digital experiences
          </p>
        </div>

        <div className="slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/hussincode"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-hover p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/hussin-hesham-3b1401317/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-hover p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:heshamhussin172@gmail.com"
              className="glass-hover p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="glass-hover px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 bg-primary text-primary-foreground"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="glass-hover px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};
