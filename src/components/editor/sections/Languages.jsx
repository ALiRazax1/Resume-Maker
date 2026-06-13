import React from 'react';
import { useResumeStore } from '../../../store/resumeStore';
import { Languages as LanguagesIcon, Plus, Trash2 } from 'lucide-react';

export default function Languages() {
  const { resumeData, addLanguage, updateLanguage, deleteLanguage } = useResumeStore();
  const { languages } = resumeData;

  const handleAdd = () => {
    addLanguage();
  };

  const proficiencies = ['Native', 'Fluent', 'Professional', 'Conversational', 'Beginner'];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
            <LanguagesIcon className="w-5 h-5 text-indigo-500" />
            Languages
          </h3>
          <p className="text-xs text-slate-400">
            Mention the languages you speak and your command over them.
          </p>
        </div>
        <button
          onClick={handleAdd}
          className="bg-indigo-600 hover:bg-indigo-500 text-white p-2 rounded-xl flex items-center gap-1.5 text-xs font-semibold shadow-md transition"
        >
          <Plus className="w-4 h-4" />
          Add Language
        </button>
      </div>

      {languages.length === 0 ? (
        <div className="text-center py-10 border-2 border-dashed border-slate-800 rounded-2xl">
          <LanguagesIcon className="w-8 h-8 text-slate-600 mx-auto mb-2" />
          <p className="text-sm text-slate-500">No languages listed yet.</p>
          <button
            onClick={handleAdd}
            className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold mt-2 underline"
          >
            Add your first language
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {languages.map((lang) => (
            <div
              key={lang.id}
              className="bg-slate-900/40 border border-slate-800 p-4 rounded-2xl flex flex-col gap-3 relative group"
            >
              <button
                onClick={() => deleteLanguage(lang.id)}
                className="absolute top-2 right-2 text-slate-500 hover:text-red-400 p-1.5 rounded-lg transition"
                title="Delete language"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>

              {/* Language Name */}
              <div className="space-y-1 pr-6">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Language Name
                </label>
                <input
                  type="text"
                  value={lang.language}
                  onChange={(e) => updateLanguage(lang.id, { language: e.target.value })}
                  placeholder="Spanish"
                  className="w-full bg-slate-900 border border-slate-700/60 rounded-xl px-3 py-1.5 text-xs text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none transition"
                />
              </div>

              {/* Proficiency Level */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Proficiency Level
                </label>
                <select
                  value={lang.proficiency}
                  onChange={(e) => updateLanguage(lang.id, { proficiency: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700/60 rounded-xl px-3 py-1.5 text-xs text-slate-100 focus:border-indigo-500 focus:outline-none transition"
                >
                  {proficiencies.map((prof) => (
                    <option key={prof} value={prof} className="bg-slate-900">
                      {prof}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
