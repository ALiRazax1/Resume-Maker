import React from 'react';

export default function ElegantTemplate({ data, accentColor, fontConfig, showPhoto }) {
  const { personal, summary, experience, education, skills, projects, certifications, languages } = data;

  const renderSection = (sectionId) => {
    switch (sectionId) {
      case 'summary':
        if (!summary) return null;
        return (
          <div key="summary" className="mb-6 text-center">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-2.5">
              Profile Summary
            </h3>
            <p className="text-[11px] leading-relaxed text-slate-600 max-w-xl mx-auto italic whitespace-pre-line">
              &ldquo;{summary}&rdquo;
            </p>
          </div>
        );

      case 'experience':
        if (!experience || experience.length === 0) return null;
        return (
          <div key="experience" className="mb-6">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 text-center mb-4">
              Career Timeline
            </h3>
            <div className="space-y-4 max-w-2xl mx-auto">
              {experience.map((exp) => (
                <div key={exp.id} className="text-[11px] text-center border-t border-slate-100 pt-3">
                  <div className="font-bold text-slate-800 text-xs tracking-wide">{exp.position}</div>
                  <div className="text-[10px] text-slate-500 italic mt-0.5">
                    {exp.company} &bull; {exp.location}
                  </div>
                  <div className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5 mb-1.5">
                    {exp.startDate} &ndash; {exp.current ? 'Present' : exp.endDate}
                  </div>
                  <p className="text-slate-600 whitespace-pre-line leading-relaxed text-left max-w-xl mx-auto px-4 font-light">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'education':
        if (!education || education.length === 0) return null;
        return (
          <div key="education" className="mb-6">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 text-center mb-4">
              Academic History
            </h3>
            <div className="space-y-3 max-w-2xl mx-auto">
              {education.map((edu) => (
                <div key={edu.id} className="text-[11px] text-center border-t border-slate-100 pt-3">
                  <div className="font-bold text-slate-800 text-xs tracking-wide">
                    {edu.degree} in {edu.field}
                  </div>
                  <div className="text-[10px] text-slate-500 italic mt-0.5">
                    {edu.institution} &bull; {edu.location}
                  </div>
                  <div className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5 mb-1">
                    {edu.startDate} &ndash; {edu.endDate} {edu.gpa && `| GPA: ${edu.gpa}`}
                  </div>
                  {edu.description && (
                    <p className="text-slate-500 max-w-xl mx-auto text-left px-4 font-light mt-1.5">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 'projects':
        if (!projects || projects.length === 0) return null;
        return (
          <div key="projects" className="mb-6">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 text-center mb-4">
              Select Projects
            </h3>
            <div className="space-y-4 max-w-2xl mx-auto">
              {projects.map((proj) => (
                <div key={proj.id} className="text-[11px] text-center border-t border-slate-100 pt-3">
                  <div className="font-bold text-slate-800 text-xs tracking-wide">{proj.name}</div>
                  {proj.link && <div className="text-[9px] text-indigo-600 mt-0.5">{proj.link}</div>}
                  <div className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5 mb-1.5">
                    {proj.startDate} &ndash; {proj.endDate} {proj.technologies && `[${proj.technologies}]`}
                  </div>
                  <p className="text-slate-600 text-left max-w-xl mx-auto px-4 font-light">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'skills':
        if (!skills || skills.length === 0) return null;
        return (
          <div key="skills" className="mb-6">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 text-center mb-3">
              Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
              {skills.map((skill) => (
                <span
                  key={skill.id}
                  className="px-3 py-1 rounded text-[10px] tracking-wide"
                  style={{
                    backgroundColor: `${accentColor}08`,
                    border: `1px solid ${accentColor}15`,
                    color: '#334155'
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
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 text-center mb-3">
              Certifications
            </h3>
            <div className="text-center space-y-1 text-[10px] text-slate-600">
              {certifications.map((cert) => (
                <div key={cert.id}>
                  <span className="font-bold text-slate-800">{cert.name}</span> &bull; {cert.issuer} {cert.date && `(${cert.date})`}
                </div>
              ))}
            </div>
          </div>
        );

      case 'languages':
        if (!languages || languages.length === 0) return null;
        return (
          <div key="languages" className="mb-6">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 text-center mb-3">
              Languages
            </h3>
            <div className="flex justify-center gap-6 text-[10px] text-slate-600">
              {languages.map((lang) => (
                <div key={lang.id}>
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
    <div className="p-16 w-full h-full bg-white text-slate-800" style={{ fontFamily: fontConfig?.cssBody }}>
      {/* Header */}
      <div className="text-center mb-10">
        {showPhoto && personal.photo && (
          <div className="mb-6 flex justify-center">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 p-1 bg-white" style={{ borderColor: accentColor }}>
              <img src={personal.photo} alt={personal.name} className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
        )}

        <h1 className="text-3xl font-light tracking-[0.15em] uppercase text-slate-900 mb-1" style={{ fontFamily: fontConfig?.cssHeading }}>
          {personal.name || 'Your Name'}
        </h1>
        
        {personal.title && (
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: accentColor }}>
            {personal.title}
          </p>
        )}

        <div className="w-12 h-[1px] bg-slate-200 mx-auto my-4" />

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-slate-400 text-[10px] font-light tracking-wide">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>&bull; {personal.phone}</span>}
          {personal.location && <span>&bull; {personal.location}</span>}
          {personal.website && <span>&bull; {personal.website}</span>}
          {personal.linkedin && <span>&bull; {personal.linkedin}</span>}
          {personal.github && <span>&bull; {personal.github}</span>}
        </div>
      </div>

      {/* Dynamic Sections */}
      <div className="space-y-6">
        {data.sectionOrder ? data.sectionOrder.map(renderSection) : null}
      </div>
    </div>
  );
}
