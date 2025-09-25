"use client";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function Hero() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };
  const scrollToProjects = () => {
    const section = document.getElementById("projets");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="accueil"
      className="relative pt-40 pb-32 px-6 bg-black overflow-hidden min-h-[90vh]"
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#252525ff" },
          particles: {
            number: { value: 55, density: { enable: true, area: 900 } },
            color: { value: "#ffee00ff" },
            shape: { type: "triangle" },
            opacity: { value: 0.4 },
            size: { value: { min: 4, max: 6 }, random: true },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              outModes: "out",
            },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center min-h-[70vh]">
        <div className="md:w-1/1 mb-10 md:mb-0 md:ml-7 text-center md:text-left">
          <h1 className="text-5xl md:text-5xl font-bold leading-tight mb-6 text-gray-300">
            Bonjour, je suis{" "}
            <span className="text-yellow-500">Raphael Hoarau</span>
          </h1>
          <h2 className="text-3xl md:text-3xl text-gray-300 mb-8">
            Développeur Full Stack et autres
          </h2>
          <p className="text-xl md:text-2xl text-gray mb-10">
            Je crée des expériences web modernes, élégantes et fonctionnelles.
          </p>
          <div className="flex space-x-6 mb-10">
            <button
              className="bg-yellow-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-red-700 transition-colors text-lg"
              onClick={scrollToProjects}
            >
              Voir mes projets
            </button>
            <a
              href="/Cv_raphael_hoarau.pdf"
              download
              className="border border-yellow-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-yellow-500 transition-colors text-lg flex items-center justify-center"
              style={{ textDecoration: "none" }}
            >
              Télécharger mon CV
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center md:w-2/4 mt-8 md:mt-0">
          <div className="w-72 h-72 md:w-[30rem] md:h-[30rem] bg-yellow-500 rotate-45 flex items-center justify-center overflow-visible relative rounded-2xl">
            <img
              src="/photo.png"
              alt="Portrait"
              className="absolute left-1/2 top-1/2 w-96 h-96 md:w-[35rem] md:h-[44rem] object-cover -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-2xl"
              style={{
                zIndex: 2,
                boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
