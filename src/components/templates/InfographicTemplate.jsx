import React from 'react';

export default function InfographicTemplate({ data, accentColor, fontConfig, showPhoto }) {
  const { personal, summary, experience, education, skills, projects, certifications, languages } = data;

  const renderSection = (sectionId) => {
    switch (sectionId) {
      case 'summary':
        if (!summary) return null;
        return (
          <div key="summary" className="mb-6 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2" style={{ color: accentColor }}>
              <span className="w-1.5 h-3.5 rounded-full" style={{ backgroundColor: accentColor }} />
              Executive Profile
            </h3>
            <p className="text-[11px] leading-relaxed text-slate-600 whitespace-pre-line font-medium">{summary}</p>
          </div>
        );

      case 'experience':
        if (!experience || experience.length === 0) return null;
        return (
          <div key="experience" className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2" style={{ color: accentColor }}>
              <span className="w-1.5 h-3.5 rounded-full" style={{ backgroundColor: accentColor }} />
              Professional Path
            </h3>
            <div className="space-y-4 pl-3 border-l-2 relative" style={{ borderColor: `${accentColor}30` }}>
              {experience.map((exp) => (
                <div key={exp.id} className="text-[11px] relative pl-4">
                  {/* Timeline Dot */}
                  <div
                    className="w-3.5 h-3.5 rounded-full absolute -left-[23px] top-[1px] border-2 border-white shadow-sm flex items-center justify-center text-[6px] text-white"
                    style={{ backgroundColor: accentColor }}
                  >
                    &bull;
                  </div>
                  <div className="flex justify-between font-extrabold text-slate-800 text-xs">
                    <span>{exp.position}</span>
                    <span className="font-semibold text-[10px] text-slate-500">
                      {exp.startDate} &ndash; {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 mb-1">
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
            <h3 className="text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2" style={{ color: accentColor }}>
              <span className="w-1.5 h-3.5 rounded-full" style={{ backgroundColor: accentColor }} />
              Academic Foundations
            </h3>
            <div className="space-y-3 pl-3 border-l-2 relative" style={{ borderColor: `${accentColor}30` }}>
              {education.map((edu) => (
                <div key={edu.id} className="text-[11px] relative pl-4">
                  <div
                    className="w-3.5 h-3.5 rounded-full absolute -left-[23px] top-[1px] border-2 border-white shadow-sm"
                    style={{ backgroundColor: accentColor }}
                  />
                  <div className="flex justify-between font-extrabold text-slate-800 text-xs">
                    <span>{edu.degree} in {edu.field}</span>
                    <span className="font-semibold text-[10px] text-slate-500">
                      {edu.startDate} &ndash; {edu.endDate}
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400 mb-1">
                    {edu.institution} &bull; {edu.location} {edu.gpa && `| GPA: ${edu.gpa}`}
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
            <h3 className="text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2" style={{ color: accentColor }}>
              <span className="w-1.5 h-3.5 rounded-full" style={{ backgroundColor: accentColor }} />
              Key Creations
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {projects.map((proj) => (
                <div key={proj.id} className="bg-slate-50/30 border border-slate-100 p-3.5 rounded-xl text-[11px]">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span>{proj.name}</span>
                    <span className="text-[9px] text-slate-400 font-normal">{proj.startDate} &ndash; {proj.endDate}</span>
                  </div>
                  {proj.link && (
                    <a href={`https://${proj.link}`} target="_blank" rel="noreferrer" className="text-[9px] font-bold block mb-1 hover:underline" style={{ color: accentColor }}>
                      {proj.link}
                    </a>
                  )}
                  {proj.technologies && (
                    <div className="text-[9px] text-slate-400 mb-1 font-semibold">
                      Tech: {proj.technologies}
                    </div>
                  )}
                  <p className="text-slate-600 leading-normal">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'skills':
        if (!skills || skills.length === 0) return null;
        return (
          <div key="skills" className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2" style={{ color: accentColor }}>
              <span className="w-1.5 h-3.5 rounded-full" style={{ backgroundColor: accentColor }} />
              Skill Distribution
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {skills.map((skill) => (
                <div key={skill.id} className="text-[10px]">
                  <div className="flex justify-between font-bold text-slate-700 mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: accentColor,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'certifications':
        if (!certifications || certifications.length === 0) return null;
        return (
          <div key="certifications" className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2" style={{ color: accentColor }}>
              <span className="w-1.5 h-3.5 rounded-full" style={{ backgroundColor: accentColor }} />
              Accreditation
            </h3>
            <div className="grid grid-cols-2 gap-4 text-[10px] text-slate-600">
              {certifications.map((cert) => (
                <div key={cert.id} className="bg-slate-50/50 p-2 rounded-lg border border-slate-100/50">
                  <span className="font-bold text-slate-800 block">{cert.name}</span>
                  <span className="text-[9px]">{cert.issuer} {cert.date && `(${cert.date})`}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'languages':
        if (!languages || languages.length === 0) return null;
        return (
          <div key="languages" className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2" style={{ color: accentColor }}>
              <span className="w-1.5 h-3.5 rounded-full" style={{ backgroundColor: accentColor }} />
              Languages
            </h3>
            <div className="flex gap-6 text-[10px]">
              {languages.map((lang) => (
                <div key={lang.id} className="bg-slate-50/50 px-3 py-1.5 rounded-lg border border-slate-100/50 flex items-center gap-2">
                  <span className="font-bold text-slate-800">{lang.language}</span>
                  <span className="text-[9px] text-slate-500 bg-white px-1.5 py-0.5 rounded border">
                    {lang.proficiency}
                  </span>
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
    <div className="p-10 w-full h-full bg-white text-slate-800" style={{ fontFamily: fontConfig?.cssBody }}>
      {/* Header Grid */}
      <div className="grid grid-cols-12 gap-4 items-center border-b pb-6 mb-6">
        {showPhoto && personal.photo ? (
          <>
            <div className="col-span-3">
              <div className="w-24 h-24 rounded-2xl overflow-hidden border shadow-md flex-shrink-0" style={{ borderColor: accentColor }}>
                <img src={personal.photo} alt={personal.name} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="col-span-9">
              <h1 className="text-3xl font-black text-slate-900 tracking-tight leading-none" style={{ fontFamily: fontConfig?.cssHeading }}>
                {personal.name || 'Your Name'}
              </h1>
              {personal.title && (
                <p className="text-xs font-bold uppercase tracking-wider mt-1.5" style={{ color: accentColor }}>
                  {personal.title}
                </p>
              )}
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-slate-500 text-[9px] mt-3 font-medium">
                {personal.email && <span className="bg-slate-50 px-2 py-0.5 rounded border">{personal.email}</span>}
                {personal.phone && <span className="bg-slate-50 px-2 py-0.5 rounded border">{personal.phone}</span>}
                {personal.location && <span className="bg-slate-50 px-2 py-0.5 rounded border">{personal.location}</span>}
                {personal.website && <span className="bg-slate-50 px-2 py-0.5 rounded border">{personal.website}</span>}
                {personal.linkedin && <span className="bg-slate-50 px-2 py-0.5 rounded border">{personal.linkedin}</span>}
                {personal.github && <span className="bg-slate-50 px-2 py-0.5 rounded border">{personal.github}</span>}
              </div>
            </div>
          </>
        ) : (
          <div className="col-span-12">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight leading-none" style={{ fontFamily: fontConfig?.cssHeading }}>
              {personal.name || 'Your Name'}
            </h1>
            {personal.title && (
              <p className="text-xs font-bold uppercase tracking-wider mt-1.5" style={{ color: accentColor }}>
                {personal.title}
              </p>
            )}
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-slate-500 text-[9px] mt-3 font-medium">
              {personal.email && <span className="bg-slate-50 px-2 py-0.5 rounded border">{personal.email}</span>}
              {personal.phone && <span className="bg-slate-50 px-2 py-0.5 rounded border">{personal.phone}</span>}
              {personal.location && <span className="bg-slate-50 px-2 py-0.5 rounded border">{personal.location}</span>}
              {personal.website && <span className="bg-slate-50 px-2 py-0.5 rounded border">{personal.website}</span>}
              {personal.linkedin && <span className="bg-slate-50 px-2 py-0.5 rounded border">{personal.linkedin}</span>}
              {personal.github && <span className="bg-slate-50 px-2 py-0.5 rounded border">{personal.github}</span>}
            </div>
          </div>
        )}
      </div>

      {/* Dynamic Sections */}
      <div className="space-y-6">
        {data.sectionOrder ? data.sectionOrder.map(renderSection) : null}
      </div>
    </div>
  );
}
