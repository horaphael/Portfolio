import { skills } from '../data/portfolioData';

const isDarkLogo = (name) => name === 'Express' || name === 'WebSockets';

const SkillPill = ({ skill, delay }) => {
  const needsInvert = isDarkLogo(skill.name);

  return (
    <div 
      className="glass px-4 py-3 rounded-xl flex items-center gap-3 hover:bg-white/10 transition-all duration-300 animate-slide-up"
      style={{ animationDelay: `${delay}s` }}
    >
      {skill.logo ? (
        <img
          src={skill.logo}
          alt={`${skill.name} logo`}
          className={`w-6 h-6 object-contain ${needsInvert ? 'invert' : ''}`}
          loading="lazy"
        />
      ) : (
        <span className="text-sm font-semibold text-gray-300">{skill.name.slice(0, 2).toUpperCase()}</span>
      )}
      <span className="text-white font-medium">{skill.name}</span>
    </div>
  );
};

const SkillCategory = ({ title, skillList, icon, delay }) => {
  return (
    <div 
      className="glass rounded-2xl p-6 animate-slide-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {skillList.map((skill, index) => (
          <SkillPill
            key={skill.name} 
            skill={skill} 
            delay={delay + (index * 0.05)}
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const categories = [
    { title: 'Langages', skills: skills.languages, icon: '💻' },
    { title: 'Frontend', skills: skills.frontend, icon: '🎨' },
    { title: 'Backend', skills: skills.backend, icon: '⚙️' },
    { title: 'Outils', skills: skills.tools, icon: '🛠️' },
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Les technologies que j'utilise régulièrement dans mes projets.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skillList={category.skills}
              icon={category.icon}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Other skills */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-white mb-6">Autres compétences</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.other.map((skill) => (
              <div
                key={skill.name}
                className="glass px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-white/10 transition-colors"
              >
                {skill.logo ? (
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className={`w-5 h-5 object-contain ${isDarkLogo(skill.name) ? 'invert' : ''}`}
                    loading="lazy"
                  />
                ) : (
                  <span className="text-xs font-semibold text-gray-300">{skill.name.slice(0, 2).toUpperCase()}</span>
                )}
                <span className="text-gray-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
