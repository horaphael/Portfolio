import { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Download, LayoutGrid, FileText, FolderOpen, Zap, Link2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const TABS = [
  { id: 'home',     label: 'Home',     Icon: LayoutGrid },
  { id: 'about',    label: 'Summary',  Icon: FileText   },
  { id: 'projects', label: 'Projects', Icon: FolderOpen },
  { id: 'skills',   label: 'Skills',   Icon: Zap        },
  { id: 'contact',  label: 'Links',    Icon: Link2      },
];

const Hero = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTab = (id) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden bg-[#0f0f0f] flex flex-col items-center"
    >
      {/* ── Background: centered radial amber glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 50% 42%, rgba(180,70,0,0.40) 0%, rgba(90,30,0,0.18) 50%, transparent 70%)',
        }}
      />
      {/* Subtle noise grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
        }}
      />

      {/* ── TOP BAR ── */}
      <div className="relative z-10 w-full flex items-center justify-between px-6 sm:px-10 md:px-16 pt-6">
        {/* Open to work badge */}
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-300"
          style={{
            background: 'rgba(255,255,255,0.06)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.10)',
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          Open to work
        </div>

        {/* Download CV */}
        <a
          href={`${import.meta.env.BASE_URL}Cv_raphael_hoarau.pdf`}
          download="Cv_Raphael_Hoarau.pdf"
          className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 active:scale-95 text-black text-sm font-bold px-5 py-2 rounded-full transition-all hover:scale-105 shadow-lg shadow-amber-500/20"
        >
          <Download className="w-3.5 h-3.5" />
          Download CV
        </a>
      </div>

      {/* ── CENTERED HERO CONTENT ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-12 w-full max-w-4xl mx-auto">

        {/* Role */}
        <p className="text-amber-400 font-semibold text-sm sm:text-base tracking-[0.25em] uppercase mb-6 animate-slide-up">
          {personalInfo.title}
        </p>

        {/* Name */}
        <h1
          className="font-black text-white leading-[0.88] tracking-tight mb-12 animate-slide-up"
          style={{
            fontSize: 'clamp(4.5rem, 12vw, 11rem)',
            animationDelay: '0.06s',
            textShadow: '0 4px 80px rgba(0,0,0,0.9)',
          }}
        >
          {personalInfo.firstName}
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #f59e0b 0%, #f97316 55%, #ef4444 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {personalInfo.lastName}
          </span>
        </h1>

        {/* Contact pills — 2×2 on mobile, 4 cols on sm+ */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl animate-slide-up"
          style={{ animationDelay: '0.15s' }}
        >
          {[
            { Icon: Mail,     label: personalInfo.email,           href: `mailto:${personalInfo.email}` },
            { Icon: Linkedin, label: 'linkedin.com/in/raphael-h',  href: personalInfo.linkedin, external: true },
            { Icon: Github,   label: 'github.com/horaphael',       href: personalInfo.github,   external: true },
            { Icon: MapPin,   label: personalInfo.location,        href: null },
          ].map(({ Icon, label, href, external }) => {
            const inner = (
              <>
                <span
                  className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 text-amber-400"
                  style={{ background: 'rgba(245,158,11,0.12)' }}
                >
                  <Icon className="w-3.5 h-3.5" />
                </span>
                <span className="truncate text-gray-200 text-xs sm:text-sm">{label}</span>
              </>
            );
            const cls   = 'flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all hover:brightness-125';
            const style = {
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.09)',
            };
            return href ? (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className={cls}
                style={style}
              >
                {inner}
              </a>
            ) : (
              <div key={label} className={cls} style={style}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── BOTTOM NAV TABS ── */}
      <div
        className="relative z-10 flex justify-center w-full px-6 pb-8 animate-fade-in"
        style={{ animationDelay: '0.3s' }}
      >
        <div
          className="flex gap-1.5 flex-wrap justify-center p-1.5 rounded-2xl"
          style={{
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {TABS.map(({ id, label, Icon }) => (
            <button
              key={id}
              onClick={() => handleTab(id)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
              style={
                activeTab === id
                  ? { background: 'rgba(255,255,255,0.95)', color: '#000', boxShadow: '0 2px 14px rgba(0,0,0,0.3)' }
                  : { color: 'rgba(200,200,200,0.85)' }
              }
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
