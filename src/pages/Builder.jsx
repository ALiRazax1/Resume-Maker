import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useResumeStore } from '../store/resumeStore';
import { resumeTemplates } from '../data/templates';
import EditorPanel from '../components/editor/EditorPanel';
import ResumePreview from '../components/preview/ResumePreview';
import { Download, Sparkles, LayoutGrid, Check, Eye, Pencil, X } from 'lucide-react';

export default function Builder() {
  const { activeTemplate, setActiveTemplate } = useResumeStore();
  const componentRef = useRef(null);
  // On mobile: toggle between 'edit' and 'preview' views
  const [mobileView, setMobileView] = useState('edit');
  const [showTemplateSwitcher, setShowTemplateSwitcher] = useState(false);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: 'My_Resume',
  });

  const selectedTemplate = resumeTemplates.find((t) => t.id === activeTemplate) || resumeTemplates[0];

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100">
      {/* Subtle BG gradient */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-3 sm:px-6 py-4 space-y-4">

        {/* ── Top Toolbar ─────────────────────────────────────────── */}
        <div className="bg-slate-900/60 border border-slate-800/80 backdrop-blur-md rounded-2xl px-4 py-3 flex items-center justify-between gap-3 shadow-xl">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="bg-indigo-600/20 text-indigo-400 p-2 rounded-xl flex-shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h1 className="text-sm sm:text-base font-black text-white leading-none">Resume Studio</h1>
              <p className="text-[10px] text-slate-400 truncate mt-0.5 hidden sm:block">
                Template: <span className="text-slate-200 font-semibold">{selectedTemplate.name}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Template switcher toggle button (always visible) */}
            <button
              onClick={() => setShowTemplateSwitcher(!showTemplateSwitcher)}
              className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl border transition-all ${
                showTemplateSwitcher
                  ? 'bg-indigo-600 text-white border-indigo-500'
                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white hover:border-slate-600'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Templates</span>
            </button>

            {/* Mobile: toggle edit/preview */}
            <div className="flex lg:hidden bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
              <button
                onClick={() => setMobileView('edit')}
                className={`flex items-center gap-1 px-3 py-2 text-xs font-semibold transition-all ${
                  mobileView === 'edit' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Pencil className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>
              <button
                onClick={() => setMobileView('preview')}
                className={`flex items-center gap-1 px-3 py-2 text-xs font-semibold transition-all ${
                  mobileView === 'preview' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Preview</span>
              </button>
            </div>

            {/* Download PDF */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-bold px-3 sm:px-5 py-2 rounded-xl text-xs shadow-lg shadow-indigo-600/20 transition-all duration-200"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">PDF</span>
            </button>
          </div>
        </div>

        {/* ── Template Switcher Drawer (collapsible) ────────────────── */}
        {showTemplateSwitcher && (
          <div className="bg-slate-900/60 border border-slate-800/80 backdrop-blur-md rounded-2xl p-4 shadow-xl animate-fade-in">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <LayoutGrid className="w-4 h-4 text-indigo-500" />
                Choose a Template
              </h3>
              <button
                onClick={() => setShowTemplateSwitcher(false)}
                className="text-slate-500 hover:text-white p-1 rounded transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-2">
              {resumeTemplates.map((template) => {
                const isSelected = activeTemplate === template.id;
                return (
                  <button
                    key={template.id}
                    onClick={() => {
                      setActiveTemplate(template.id);
                      setShowTemplateSwitcher(false);
                    }}
                    className={`text-left border rounded-xl overflow-hidden transition-all duration-200 hover:scale-[1.02] ${
                      isSelected
                        ? 'border-indigo-500 shadow-md shadow-indigo-500/20'
                        : 'border-slate-800 hover:border-slate-600'
                    }`}
                  >
                    <div className={`h-10 bg-gradient-to-br ${template.thumbnailColor} relative flex items-end justify-end p-1`}>
                      {isSelected && (
                        <div className="bg-indigo-600 text-white p-0.5 rounded-full shadow">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                      )}
                    </div>
                    <div className="p-2 bg-slate-900">
                      <div className="text-[9px] font-bold text-white leading-tight truncate">{template.name}</div>
                      <div className="text-[8px] text-slate-500 mt-0.5">
                        {template.supportsPhoto ? '📷 Photo' : 'No photo'}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Main Workspace ─────────────────────────────────────── */}
        {/* Desktop: side by side. Mobile: one panel at a time */}
        <div className="grid lg:grid-cols-[minmax(380px,480px)_1fr] gap-4 items-start">

          {/* ── Editor Panel (hidden on mobile when preview selected) */}
          <div className={`${mobileView === 'preview' ? 'hidden lg:block' : 'block'} h-[calc(100vh-180px)] min-h-[500px]`}>
            <EditorPanel />
          </div>

          {/* ── Preview Panel (hidden on mobile when edit selected) */}
          <div className={`${mobileView === 'edit' ? 'hidden lg:block' : 'block'}`}>
            <ResumePreview ref={componentRef} />
          </div>
        </div>

      </div>
    </div>
  );
}
