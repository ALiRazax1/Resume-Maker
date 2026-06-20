import React from 'react';
import { useResumeStore } from '../../store/resumeStore';
import { fontPairings } from '../../data/fonts';
import { resumeTemplates } from '../../data/templates';
import { HexColorPicker } from 'react-colorful';
import { Palette, Type, Image } from 'lucide-react';

export default function CustomizePanel() {
  const {
    activeTemplate,
    accentColor,
    setAccentColor,
    fontPairing,
    setFontPairing,
    showPhoto,
    setShowPhoto,
  } = useResumeStore();

  const currentTemplate = resumeTemplates.find((t) => t.id === activeTemplate);
  const photoSupported = currentTemplate?.supportsPhoto ?? false;

  const colorPresets = [
    '#3b82f6', '#6366f1', '#8b5cf6', '#ec4899',
    '#ef4444', '#f59e0b', '#10b981', '#14b8a6',
  ];

  const handleHexInput = (e) => {
    const val = e.target.value;
    if (/^[0-9a-fA-F]{0,6}$/.test(val)) {
      if (val.length === 6) setAccentColor(`#${val}`);
    }
  };

  return (
    <div className="space-y-6">

      {/* ── Accent Color ────────────────────────────────── */}
      <div className="space-y-3">
        <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400">
          <Palette className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
          Accent Color
        </label>

        {/* Quick presets */}
        <div className="flex flex-wrap gap-2.5">
          {colorPresets.map((color) => (
            <button
              key={color}
              onClick={() => setAccentColor(color)}
              title={color}
              className={`w-9 h-9 rounded-xl border-2 transition-all duration-150 cursor-pointer ${
                accentColor.toLowerCase() === color.toLowerCase()
                  ? 'border-gray-900 dark:border-white scale-110 shadow-lg'
                  : 'border-transparent hover:scale-105 hover:border-gray-400 dark:hover:border-slate-500'
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Color picker + hex input */}
        <div className="bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-white/5 rounded-2xl p-4 space-y-4">
          <div className="flex justify-center">
            <HexColorPicker
              color={accentColor}
              onChange={setAccentColor}
              style={{ width: '100%', maxWidth: '260px', height: '160px' }}
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg border border-gray-200 dark:border-slate-700 flex-shrink-0" style={{ backgroundColor: accentColor }} />
            <span className="text-gray-400 dark:text-slate-500 text-sm font-mono">#</span>
            <input
              type="text"
              defaultValue={accentColor.replace('#', '')}
              key={accentColor}
              onBlur={handleHexInput}
              maxLength={6}
              placeholder="10b981"
              className="flex-1 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700/60 rounded-xl px-3 py-2 text-xs font-mono text-gray-800 dark:text-slate-100 uppercase focus:border-emerald-500 focus:outline-none transition"
            />
          </div>
        </div>
      </div>

      {/* ── Font Pairing ────────────────────────────────── */}
      <div className="space-y-3">
        <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400">
          <Type className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
          Font Pairing
        </label>
        <div className="grid grid-cols-1 gap-2">
          {fontPairings.map((pairing) => {
            const isSelected = fontPairing === pairing.id;
            return (
              <button
                key={pairing.id}
                onClick={() => setFontPairing(pairing.id)}
                className={`flex items-center justify-between p-3 text-left rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20'
                    : 'border-gray-200 dark:border-white/5 hover:border-emerald-300 dark:hover:border-slate-700 bg-gray-50/30 dark:bg-white/[0.01]'
                }`}
              >
                <div>
                  <div className={`text-xs font-bold ${isSelected ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-700 dark:text-slate-300'}`}>
                    {pairing.name}
                  </div>
                  <div className="text-[11px] text-gray-400 dark:text-slate-500 mt-0.5" style={{ fontFamily: pairing.cssBody }}>
                    {pairing.headingFont} + {pairing.bodyFont}
                  </div>
                </div>
                <div
                  className="text-sm font-bold text-gray-400 dark:text-slate-400 ml-3"
                  style={{ fontFamily: pairing.cssHeading }}
                >
                  Aa
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Profile Photo Toggle ─────────────────────────── */}
      <div
        className={`rounded-2xl border p-4 flex items-center justify-between gap-4 transition-all ${
          photoSupported
            ? 'border-gray-200 dark:border-white/5 bg-gray-50/30 dark:bg-slate-900/30'
            : 'border-gray-150 dark:border-slate-800/40 bg-gray-50/10 dark:bg-slate-900/10 opacity-50'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-xl ${photoSupported && showPhoto ? 'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400' : 'bg-gray-100 dark:bg-slate-800 text-gray-400 dark:text-slate-500'}`}>
            <Image className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-800 dark:text-slate-200">Profile Photo</h4>
            <p className="text-[10px] text-gray-400 dark:text-slate-500 mt-0.5">
              {photoSupported
                ? 'Show or hide your photo on this template'
                : `${currentTemplate?.name || 'This template'} doesn't support photos`}
            </p>
          </div>
        </div>
        <button
          disabled={!photoSupported}
          onClick={() => setShowPhoto(!showPhoto)}
          className={`relative inline-flex h-6 w-11 flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${
            showPhoto && photoSupported ? 'bg-emerald-500' : 'bg-gray-300 dark:bg-slate-700'
          } ${!photoSupported ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        >
          <span
            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ${
              showPhoto && photoSupported ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </button>
      </div>
    </div>
  );
}
