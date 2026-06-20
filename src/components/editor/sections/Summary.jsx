import React from 'react';
import { useResumeStore } from '../../../store/resumeStore';
import { AlignLeft } from 'lucide-react';

export default function Summary() {
  const { resumeData, updateSummary } = useResumeStore();
  const { summary } = resumeData;

  const handleChange = (e) => {
    updateSummary(e.target.value);
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1 flex items-center gap-2">
          <AlignLeft className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
          Professional Summary
        </h3>
        <p className="text-xs text-gray-500 dark:text-slate-400">
          Briefly outline your career background, key accomplishments, and skill set.
        </p>
      </div>

      <div className="space-y-1">
        <textarea
          value={summary || ''}
          onChange={handleChange}
          rows={6}
          placeholder="A results-driven software engineer with 5+ years of experience building web applications..."
          className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-slate-700/60 rounded-2xl px-4 py-3 text-sm text-gray-800 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500 focus:border-emerald-500 focus:outline-none transition resize-y min-h-[120px]"
        />
      </div>
    </div>
  );
}
