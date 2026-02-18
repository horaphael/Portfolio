import { Heart, Github } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center text-white font-bold">
              R
            </div>
            <span className="text-gray-400 text-sm">
              © {currentYear} {personalInfo.name}. Tous droits réservés.
            </span>
          </div>

          {/* Tech stack */}
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>React</span>
            <span>•</span>
            <span>TailwindCSS</span>
            <span>•</span>
            <span>Vite</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
