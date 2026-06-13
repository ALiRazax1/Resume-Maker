import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Sparkles, LayoutGrid, Menu, X } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/builder', label: 'Builder', icon: Sparkles },
    { path: '/templates', label: 'Templates', icon: LayoutGrid },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 group flex-shrink-0">
          <div className="bg-indigo-600 p-1.5 rounded-xl text-white shadow-lg shadow-indigo-500/25 group-hover:scale-110 transition-all duration-300">
            <FileText className="w-5 h-5" />
          </div>
          <span className="font-extrabold text-lg bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-indigo-300">
            Resume<span className="text-indigo-500">Maker</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden sm:flex items-center gap-1">
          {navLinks.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-semibold text-sm transition-all duration-200 ${
                isActive(path)
                  ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20'
                  : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </Link>
          ))}
          <Link
            to="/builder"
            className="ml-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-indigo-500/20 transition-all duration-200 flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4" />
            Create Now
          </Link>
        </div>

        {/* Mobile: CTA + Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <Link
            to="/builder"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-xl text-xs font-bold transition-all"
          >
            Build
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-slate-300 hover:text-white p-2 rounded-xl hover:bg-slate-800/60 transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-md px-4 py-3 space-y-1">
          {navLinks.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                isActive(path)
                  ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20'
                  : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
