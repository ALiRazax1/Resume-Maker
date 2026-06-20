import React from 'react';
import PersonalInfo from './sections/PersonalInfo';
import Summary from './sections/Summary';
import WorkExperience from './sections/WorkExperience';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Languages from './sections/Languages';
import SectionManager from './SectionManager';
import CustomizePanel from './CustomizePanel';
import { useResumeStore } from '../../store/resumeStore';
import {
  User,
  Sliders,
  Sparkles,
  ChevronDown,
  ChevronUp,
  FileText,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Award,
  Languages as LanguagesIcon,
  HelpCircle,
} from 'lucide-react';

export default function EditorPanel() {
  const [activeTab, setActiveTab] = React.useState('content'); // 'content' | 'reorder' | 'style'
  const [expandedSection, setExpandedSection] = React.useState('personal'); // accordion state

  const { loadSampleData, resetResume } = useResumeStore();

  const sectionsList = [
    { id: 'personal', name: 'Personal Details', description: 'Name, job title, contact info & photo', icon: User, component: <PersonalInfo /> },
    { id: 'summary', name: 'Professional Summary', description: 'About you and your career goals', icon: FileText, component: <Summary /> },
    { id: 'experience', name: 'Work Experience', description: 'Previous jobs, accomplishments and timelines', icon: Briefcase, component: <WorkExperience /> },
    { id: 'education', name: 'Education History', description: 'Degrees, schools and credentials', icon: GraduationCap, component: <Education /> },
    { id: 'skills', name: 'Skills & Expertise', description: 'Core competencies and proficiency levels', icon: Sliders, component: <Skills /> },
    { id: 'projects', name: 'Key Projects', description: 'Personal, freelance or open source projects', icon: FolderGit2, component: <Projects /> },
    { id: 'certifications', name: 'Certifications', description: 'Professional courses and certificates', icon: Award, component: <Certifications /> },
    { id: 'languages', name: 'Languages', description: 'Languages you speak and proficiency', icon: LanguagesIcon, component: <Languages /> },
  ];

  const handleToggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900/80 border border-gray-200 dark:border-white/8 rounded-2xl overflow-hidden shadow-sm dark:shadow-2xl">
      {/* 1. Header Toolbar */}
      <div className="flex flex-wrap items-center justify-between p-4 gap-2 border-b border-gray-200 dark:border-white/8 bg-gray-50/50 dark:bg-slate-900/40">
        <div className="space-y-0.5">
          <span className="text-xs font-bold text-gray-800 dark:text-slate-200">Editor Workspace</span>
          <p className="text-[10px] text-gray-400 dark:text-slate-500">Fill out your resume details below.</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={loadSampleData}
            className="text-[10px] bg-gray-100 dark:bg-white/5 hover:bg-emerald-500 dark:hover:bg-emerald-500 hover:text-white text-gray-700 dark:text-gray-300 font-semibold px-2.5 py-1.5 rounded-lg border border-gray-200 dark:border-white/10 transition-colors cursor-pointer"
          >
            Load Sample
          </button>
          <button
            onClick={resetResume}
            className="text-[10px] bg-red-50 dark:bg-red-950/20 hover:bg-red-600 hover:text-white text-red-600 dark:text-red-400 font-semibold px-2.5 py-1.5 rounded-lg border border-red-200 dark:border-red-900/30 transition-all cursor-pointer"
          >
            Clear All
          </button>
        </div>
      </div>

      {/* 2. Top-level Tab Bar */}
      <div className="grid grid-cols-3 border-b border-gray-200 dark:border-white/8 bg-gray-50/30 dark:bg-slate-900/20 text-center">
        <button
          onClick={() => setActiveTab('content')}
          className={`py-3 text-xs font-bold transition-all cursor-pointer border-b-2 ${
            activeTab === 'content'
              ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-500/5'
              : 'border-transparent text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-200'
          }`}
        >
          1. Edit Content
        </button>
        <button
          onClick={() => setActiveTab('reorder')}
          className={`py-3 text-xs font-bold transition-all cursor-pointer border-b-2 ${
            activeTab === 'reorder'
              ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-500/5'
              : 'border-transparent text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-200'
          }`}
        >
          2. Reorder
        </button>
        <button
          onClick={() => setActiveTab('style')}
          className={`py-3 text-xs font-bold transition-all cursor-pointer border-b-2 ${
            activeTab === 'style'
              ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-500/5'
              : 'border-transparent text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-200'
          }`}
        >
          3. Style & Font
        </button>
      </div>

      {/* 3. Panel Content Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
        {activeTab === 'content' && (
          <div className="space-y-3">
            {sectionsList.map((sec) => {
              const Icon = sec.icon;
              const isExpanded = expandedSection === sec.id;

              return (
                <div
                  key={sec.id}
                  className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                    isExpanded
                      ? 'border-emerald-500/60 bg-emerald-50/10 dark:bg-emerald-500/5'
                      : 'border-gray-200 dark:border-white/5 bg-gray-50/30 dark:bg-white/[0.01] hover:border-emerald-300 dark:hover:border-white/10'
                  }`}
                >
                  {/* Section Accordion Header */}
                  <div
                    onClick={() => handleToggleSection(sec.id)}
                    className="flex items-center justify-between p-3.5 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg transition-all ${
                        isExpanded ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/15' : 'bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-gray-500'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-xs font-bold text-gray-800 dark:text-slate-100">{sec.name}</h4>
                        <p className="text-[10px] text-gray-400 dark:text-slate-500">{sec.description}</p>
                      </div>
                    </div>
                    <div>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-gray-400 dark:text-slate-500" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-400 dark:text-slate-500" />
                      )}
                    </div>
                  </div>

                  {/* Accordion Form Body */}
                  {isExpanded && (
                    <div className="p-4 border-t border-gray-200 dark:border-white/5 bg-white dark:bg-black/20">
                      {sec.component}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'reorder' && <SectionManager />}

        {activeTab === 'style' && <CustomizePanel />}
      </div>
    </div>
  );
}
