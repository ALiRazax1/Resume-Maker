import React from 'react';

export default function CompactTemplate({ data, accentColor, fontConfig, showPhoto }) {
  const { personal, summary, experience, education, skills, projects, certifications, languages } = data;

  const renderSection = (sectionId) => {
    switch (sectionId) {
      case 'summary':
        if (!summary) return null;
        return (
          <div key="summary" className="col-span-12 border-b border-slate-100 pb-2">
            <h3 className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: accentColor }}>
              Profile Summary
            </h3>
            <p className="text-[10px] leading-relaxed text-slate-600 whitespace-pre-line">{summary}</p>
          </div>
        );

      case 'experience':
        if (!experience || experience.length === 0) return null;
        return (
          <div key="experience" className="col-span-12 border-b border-slate-100 pb-2">
            <h3 className="text-[10px] font-bold uppercase tracking-wider mb-1.5" style={{ color: accentColor }}>
              Experience
            </h3>
            <div className="grid grid-cols-12 gap-x-4 gap-y-2">
              {experience.map((exp) => (
                <div key={exp.id} className="col-span-12 text-[10px] grid grid-cols-12 gap-1">
                  <div className="col-span-3 font-semibold text-slate-500">
                    {exp.startDate} &ndash; {exp.current ? 'Pres' : exp.endDate}
                  </div>
                  <div className="col-span-9">
                    <div className="flex justify-between font-bold text-slate-800">
                      <span>{exp.position}</span>
                      <span className="font-normal text-[9px] text-slate-400">{exp.company} &bull; {exp.location}</span>
                    </div>
                    <p className="text-slate-600 mt-0.5 whitespace-pre-line leading-normal">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'education':
        if (!education || education.length === 0) return null;
        return (
          <div key="education" className="col-span-12 border-b border-slate-100 pb-2">
            <h3 className="text-[10px] font-bold uppercase tracking-wider mb-1.5" style={{ color: accentColor }}>
              Education
            </h3>
            <div className="grid grid-cols-12 gap-x-4 gap-y-2">
              {education.map((edu) => (
                <div key={edu.id} className="col-span-12 text-[10px] grid grid-cols-12 gap-1">
                  <div className="col-span-3 font-semibold text-slate-500">
                    {edu.startDate} &ndash; {edu.endDate}
                  </div>
                  <div className="col-span-9">
                    <div className="flex justify-between font-bold text-slate-800">
                      <span>{edu.degree} in {edu.field}</span>
                      <span className="font-normal text-[9px] text-slate-400">{edu.institution} &bull; {edu.location}</span>
                    </div>
                    {edu.description && <p className="text-slate-500 mt-0.5 leading-normal">{edu.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'projects':
        if (!projects || projects.length === 0) return null;
        return (
          <div key="projects" className="col-span-12 border-b border-slate-100 pb-2">
            <h3 className="text-[10px] font-bold uppercase tracking-wider mb-1.5" style={{ color: accentColor }}>
              Projects
            </h3>
            <div className="grid grid-cols-12 gap-2">
              {projects.map((proj) => (
                <div key={proj.id} className="col-span-6 text-[10px] border border-slate-50 p-2 rounded">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span>{proj.name}</span>
                    <span className="font-normal text-[9px] text-slate-400">{proj.startDate} &ndash; {proj.endDate}</span>
                  </div>
                  {proj.link && <div className="text-[9px] text-indigo-600 hover:underline">{proj.link}</div>}
                  <p className="text-slate-600 mt-1 leading-normal">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'skills':
        if (!skills || skills.length === 0) return null;
        return (
          <div key="skills" className="col-span-12 border-b border-slate-100 pb-2">
            <h3 className="text-[10px] font-bold uppercase tracking-wider mb-1.5" style={{ color: accentColor }}>
              Core Skills
            </h3>
            <div className="flex flex-wrap gap-1">
              {skills.map((skill) => (
                <span
                  key={skill.id}
                  className="px-2 py-0.5 rounded text-[9px] font-medium"
                  style={{
                    backgroundColor: `${accentColor}10`,
                    color: accentColor,
                    border: `1px solid ${accentColor}15`,
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
          <div key="certifications" className="col-span-12 border-b border-slate-100 pb-2">
            <h3 className="text-[10px] font-bold uppercase tracking-wider mb-1.5" style={{ color: accentColor }}>
              Certifications
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[9px] text-slate-600">
              {certifications.map((cert) => (
                <div key={cert.id} className="flex justify-between border-l-2 pl-2" style={{ borderColor: accentColor }}>
                  <span className="font-semibold text-slate-800">{cert.name}</span>
                  <span>{cert.issuer}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'languages':
        if (!languages || languages.length === 0) return null;
        return (
          <div key="languages" className="col-span-12">
            <h3 className="text-[10px] font-bold uppercase tracking-wider mb-1.5" style={{ color: accentColor }}>
              Languages
            </h3>
            <div className="flex flex-wrap gap-4 text-[9px]">
              {languages.map((lang) => (
                <div key={lang.id} className="text-slate-700">
                  <span className="font-semibold text-slate-800">{lang.language}</span>: {lang.proficiency}
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
    <div className="p-8 w-full h-full bg-white text-slate-800" style={{ fontFamily: fontConfig?.cssBody }}>
      {/* Header Grid */}
      <div className="grid grid-cols-12 gap-4 items-center border-b-2 pb-4 mb-4" style={{ borderColor: accentColor }}>
        {showPhoto && personal.photo ? (
          <>
            <div className="col-span-9">
              <h1 className="text-2xl font-black text-slate-900 tracking-tight leading-none" style={{ fontFamily: fontConfig?.cssHeading }}>
                {personal.name || 'Your Name'}
              </h1>
              {personal.title && (
                <p className="text-[10px] font-bold uppercase tracking-wider mt-1.5" style={{ color: accentColor }}>
                  {personal.title}
                </p>
              )}
              <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-slate-500 text-[9px] mt-2 font-medium">
                {personal.email && <span>{personal.email}</span>}
                {personal.phone && <span>&bull; {personal.phone}</span>}
                {personal.location && <span>&bull; {personal.location}</span>}
                {personal.website && <span>&bull; {personal.website}</span>}
                {personal.linkedin && <span>&bull; {personal.linkedin}</span>}
                {personal.github && <span>&bull; {personal.github}</span>}
              </div>
            </div>
            <div className="col-span-3 flex justify-end">
              <div className="w-16 h-16 rounded overflow-hidden border" style={{ borderColor: accentColor }}>
                <img src={personal.photo} alt={personal.name} className="w-full h-full object-cover" />
              </div>
            </div>
          </>
        ) : (
          <div className="col-span-12">
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-2xl font-black text-slate-900 tracking-tight leading-none" style={{ fontFamily: fontConfig?.cssHeading }}>
                  {personal.name || 'Your Name'}
                </h1>
                {personal.title && (
                  <p className="text-[10px] font-bold uppercase tracking-wider mt-1.5" style={{ color: accentColor }}>
                    {personal.title}
                  </p>
                )}
              </div>
              <div className="flex flex-col items-end text-slate-500 text-[9px] font-medium leading-tight">
                <div className="flex gap-2">
                  {personal.email && <span>{personal.email}</span>}
                  {personal.phone && <span>{personal.phone}</span>}
                </div>
                <div className="flex gap-2 mt-0.5">
                  {personal.location && <span>{personal.location}</span>}
                  {personal.website && <span>{personal.website}</span>}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Dynamic Grid Layout */}
      <div className="grid grid-cols-12 gap-y-3">
        {data.sectionOrder ? data.sectionOrder.map(renderSection) : null}
      </div>
    </div>
  );
}
