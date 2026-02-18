// Project data for portfolio
export const projects = [
  {
    id: 1,
    title: "R-Type",
    subtitle: "Jeu Multijoueur C++",
    description: "Recreation du jeu classique R-Type en multijoueur. Un shoot'em up spatial développé avec une architecture client-serveur permettant des parties en réseau. Le projet utilise le pattern ECS (Entity Component System) pour une gestion optimisée des entités de jeu.",
    longDescription: `
      R-Type est un projet d'envergure réalisé dans le cadre de ma formation à Epitech. 
      Il s'agit de recréer le célèbre jeu d'arcade des années 80 en version multijoueur moderne.
      
      Le projet met en œuvre:
      • Architecture Client-Serveur avec protocole UDP pour une latence minimale
      • Pattern ECS pour la gestion des entités (joueurs, ennemis, projectiles)
      • Moteur graphique avec SFML pour le rendu 2D
      • Système de salles et matchmaking
      • Synchronisation réseau en temps réel
    `,
    image: "🚀",
    technologies: ["C++", "SFML", "UDP", "ECS", "CMake", "Conan"],
    category: "Game Development",
    github: "https://github.com/horaphael/r-type",
    features: [
      "Multijoueur en temps réel",
      "Architecture ECS",
      "Protocole réseau UDP",
      "Ennemis avec IA",
      "Système de power-ups",
      "Boss de fin de niveau"
    ],
    color: "from-purple-500 to-pink-500",
    year: "2024"
  },
  {
    id: 2,
    title: "Focus Blocker",
    subtitle: "Extension Chrome",
    description: "Extension Chrome pour améliorer la productivité en bloquant les sites distrayants. Intègre un timer Pomodoro avec gestion automatique du blocage pendant les sessions de travail.",
    longDescription: `
      Focus Blocker est une extension Chrome que j'ai développée pour résoudre un problème personnel: 
      la difficulté à rester concentré face aux distractions du web.
      
      Fonctionnalités principales:
      • Timer Pomodoro personnalisable (durées travail/pause)
      • Blocage automatique pendant les sessions de travail
      • Liste de sites à bloquer personnalisable
      • Statistiques de productivité
      • Interface moderne avec design glassmorphism
      • Notifications de fin de session
    `,
    image: "🎯",
    technologies: ["JavaScript", "Chrome API", "HTML/CSS", "Manifest V3"],
    category: "Browser Extension",
    github: "https://github.com/horaphael/FocusBlocker",
    features: [
      "Timer Pomodoro",
      "Blocage de sites",
      "Mode manuel/automatique",
      "Statistiques",
      "Design moderne",
      "Notifications"
    ],
    color: "from-blue-500 to-cyan-500",
    year: "2024"
  },
  {
    id: 3,
    title: "Neural Network",
    subtitle: "Perceptron from Scratch",
    description: "Implémentation d'un perceptron en Python sans librairies de machine learning. Le projet permet de comprendre les fondamentaux des réseaux de neurones en les construisant de zéro.",
    longDescription: `
      Ce projet éducatif m'a permis de comprendre en profondeur le fonctionnement des réseaux de neurones
      en implémentant un perceptron simple entièrement from scratch.
      
      Caractéristiques:
      • Implémentation pure Python (sans TensorFlow/PyTorch)
      • Algorithme d'apprentissage supervisé
      • Fonction d'activation step
      • Sauvegarde/chargement du modèle en JSON
      • Tests sur portes logiques (AND, OR, XOR)
      • Visualisation de la convergence
    `,
    image: "🧠",
    technologies: ["Python", "Machine Learning", "JSON", "Algorithmique"],
    category: "AI / Machine Learning",
    github: "https://github.com/horaphael/neural-network",
    features: [
      "Perceptron from scratch",
      "Pas de dépendances ML",
      "Apprentissage supervisé",
      "Sauvegarde modèle",
      "CLI interactive",
      "Tests unitaires"
    ],
    color: "from-green-500 to-emerald-500",
    year: "2024"
  }
];

// Skills data
export const skills = {
  languages: [
    { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  ],
  frontend: [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TailwindCSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "HTML/CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "Vite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
  ],
  backend: [
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "REST API", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  ],
  tools: [
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "CMake", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cmake/cmake-original.svg" },
    { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  ],
  other: [
    { name: "SFML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sfml/sfml-original.svg" },
    { name: "WebSockets", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
    { name: "Machine Learning", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  ]
};

// Personal info
export const personalInfo = {
  name: "Raphaël",
  title: "Développeur Full Stack",
  subtitle: "Étudiant à Epitech",
  location: "La Réunion, France",
  email: "raphael.hoarau@epitech.eu",
  github: "https://github.com/horaphael",
  linkedin: "https://www.linkedin.com/in/raphael-hoarau-2146772a3/",
  bio: `Passionné par le développement logiciel et les nouvelles technologies, 
        je suis actuellement en formation à Epitech où j'apprends à résoudre des problèmes 
        complexes et à créer des solutions innovantes. Mon parcours m'a permis de toucher 
        à de nombreux domaines: du développement de jeux vidéo au machine learning, 
        en passant par les applications web modernes.`,
  interests: ["Game Development", "Web", "IA", "Open Source"],
};
