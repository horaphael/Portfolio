import { useEffect, useRef } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function MouseParticles() {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const animFrame = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const spawn = (e) => {
      const mx = e.clientX;
      const my = e.clientY;
      for (let i = 0; i < 4; i++) {
        particles.current.push({
          x:     mx + (Math.random() - 0.5) * 12,
          y:     my + (Math.random() - 0.5) * 12,
          vx:    (Math.random() - 0.5) * 1.8,
          vy:    (Math.random() - 0.5) * 1.8 - 0.6,
          size:  1.5 + Math.random() * 3.5,
          life:  1,
          decay: 0.016 + Math.random() * 0.018,
          hue:   22 + Math.random() * 38,
        });
      }
    };

    window.addEventListener('mousemove', spawn);

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current = particles.current.filter(p => p.life > 0);
      for (const p of particles.current) {
        p.x    += p.vx;
        p.y    += p.vy;
        p.vy   -= 0.028;
        p.life -= p.decay;
        const r = Math.max(p.size * p.life, 0.1);
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle   = `hsla(${p.hue}, 100%, 62%, ${p.life * 0.75})`;
        ctx.shadowBlur  = 14;
        ctx.shadowColor = `hsla(${p.hue}, 100%, 56%, ${p.life * 0.45})`;
        ctx.fill();
        ctx.shadowBlur  = 0;
      }
      animFrame.current = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', spawn);
      cancelAnimationFrame(animFrame.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
}

function App() {
  return (
    <div className="bg-[#0b0b0b] min-h-screen">
      <MouseParticles />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
