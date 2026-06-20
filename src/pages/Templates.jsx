import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useResumeStore } from '../store/resumeStore';
import { resumeTemplates } from '../data/templates';
import { Check, LayoutGrid } from 'lucide-react';

export default function Templates() {
  const navigate = useNavigate();
  const { activeTemplate, setActiveTemplate } = useResumeStore();

  const handleSelect = (templateId) => {
    setActiveTemplate(templateId);
    navigate('/builder');
  };

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen py-16 px-6">
      {/* Ambient blob */}
      <div className="fixed top-0 right-0 w-[400px] h-[400px] bg-emerald-400/8 dark:bg-emerald-500/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700/50 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-5">
            <LayoutGrid className="w-3.5 h-3.5" />
            10 Templates Available
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Professional Resume <span className="text-gradient-em">Templates</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base sm:text-lg">
            ATS-optimized and designed to impress. Switch between templates instantly — your data carries over.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeTemplates.map((template) => {
            const isSelected = activeTemplate === template.id;
            return (
              <div
                key={template.id}
                onClick={() => handleSelect(template.id)}
                className={`group bg-white dark:bg-white/[0.03] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 flex flex-col hover:-translate-y-1 border ${
                  isSelected
                    ? 'border-emerald-400 dark:border-emerald-600 shadow-xl shadow-emerald-500/20'
                    : 'border-gray-200 dark:border-white/8 hover:border-emerald-300 dark:hover:border-emerald-700/60 shadow-sm hover:shadow-lg hover:shadow-emerald-500/10'
                }`}
              >
                {/* Colour swatch */}
                <div className={`h-44 bg-gradient-to-br ${template.thumbnailColor} p-5 flex flex-col justify-between relative`}>
                  <div className="flex justify-between items-start">
                    <span className="bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[9px] font-bold text-white uppercase tracking-widest">
                      {template.supportsPhoto ? 'Photo Toggle' : 'No Photo'}
                    </span>
                    {isSelected && (
                      <div className="bg-emerald-500 text-white p-1.5 rounded-full shadow-md shadow-emerald-500/40">
                        <Check className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                  <div className="text-white font-extrabold text-2xl tracking-tight drop-shadow">
                    {template.name}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-gray-900 dark:text-white text-base mb-1.5">{template.name}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed flex-grow">{template.description}</p>

                  <button
                    onClick={(e) => { e.stopPropagation(); handleSelect(template.id); }}
                    className={`mt-5 w-full py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all duration-200 ${
                      isSelected
                        ? 'bg-emerald-500 text-white hover:bg-emerald-400 shadow-md shadow-emerald-500/30'
                        : 'bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-emerald-500 hover:text-white'
                    }`}
                  >
                    {isSelected ? '✓ Currently Editing' : 'Use This Template'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
