import React from 'react';
import { useResumeStore } from '../../../store/resumeStore';
import { Award, Plus, Trash2, Calendar, Link as LinkIcon } from 'lucide-react';

export default function Certifications() {
  const { resumeData, addCertification, updateCertification, deleteCertification } = useResumeStore();
  const { certifications } = resumeData;

  const handleAdd = () => {
    addCertification();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1 flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
            Certifications
          </h3>
          <p className="text-xs text-gray-500 dark:text-slate-400">
            List academic degrees, courses, cloud certifications, or other credentials.
          </p>
        </div>
        <button
          onClick={handleAdd}
          className="bg-emerald-500 hover:bg-emerald-400 text-white p-2 rounded-xl flex items-center gap-1.5 text-xs font-semibold shadow-md transition cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          Add Credential
        </button>
      </div>

      {certifications.length === 0 ? (
        <div className="text-center py-10 border-2 border-dashed border-gray-200 dark:border-slate-800 rounded-2xl">
          <Award className="w-8 h-8 text-gray-400 dark:text-slate-600 mx-auto mb-2" />
          <p className="text-sm text-gray-500 dark:text-slate-500">No certifications listed yet.</p>
          <button
            onClick={handleAdd}
            className="text-xs text-emerald-500 hover:text-emerald-400 dark:text-emerald-400 dark:hover:text-emerald-350 font-semibold mt-2 underline cursor-pointer"
          >
            Add your first certification
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-gray-55/40 dark:bg-slate-900/40 border border-gray-200 dark:border-white/5 p-4 rounded-2xl grid grid-cols-2 gap-4 relative group"
            >
              <button
                onClick={() => deleteCertification(cert.id)}
                className="absolute top-2 right-2 text-gray-400 dark:text-slate-500 hover:text-red-500 dark:hover:text-red-400 p-1.5 rounded-lg transition cursor-pointer"
                title="Delete credential"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>

              {/* Title */}
              <div className="col-span-2 sm:col-span-1 space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400">
                  Certification Name
                </label>
                <input
                  type="text"
                  value={cert.name}
                  onChange={(e) => updateCertification(cert.id, { name: e.target.value })}
                  placeholder="AWS Solutions Architect"
                  className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-slate-700/60 rounded-xl px-3.5 py-2 text-xs text-gray-800 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500 focus:border-emerald-500 focus:outline-none transition"
                />
              </div>

              {/* Issuer */}
              <div className="col-span-2 sm:col-span-1 space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400">
                  Issuing Organization
                </label>
                <input
                  type="text"
                  value={cert.issuer}
                  onChange={(e) => updateCertification(cert.id, { issuer: e.target.value })}
                  placeholder="Amazon Web Services"
                  className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-slate-700/60 rounded-xl px-3.5 py-2 text-xs text-gray-800 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500 focus:border-emerald-500 focus:outline-none transition"
                />
              </div>

              {/* Date */}
              <div className="col-span-2 sm:col-span-1 space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-emerald-500" /> Issue Date
                </label>
                <input
                  type="month"
                  value={cert.date}
                  onChange={(e) => updateCertification(cert.id, { date: e.target.value })}
                  className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-slate-700/60 rounded-xl px-3.5 py-2 text-xs text-gray-800 dark:text-slate-100 focus:border-emerald-500 focus:outline-none transition"
                />
              </div>

              {/* Credential Link */}
              <div className="col-span-2 sm:col-span-1 space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400 flex items-center gap-1">
                  <LinkIcon className="w-3 h-3 text-emerald-500" /> Credential URL
                </label>
                <input
                  type="text"
                  value={cert.link}
                  onChange={(e) => updateCertification(cert.id, { link: e.target.value })}
                  placeholder="credentials.organizaton.com/verify-id"
                  className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-slate-700/60 rounded-xl px-3.5 py-2 text-xs text-gray-800 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500 focus:border-emerald-500 focus:outline-none transition"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
