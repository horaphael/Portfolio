export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Zappy",
      description: "Le projet Zappy Epitech est un jeu multijoueur en réseau basé sur une architecture client/serveur. Le serveur gère la carte, les ressources et les interactions entre les joueurs. Les clients peuvent être des intelligences artificielles coopératives ou une interface graphique pour visualiser la partie. Lobjectif des IA est de collecter des ressources et évoluer ensemble jusquau niveau maximum pour remporter la partie.",
      image: "/zappy.png",
      techs: ["C", "C++", "Python"],
    },
    {
      id: 2,
      name: "Network lib in c",
      description: "Une bibliothèque réseau simple en C pour créer des serveurs TCP multi-clients avec poll(). Elle permet de gérer les connexions, les déconnexions et la réception de données, avec un système de logs colorés intégré.",
      image: "/network_lib.png",
      techs: ["C"],
    },
    {
      id: 3,
      name: "Survivor",
      description: "Le projet Zappy consistait à développer un jeu multijoueur client/serveur où des IA coopèrent pour évoluer, tandis que le projet Survivor visait à concevoir en deux semaines un site web complet et fonctionnel pour un client réel.",
      image: "/survivor.png",
      techs: ["Next.js", "Node.js", "Mariadb"],
    },
    {
      id: 4,
      name: "Webcup 2024",
      description: "La Webcup était un hackathon de 24h durant lequel des équipes de développeurs devaient concevoir, designer et présenter un site web innovant répondant à un thème imposé, mettant à épreuve leur créativité, leur esprit d équipe et leur gestion du temps.",
      image: "/webcup.png",
      techs: ["React.js", "Tailwind CSS"],
    },
    {
      id: 5,
      name: "Webcup 2025",
      description: "La Webcup était un hackathon de 24h durant lequel des équipes de développeurs devaient concevoir, designer et présenter un site web innovant répondant à un thème imposé, mettant à épreuve leur créativité, leur esprit d équipe et leur gestion du temps.",
      image: "/webcup2.png",
      techs: ["React.js", "Tailwind CSS"],
    },
    {
      id: 6,
      name: "Raytracer",
      description: "Le projet Raytracer consistait à développer en C un moteur de rendu 3D capable de générer des images réalistes en appliquant la technique du lancer de rayons, en gérant lumières, ombres et réflexions..",
      image: "/raytracer.png",
      techs: ["C++", "Maths"],
    },
  ];

  return (
    <section
      id="projets"
      className="py-20 px-6 bg-black text-white relative z-10"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Mes Meillieurs Projets</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Découvrez une sélection de mes réalisations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div
              key={project.id}
              className="rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{project.name}</h3>
                <p className="text-gray-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techs.map(tech => (
                    <span
                      key={tech}
                      className="bg-yellow-500 text-black-800 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
