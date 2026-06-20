import React from 'react';
import { useResumeStore } from '../../../store/resumeStore';
import { Briefcase, Plus, Trash2, Calendar, MapPin, Building, ChevronDown, ChevronUp } from 'lucide-react';

export default function WorkExperience() {
  const { resumeData, addExperience, updateExperience, deleteExperience } = useResumeStore();
  const { experience } = resumeData;

  // Track expanded state for accordion style editing
  const [expandedId, setExpandedId] = React.useState(experience[0]?.id || null);
  const prevLengthRef = React.useRef(experience.length);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Auto-expand newly added entry
  React.useEffect(() => {
    if (experience.length > prevLengthRef.current) {
      const last = experience[experience.length - 1];
      if (last) setExpandedId(last.id);
    }
    prevLengthRef.current = experience.length;
  }, [experience.length]);

  const handleAdd = () => {
    addExperience();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
            Work Experience
          </h3>
          <p className="text-xs text-gray-500 dark:text-slate-400">
            Showcase your previous roles, accomplishments, and career progression.
          </p>
        </div>
        <button
          onClick={handleAdd}
          className="bg-emerald-500 hover:bg-emerald-400 text-white p-2 rounded-xl flex items-center gap-1.5 text-xs font-semibold shadow-md transition cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          Add Role
        </button>
      </div>

      {experience.length === 0 ? (
        <div className="text-center py-10 border-2 border-dashed border-gray-200 dark:border-slate-800 rounded-2xl">
          <Briefcase className="w-8 h-8 text-gray-400 dark:text-slate-600 mx-auto mb-2" />
          <p className="text-sm text-gray-500 dark:text-slate-500">No work experience listed yet.</p>
          <button
            onClick={handleAdd}
            className="text-xs text-emerald-500 hover:text-emerald-400 dark:text-emerald-400 dark:hover:text-emerald-350 font-semibold mt-2 underline cursor-pointer"
          >
            Add your first job role
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {experience.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            const displayName = exp.position || exp.company || `Job Role #${index + 1}`;

            return (
              <div
                key={exp.id}
                className="bg-gray-55/40 dark:bg-slate-900/40 border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden transition"
              >
                {/* Accordion Header */}
                <div
                  onClick={() => toggleExpand(exp.id)}
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-900/50 select-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-500/10 p-2 rounded-lg text-emerald-600 dark:text-emerald-400">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-sm font-semibold text-gray-800 dark:text-white">{displayName}</h4>
                      {exp.company && (
                        <p className="text-[10px] text-gray-400 dark:text-slate-400">
                          {exp.company} &bull; {exp.startDate || 'Start Date'}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteExperience(exp.id);
                      }}
                      className="text-gray-400 dark:text-slate-500 hover:text-red-500 dark:hover:text-red-400 p-1.5 rounded-lg transition cursor-pointer"
                      title="Delete experience"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-gray-400 dark:text-slate-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-400 dark:text-slate-500" />
                    )}
                  </div>
                </div>

                {/* Accordion Form Content */}
                {isExpanded && (
                  <div className="p-4 border-t border-gray-200 dark:border-white/5 bg-white dark:bg-black/10 grid grid-cols-2 gap-4">
                    {/* Job Title */}
                    <div className="col-span-2 sm:col-span-1 space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400">
                        Job Title
                      </label>
                      <input
                        type="text"
                        value={exp.position}
                        onChange={(e) => updateExperience(exp.id, { position: e.target.value })}
                        placeholder="Senior Designer"
                        className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-slate-700/60 rounded-xl px-3.5 py-2 text-xs text-gray-800 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500 focus:border-emerald-500 focus:outline-none transition"
                      />
                    </div>

                    {/* Company */}
                    <div className="col-span-2 sm:col-span-1 space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400 flex items-center gap-1">
                        <Building className="w-3 h-3 text-emerald-500" /> Company / Employer
                      </label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => updateExperience(exp.id, { company: e.target.value })}
                        placeholder="Google Inc."
                        className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-slate-700/60 rounded-xl px-3.5 py-2 text-xs text-gray-800 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500 focus:border-emerald-500 focus:outline-none transition"
                      />
                    </div>

                    {/* Location */}
                    <div className="col-span-2 sm:col-span-1 space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-emerald-500" /> Location
                      </label>
                      <input
                        type="text"
                        value={exp.location}
                        onChange={(e) => updateExperience(exp.id, { location: e.target.value })}
                        placeholder="New York, NY"
                        className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-slate-700/60 rounded-xl px-3.5 py-2 text-xs text-gray-800 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500 focus:border-emerald-500 focus:outline-none transition"
                      />
                    </div>

                    {/* Dates */}
                    <div className="col-span-2 sm:col-span-1 grid grid-cols-2 gap-2">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-emerald-500" /> Start Date
                        </label>
                        <input
                          type="month"
                          value={exp.startDate}
                          onChange={(e) => updateExperience(exp.id, { startDate: e.target.value })}
                          className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-slate-700/60 rounded-xl px-3.5 py-2 text-xs text-gray-800 dark:text-slate-100 focus:border-emerald-500 focus:outline-none transition"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-emerald-500" /> End Date
                        </label>
                        <input
                          type="month"
                          value={exp.endDate}
                          onChange={(e) => updateExperience(exp.id, { endDate: e.target.value })}
                          disabled={exp.current}
                          className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-slate-700/60 rounded-xl px-3.5 py-2 text-xs text-gray-800 dark:text-slate-100 disabled:opacity-40 disabled:cursor-not-allowed focus:border-emerald-500 focus:outline-none transition"
                        />
                      </div>
                    </div>

                    {/* Current Job checkbox */}
                    <div className="col-span-2 flex items-center gap-2">
                      <input
                        type="checkbox"
                        id={`current-job-${exp.id}`}
                        checked={exp.current}
                        onChange={(e) =>
                          updateExperience(exp.id, {
                            current: e.target.checked,
                            endDate: e.target.checked ? '' : exp.endDate,
                          })
                        }
                        className="rounded border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                      />
                      <label htmlFor={`current-job-${exp.id}`} className="text-xs text-gray-650 dark:text-slate-300 cursor-pointer">
                        I currently work in this role
                      </label>
                    </div>

                    {/* Description */}
                    <div className="col-span-2 space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400">
                        Description / Key Responsibilities
                      </label>
                      <textarea
                        value={exp.description}
                        onChange={(e) => updateExperience(exp.id, { description: e.target.value })}
                        rows={4}
                        placeholder="• Designed user flows and high-fidelity mockups&#10;• Collaborated with engineering teams to deploy UX changes..."
                        className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-slate-700/60 rounded-xl px-3.5 py-2 text-xs text-gray-850 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500 focus:border-emerald-500 focus:outline-none transition resize-y"
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
