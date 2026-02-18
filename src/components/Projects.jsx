import { useState } from 'react';
import { ExternalLink, Github, X, ChevronRight } from 'lucide-react';
import { projects } from '../data/portfolioData';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group glass rounded-2xl overflow-hidden card-hover cursor-pointer"
    >
      {/* Project Image/Icon */}
      <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
        <span className="text-8xl group-hover:scale-110 transition-transform duration-500">
          {project.image}
        </span>
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="px-3 py-1 bg-black/30 rounded-full text-sm backdrop-blur-sm">
            {project.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm">{project.subtitle}</p>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-primary-400 group-hover:translate-x-1 transition-all" />
        </div>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="tech-badge text-xs">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="tech-badge text-xs">+{project.technologies.length - 4}</span>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      
      <div
        className="relative bg-dark-200 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`h-64 bg-gradient-to-br ${project.color} flex items-center justify-center relative`}>
          <span className="text-9xl">{project.image}</span>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/30 rounded-full backdrop-blur-sm hover:bg-black/50 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="absolute bottom-4 left-6">
            <span className="px-3 py-1 bg-black/30 rounded-full text-sm backdrop-blur-sm">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-xl text-gray-400">{project.subtitle}</p>
            </div>
            <span className="text-gray-500">{project.year}</span>
          </div>

          <p className="text-gray-300 mb-8 whitespace-pre-line leading-relaxed">
            {project.longDescription}
          </p>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Fonctionnalités</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {project.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-gray-400">
                  <span className="w-2 h-2 bg-primary-500 rounded-full" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
            >
              <Github className="w-5 h-5" />
              Voir le code
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl hover:opacity-90 transition-opacity"
              >
                <ExternalLink className="w-5 h-5" />
                Voir la démo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            <span className="gradient-text">Projets</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Découvrez mes projets les plus récents, du développement de jeux vidéo 
            aux applications web et à l'intelligence artificielle.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>

        {/* More projects coming */}
        <div className="text-center mt-12">
          <p className="text-gray-500">
            Plus de projets à venir... 🚀
          </p>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
