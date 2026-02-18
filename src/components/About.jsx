import { MapPin, Calendar, GraduationCap, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  const timeline = [
    {
      year: "2024",
      title: "Tek 3 - Epitech",
      description: "Projets avancés: R-Type (C++), Architecture logicielle",
      icon: "🎓"
    },
    {
      year: "2023",
      title: "Tek 2 - Epitech",
      description: "Développement C/C++, Réseaux, Bases de données",
      icon: "💻"
    },
    {
      year: "2022",
      title: "Tek 1 - Epitech",
      description: "Fondamentaux: C, Shell, Algorithmique",
      icon: "🚀"
    },
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            <span className="gradient-text">À propos de moi</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Avatar & Info */}
          <div className="flex flex-col items-center lg:items-start animate-slide-in-left">
            {/* Avatar */}
            <div className="relative mb-8">
              <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center text-9xl animate-float">
                👨‍💻
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 glass rounded-2xl flex items-center justify-center">
                <span className="text-4xl">🎮</span>
              </div>
            </div>

            {/* Quick Info */}
            <div className="space-y-4 w-full max-w-sm">
              <div className="glass rounded-xl p-4 flex items-center gap-4">
                <MapPin className="w-5 h-5 text-primary-400" />
                <div>
                  <p className="text-gray-400 text-sm">Localisation</p>
                  <p className="text-white">{personalInfo.location}</p>
                </div>
              </div>
              <div className="glass rounded-xl p-4 flex items-center gap-4">
                <GraduationCap className="w-5 h-5 text-primary-400" />
                <div>
                  <p className="text-gray-400 text-sm">Formation</p>
                  <p className="text-white">{personalInfo.subtitle}</p>
                </div>
              </div>
              <div className="glass rounded-xl p-4 flex items-center gap-4">
                <Heart className="w-5 h-5 text-primary-400" />
                <div>
                  <p className="text-gray-400 text-sm">Passions</p>
                  <p className="text-white">{personalInfo.interests.join(', ')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Bio & Timeline */}
          <div className="animate-slide-in-right">
            {/* Bio */}
            <div className="glass rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Mon parcours</h3>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {personalInfo.bio}
              </p>
            </div>

            {/* Timeline */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-primary-400" />
                Parcours
              </h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex gap-4">
                    {/* Timeline line */}
                    {index < timeline.length - 1 && (
                      <div className="absolute left-5 top-12 w-0.5 h-full bg-gradient-to-b from-primary-500 to-transparent" />
                    )}
                    
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <span>{item.icon}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-primary-400 font-mono text-sm">{item.year}</span>
                      </div>
                      <h4 className="text-white font-semibold">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.description}</p>
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
