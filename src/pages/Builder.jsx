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
  const [mobileView, setMobileView] = useState('edit');
  const [showTemplateSwitcher, setShowTemplateSwitcher] = useState(false);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: 'My_Resume',
  });

  const selectedTemplate = resumeTemplates.find((t) => t.id === activeTemplate) || resumeTemplates[0];

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen text-gray-900 dark:text-gray-100">
      {/* Ambient blob */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-emerald-400/8 dark:bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-3 sm:px-6 py-4 space-y-4">

        {/* ── Top Toolbar ─────────────────────────────── */}
        <div className="bg-white dark:bg-gray-900/80 border border-gray-200 dark:border-white/8 backdrop-blur-md rounded-2xl px-4 py-3 flex items-center justify-between gap-3 shadow-sm dark:shadow-xl">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="bg-emerald-50 dark:bg-emerald-900/30 text-emerald-500 p-2 rounded-xl flex-shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h1 className="text-sm sm:text-base font-black text-gray-900 dark:text-white leading-none">Resume Studio</h1>
              <p className="text-[10px] text-gray-500 dark:text-gray-400 truncate mt-0.5 hidden sm:block">
                Template: <span className="font-semibold text-gray-700 dark:text-gray-200">{selectedTemplate.name}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Template switcher */}
            <button
              onClick={() => setShowTemplateSwitcher(!showTemplateSwitcher)}
              className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl border transition-all ${
                showTemplateSwitcher
                  ? 'bg-emerald-500 text-white border-emerald-500'
                  : 'bg-gray-100 dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-emerald-400 dark:hover:border-emerald-700'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Templates</span>
            </button>

            {/* Mobile Edit/Preview toggle */}
            <div className="flex lg:hidden bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => setMobileView('edit')}
                className={`flex items-center gap-1 px-3 py-2 text-xs font-semibold transition-all ${
                  mobileView === 'edit'
                    ? 'bg-emerald-500 text-white'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <Pencil className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>
              <button
                onClick={() => setMobileView('preview')}
                className={`flex items-center gap-1 px-3 py-2 text-xs font-semibold transition-all ${
                  mobileView === 'preview'
                    ? 'bg-emerald-500 text-white'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Preview</span>
              </button>
            </div>

            {/* Download PDF */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-white font-bold px-3 sm:px-5 py-2 rounded-xl text-xs shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-200"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">PDF</span>
            </button>
          </div>
        </div>

        {/* ── Template Switcher Drawer ─────────────────── */}
        {showTemplateSwitcher && (
          <div className="bg-white dark:bg-gray-900/90 border border-gray-200 dark:border-white/8 backdrop-blur-md rounded-2xl p-4 shadow-xl animate-fade-in">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300 flex items-center gap-1.5">
                <LayoutGrid className="w-4 h-4 text-emerald-500" />
                Choose a Template
              </h3>
              <button
                onClick={() => setShowTemplateSwitcher(false)}
                className="text-gray-400 hover:text-gray-700 dark:hover:text-white p-1 rounded transition"
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
                    onClick={() => { setActiveTemplate(template.id); setShowTemplateSwitcher(false); }}
                    className={`text-left border rounded-xl overflow-hidden transition-all duration-200 hover:scale-[1.03] ${
                      isSelected
                        ? 'border-emerald-500 shadow-md shadow-emerald-500/20'
                        : 'border-gray-200 dark:border-white/8 hover:border-emerald-300 dark:hover:border-emerald-700'
                    }`}
                  >
                    <div className={`h-10 bg-gradient-to-br ${template.thumbnailColor} relative flex items-end justify-end p-1`}>
                      {isSelected && (
                        <div className="bg-emerald-500 text-white p-0.5 rounded-full shadow">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                      )}
                    </div>
                    <div className="p-1.5 bg-white dark:bg-gray-900">
                      <div className="text-[9px] font-bold text-gray-800 dark:text-white leading-tight truncate">{template.name}</div>
                      <div className="text-[8px] text-gray-400 dark:text-gray-500 mt-0.5">
                        {template.supportsPhoto ? '📷 Photo' : 'No photo'}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Main Workspace ───────────────────────────── */}
        <div className="grid lg:grid-cols-[minmax(360px,460px)_1fr] gap-4 items-start">

          {/* Editor Panel */}
          <div className={`${mobileView === 'preview' ? 'hidden lg:block' : 'block'} h-[calc(100vh-180px)] min-h-[500px]`}>
            <EditorPanel />
          </div>

          {/* Preview Panel */}
          <div className={`${mobileView === 'edit' ? 'hidden lg:block' : 'block'}`}>
            <ResumePreview ref={componentRef} />
          </div>
        </div>

      </div>
    </div>
  );
}
