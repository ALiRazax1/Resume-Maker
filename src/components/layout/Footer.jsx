import React from 'react';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600/20 p-1.5 rounded-lg text-indigo-400">
              <FileText className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-lg text-white">
              Resume<span className="text-indigo-500">Maker</span>
            </span>
          </div>
          <p className="text-xs text-slate-500 text-center md:text-left">
            Create professional resumes in minutes. Choose from premium templates.
          </p>
        </div>

        {/* Links & Socials */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex gap-4">
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Github"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} ResumeMaker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
