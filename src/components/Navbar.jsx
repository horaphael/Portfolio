"use client";

import { useEffect, useState } from 'react';

const sections = ['accueil', 'projets', 'à-propos', 'contact'];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      const allSections = document.querySelectorAll('section');
      let current = 'accueil';
      allSections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full bg-black shadow-md z-100 position: fixed">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-yellow-500">Raphael.</div>
        <div className="hidden md:flex space-x-10">
          {sections.map(item => (
            <a
              key={item}
              href={`#${item}`}
              className={`hover:text-yellow-500 transition-colors ${activeSection === item ? 'text-yellow-500 font-medium' : ''}`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button className="text-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
