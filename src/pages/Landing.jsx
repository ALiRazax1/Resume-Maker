import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Palette, FileText, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { resumeTemplates } from '../data/templates';

const features = [
  {
    icon: Palette,
    title: 'Custom Colors & Fonts',
    desc: 'Pick any accent color and font pairing to match your personal brand or industry.',
  },
  {
    icon: Zap,
    title: 'Live Split-Screen Editing',
    desc: 'See every change instantly on a pixel-perfect A4 canvas — no refresh needed.',
  },
  {
    icon: ShieldCheck,
    title: 'Private & 100% Free',
    desc: 'Your data stays in your browser. No accounts, no ads, no hidden fees.',
  },
];

export default function Landing() {
  const featuredTemplates = resumeTemplates.slice(0, 4);

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen relative overflow-hidden">

      {/* ── Ambient BG blobs ──────────────────────────── */}
      <div className="absolute -top-32 -left-32 w-[520px] h-[520px] bg-emerald-400/10 dark:bg-emerald-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[440px] h-[440px] bg-teal-400/10 dark:bg-teal-600/8 rounded-full blur-[120px] pointer-events-none" />

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700/50 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          Professional Resumes Made Easy
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.08] mb-6">
          <span className="text-gray-900 dark:text-white">Build a Job-Winning</span>{' '}
          <span className="text-gradient-em">Resume in Minutes</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Choose from 10 professionally designed templates, customize fonts & colors, and download a pixel-perfect PDF — all for free.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/builder"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-white font-bold px-8 py-4 rounded-2xl text-base shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <Sparkles className="w-5 h-5" />
            Create Resume Now
          </Link>
          <Link
            to="/templates"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300 font-semibold px-8 py-4 rounded-2xl text-base transition-all duration-200"
          >
            Browse Templates
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Hero stat strip */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8">
          {[['10+', 'Resume Templates'], ['100%', 'Free to Use'], ['PDF', 'Instant Download']].map(([val, label]) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-extrabold text-emerald-500">{val}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-100 dark:border-white/5">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Why Use <span className="text-emerald-500">ResumeMaker</span>?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/8 hover:border-emerald-300 dark:hover:border-emerald-700/60 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              <div className="bg-emerald-50 dark:bg-emerald-900/30 p-3 rounded-xl w-fit mb-5 group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEMPLATE SHOWCASE ────────────────────────── */}
      <section className="bg-gray-50 dark:bg-black/20 py-20 px-6 border-t border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Beautiful Templates for Every Career
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              ATS-optimized and styled to impress hiring managers at top firms.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTemplates.map((tpl) => (
              <div
                key={tpl.id}
                className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/8 rounded-2xl overflow-hidden group hover:border-emerald-400 dark:hover:border-emerald-600/60 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 flex flex-col"
              >
                <div className={`h-36 bg-gradient-to-br ${tpl.thumbnailColor} p-4 flex flex-col justify-between relative`}>
                  <span className="bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded text-[9px] font-semibold text-white uppercase tracking-widest w-fit">
                    {tpl.supportsPhoto ? 'Photo Optional' : 'No Photo'}
                  </span>
                  <div className="text-white/90 font-extrabold text-lg">{tpl.name.split(' ')[0]}</div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{tpl.name}</h3>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed flex-grow line-clamp-3">{tpl.description}</p>
                  <Link
                    to="/builder"
                    className="mt-4 block text-center py-2 rounded-xl text-xs font-semibold bg-gray-100 dark:bg-white/5 hover:bg-emerald-500 text-gray-600 dark:text-gray-300 hover:text-white transition-all duration-200"
                  >
                    Use Template
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/templates" className="inline-flex items-center gap-1.5 text-emerald-500 hover:text-emerald-400 font-semibold text-sm transition-colors">
              View all 10 templates
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-100 dark:border-white/5">
        <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-emerald-500/20">
          {/* Decorative blobs inside banner */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Ready to elevate your job search?
            </h2>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Join thousands of job seekers who landed interviews with a ResumeMaker resume. Download your customized PDF instantly.
            </p>
          </div>
          <Link
            to="/builder"
            className="relative flex-shrink-0 inline-flex items-center gap-2 bg-white text-emerald-600 hover:bg-emerald-50 font-bold px-8 py-4 rounded-2xl shadow-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <FileText className="w-5 h-5" />
            Create My Resume
          </Link>
        </div>
      </section>

    </div>
  );
}
