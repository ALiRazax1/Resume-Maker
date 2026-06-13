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
        <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
          <Palette className="w-4 h-4 text-indigo-400" />
          Accent Color
        </label>

        {/* Quick presets */}
        <div className="flex flex-wrap gap-2.5">
          {colorPresets.map((color) => (
            <button
              key={color}
              onClick={() => setAccentColor(color)}
              title={color}
              className={`w-9 h-9 rounded-xl border-2 transition-all duration-150 ${
                accentColor.toLowerCase() === color.toLowerCase()
                  ? 'border-white scale-110 shadow-lg'
                  : 'border-transparent hover:scale-105 hover:border-slate-500'
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Color picker + hex input */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4 space-y-4">
          <div className="flex justify-center">
            <HexColorPicker
              color={accentColor}
              onChange={setAccentColor}
              style={{ width: '100%', maxWidth: '260px', height: '160px' }}
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg border border-slate-700 flex-shrink-0" style={{ backgroundColor: accentColor }} />
            <span className="text-slate-500 text-sm font-mono">#</span>
            <input
              type="text"
              defaultValue={accentColor.replace('#', '')}
              key={accentColor}
              onBlur={handleHexInput}
              maxLength={6}
              placeholder="3b82f6"
              className="flex-1 bg-slate-900 border border-slate-700/60 rounded-xl px-3 py-2 text-xs font-mono text-slate-100 uppercase focus:border-indigo-500 focus:outline-none transition"
            />
          </div>
        </div>
      </div>

      {/* ── Font Pairing ────────────────────────────────── */}
      <div className="space-y-3">
        <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
          <Type className="w-4 h-4 text-indigo-400" />
          Font Pairing
        </label>
        <div className="grid grid-cols-1 gap-2">
          {fontPairings.map((pairing) => {
            const isSelected = fontPairing === pairing.id;
            return (
              <button
                key={pairing.id}
                onClick={() => setFontPairing(pairing.id)}
                className={`flex items-center justify-between p-3 text-left rounded-xl border transition-all ${
                  isSelected
                    ? 'border-indigo-500 bg-indigo-600/10'
                    : 'border-slate-800 hover:border-slate-700 bg-slate-900/30'
                }`}
              >
                <div>
                  <div className={`text-xs font-bold ${isSelected ? 'text-indigo-300' : 'text-slate-300'}`}>
                    {pairing.name}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5" style={{ fontFamily: pairing.cssBody }}>
                    {pairing.headingFont} + {pairing.bodyFont}
                  </div>
                </div>
                <div
                  className="text-sm font-bold text-slate-400 ml-3"
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
            ? 'border-slate-800 bg-slate-900/30'
            : 'border-slate-800/40 bg-slate-900/10 opacity-50'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-xl ${photoSupported && showPhoto ? 'bg-indigo-600/20 text-indigo-400' : 'bg-slate-800 text-slate-500'}`}>
            <Image className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-200">Profile Photo</h4>
            <p className="text-[10px] text-slate-500 mt-0.5">
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
            showPhoto && photoSupported ? 'bg-indigo-600' : 'bg-slate-700'
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
