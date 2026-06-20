import React from 'react';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-white/5 py-12 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-50 dark:bg-emerald-950/30 p-1.5 rounded-lg text-emerald-600 dark:text-emerald-400">
              <FileText className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-lg text-gray-900 dark:text-white">
              Resume<span className="text-emerald-500">Maker</span>
            </span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center md:text-left">
            Create professional resumes in minutes. Choose from premium templates.
          </p>
        </div>

        {/* Links & Socials */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Github"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-600">
            &copy; {new Date().getFullYear()} ResumeMaker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
