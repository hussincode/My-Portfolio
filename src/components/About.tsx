
import React from 'react';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const About = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.1);
  const [contentRef, contentVisible] = useScrollAnimation(0.1);
  const [cardsRef, cardsVisible] = useScrollAnimation(0.1);

  const features = [
    {
      icon: <Code size={24} />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code with modern best practices',
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Innovation',
      description: 'Always exploring new technologies and creative solutions',
    },
    {
      icon: <Users size={24} />,
      title: 'Collaboration',
      description: 'Working effectively with teams and clients to deliver results',
    },
    {
      icon: <Coffee size={24} />,
      title: 'Dedication',
      description: 'Committed to continuous learning and improvement',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`text-center mb-16 ${titleVisible ? 'slide-up-visible' : 'slide-up'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={contentRef}
            className={`space-y-6 ${contentVisible ? 'slide-left-visible' : 'slide-left'}`}
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With over 5 years of experience in web development, I've had the privilege of working 
                with startups and established companies to bring their digital visions to life.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in modern web technologies and love creating seamless user experiences 
                that combine beautiful design with robust functionality.
              </p>
            </div>
          </div>

          <div 
            ref={cardsRef}
            className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${cardsVisible ? 'slide-right-visible' : 'slide-right'}`}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className={`glass-hover p-6 rounded-xl text-center scale-in ${cardsVisible ? 'scale-in-visible' : ''} stagger-${index + 1}`}
              >
                <div className="text-primary mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
