import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Sparkles, LayoutGrid, Menu, X, Sun, Moon } from 'lucide-react';
import { useResumeStore } from '../../store/resumeStore';

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useResumeStore();
  const isDark = theme === 'dark';

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/builder', label: 'Builder', icon: Sparkles },
    { path: '/templates', label: 'Templates', icon: LayoutGrid },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-200 dark:border-emerald-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">

        {/* ── Logo ─────────────────────────────────────── */}
        <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 group flex-shrink-0">
          <div className="bg-emerald-500 p-1.5 rounded-xl text-white shadow-lg shadow-emerald-500/30 group-hover:scale-110 group-hover:shadow-emerald-500/50 transition-all duration-300">
            <FileText className="w-5 h-5" />
          </div>
          <span className="font-extrabold text-lg text-gray-900 dark:text-white">
            Resume<span className="text-emerald-500">Maker</span>
          </span>
        </Link>

        {/* ── Desktop Links ────────────────────────────── */}
        <div className="hidden sm:flex items-center gap-1">
          {navLinks.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-semibold text-sm transition-all duration-200 ${
                isActive(path)
                  ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-700/40'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </Link>
          ))}

          {/* CTA */}
          <Link
            to="/builder"
            className="ml-2 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-200 flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4" />
            Create Now
          </Link>

          {/* Dark / Light toggle */}
          <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="ml-1 p-2 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* ── Mobile: CTA + Toggle + Burger ────────────── */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="p-2 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 transition"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <Link
            to="/builder"
            className="bg-emerald-500 hover:bg-emerald-400 text-white px-3 py-1.5 rounded-xl text-xs font-bold shadow-md shadow-emerald-500/25 transition-all"
          >
            Build
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Dropdown ───────────────────────────── */}
      {menuOpen && (
        <div className="sm:hidden border-t border-gray-200 dark:border-emerald-900/30 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md px-4 py-3 space-y-1 animate-fade-in">
          {navLinks.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                isActive(path)
                  ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5'
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
