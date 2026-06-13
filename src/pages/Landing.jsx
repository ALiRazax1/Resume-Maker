import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Palette, FileText, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { resumeTemplates } from '../data/templates';

export default function Landing() {
  // Show first 4 templates as featured
  const featuredTemplates = resumeTemplates.slice(0, 4);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-xs font-semibold mb-6 animate-pulse">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Professional Resumes Made Easy</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.1] mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-indigo-200">
          Build a Job-Winning Resume <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">in Minutes</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Create, customize, and download beautiful resumes tailored to your career path. Switch between 10 professionally designed templates with custom fonts, colors, and live editing.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/builder"
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-xl text-lg shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/30 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Create Resume Now
          </Link>
          <Link
            to="/templates"
            className="w-full sm:w-auto bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all"
          >
            Browse 10+ Templates
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-900">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Use Our Resume Maker?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl relative group hover:border-slate-700 transition-all duration-300">
            <div className="bg-indigo-600/10 p-3 rounded-xl text-indigo-400 w-fit mb-6">
              <Palette className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Custom Accent Colors</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Tailor each template to your industry or personal brand. Choose any color freely with our HSL picker.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl relative group hover:border-slate-700 transition-all duration-300">
            <div className="bg-indigo-600/10 p-3 rounded-xl text-indigo-400 w-fit mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Live Split-Screen Editing</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              See your changes in real-time on our interactive A4 canvas. No need to click preview or refresh.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl relative group hover:border-slate-700 transition-all duration-300">
            <div className="bg-indigo-600/10 p-3 rounded-xl text-indigo-400 w-fit mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Privacy First & Free</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Your resume data is stored locally in your browser. We never sell your data, and PDF downloads are completely free.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Templates Showcase */}
      <section className="bg-slate-950 py-20 px-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Choose from Beautiful Templates</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Optimized for applicant tracking systems (ATS) and styled to attract hiring managers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredTemplates.map((template) => (
              <div
                key={template.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group hover:border-indigo-500/50 transition-all duration-300 shadow-xl"
              >
                {/* Visual Accent */}
                <div className={`h-40 bg-gradient-to-br ${template.thumbnailColor} p-6 flex flex-col justify-between relative`}>
                  <div className="bg-slate-950/80 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-semibold text-white uppercase tracking-wider w-fit">
                    {template.supportsPhoto ? 'Photo Optional' : 'No Photo'}
                  </div>
                  <div className="text-slate-900 font-extrabold text-lg truncate">
                    {template.name.split(' ')[0]}
                  </div>
                </div>

                <div className="p-6 flex flex-col h-44 justify-between bg-slate-900/80">
                  <div>
                    <h3 className="font-bold text-white text-base mb-2">{template.name}</h3>
                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                      {template.description}
                    </p>
                  </div>
                  
                  <Link
                    to="/builder"
                    className="inline-flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-indigo-600 hover:text-white text-slate-300 py-2 rounded-xl text-xs font-semibold transition-all duration-200 mt-2"
                  >
                    <span>Use Template</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/templates"
              className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 font-semibold text-sm transition-colors"
            >
              <span>View all 10 templates</span>
              <span className="text-lg">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-900">
        <div className="bg-gradient-to-r from-indigo-900/40 via-purple-900/20 to-slate-950 border border-indigo-500/10 rounded-3xl p-8 sm:p-12 md:flex items-center justify-between gap-8">
          <div className="max-w-xl mb-6 md:mb-0">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Ready to elevate your job search?</h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Join thousands of job seekers who have successfully updated their resumes and landed interviews at top firms. Download fully customized PDFs instantly.
            </p>
          </div>
          <Link
            to="/builder"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-indigo-500/20 whitespace-nowrap transition-all duration-200"
          >
            <span>Create My Resume</span>
            <FileText className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
