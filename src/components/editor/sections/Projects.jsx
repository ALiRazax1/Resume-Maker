import React from 'react';
import { useResumeStore } from '../../../store/resumeStore';
import { FolderGit2, Plus, Trash2, Calendar, Link as LinkIcon, Code2, ChevronDown, ChevronUp } from 'lucide-react';

export default function Projects() {
  const { resumeData, addProject, updateProject, deleteProject } = useResumeStore();
  const { projects } = resumeData;

  const [expandedId, setExpandedId] = React.useState(projects[0]?.id || null);
  const prevLengthRef = React.useRef(projects.length);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Auto-expand newly added entry
  React.useEffect(() => {
    if (projects.length > prevLengthRef.current) {
      const last = projects[projects.length - 1];
      if (last) setExpandedId(last.id);
    }
    prevLengthRef.current = projects.length;
  }, [projects.length]);

  const handleAdd = () => {
    addProject();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1 flex items-center gap-2">
            <FolderGit2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
            Projects
          </h3>
          <p className="text-xs text-gray-500 dark:text-slate-400">
            List personal projects, open-source work, or freelance accomplishments.
          </p>
        </div>
        <button
          onClick={handleAdd}
          className="bg-emerald-500 hover:bg-emerald-400 text-white p-2 rounded-xl flex items-center gap-1.5 text-xs font-semibold shadow-md transition cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          Add Project
        </button>
      </div>

      {projects.length === 0 ? (
        <div className="text-center py-10 border-2 border-dashed border-gray-200 dark:border-slate-800 rounded-2xl">
          <FolderGit2 className="w-8 h-8 text-gray-400 dark:text-slate-600 mx-auto mb-2" />
          <p className="text-sm text-gray-500 dark:text-slate-500">No projects listed yet.</p>
          <button
            onClick={handleAdd}
            className="text-xs text-emerald-500 hover:text-emerald-400 dark:text-emerald-400 dark:hover:text-emerald-350 font-semibold mt-2 underline cursor-pointer"
          >
            Add your first project
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {projects.map((proj, index) => {
            const isExpanded = expandedId === proj.id;
            const displayName = proj.name || `Project #${index + 1}`;

            return (
              <div
                key={proj.id}
                className="bg-gray-55/40 dark:bg-slate-900/40 border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden transition"
              >
                {/* Accordion Header */}
                <div
                  onClick={() => toggleExpand(proj.id)}
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-900/50 select-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-500/10 p-2 rounded-lg text-emerald-600 dark:text-emerald-400">
                      <FolderGit2 className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-sm font-semibold text-gray-800 dark:text-white">{displayName}</h4>
                      {proj.technologies && (
                        <p className="text-[10px] text-gray-400 dark:text-slate-400">
                          {proj.technologies.split(',')[0]} &bull; {proj.startDate || 'Start Date'}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteProject(proj.id);
                      }}
                      className="text-gray-400 dark:text-slate-500 hover:text-red-500 dark:hover:text-red-400 p-1.5 rounded-lg transition cursor-pointer"
                      title="Delete project"
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
                    {/* Project Name */}
                    <div className="col-span-2 sm:col-span-1 space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400">
                        Project Name
                      </label>
                      <input
                        type="text"
                        value={proj.name}
                        onChange={(e) => updateProject(proj.id, { name: e.target.value })}
                        placeholder="E-Commerce API"
                        className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-slate-700/60 rounded-xl px-3.5 py-2 text-xs text-gray-800 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500 focus:border-emerald-500 focus:outline-none transition"
                      />
                    </div>

                    {/* Project Link */}
                    <div className="col-span-2 sm:col-span-1 space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400 flex items-center gap-1">
                        <LinkIcon className="w-3 h-3 text-emerald-500" /> Project URL
                      </label>
                      <input
                        type="text"
                        value={proj.link}
                        onChange={(e) => updateProject(proj.id, { link: e.target.value })}
                        placeholder="github.com/user/project"
                        className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-slate-700/60 rounded-xl px-3.5 py-2 text-xs text-gray-800 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500 focus:border-emerald-500 focus:outline-none transition"
                      />
                    </div>

                    {/* Technologies */}
                    <div className="col-span-2 sm:col-span-1 space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400 flex items-center gap-1">
                        <Code2 className="w-3 h-3 text-emerald-500" /> Technologies
                      </label>
                      <input
                        type="text"
                        value={proj.technologies}
                        onChange={(e) => updateProject(proj.id, { technologies: e.target.value })}
                        placeholder="React, Redux, Node.js"
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
                          value={proj.startDate}
                          onChange={(e) => updateProject(proj.id, { startDate: e.target.value })}
                          className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-slate-700/60 rounded-xl px-3.5 py-2 text-xs text-gray-800 dark:text-slate-100 focus:border-emerald-500 focus:outline-none transition"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-emerald-500" /> End Date
                        </label>
                        <input
                          type="month"
                          value={proj.endDate}
                          onChange={(e) => updateProject(proj.id, { endDate: e.target.value })}
                          className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-slate-700/60 rounded-xl px-3.5 py-2 text-xs text-gray-800 dark:text-slate-100 focus:border-emerald-500 focus:outline-none transition"
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <div className="col-span-2 space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400">
                        Project Description
                      </label>
                      <textarea
                        value={proj.description}
                        onChange={(e) => updateProject(proj.id, { description: e.target.value })}
                        rows={3}
                        placeholder="Built a custom web application serving 10k users weekly, optimized cache hits by 30%..."
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
