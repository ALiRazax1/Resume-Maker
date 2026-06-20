import React from 'react';
import { useResumeStore } from '../../../store/resumeStore';
import { Sliders, Plus, Trash2 } from 'lucide-react';

export default function Skills() {
  const { resumeData, addSkill, updateSkill, deleteSkill } = useResumeStore();
  const { skills } = resumeData;

  const handleAdd = () => {
    addSkill();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1 flex items-center gap-2">
            <Sliders className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
            Skills
          </h3>
          <p className="text-xs text-gray-500 dark:text-slate-400">
            List your core technical, professional, or soft skills and rate your proficiency.
          </p>
        </div>
        <button
          onClick={handleAdd}
          className="bg-emerald-500 hover:bg-emerald-400 text-white p-2 rounded-xl flex items-center gap-1.5 text-xs font-semibold shadow-md transition cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          Add Skill
        </button>
      </div>

      {skills.length === 0 ? (
        <div className="text-center py-10 border-2 border-dashed border-gray-200 dark:border-slate-800 rounded-2xl">
          <Sliders className="w-8 h-8 text-gray-400 dark:text-slate-600 mx-auto mb-2" />
          <p className="text-sm text-gray-500 dark:text-slate-500">No skills added yet.</p>
          <button
            onClick={handleAdd}
            className="text-xs text-emerald-500 hover:text-emerald-400 dark:text-emerald-400 dark:hover:text-emerald-350 font-semibold mt-2 underline cursor-pointer"
          >
            Add your first skill
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-gray-55/40 dark:bg-slate-900/40 border border-gray-200 dark:border-white/5 p-4 rounded-2xl flex flex-col gap-3 relative group"
            >
              <button
                onClick={() => deleteSkill(skill.id)}
                className="absolute top-2 right-2 text-gray-400 dark:text-slate-500 hover:text-red-505 dark:hover:text-red-400 p-1 rounded-lg transition cursor-pointer"
                title="Delete skill"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>

              {/* Skill Name */}
              <div className="space-y-1 pr-6">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400">
                  Skill Name
                </label>
                <input
                  type="text"
                  value={skill.name}
                  onChange={(e) => updateSkill(skill.id, { name: e.target.value })}
                  placeholder="JavaScript"
                  className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-slate-700/60 rounded-xl px-3 py-1.5 text-xs text-gray-800 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500 focus:border-emerald-500 focus:outline-none transition"
                />
              </div>

              {/* Skill Rating Slider */}
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400">
                  <span>Proficiency</span>
                  <span className="text-emerald-600 dark:text-emerald-400">{skill.level}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="10"
                    max="100"
                    step="5"
                    value={skill.level || 80}
                    onChange={(e) => updateSkill(skill.id, { level: parseInt(e.target.value) })}
                    className="w-full h-1.5 bg-gray-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
