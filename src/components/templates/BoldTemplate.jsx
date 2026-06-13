import React from 'react';

export default function BoldTemplate({ data, accentColor, fontConfig, showPhoto }) {
  const { personal, summary, experience, education, skills, projects, certifications, languages } = data;

  const renderSection = (sectionId) => {
    switch (sectionId) {
      case 'summary':
        if (!summary) return null;
        return (
          <div key="summary" className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-3 border-l-4 pl-3" style={{ borderLeftColor: accentColor, color: '#1e293b' }}>
              About Me
            </h3>
            <p className="text-[11px] leading-relaxed text-slate-600 whitespace-pre-line pl-4">{summary}</p>
          </div>
        );

      case 'experience':
        if (!experience || experience.length === 0) return null;
        return (
          <div key="experience" className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4 border-l-4 pl-3" style={{ borderLeftColor: accentColor, color: '#1e293b' }}>
              Professional History
            </h3>
            <div className="space-y-5 pl-4">
              {experience.map((exp) => (
                <div key={exp.id} className="text-[11px]">
                  <div className="flex justify-between font-extrabold text-slate-800 text-xs">
                    <span>{exp.position}</span>
                    <span className="font-semibold text-[10px] text-slate-400">
                      {exp.startDate} &ndash; {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1.5" style={{ color: accentColor }}>
                    {exp.company} &bull; {exp.location}
                  </div>
                  <p className="text-slate-600 whitespace-pre-line leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'education':
        if (!education || education.length === 0) return null;
        return (
          <div key="education" className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4 border-l-4 pl-3" style={{ borderLeftColor: accentColor, color: '#1e293b' }}>
              Education
            </h3>
            <div className="space-y-4 pl-4">
              {education.map((edu) => (
                <div key={edu.id} className="text-[11px]">
                  <div className="flex justify-between font-extrabold text-slate-800 text-xs">
                    <span>{edu.degree} in {edu.field}</span>
                    <span className="font-semibold text-[10px] text-slate-400">
                      {edu.startDate} &ndash; {edu.endDate}
                    </span>
                  </div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1" style={{ color: accentColor }}>
                    {edu.institution} &bull; {edu.location}
                  </div>
                  {edu.description && <p className="text-slate-600 mt-1">{edu.description}</p>}
                </div>
              ))}
            </div>
          </div>
        );

      case 'projects':
        if (!projects || projects.length === 0) return null;
        return (
          <div key="projects" className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4 border-l-4 pl-3" style={{ borderLeftColor: accentColor, color: '#1e293b' }}>
              Featured Projects
            </h3>
            <div className="space-y-4 pl-4">
              {projects.map((proj) => (
                <div key={proj.id} className="text-[11px]">
                  <div className="flex justify-between font-extrabold text-slate-800 text-xs">
                    <span>{proj.name}</span>
                    <span className="font-semibold text-[10px] text-slate-400">
                      {proj.startDate} &ndash; {proj.endDate}
                    </span>
                  </div>
                  {proj.link && (
                    <a href={`https://${proj.link}`} target="_blank" rel="noreferrer" className="text-[10px] font-bold block mb-1 hover:underline" style={{ color: accentColor }}>
                      {proj.link}
                    </a>
                  )}
                  {proj.technologies && (
                    <div className="text-slate-500 text-[10px] mb-1 font-semibold">
                      Tech Stack: {proj.technologies}
                    </div>
                  )}
                  <p className="text-slate-600 leading-relaxed">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'skills':
        if (!skills || skills.length === 0) return null;
        return (
          <div key="skills" className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-3 border-l-4 pl-3" style={{ borderLeftColor: accentColor, color: '#1e293b' }}>
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-2 pl-4">
              {skills.map((skill) => (
                <span
                  key={skill.id}
                  className="px-3 py-1 rounded text-[10px] font-extrabold uppercase tracking-wide border text-white shadow-sm"
                  style={{
                    backgroundColor: accentColor,
                    borderColor: accentColor,
                  }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        );

      case 'certifications':
        if (!certifications || certifications.length === 0) return null;
        return (
          <div key="certifications" className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-3 border-l-4 pl-3" style={{ borderLeftColor: accentColor, color: '#1e293b' }}>
              Certifications
            </h3>
            <div className="space-y-2 pl-4 text-[10px] text-slate-600 font-semibold">
              {certifications.map((cert) => (
                <div key={cert.id} className="flex justify-between border-b pb-1">
                  <span className="text-slate-800">{cert.name}</span>
                  <span style={{ color: accentColor }}>{cert.issuer}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'languages':
        if (!languages || languages.length === 0) return null;
        return (
          <div key="languages" className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-3 border-l-4 pl-3" style={{ borderLeftColor: accentColor, color: '#1e293b' }}>
              Languages
            </h3>
            <div className="flex flex-wrap gap-6 pl-4 text-[10px] font-bold">
              {languages.map((lang) => (
                <div key={lang.id} className="text-slate-700">
                  <span>{lang.language}</span>: <span style={{ color: accentColor }}>{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full bg-white text-slate-800" style={{ fontFamily: fontConfig?.cssBody }}>
      {/* Banner */}
      <div className="p-8 text-white flex justify-between items-center relative overflow-hidden" style={{ backgroundColor: accentColor }}>
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        <div className="z-10">
          <h1 className="text-3xl font-black uppercase tracking-wider leading-none" style={{ fontFamily: fontConfig?.cssHeading }}>
            {personal.name || 'Your Name'}
          </h1>
          {personal.title && (
            <p className="text-xs font-bold tracking-widest uppercase mt-2 text-white/90">
              {personal.title}
            </p>
          )}

          <div className="flex flex-wrap gap-x-4 gap-y-1 text-white/85 text-[10px] mt-4 font-semibold">
            {personal.email && <span>{personal.email}</span>}
            {personal.phone && <span>&bull; {personal.phone}</span>}
            {personal.location && <span>&bull; {personal.location}</span>}
            {personal.website && <span>&bull; {personal.website}</span>}
            {personal.linkedin && <span>&bull; {personal.linkedin}</span>}
            {personal.github && <span>&bull; {personal.github}</span>}
          </div>
        </div>

        {showPhoto && personal.photo && (
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/40 shadow-xl z-10 flex-shrink-0 ml-4">
            <img src={personal.photo} alt={personal.name} className="w-full h-full object-cover" />
          </div>
        )}
      </div>

      {/* Dynamic Sections */}
      <div className="p-8 space-y-6">
        {data.sectionOrder ? data.sectionOrder.map(renderSection) : null}
      </div>
    </div>
  );
}
