import React from 'react';
import { useResumeStore } from '../../../store/resumeStore';
import { GraduationCap, Plus, Trash2, Calendar, MapPin, ChevronDown, ChevronUp, Star } from 'lucide-react';

export default function Education() {
  const { resumeData, addEducation, updateEducation, deleteEducation } = useResumeStore();
  const { education } = resumeData;

  const [expandedId, setExpandedId] = React.useState(education[0]?.id || null);
  const prevLengthRef = React.useRef(education.length);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Auto-expand newly added entry
  React.useEffect(() => {
    if (education.length > prevLengthRef.current) {
      const last = education[education.length - 1];
      if (last) setExpandedId(last.id);
    }
    prevLengthRef.current = education.length;
  }, [education.length]);

  const handleAdd = () => {
    addEducation();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-indigo-500" />
            Education
          </h3>
          <p className="text-xs text-slate-400">
            Showcase your academic credentials, school activities, and relevant coursework.
          </p>
        </div>
        <button
          onClick={handleAdd}
          className="bg-indigo-600 hover:bg-indigo-500 text-white p-2 rounded-xl flex items-center gap-1.5 text-xs font-semibold shadow-md transition"
        >
          <Plus className="w-4 h-4" />
          Add Education
        </button>
      </div>

      {education.length === 0 ? (
        <div className="text-center py-10 border-2 border-dashed border-slate-800 rounded-2xl">
          <GraduationCap className="w-8 h-8 text-slate-600 mx-auto mb-2" />
          <p className="text-sm text-slate-500">No education history listed yet.</p>
          <button
            onClick={handleAdd}
            className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold mt-2 underline"
          >
            Add school or college degree
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {education.map((edu, index) => {
            const isExpanded = expandedId === edu.id;
            const displayName = edu.degree
              ? `${edu.degree}${edu.field ? ` in ${edu.field}` : ''}`
              : edu.institution || `Education Program #${index + 1}`;

            return (
              <div
                key={edu.id}
                className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden transition"
              >
                {/* Accordion Header */}
                <div
                  onClick={() => toggleExpand(edu.id)}
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-900/70 select-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-indigo-600/10 p-2 rounded-lg text-indigo-400">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{displayName}</h4>
                      {edu.institution && (
                        <p className="text-[10px] text-slate-400">
                          {edu.institution} &bull; {edu.startDate || 'Start Date'}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteEducation(edu.id);
                      }}
                      className="text-slate-500 hover:text-red-400 p-1.5 rounded-lg transition"
                      title="Delete education"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                </div>

                {/* Accordion Form Content */}
                {isExpanded && (
                  <div className="p-4 border-t border-slate-800/60 bg-slate-900/10 grid grid-cols-2 gap-4">
                    {/* Degree */}
                    <div className="col-span-2 sm:col-span-1 space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Degree
                      </label>
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) => updateEducation(edu.id, { degree: e.target.value })}
                        placeholder="Bachelor of Science"
                        className="w-full bg-slate-900 border border-slate-700/60 rounded-xl px-3.5 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none transition"
                      />
                    </div>

                    {/* Field of Study */}
                    <div className="col-span-2 sm:col-span-1 space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Field of Study
                      </label>
                      <input
                        type="text"
                        value={edu.field}
                        onChange={(e) => updateEducation(edu.id, { field: e.target.value })}
                        placeholder="Computer Science"
                        className="w-full bg-slate-900 border border-slate-700/60 rounded-xl px-3.5 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none transition"
                      />
                    </div>

                    {/* Institution */}
                    <div className="col-span-2 sm:col-span-1 space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Institution / School
                      </label>
                      <input
                        type="text"
                        value={edu.institution}
                        onChange={(e) => updateEducation(edu.id, { institution: e.target.value })}
                        placeholder="Harvard University"
                        className="w-full bg-slate-900 border border-slate-700/60 rounded-xl px-3.5 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none transition"
                      />
                    </div>

                    {/* Location */}
                    <div className="col-span-2 sm:col-span-1 space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> Location
                      </label>
                      <input
                        type="text"
                        value={edu.location}
                        onChange={(e) => updateEducation(edu.id, { location: e.target.value })}
                        placeholder="Boston, MA"
                        className="w-full bg-slate-900 border border-slate-700/60 rounded-xl px-3.5 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none transition"
                      />
                    </div>

                    {/* Dates */}
                    <div className="col-span-2 sm:col-span-1 grid grid-cols-2 gap-2">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> Start Date
                        </label>
                        <input
                          type="month"
                          value={edu.startDate}
                          onChange={(e) => updateEducation(edu.id, { startDate: e.target.value })}
                          className="w-full bg-slate-900 border border-slate-700/60 rounded-xl px-3.5 py-2 text-xs text-slate-100 focus:border-indigo-500 focus:outline-none transition"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> End Date
                        </label>
                        <input
                          type="month"
                          value={edu.endDate}
                          onChange={(e) => updateEducation(edu.id, { endDate: e.target.value })}
                          className="w-full bg-slate-900 border border-slate-700/60 rounded-xl px-3.5 py-2 text-xs text-slate-100 focus:border-indigo-500 focus:outline-none transition"
                        />
                      </div>
                    </div>

                    {/* GPA */}
                    <div className="col-span-2 sm:col-span-1 space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                        <Star className="w-3 h-3" /> GPA / Grade
                      </label>
                      <input
                        type="text"
                        value={edu.gpa}
                        onChange={(e) => updateEducation(edu.id, { gpa: e.target.value })}
                        placeholder="3.8 / 4.0"
                        className="w-full bg-slate-900 border border-slate-700/60 rounded-xl px-3.5 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none transition"
                      />
                    </div>

                    {/* Description */}
                    <div className="col-span-2 space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Description / Core Coursework / Awards
                      </label>
                      <textarea
                        value={edu.description}
                        onChange={(e) => updateEducation(edu.id, { description: e.target.value })}
                        rows={3}
                        placeholder="Relevant courses: Algorithms, Data Structures. Activities: Debate Club President..."
                        className="w-full bg-slate-900 border border-slate-700/60 rounded-xl px-3.5 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none transition resize-y"
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
