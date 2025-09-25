"use client";

export default function About() {
  const skills = [
    { name: "React/Next.js", logo: "/logo_react.jpg" },
    { name: "UI/UX Design", logo: "/UIUX_logo.png" },
    { name: "Node.js", logo: "/logo_nodejs.png" },
    { name: "Tailwind CSS", logo: "/logo_css.png" },
    { name: "C/C++", logo: "/logo_cpp.png" },
    { name: "Python", logo: "/logo_python.png" },
    { name: "Docker", logo: "/logo_docker.png" },
  ];

  return (
    <section id="à-propos" className="py-20 px-6 relative z-10">
      <div className="container mx-auto flex flex-col items-center">
        <h3 className="text-3xl font-bold mb-12 text-center">Mes Compétences</h3>
        <div className="relative overflow-hidden w-full">
          <div className="flex gap-16 animate-scroll justify-center">
            {[...skills, ...skills].map((item, index) => (
              <img
                key={index}
                src={item.logo}
                alt={item.name}
                className="h-24 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
