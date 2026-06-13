import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useResumeStore } from '../store/resumeStore';
import { resumeTemplates } from '../data/templates';
import { Check } from 'lucide-react';

export default function Templates() {
  const navigate = useNavigate();
  const { activeTemplate, setActiveTemplate } = useResumeStore();

  const handleSelectTemplate = (templateId) => {
    setActiveTemplate(templateId);
    navigate('/builder');
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Professional Resume Templates
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-base sm:text-lg">
            Choose from our collection of 10 high-quality, ATS-optimized templates. Switch between them instantly at any time.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeTemplates.map((template) => {
            const isSelected = activeTemplate === template.id;

            return (
              <div
                key={template.id}
                onClick={() => handleSelectTemplate(template.id)}
                className={`bg-slate-900 border rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 flex flex-col justify-between hover:scale-[1.02] ${
                  isSelected
                    ? 'border-indigo-500 shadow-lg shadow-indigo-500/10'
                    : 'border-slate-800 hover:border-slate-700 shadow-md hover:shadow-xl'
                }`}
              >
                {/* Visual Accent */}
                <div className={`h-48 bg-gradient-to-br ${template.thumbnailColor} p-6 flex flex-col justify-between relative`}>
                  <div className="flex justify-between items-start">
                    <span className="bg-slate-950/80 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-semibold text-white uppercase tracking-wider">
                      {template.supportsPhoto ? 'Photo Toggle Supported' : 'No Photo Option'}
                    </span>
                    {isSelected && (
                      <div className="bg-indigo-600 text-white p-1.5 rounded-full shadow-md">
                        <Check className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                  
                  <div className="text-slate-900 font-extrabold text-2xl tracking-tight">
                    {template.name}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 bg-slate-900/80 flex-grow flex flex-col justify-between">
                  <div className="mb-6">
                    <h3 className="font-bold text-white text-lg mb-2">{template.name}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {template.description}
                    </p>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectTemplate(template.id);
                    }}
                    className={`w-full py-3 rounded-xl text-xs font-semibold tracking-wider transition-all duration-200 ${
                      isSelected
                        ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                        : 'bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    {isSelected ? 'Currently Editing' : 'Select Template'}
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
