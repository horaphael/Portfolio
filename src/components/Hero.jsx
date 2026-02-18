import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
               backgroundSize: '50px 50px'
             }} 
        />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-gray-300">Disponible pour des opportunités</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
          <span className="text-white">Salut, je suis </span>
          <span className="gradient-text">{personalInfo.name}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {personalInfo.title}
        </p>
        
        <p className="text-lg text-gray-500 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {personalInfo.subtitle} • {personalInfo.location}
        </p>

        {/* Description */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          Je crée des applications modernes et performantes, du développement de jeux vidéo 
          aux applications web en passant par le machine learning.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl font-semibold text-white hover:opacity-90 transition-all hover:scale-105 glow-blue"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="px-8 py-4 glass rounded-xl font-semibold text-white hover:bg-white/10 transition-all hover:scale-105"
          >
            Me contacter
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-xl hover:bg-white/10 transition-all hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-xl hover:bg-white/10 transition-all hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 glass rounded-xl hover:bg-white/10 transition-all hover:scale-110"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <a href="#projects" className="flex flex-col items-center text-gray-500 hover:text-white transition-colors">
            <span className="text-sm mb-2">Scroll</span>
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
