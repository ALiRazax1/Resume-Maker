import React from 'react';

export default function ExecutiveTemplate({ data, accentColor, fontConfig, showPhoto }) {
  const { personal, summary, experience, education, skills, projects, certifications, languages } = data;

  const renderSection = (sectionId) => {
    switch (sectionId) {
      case 'summary':
        if (!summary) return null;
        return (
          <div key="summary" className="mb-6">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 border-b pb-1" style={{ borderBottomColor: `${accentColor}30` }}>
              Executive Profile
            </h3>
            <p className="text-[11px] leading-relaxed text-slate-700 whitespace-pre-line font-light">{summary}</p>
          </div>
        );

      case 'experience':
        if (!experience || experience.length === 0) return null;
        return (
          <div key="experience" className="mb-6">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3 border-b pb-1" style={{ borderBottomColor: `${accentColor}30` }}>
              Professional Experience
            </h3>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id} className="text-[11px]">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span className="text-xs">{exp.position}</span>
                    <span>
                      {exp.startDate} &ndash; {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500 font-semibold mb-1 uppercase tracking-wider">
                    <span>{exp.company}</span>
                    <span>{exp.location}</span>
                  </div>
                  <p className="text-slate-600 whitespace-pre-line leading-relaxed font-light">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'education':
        if (!education || education.length === 0) return null;
        return (
          <div key="education" className="mb-6">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3 border-b pb-1" style={{ borderBottomColor: `${accentColor}30` }}>
              Education & Credentials
            </h3>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id} className="text-[11px]">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span className="text-xs">{edu.degree} in {edu.field}</span>
                    <span>
                      {edu.startDate} &ndash; {edu.endDate}
                    </span>
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500 font-semibold mb-1 uppercase tracking-wider">
                    <span>
                      {edu.institution}
                      {edu.gpa && `, GPA: ${edu.gpa}`}
                    </span>
                    <span>{edu.location}</span>
                  </div>
                  {edu.description && <p className="text-slate-600 font-light mt-1">{edu.description}</p>}
                </div>
              ))}
            </div>
          </div>
        );

      case 'projects':
        if (!projects || projects.length === 0) return null;
        return (
          <div key="projects" className="mb-6">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3 border-b pb-1" style={{ borderBottomColor: `${accentColor}30` }}>
              Key Initiatives
            </h3>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id} className="text-[11px]">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span className="text-xs">{proj.name}</span>
                    <span>
                      {proj.startDate} &ndash; {proj.endDate}
                    </span>
                  </div>
                  <div className="text-[9px] text-slate-400 font-semibold mb-1">
                    {proj.technologies && `Focus: ${proj.technologies}`}
                    {proj.link && ` | Link: ${proj.link}`}
                  </div>
                  <p className="text-slate-600 leading-relaxed font-light">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'skills':
        if (!skills || skills.length === 0) return null;
        return (
          <div key="skills" className="mb-6">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 border-b pb-1" style={{ borderBottomColor: `${accentColor}30` }}>
              Core Competencies
            </h3>
            <div className="grid grid-cols-4 gap-2 text-[10px] text-slate-700 font-medium">
              {skills.map((skill) => (
                <div key={skill.id} className="flex items-center gap-1.5 border-l-2 pl-2" style={{ borderLeftColor: accentColor }}>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        );

      case 'certifications':
        if (!certifications || certifications.length === 0) return null;
        return (
          <div key="certifications" className="mb-6">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 border-b pb-1" style={{ borderBottomColor: `${accentColor}30` }}>
              Certifications & Affiliations
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-[10px] text-slate-600">
              {certifications.map((cert) => (
                <div key={cert.id} className="leading-relaxed">
                  <span className="font-bold text-slate-800">{cert.name}</span> &ndash; {cert.issuer} {cert.date && `(${cert.date})`}
                </div>
              ))}
            </div>
          </div>
        );

      case 'languages':
        if (!languages || languages.length === 0) return null;
        return (
          <div key="languages" className="mb-6">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 border-b pb-1" style={{ borderBottomColor: `${accentColor}30` }}>
              Languages
            </h3>
            <div className="flex flex-wrap gap-6 text-[10px] text-slate-700">
              {languages.map((lang) => (
                <div key={lang.id}>
                  <span className="font-bold text-slate-800">{lang.language}</span>: {lang.proficiency}
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
    <div className="p-12 w-full h-full text-slate-800" style={{ fontFamily: fontConfig?.cssBody }}>
      {/* Centered Header Layout */}
      <div className="flex items-center justify-between mb-8 border-b-4 pb-4" style={{ borderColor: accentColor }}>
        <div className="flex-1 text-center">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 uppercase" style={{ fontFamily: fontConfig?.cssHeading }}>
            {personal.name || 'Your Name'}
          </h1>
          {personal.title && (
            <p className="text-xs font-semibold uppercase tracking-widest mt-1.5" style={{ color: accentColor }}>
              {personal.title}
            </p>
          )}

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-slate-500 text-[10px] mt-4">
            {personal.email && <span>{personal.email}</span>}
            {personal.phone && <span>| {personal.phone}</span>}
            {personal.location && <span>| {personal.location}</span>}
            {personal.website && <span>| {personal.website}</span>}
            {personal.linkedin && <span>| {personal.linkedin}</span>}
            {personal.github && <span>| {personal.github}</span>}
          </div>
        </div>

        {/* Profile Photo (if supported & active) */}
        {showPhoto && personal.photo && (
          <div className="ml-6 flex-shrink-0">
            <div className="w-20 h-20 rounded overflow-hidden border-2 shadow-sm" style={{ borderColor: accentColor }}>
              <img src={personal.photo} alt={personal.name} className="w-full h-full object-cover" />
            </div>
          </div>
        )}
      </div>

      {/* Dynamic Sections */}
      {data.sectionOrder ? data.sectionOrder.map(renderSection) : null}
    </div>
  );
}
